import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("Entered route.tsx");
  const { username } = await req.json();
  console.log(username, "username")
  if (!username) {
    console.log("internal route *******************************");
    return NextResponse.json({ message: "Missing required data" });
  } else {
    console.log("internal route ...................................................................");
  }

  const url = process.env.NEXT_BACKEND_API_KEY;
  // const parsedUsername = JSON.parse(username);
  const cleanEmail = username?.replace(/^"(.*)"$/, '$1');
  const payload = {
    username: cleanEmail,
  };

  try {
    // const res = await fetch(`http://localhost:8080/chatbotapp/authorizeuser`, {
    const res = await fetch(`${url}/chatbotapp/authorizeuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({
      //   username: username,
      // }),
      body: JSON.stringify(payload),
    });

    const response = await res.json();
    console.log(response, "response in router");

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching data from server:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

