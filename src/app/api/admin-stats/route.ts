import { NextRequest, NextResponse } from "next/server";
import { redis, dayKey } from "@/lib/redis";

export async function GET(req: NextRequest) {
  const session = req.cookies.get("admin_session")?.value;
  if (!session || session !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Build last 14 days
  const days: Date[] = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (13 - i));
    return d;
  });

  const [total, ...dailyCounts] = await Promise.all([
    redis.get<number>("pv:total"),
    ...days.map((d) => redis.get<number>(dayKey(d))),
  ]);

  const daily = days.map((d, i) => ({
    date: d.toISOString().slice(0, 10),
    count: dailyCounts[i] ?? 0,
  }));

  const today = daily[daily.length - 1].count;

  // Top pages: scan pv:page:* keys
  let cursor = 0;
  const pageKeys: string[] = [];
  do {
    const [nextCursor, keys] = await redis.scan(cursor, {
      match: "pv:page:*",
      count: 100,
    });
    cursor = Number(nextCursor);
    pageKeys.push(...keys);
  } while (cursor !== 0);

  const pageCounts = pageKeys.length
    ? await Promise.all(pageKeys.map((k) => redis.get<number>(k)))
    : [];

  const topPages = pageKeys
    .map((k, i) => ({ path: k.replace("pv:page", ""), count: pageCounts[i] ?? 0 }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  return NextResponse.json({
    total: total ?? 0,
    today,
    daily,
    topPages,
  });
}
