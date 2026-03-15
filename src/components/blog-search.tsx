"use client";

import Link from "next/link";
import { useState } from "react";

type Post = {
  slug: string;
  metadata: Record<string, string>;
};

export default function BlogSearch({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("");

  const filtered = posts.filter((post) =>
    post.metadata.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full mb-8 bg-transparent border-b border-border pb-2 text-sm outline-none placeholder:text-muted-foreground focus:border-foreground transition-colors"
      />
      {filtered.length === 0 && (
        <p className="text-sm text-muted-foreground">No posts match &ldquo;{query}&rdquo;</p>
      )}
      {filtered.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-4"
          href={`/blog/${post.slug}`}
        >
          <div className="w-full flex flex-col">
            <p className="tracking-tight">{post.metadata.title}</p>
            <p className="h-6 text-xs text-muted-foreground">
              {post.metadata.publishedAt}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
