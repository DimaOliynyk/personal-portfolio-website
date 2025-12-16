import { NextResponse } from "next/server";

export async function GET() {
  const symbol = "MDB"; // MongoDB Inc

  const res = await fetch(
    `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.FINNHUB_API_KEY}`
  );

  if (!res.ok) return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });

  const data = await res.json();

  return NextResponse.json({
    symbol,
    current: data.c,
    high: data.h,
    low: data.l,
    open: data.o,
    prevClose: data.pc,
  });
}