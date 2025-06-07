

import json
import os
import datetime
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, HttpUrl
from motor.motor_asyncio import AsyncIOMotorClient
from hyperbrowser import Hyperbrowser
from hyperbrowser.models import ScrapeOptions, StartScrapeJobParams, CreateSessionParams
from openai import OpenAI
from dotenv import load_dotenv
from fastapi.responses import JSONResponse
from bson import ObjectId
# Load environment variables
load_dotenv()

# Initialize MongoDB client
default_mongo = "mongodb://localhost:27017"
mongo_uri = os.getenv("MONGO_URI", default_mongo)
mongo_client = AsyncIOMotorClient(mongo_uri)
db = mongo_client["orchids"]
queries_collection = db["queries"]

# Initialize Hyperbrowser & OpenAI clients
hyper_client = Hyperbrowser(api_key=os.getenv("HYPERBROWSER_API_KEY"))

client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY"),
)

# FastAPI app setup
app = FastAPI(
    title="Orchids Website Cloner API",
    version="1.0.0",
    description="Scrape with Hyperbrowser, generate HTML via OpenAI, store queries in MongoDB"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic model for incoming request
type CloneRequest = BaseModel

class CloneRequest(BaseModel):
    url: HttpUrl

# Health check endpoint
@app.get("/health")
async def health_check():
    return {"status": "healthy"}

@app.get("/")
async def root():
    return {"message": "Welcome to the Orchids Website Cloner API! Use /clone to clone a website."}

# Core /clone endpoint
@app.post("/clone")
async def clone_website(req: CloneRequest):
    """
    1. Store user query in MongoDB
    2. Use Hyperbrowser to scrape Markdown/HTML/links/screenshots
    3. Call OpenAI to generate a cloned HTML
    4. Return the generated HTML and Mongo record ID
    """

    record = {"url": str(req.url), "timestamp": datetime.datetime.utcnow()}

    insert_result = await queries_collection.insert_one(record)
    query_id = str(insert_result.inserted_id)


    try:

        print("Starting Hyperbrowser scrape for URL:", req.url)
        print("*" * 100)

        job = hyper_client.scrape.start_and_wait(
            StartScrapeJobParams(
                url=str(req.url),
                session_options=CreateSessionParams(
                    accept_cookies=False,
                    use_stealth=False,
                    use_proxy=False,
                    solve_captchas=False,
                ),
                scrape_options=ScrapeOptions(
                    formats=["markdown", "html", "links", "screenshot"],
                    only_main_content=False,
                ),
            )
        )
    except Exception as e:
        raise HTTPException(status_code=502, detail=f"Scraping failed: {e}")


    try:
        job_json = job.model_dump_json()

        job_dict = json.loads(job_json)

        data = job_dict.get("data", {})

    except Exception:
      
        data = {
            "metadata": getattr(job, "metadata", {}),
            "html": getattr(job, "html", ""),
            "markdown": getattr(job, "markdown", ""),
            "links": getattr(job, "links", []),
            "screenshot": getattr(job, "screenshot", None),
        }

    context = {
        "metadata": data.get("metadata", ""),
        "html": data.get("html", ""),
        "links": data.get("links", []),
        "screenshot": data.get("screenshot"),
        "markdown": data.get("markdown", ""),
    }

    system_prompt = """
    You are a professional frontend engineer. 
    You will be given a Python dict called `context` containing these keys:
    • metadata: site title, description, favicon, etc.
    • html: the raw HTML of the original page
    • markdown: a Markdown snapshot of the main content
    • links: a list of all navigational URLs
    • screenshot: a URL to a preview image (optional)

    Your task is to output a single JSON object with exactly one field, `html`, whose value is a complete, standalone HTML5 document that visually approximates the original site. 

    Requirements:
    1. Include `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>`.
    2. All CSS must be inline: either in a `<style>` block inside the `<head>` or via `style="..."` attributes. Do NOT reference any external CSS or JS files.
    3. Replicate the original’s typography, colors, spacing, and layout as closely as possible.
    4. Use semantic HTML tags (`<header>`, `<nav>`, `<section>`, `<footer>`, etc.).
    5. Do NOT include any comments, explanations, or extra JSON fields—just the `html` key.

    Respond with that JSON object and nothing else. No matter what, complete the code generation, do not stop or return early.
    
    """

    user_prompt = f"""
    Here is the scraped context:
    {json.dumps(context)}
    Generate the JSON output now.
    """


    try:

        response = client.responses.create(
            model="gpt-4.1",
            input=system_prompt + "\n\n" + user_prompt,
            temperature=0.2,
            max_output_tokens=16384,
            top_p=1,
        )

        raw = response.output_text

        # 2. Parse it into a Python dict
        result = json.loads(raw)

        # 3. Pull out the HTML
        html = result.get("html", "")
        
        # print("Generated HTML:", html[:1000])  # Print first 1000 chars for debugging
        

    except json.JSONDecodeError as e:
        raise HTTPException(
            status_code=500, detail=f"Failed to parse OpenAI response: {e}")

    

    
    return JSONResponse(
        status_code=200,
        content={
            "query_id": query_id,
            "html": html
        }
    )

    

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
