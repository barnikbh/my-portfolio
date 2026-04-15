"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import BlurFade from "@/components/magicui/blur-fade";
import { SectionHeader } from "@/components/section-header";
import Markdown from "react-markdown";

interface Blog {
  title: string;
  href: string;
  dates: string;
  description: string;
  technologies: readonly string[];
  image: string;
}

interface BlogsSectionProps {
  blogs: readonly Blog[];
  blurDelay: number;
}

const INITIAL_COUNT = 2;

export function BlogsSection({ blogs, blurDelay }: BlogsSectionProps) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? blogs : blogs.slice(0, INITIAL_COUNT);
  const hidden = blogs.length - INITIAL_COUNT;

  return (
    <div className="space-y-12 w-full py-12">
      <SectionHeader
        label="Writing"
        title="Things I've written"
        description="Technical writing on AI, product, and engineering from the field."
        blurDelay={blurDelay}
      />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
        {visible.map((blog, id) => (
          <BlurFade key={blog.title} delay={blurDelay + 0.05 + id * 0.05}>
            <Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
              <Link href={blog.href} target="_blank" className="block cursor-pointer">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={500}
                  height={300}
                  className="h-40 w-full overflow-hidden object-cover object-top"
                />
              </Link>
              <CardHeader className="px-2">
                <div className="space-y-1">
                  <CardTitle className="mt-1 text-base">{blog.title}</CardTitle>
                  <time className="font-sans text-xs">{blog.dates}</time>
                  <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                    {blog.description}
                  </Markdown>
                </div>
              </CardHeader>
              <CardContent className="mt-auto flex flex-col px-2">
                {blog.technologies.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {blog.technologies.map((tag) => (
                      <Badge className="px-1 py-0 text-[10px]" variant="secondary" key={tag}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
              <CardFooter className="px-2 pb-2">
                <Link href={blog.href} target="_blank">
                  <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                    Read on Medium →
                  </Badge>
                </Link>
              </CardFooter>
            </Card>
          </BlurFade>
        ))}
      </div>

      {!expanded && hidden > 0 && (
        <BlurFade delay={blurDelay + 0.15}>
          <div className="flex justify-center">
            <button
              onClick={() => setExpanded(true)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground border rounded-lg px-5 py-2.5 transition-colors hover:bg-muted/50"
            >
              Show {hidden} more {hidden === 1 ? "post" : "posts"}
            </button>
          </div>
        </BlurFade>
      )}

      {expanded && (
        <BlurFade delay={0.05}>
          <div className="flex justify-center">
            <button
              onClick={() => setExpanded(false)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground border rounded-lg px-5 py-2.5 transition-colors hover:bg-muted/50"
            >
              Show less
            </button>
          </div>
        </BlurFade>
      )}
    </div>
  );
}
