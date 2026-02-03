
import { GoogleGenAI, Type } from "@google/genai";

export const getAiStrategyRecommendation = async (userGoal: string) => {
  // Ensure the API key is used correctly from process.env as per guidelines.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const prompt = `You are a Senior YouTube Growth Consultant for "Do Digital Marketing". 
  Based on the user's business goal: "${userGoal}", recommend exactly one of the following three packages. 
  Your reasoning should be strategic, varied, and professional.

  AVAILABLE PACKAGES:
  1. Starter Growth (₹15,000/mo):
     - Best for: Beginners, personal brands, or those testing the waters.
     - Key Features: 8 regular videos/shorts per month, full SEO optimization, ideation, and research.
     - Commitment: 6-month minimum.
     - Focus: Establishing a consistent baseline presence.

  2. Pro Accelerator (₹25,000/mo):
     - Best for: Scaling local businesses (like car dealerships), service providers, or creators ready to grow fast.
     - Key Features: 16 videos total (4 high-impact long-form + 12 shorts), ₹5,000 monthly Google Ads credit included, multi-platform sharing (IG/FB).
     - Commitment: 3-month minimum.
     - Focus: Lead generation and cross-platform visibility.

  3. Elite Dominance (₹45,000/mo):
     - Best for: Market leaders, high-volume content engines, or corporate brands requiring maximum reach.
     - Key Features: 30 videos total (5 long-form + 25 shorts), priority direct-call support, ₹5,000 ad credit, full strategic dominance.
     - Commitment: 3-month minimum.
     - Focus: Total market saturation and authority building.

  RESPONSE FORMAT:
  You must respond with valid JSON containing:
  - "plan": The exact name of the recommended plan.
  - "reasoning": A 2-sentence strategic explanation. Avoid repetitive phrases. Focus on the specific value (e.g., ad credits for lead gen, or volume for authority).`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            plan: { 
              type: Type.STRING,
              description: "The name of the recommended YouTube package."
            },
            reasoning: { 
              type: Type.STRING,
              description: "A professional and diverse strategic justification for the recommendation."
            }
          },
          required: ["plan", "reasoning"]
        },
        temperature: 0.8, // Slightly higher temperature for more varied reasoning
      },
    });

    const text = response.text || "{}";
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini AI Recommendation failed:", error);
    // Fallback recommendation
    return {
      plan: "Pro Accelerator",
      reasoning: "The Pro Accelerator plan is generally our best value for businesses seeking a balance between volume and targeted growth via ad credits."
    };
  }
};
