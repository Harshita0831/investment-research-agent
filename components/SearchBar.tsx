"use client";

import { useState } from "react";

interface AnalysisResult {
  recommendation?: string;
  confidence?: number;
  summary?: string;
  strengths?: string[];
  risks?: string[];
  futureOutlook?: string;
}

export default function SearchBar() {
  const [company, setCompany] = useState("");
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);

  async function analyzeCompany() {
    if (!company.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ company }),
      });

      const data = await response.json();

      if (data.success) {
        try {
          const parsed = JSON.parse(data.result);
          setResult(parsed);
        } catch {
          setResult({
            summary: data.result,
          });
        }
      }
    } catch (error) {
      console.error(error);

      setResult({
        summary: "Something went wrong while analyzing the company.",
      });
    }

    setLoading(false);
  }

  return (
    <div className="mt-10">
      <div className="flex flex-col gap-4 md:flex-row">
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Enter Company Name..."
          className="flex-1 rounded-xl border border-slate-600 bg-slate-800 p-4 text-white"
        />

        <button
          onClick={analyzeCompany}
          className="rounded-xl bg-blue-600 px-8 py-4 text-white hover:bg-blue-700"
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </div>

      {result && (
        <div className="mt-10 rounded-2xl bg-slate-900 border border-slate-700 p-6 text-white">

          <h2 className="text-3xl font-bold">
            AI Investment Analysis
          </h2>

          {result.recommendation && (
            <>
              <h3 className="mt-6 text-xl font-semibold">Recommendation</h3>
              <p className="text-4xl font-bold text-green-400">
                {result.recommendation}
              </p>
            </>
          )}

          {result.confidence !== undefined && (
            <p className="mt-2">
              Confidence: <strong>{result.confidence}%</strong>
            </p>
          )}

          {result.summary && (
            <>
              <h3 className="mt-6 text-xl font-semibold">Summary</h3>
              <p>{result.summary}</p>
            </>
          )}

          {result.strengths && (
            <>
              <h3 className="mt-6 text-xl font-semibold">Strengths</h3>
              <ul className="list-disc pl-5">
                {result.strengths.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {result.risks && (
            <>
              <h3 className="mt-6 text-xl font-semibold">Risks</h3>
              <ul className="list-disc pl-5">
                {result.risks.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {result.futureOutlook && (
            <>
              <h3 className="mt-6 text-xl font-semibold">Future Outlook</h3>
              <p>{result.futureOutlook}</p>
            </>
          )}

        </div>
      )}
    </div>
  );
}