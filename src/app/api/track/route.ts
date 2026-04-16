import { NextRequest, NextResponse } from "next/server";
import { redis, todayKey, pageKey } from "@/lib/redis";

export async function POST(req: NextRequest) {
  try {
    const { path } = await req.json();
    const normalizedPath = (path || "/").slice(0, 100);

    await Promise.all([
      redis.incr("pv:total"),
      redis.incr(todayKey()).then(() =>
        redis.expire(todayKey(), 60 * 60 * 24 * 90) // 90-day TTL
      ),
      redis.incr(pageKey(normalizedPath)),
    ]);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
