import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { location } = await request.json();
  console.log('Weather request for:', location);
  
  // Simulate real API call delay
  await new Promise(resolve => setTimeout(resolve, 500));

  return NextResponse.json({
    temperature: 72,
    condition: "sunny",
    location: location // Echo back requested location
  });
} 