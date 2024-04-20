import { NextResponse } from "next/server";

import { getAllQuotes } from "@/lib/get-all-quotes";

export async function GET(request: Request) {
  const quotes = await getAllQuotes();

  return NextResponse.json(quotes);
}
