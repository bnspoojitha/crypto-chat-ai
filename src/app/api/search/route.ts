import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("entered")
  const { token, input } = await req.json();

  if (!token || !input) {
    return NextResponse.json({ message: "Missing required data" });
  }
  const res = await fetch(
    "http://localhost:8080/api/chatbot",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        input,
      }),
    }
  );
console.log(`Bearer ${token}`, "authorization token")
  const response = await res.json();
  return NextResponse.json(response);
}