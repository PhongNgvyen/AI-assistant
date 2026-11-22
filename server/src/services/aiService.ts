import { GoogleGenAI } from "@google/genai";

function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured");
  }

  return new GoogleGenAI({
    apiKey,
  });
}

export async function getAIResponse(
  message: string
): Promise<string> {
  const ai = getGeminiClient();

  const model =
    process.env.GEMINI_MODEL || "gemini-3.8-flash";

  const response = await ai.models.generateContent({
    model,
    contents: `
You are JARVIS, a personal AI assistant inside a mobile application.

Rules:
- Answer in the same language as the user.
- Keep answers clear and concise.
- Be helpful and conversational.
- Do not claim that you can perform features that have not yet been implemented.

User message:
${message}
`,
  });

  const reply = response.text;

  if (!reply) {
    throw new Error("Gemini returned an empty response");
  }

  return reply;
}