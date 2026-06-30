# AI Investment Research Agent

## Overview

AI Investment Research Agent is a web application built using **Next.js**, **TypeScript**, **Tailwind CSS**, and **Google Gemini AI**. It allows users to enter a company name and receive an AI-generated investment analysis.

The application performs AI-powered research and provides:

* Investment Recommendation
* Confidence Score
* Summary
* Strengths
* Risks
* Future Outlook

---

# Tech Stack

* Next.js 16
* React
* TypeScript
* Tailwind CSS
* Google Gemini API
* LangChain (installed for AI workflow)
* Vercel

---

# Features

* AI-powered company analysis
* Clean and responsive interface
* Gemini LLM integration
* REST API using Next.js Route Handlers
* JSON based AI responses
* Modern UI

---

# How to Run

## Clone Repository

```bash
git clone https://github.com/Harshita0831/investment-research-agent.git
```

## Install Dependencies

```bash
npm install
```

## Create Environment File

Create a file named:

```text
.env.local
```

Add:

```env
GOOGLE_API_KEY=YOUR_GEMINI_API_KEY
ALPHA_VANTAGE_API_KEY=YOUR_ALPHA_VANTAGE_API_KEY
```

## Run

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# How It Works

1. User enters a company name.
2. Frontend sends the request to `/api/analyze`.
3. Backend calls Google Gemini API.
4. Gemini analyzes the company and returns structured investment insights.
5. Results are displayed on the frontend.

---

# Architecture

```
Frontend (Next.js)
        │
        ▼
SearchBar Component
        │
        ▼
API Route (/api/analyze)
        │
        ▼
Gemini AI
        │
        ▼
JSON Response
        │
        ▼
Investment Recommendation UI
```

---

# Key Decisions & Trade-offs

### Decisions
