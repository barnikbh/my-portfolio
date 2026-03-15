# my-portfolio

Personal portfolio website for [Barnik Bhattacharyya](https://barnikbh.com), built with Next.js, deployed on Vercel.

## Features

- Single config file — edit [`src/data/resume.tsx`](./src/data/resume.tsx) to update all content
- MDX blog and work case studies with syntax highlighting
- Dynamic OG images auto-generated for every page
- Blog search — filter posts by title in real time
- Contact form with email delivery via Resend
- Sitemap, robots.txt, and JSON-LD schema for SEO
- Reading time estimate on all posts
- Dark / light mode toggle
- Vercel Analytics
- Responsive, mobile-first layout

## Stack

- [Next.js 14](https://nextjs.org/) — App Router, Server Actions, Static Generation
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/) + [Shadcn/UI](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/) + [Magic UI](https://magicui.design/)
- [Resend](https://resend.com/) — contact form email delivery
- [Vercel](https://vercel.com/) — hosting and analytics

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/barnikbh/my-portfolio
cd my-portfolio
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root:

```bash
RESEND_API_KEY=re_your_api_key_here
```

Get a free API key at [resend.com](https://resend.com).

### 4. Start the dev server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### 5. Customize your content

Edit [`src/data/resume.tsx`](./src/data/resume.tsx) — this is the single source of truth for your name, bio, work experience, education, skills, projects, and social links.

Add blog/work posts as `.mdx` files in the [`content/`](./content/) directory.

## Deployment

Deploy to Vercel with one click. Make sure to add `RESEND_API_KEY` as an environment variable in your Vercel project settings before deploying.
