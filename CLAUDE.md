# Portfolio — Claude Context

## Live site
- **URL:** https://barnikbh.com
- **Stack:** Next.js 14 (App Router), TypeScript, TailwindCSS, Shadcn/UI, Framer Motion
- **Hosting:** Vercel (auto-deploys on push to `main`)
- **Package manager:** pnpm

## Content
All content lives in `src/data/resume.tsx`:
- `DATA.blogs[]` — Medium blog posts → shown in **Writing** section
- `DATA.projects[]` — PRDs + shipped products → shown in **Featured Work** section (never put blogs here)
- `DATA.booksRead[]` — first item is auto-shown as "currently reading" in the Currently section
- `DATA.currently[]` — Reading value is ignored; always derived from `booksRead[0]`

To update the current book: move it to the top of `booksRead[]`. No other change needed.

## Design rules
- All large section headers use `<SectionHeader>` (`src/components/section-header.tsx`) — never inline the pill+h2+p pattern directly
- About, Work, Education, Skills use small inline `h2 text-xl`, not SectionHeader
- Blog thumbnails follow the `/public/blog-N.svg` pattern — dark background, colored top bar, category pill

## Code structure
```
src/
├── app/
│   ├── page.tsx                  — lean section assembly only
│   ├── admin/page.tsx            — analytics dashboard (password protected)
│   └── api/
│       ├── track/route.ts        — POST: increments Redis visit counters
│       ├── admin-stats/route.ts  — GET: returns stats (cookie-auth)
│       └── admin-login/route.ts  — POST: sets session cookie
├── components/
│   ├── section-header.tsx        — shared centered section header
│   ├── blogs-section.tsx         — Writing section, expand/collapse
│   ├── page-tracker.tsx          — fires /api/track on every page load
│   └── sections/                 — one file per major section
│       ├── featured-work-section.tsx
│       ├── side-projects-section.tsx
│       ├── hackathons-section.tsx
│       └── contact-section.tsx
├── data/resume.tsx               — ALL content lives here
└── lib/redis.ts                  — Upstash Redis client + key helpers
```

## Analytics (/admin)
- Backed by **Upstash Redis** (free tier, Singapore, DB: `portfolio`)
- Tracks: total visits, daily visits (90-day TTL), per-page counts
- Dashboard at `/admin` — password login → bar chart + top pages

## Required env vars (set in Vercel + .env.local)
| Key | Purpose |
|-----|---------|
| `RESEND_API_KEY` | Contact form emails |
| `UPSTASH_REDIS_REST_URL` | https://cute-kingfish-72965.upstash.io |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash REST token |
| `ADMIN_PASSWORD` | Login password for /admin |

## Adding a new blog post
1. Add entry to `DATA.blogs[]` in `resume.tsx` (newest first)
2. Create `/public/blog-N.svg` thumbnail (copy an existing one, change accent color + text)
3. Push — Vercel deploys automatically

## Adding a new "currently reading" book
Move the book to the top of `DATA.booksRead[]`. Done.
