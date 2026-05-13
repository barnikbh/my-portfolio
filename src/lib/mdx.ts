import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export type PostMetadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

export type Post = {
  source: string;
  metadata: PostMetadata;
  slug: string;
  readingTime: number;
};

export async function markdownToHTML(markdown: string): Promise<string> {
  const p = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: { light: "min-light", dark: "min-dark" },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);
  return p.toString();
}

export async function getPost(slug: string): Promise<Post | null> {
  const filePath = path.join("content", `${slug}.mdx`);
  try {
    const source = fs.readFileSync(filePath, "utf-8");
    const { content: rawContent, data: metadata } = matter(source);
    const content = await markdownToHTML(rawContent);
    const readingTime = Math.ceil(rawContent.trim().split(/\s+/).length / 200);
    return { source: content, metadata: metadata as PostMetadata, slug, readingTime };
  } catch {
    return null;
  }
}

export async function getAllPosts(dir: string): Promise<Post[]> {
  const files = fs.readdirSync(dir).filter((f) => path.extname(f) === ".mdx");
  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = path.basename(file, ".mdx");
      return getPost(slug);
    })
  );
  return posts.filter((p): p is Post => p !== null);
}
