import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();
  const data = Object.fromEntries(form.entries());
  console.log("[register] new submission", data);
  const refererHeader = req.headers.get("referer");
  const base = new URL(req.url);
  const target = refererHeader ? new URL(refererHeader, base) : new URL("/ro", base);
  target.searchParams.set("ok", "1");
  return NextResponse.redirect(target, { status: 303 });
}
