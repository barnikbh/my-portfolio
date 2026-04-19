import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Play",
  description: "PADI Advanced Open Water diver. This is my dive log.",
};

const BLUR_FADE_DELAY = 0.04;

const stats = [
  { label: "Total dives", value: "16" },
  { label: "Bottom time", value: "10h 6m" },
  { label: "Countries", value: "3" },
  { label: "Max depth", value: "35m" },
];

const certifications = [
  {
    name: "Open Water Diver",
    org: "PADI",
    number: "2409UV8700",
    issued: "25 Sep 2024",
    depth: "Up to 18m",
    badge: "OW",
    color: "bg-blue-500",
  },
  {
    name: "Advanced Open Water Diver",
    org: "PADI",
    number: "2602A7VTZC",
    issued: "27 Feb 2026",
    depth: "Up to 30m",
    badge: "AOW",
    color: "bg-amber-600",
  },
  {
    name: "Enriched Air Diver (Nitrox)",
    org: "PADI",
    number: "2603AH9006",
    issued: "02 Mar 2026",
    depth: "Max 40% O₂",
    badge: "EAD",
    color: "bg-emerald-600",
  },
];

const diveLog = [
  {
    location: "Sharm El Sheikh",
    region: "Red Sea, Egypt",
    flag: "🇪🇬",
    when: "Sep 2024",
    sites: ["Shark Bay", "Turtle Bay"],
    maxDepth: "18m",
    dives: 6,
  },
  {
    location: "Thailand",
    region: "Andaman Sea",
    flag: "🇹🇭",
    when: "Feb 2025",
    sites: ["Malong", "Mushroom"],
    maxDepth: "18m",
    dives: 2,
  },
  {
    location: "Madiha",
    region: "South Coast, Sri Lanka",
    flag: "🇱🇰",
    when: "Feb 2026",
    sites: ["Moray Point", "Shell Patch", "Thalaramba Reef", "Rock Wall", "Patrick Point"],
    maxDepth: "35m",
    dives: 6,
  },
  {
    location: "Unawatuna",
    region: "South Coast, Sri Lanka",
    flag: "🇱🇰",
    when: "Mar 2026",
    sites: ["Orestes Shipwreck", "Wisse Gala"],
    maxDepth: "27m",
    dives: 2,
  },
];

export default function PlayPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 pb-24">

      {/* Back nav */}
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-3.5" />
          Back
        </Link>
      </BlurFade>

      {/* Hero */}
      <section>
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Play</h1>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <p className="mt-2 text-muted-foreground md:text-xl max-w-[600px]">
            I scuba dive. Started in Sharm El Sheikh in 2024, picked up Nitrox and Advanced Open Water in 2026. 16 dives across 3 countries so far.
          </p>
        </BlurFade>
      </section>

      {/* Stats */}
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border p-3 text-center">
              <div className="text-2xl font-bold tracking-tight">{s.value}</div>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mt-0.5">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </BlurFade>

      {/* Certifications */}
      <section>
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold mb-3">Certifications</h2>
        </BlurFade>
        <div className="flex flex-col gap-2">
          {certifications.map((cert, i) => (
            <BlurFade key={cert.name} delay={BLUR_FADE_DELAY * 6 + i * 0.05}>
              <div className="flex items-center gap-4 rounded-xl border p-4">
                {/* Dive flag style badge */}
                <div className={`${cert.color} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-xs font-bold">{cert.badge}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-semibold">{cert.name}</span>
                    <Badge variant="secondary" className="text-[10px]">{cert.org}</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">{cert.number} · Issued {cert.issued}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-xs font-medium text-muted-foreground">{cert.depth}</div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Dive Log */}
      <section>
        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <h2 className="text-xl font-bold mb-1">Where I&apos;ve dived</h2>
          <p className="text-sm text-muted-foreground mb-3">Every site I&apos;ve been underwater.</p>
        </BlurFade>
        <div className="flex flex-col gap-3">
          {diveLog.map((entry, i) => (
            <BlurFade key={entry.location + entry.when} delay={BLUR_FADE_DELAY * 9 + i * 0.06}>
              <div className="rounded-xl border p-4 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg leading-none">{entry.flag}</span>
                      <span className="text-sm font-semibold">{entry.location}</span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">{entry.region}</div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-xs text-muted-foreground">{entry.when}</div>
                    <div className="text-xs text-muted-foreground">{entry.dives} dive{entry.dives > 1 ? "s" : ""} · {entry.maxDepth}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {entry.sites.map((site) => (
                    <Badge key={site} variant="outline" className="text-[10px]">
                      {site}
                    </Badge>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

    </main>
  );
}
