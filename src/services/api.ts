const API_URL = process.env.EXPO_PUBLIC_API_URL;

console.log("API URL:", API_URL);

type ChatResponse = {
  message: string;
};

export async function sendChatMessage(
  message: string
): Promise<string> {
  if (!API_URL) {
    throw new Error(
      "EXPO_PUBLIC_API_URL is not configured"
    );
  }

  const response = await fetch(`${API_URL}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
    }),
  });

  if (!response.ok) {
    throw new Error(
      `Backend request failed: ${response.status}`
    );
  }

  const data: ChatResponse = await response.json();

  return data.message;
}