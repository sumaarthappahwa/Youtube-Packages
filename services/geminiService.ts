
import { GoogleGenAI, Type } from "@google/genai";

export const getAiStrategyRecommendation = async (userGoal: string) => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY not found in process.env");
    return {
      plan: "Pro Accelerator",
      reasoning: "The Pro Accelerator plan is generally our best value for businesses seeking a balance between volume and targeted growth."
    };
  }

  const ai = new GoogleGenAI({ apiKey });
  
  const prompt = `Based on this user goal: "${userGoal}", recommend exactly one of these three YouTube packages and explain why.
  
  Packages:
  - Starter Growth: ₹15,000/mo, 8 videos, best for small brands/beginners starting out.
  - Pro Accelerator: ₹25,000/mo, 16 videos, ad credits, multi-platform sharing, best for scaling local businesses (like dealerships) or established creators.
  - Elite Dominance: ₹45,000/mo, 30 videos, maximum reach, priority support, best for market leaders and high-volume content engines.

  You must respond with valid JSON containing "plan" (the plan name) and "reasoning" (maximum 2 concise sentences explaining the strategic match).`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            plan: { type: Type.STRING },
            reasoning: { type: Type.STRING }
          },
          required: ["plan", "reasoning"]
        }
      },
    });

    const text = response.text || "{}";
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini AI Recommendation failed:", error);
    return {
      plan: "Pro Accelerator",
      reasoning: "The Pro Accelerator plan is generally our best value for businesses seeking a balance between volume and targeted growth via ad credits."
    };
  }
};