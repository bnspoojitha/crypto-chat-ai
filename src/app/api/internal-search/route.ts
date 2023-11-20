import { NextRequest, NextResponse } from "next/server";
import { chatTypes, reducerTypes, UserData } from "@/app/reducers/globalReducer";

export async function POST(req: NextRequest) {
  try {
  const userAccessToken = req.headers.get('authorization')?.replace('Bearer ', '');
  const accessToken = userAccessToken?.replace(/['"]+/g, '');
  console.log(accessToken,"accessToken*****************************************************")
  const {  input } = await req.json();
  console.log("User data in Search route-----------------------------------------------------:",(`Bearer ${accessToken}`));

  if (!accessToken || !input) {
    return NextResponse.json({ message: "Missing required data" });
  }

  const url = process.env.NEXT_BACKEND_API_KEY;
  const payload = {
    input: input,
    // accessToken: accessToken, 
  };
  console.log(payload, "Body");
  const res = await fetch(
    // `${url}/chatbotapp/api/chatbot`,
    // `http://localhost:8080/api/chatbot`,
    ` http://localhost:8080/chatbotapp/api/chatbot`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`,
      },
      body: JSON.stringify(payload),
    }
  );

  // const response = await res.json();
  
  // return NextResponse.json(response);

  if (!res.ok) {
    console.error(`Request failed with status ${res.status}`);
    const text = await res.text(); // Get the response text
    console.error(`Response content: ${text}`);
    return NextResponse.json({ error: "Server error" }, { status: res.status });
  }

  const response = await res.json();
  return NextResponse.json(response);
} catch (error) {
  console.error("Error in Search route:", error);
  return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
}
}
