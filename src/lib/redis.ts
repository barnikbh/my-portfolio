import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export function todayKey() {
  return `pv:day:${new Date().toISOString().slice(0, 10)}`;
}

export function dayKey(date: Date) {
  return `pv:day:${date.toISOString().slice(0, 10)}`;
}

export function pageKey(path: string) {
  return `pv:page:${path}`;
}
