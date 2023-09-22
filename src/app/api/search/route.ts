import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token, input } = await req.json();

  if (!token || !input) {
    return NextResponse.json({ message: "Missing required data" });
  }
  const res = await fetch(
    "http://13.236.100.190:5001/api-chatbot-ai/api/chatbot",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        input,
      }),
    }
  );

  const response = await res.json();
  return NextResponse.json(response);
}
