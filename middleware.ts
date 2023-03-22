import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("::MIDDLEWARE CALLED", request);

  const url = new URL(request.url);
  const testSearchParam = url.searchParams.get("test");
  const testCookie = request.cookies.get("test")?.value;
  const testHeader = request.headers.get("test");

  const response = NextResponse.next();

  return response;
}
