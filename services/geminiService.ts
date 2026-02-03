
import { GoogleGenAI, Type } from "@google/genai";

export const getAiStrategyRecommendation = async (userGoal: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `Based on this user goal: "${userGoal}", recommend one of these 3 YouTube packages: 
  1. Starter Growth (8 videos, ₹15,000/mo) - Good for beginners.
  2. Pro Accelerator (16 videos, ad credits, multi-platform, ₹25,000/mo) - Good for scaling business.
  3. Elite Dominance (30 videos, maximum volume, priority support, ₹45,000/mo) - Good for market leaders.

  Provide the recommendation in JSON format with "plan" and "reasoning" (max 2 sentences).`;

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

    const result = JSON.parse(response.text || '{}');
    return result;
  } catch (error) {
    console.error("AI Error:", error);
    return {
      plan: "Pro Accelerator",
      reasoning: "Based on our experience, the Pro plan offers the best balance of volume and ad-driven growth for most business goals."
    };
  }
};
