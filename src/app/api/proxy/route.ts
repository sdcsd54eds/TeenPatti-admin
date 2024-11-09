import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  const requestBody = await request.json();

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/login`,
      requestBody,
    );
    return NextResponse.json(response.data);
  } catch (error: any) {
    // Return a JSON response with the error message and status code
    return NextResponse.json(
      { message: error.message || "Internal Server Error" },
      { status: error.response?.status || 500 },
    );
  }
}
