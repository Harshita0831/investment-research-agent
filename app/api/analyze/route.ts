import { NextRequest, NextResponse } from "next/server";
import { ai } from "@/lib/gemini";
import { getCompanyOverview } from "@/lib/finance";

export async function POST(req: NextRequest) {
  try {
    const { company } = await req.json();

    const financeData = await getCompanyOverview(company);
    
    const prompt = `
You are an expert investment research analyst.

Analyze the following company.

Company Name:
${company}

Financial Data:
${JSON.stringify(financeData)}

Respond ONLY with valid JSON.

{
  "recommendation":"INVEST",
  "confidence":90,
  "summary":"Short summary",
  "strengths":[
    "Point 1",
    "Point 2",
    "Point 3"
  ],
  "risks":[
    "Risk 1",
    "Risk 2",
    "Risk 3"
  ],
  "futureOutlook":"Future outlook"
}

Do not use markdown.
Do not write \`\`\`json.
Return ONLY JSON.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return NextResponse.json({
      success: true,
      result: response.text,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to analyze company",
      },
      { status: 500 }
    );
  }
}