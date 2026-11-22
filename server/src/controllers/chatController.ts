import { Request, Response } from "express";
import { getAIResponse } from "../services/aiService.js";

export async function chat(
  req: Request,
  res: Response
) {
  try {
    const { message } = req.body;

    if (
      typeof message !== "string" ||
      message.trim().length === 0
    ) {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    const reply = await getAIResponse(
      message.trim()
    );

    return res.status(200).json({
      message: reply,
    });
  } catch (error) {
    console.error("Chat error:", error);

    return res.status(500).json({
      error: "Unable to generate AI response",
    });
  }
}