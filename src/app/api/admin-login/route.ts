import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { redis } from "@/lib/redis";

function sessionToken(): string {
  return crypto
    .createHmac("sha256", process.env.ADMIN_PASSWORD!)
    .update("portfolio:admin:v1")
    .digest("hex");
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const rateLimitKey = `admin:login:${ip}`;

  const attempts = await redis.incr(rateLimitKey);
  if (attempts === 1) await redis.expire(rateLimitKey, 600); // 10-min window
  if (attempts > 5) {
    return NextResponse.json(
      { error: "Too many attempts. Try again in 10 minutes." },
      { status: 429 }
    );
  }

  const { password } = await req.json();
  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  await redis.del(rateLimitKey);

  const token = sessionToken();
  const res = NextResponse.json({ ok: true });
  res.cookies.set("admin_session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
  return res;
}
