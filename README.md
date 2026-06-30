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

* Used **Next.js App Router** for a modern full-stack architecture.
* Used **Google Gemini** as the primary LLM for investment analysis.
* Designed the UI using **Tailwind CSS** for rapid development and responsiveness.
* Structured the project into reusable components and API routes.

### Trade-offs

* Due to the assignment timeline, live financial data integration is basic.
* Investment recommendations rely primarily on the Gemini model rather than advanced quantitative models.
* Authentication and user accounts were intentionally omitted to keep the focus on the AI workflow.

---

# Example Runs

## Example 1

**Input**

```
Tesla
```

**Output**

```
Recommendation: INVEST

Confidence: 89%

Strengths
- Strong EV market leadership
- Continuous innovation
- Expanding energy business

Risks
- High competition
- Valuation concerns
- Supply chain challenges

Future Outlook
Positive long-term growth with continued innovation.
```

---

## Example 2

**Input**

```
Apple
```

**Output**

```
Recommendation: HOLD

Confidence: 92%

Strengths
- Strong brand value
- Large cash reserves
- Loyal customer base

Risks
- Slowing smartphone market
- Regulatory pressure

Future Outlook
Stable long-term growth driven by services and ecosystem.
```

---

# Future Improvements

Given more development time, I would:

* Integrate live financial APIs for richer analysis.
* Include company news summarization from multiple sources.
* Add stock price charts and historical performance.
* Implement portfolio comparison.
* Introduce authentication and user history.
* Improve prompt engineering and evaluation for more consistent outputs.
* Use LangGraph to orchestrate a multi-step research pipeline.

---

# AI Usage

Google Gemini was used during the development process for:

* UI design suggestions
* API integration guidance
* Prompt engineering
* Debugging
* Code optimization

The application itself also uses Gemini to generate investment recommendations.

---

# Author

Harshita Yaduwanshi
