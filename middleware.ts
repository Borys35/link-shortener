import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  console.log(req.geo);
  console.log(req.referrer, req.referrerPolicy);
  console.log(req.headers.values());

  return res;
}

export const config = {
  matcher: ["/api/:slug*"],
};
