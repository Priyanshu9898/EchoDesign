# EchoDesign

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

1. [Badges & Tech Stack](#-badges--tech-stack)  
2. [Features](#-features)  
3. [Prerequisites](#-prerequisites)  
4. [Getting Started](#-getting-started)  
   - [1. Clone the Repository](#1-clone-the-repository)  
   - [2. Backend Setup (FastAPI)](#2-backend-setup-fastapi)  
   - [3. Frontend Setup (Next.js + TypeScript)](#3-frontend-setup-nextjs--typescript)  
   - [4. Environment Variables](#4-environment-variables)  
   - [5. Launching Locally](#5-launching-locally)  
5. [Project Structure](#-project-structure)  
6. [Usage](#-usage)  
7. [Contributing](#-contributing)  
8. [License](#-license)

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
  - Fetch raw HTML, CSS, and asset links via Python’s `requests` + `BeautifulSoup` (static sites).  
  - *(Optional)* Use Playwright for headless browser rendering to capture dynamic/JS-heavy websites:  
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

## 📦 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v14.x or higher) & **npm** (or **Yarn**)  
- **Python** (v3.8 or higher)  
- **pip** (package manager for Python)  
- *(Optional)* **Playwright CLI** if you plan to use headless browsing  
- An **LLM API key** (OpenAI, Anthropic, Google Vertex, etc.)  

---

## 🏁 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Priyanshu9898/EchoDesign.git
cd EchoDesign
```
