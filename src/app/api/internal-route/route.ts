import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
    console.log("Entered route.tsx")
  const { username } = await req.json();

  if (!username) {
    console.log("internal route *******************************")
    return NextResponse.json({ message: "Missing required data" });
  
  }
  else {
    console.log("internal route ...................................................................")
  }
const url = process.env.NEXT_PUBLIC_BACKEND_API_KEY;

  const res = await fetch(
    `${url}/chatbotapp/authorizeuser`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username : username
      })
    }
  );

  const response = await res.json();
  return NextResponse.json(response);
}
