# EchoDesign

### Deployed Frontend URL: https://echo-design-rust.vercel.app/
### Deployed Backend URL: https://echo-design-backend.vercel.app/

[![Stars](https://img.shields.io/github/stars/Priyanshu9898/EchoDesign?style=social)](https://github.com/Priyanshu9898/EchoDesign/stargazers)  
[![Forks](https://img.shields.io/github/forks/Priyanshu9898/EchoDesign?style=social)](https://github.com/Priyanshu9898/EchoDesign/network/members)  
[![License](https://img.shields.io/github/license/Priyanshu9898/EchoDesign)](https://github.com/Priyanshu9898/EchoDesign/blob/main/LICENSE)  
[![Last Commit](https://img.shields.io/github/last-commit/Priyanshu9898/EchoDesign)](https://github.com/Priyanshu9898/EchoDesign/commits/main)  
[![Commit Activity](https://img.shields.io/github/commit-activity/y/Priyanshu9898/EchoDesign)](https://github.com/Priyanshu9898/EchoDesign/commits/main)  
[![Open Issues](https://img.shields.io/github/issues/Priyanshu9898/EchoDesign)](https://github.com/Priyanshu9898/EchoDesign/issues)  
[![Open Pull Requests](https://img.shields.io/github/issues-pr/Priyanshu9898/EchoDesign)](https://github.com/Priyanshu9898/EchoDesign/pulls)

---

## 🚀 Project Overview

**EchoDesign** is a minimal—yet powerful—AI-driven website cloning tool. Users can input any public website URL, and EchoDesign will:

1. **Scrape** the target URL for design context (HTML, CSS, snapshots, asset links).  
2. **Feed** that context into a large language model (LLM) to generate a standalone HTML/CSS replica.  
3. **Render** the AI-generated output in a Next.js frontend for instant preview.

The goal is to reproduce the look and feel of the source site as closely as possible, using a Next.js/TypeScript frontend and a Python/FastAPI backend.

---

## 📋 Table of Contents

- [EchoDesign](#echodesign)
    - [Deployed Frontend URL: https://echo-design-rust.vercel.app/](#deployed-frontend-url-httpsecho-design-rustvercelapp)
    - [Deployed Backend URL: https://echo-design-backend.vercel.app/](#deployed-backend-url-httpsecho-design-backendvercelapp)
  - [🚀 Project Overview](#-project-overview)
  - [📋 Table of Contents](#-table-of-contents)
  - [🛠️ Badges \& Tech Stack](#️-badges--tech-stack)
    - [Repo Statistics](#repo-statistics)
    - [Core Technologies](#core-technologies)
  - [✨ Features](#-features)
  - [🚀 Project Overview](#-project-overview-1)
  - [📋 Table of Contents](#-table-of-contents-1)
  - [🛠️ Badges \& Tech Stack](#️-badges--tech-stack-1)
    - [Repo Stats](#repo-stats)
    - [Core Technologies](#core-technologies-1)
  - [✨ Features](#-features-1)
  - [📦 Prerequisites](#-prerequisites)
  - [🏁 Getting Started](#-getting-started)
    - [Clone the Repo](#clone-the-repo)
    - [Backend Setup (FastAPI)](#backend-setup-fastapi)
    - [Frontend Setup (Next.js + TypeScript)](#frontend-setup-nextjs--typescript)
    - [Launch Locally](#launch-locally)
  - [�️ Usage](#️-usage)
  - [🤝 Contributing](#-contributing)
  - [📄 License](#-license)

---

## 🛠️ Badges & Tech Stack

### Repo Statistics

- [![Stars](https://img.shields.io/github/stars/Priyanshu9898/EchoDesign?style=social)](https://github.com/Priyanshu9898/EchoDesign/stargazers)  
- [![Forks](https://img.shields.io/github/forks/Priyanshu9898/EchoDesign?style=social)](https://github.com/Priyanshu9898/EchoDesign/network/members)  
- [![Open Issues](https://img.shields.io/github/issues/Priyanshu9898/EchoDesign)](https://github.com/Priyanshu9898/EchoDesign/issues)  
- [![Open Pull Requests](https://img.shields.io/github/issues-pr/Priyanshu9898/EchoDesign)](https://github.com/Priyanshu9898/EchoDesign/pulls)  
- [![Commit Activity](https://img.shields.io/github/commit-activity/y/Priyanshu9898/EchoDesign)](https://github.com/Priyanshu9898/EchoDesign/commits/main)  
- [![Last Commit](https://img.shields.io/github/last-commit/Priyanshu9898/EchoDesign)](https://github.com/Priyanshu9898/EchoDesign/commits/main)  
- [![License](https://img.shields.io/github/license/Priyanshu9898/EchoDesign)](https://github.com/Priyanshu9898/EchoDesign/blob/main/LICENSE)

### Core Technologies

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)  
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)  
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)  
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)  
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)  
[![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)](https://www.python.org/)  
[![Playwright](https://img.shields.io/badge/Playwright-4F516D?style=flat&logo=playwright&logoColor=white)](https://playwright.dev/python/) *(optional, for headless rendering)*  
[![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=flat&logo=openai&logoColor=white)](https://openai.com/) *(or other LLM providers)*  

---

## ✨ Features

- **URL Input & Preview**  
  - Enter any public website URL in a clean Next.js/TypeScript form.  
  - Preview the cloned HTML/CSS instantly in an `<iframe>`.

- **Design Scraping**  
    - Full DOM snapshot  
    - CSS rules & computed styles  
    - Screenshot for vision-capable LLMs  

- **AI-Powered Cloning**  
  - Package design context (HTML/CSS snippets, asset URLs, screenshots) into a structured prompt.  
  - Send prompt to an LLM (e.g., GPT-4, Claude 4 Sonnet, Gemini 2.5 Pro).  
  - Receive standalone HTML/CSS that visually resembles the source site.  
  - Inline critical CSS or host assets via backend’s `/static` route.

- **Backend ↔ Frontend Integration**  
  - FastAPI endpoint (`POST /clone`) that returns `{ html: "<html>…</html>" }`.  
  - Next.js calls the endpoint, displays loading states, and embeds result in an `<iframe>`.

---




## 🚀 Project Overview

**EchoDesign** is an AI‑powered website cloning tool built with:

1. **Hyperbrowser** (headless scraping) to capture HTML/CSS/links/screenshots
2. **FastAPI** (Python) backend to orchestrate scraping + LLM calls
3. **OpenAI** (or other LLM) to generate a standalone HTML/CSS clone
4. **MongoDB** to store query history
5. **Next.js + TypeScript** frontend to collect URLs, call the API, and preview results in an `<iframe>`

Users simply paste any public URL and get an instant, inline‑CSS HTML replica rendered in their browser.

---

## 📋 Table of Contents

- [EchoDesign](#echodesign)
    - [Deployed Frontend URL: https://echo-design-rust.vercel.app/](#deployed-frontend-url-httpsecho-design-rustvercelapp)
    - [Deployed Backend URL: https://echo-design-backend.vercel.app/](#deployed-backend-url-httpsecho-design-backendvercelapp)
  - [🚀 Project Overview](#-project-overview)
  - [📋 Table of Contents](#-table-of-contents)
  - [🛠️ Badges \& Tech Stack](#️-badges--tech-stack)
    - [Repo Statistics](#repo-statistics)
    - [Core Technologies](#core-technologies)
  - [✨ Features](#-features)
  - [🚀 Project Overview](#-project-overview-1)
  - [📋 Table of Contents](#-table-of-contents-1)
  - [🛠️ Badges \& Tech Stack](#️-badges--tech-stack-1)
    - [Repo Stats](#repo-stats)
    - [Core Technologies](#core-technologies-1)
  - [✨ Features](#-features-1)
  - [📦 Prerequisites](#-prerequisites)
  - [🏁 Getting Started](#-getting-started)
    - [Clone the Repo](#clone-the-repo)
    - [Backend Setup (FastAPI)](#backend-setup-fastapi)
    - [Frontend Setup (Next.js + TypeScript)](#frontend-setup-nextjs--typescript)
    - [Launch Locally](#launch-locally)
  - [�️ Usage](#️-usage)
  - [🤝 Contributing](#-contributing)
  - [📄 License](#-license)

---

## 🛠️ Badges & Tech Stack

### Repo Stats

* ⭐ [Stars](https://github.com/Priyanshu9898/EchoDesign/stargazers)
* 🍴 [Forks](https://github.com/Priyanshu9898/EchoDesign/network/members)
* ❗ [Open Issues](https://github.com/Priyanshu9898/EchoDesign/issues)
* 🔀 [PRs](https://github.com/Priyanshu9898/EchoDesign/pulls)

### Core Technologies

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat\&logo=next.js\&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat\&logo=typescript\&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat\&logo=react\&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat\&logo=node.js\&logoColor=white)](https://nodejs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat\&logo=fastapi\&logoColor=white)](https://fastapi.tiangolo.com/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=flat\&logo=python\&logoColor=white)](https://www.python.org/)
[![Hyperbrowser](https://img.shields.io/badge/Hyperbrowser-000000?style=flat\&logo=hyper)](https://hyperbrowser.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat\&logo=mongodb\&logoColor=white)](https://mongodb.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=flat\&logo=openai\&logoColor=white)](https://openai.com/)

---

## ✨ Features

* **URL Input & Validation**
  A rotating placeholder Next.js form with native URL validation.
* **Headless Scraping**
  Hyperbrowser captures HTML, CSS, links, and optional screenshots—even on JS‑heavy pages.
* **AI‑Powered Cloning**
  Structured prompt compiles scraped context and generates standalone HTML5 with inline CSS via an LLM.
* **Preview & History**
  Render result in an `<iframe>` for full‑width preview; queries saved in MongoDB for later review.
* **CORS & Security**
  FastAPI CORS middleware allows safe cross‑origin calls with configurable headers.
* **Easy Deployment**
  Frontend on Vercel, backend as Vercel Serverless Functions (FastAPI).

---

## 📦 Prerequisites

* **Node.js** ≥ v14 & **npm**/**yarn**
* **Python** ≥ 3.8 & **pip**
* **MongoDB** (local or cloud)
* **.env** variables for:

  * `OPENAI_API_KEY`
  * `HYPERBROWSER_API_KEY`
  * `MONGO_URI`

---

## 🏁 Getting Started

### Clone the Repo

```bash
git clone https://github.com/Priyanshu9898/EchoDesign.git
cd EchoDesign
```

### Backend Setup (FastAPI)

1. **Create & activate** Python venv:

   ```bash
   python -m venv env
   source env/bin/activate   # macOS/Linux
   .\env\Scripts\activate   # Windows
   ```
2. **Install** dependencies:

   ```bash
   pip install -r app/requirements.txt
   ```
3. **Copy** `app/.env.example` → `app/.env` and fill your API keys.
4. **Run** locally:

   ```bash
   cd app
   uvicorn main:app --reload
   ```

### Frontend Setup (Next.js + TypeScript)

1. **Install** packages:

   ```bash
   cd frontend
   npm install --legacy-peer-deps
   # or yarn
   ```

2. **Run** dev server:

   ```bash
   npm run dev
   ```

### Launch Locally

* Backend: [http://localhost:8000](http://localhost:8000)
* Frontend: [http://localhost:3000](http://localhost:3000)

---



## 🛠️ Usage

1. Open the frontend in your browser.
2. Paste any public website URL.
3. Click “Clone” → preview appears instantly.
4. Inspect or download the generated HTML/CSS.

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch
3. Submit a pull request

Please follow our [Code of Conduct](CODE_OF_CONDUCT.md) and review open issues before proposing new features.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
