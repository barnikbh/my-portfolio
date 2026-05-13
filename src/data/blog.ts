import path from "path";
import { getAllPosts } from "@/lib/mdx";

export { getPost, markdownToHTML } from "@/lib/mdx";
export type { Post, PostMetadata } from "@/lib/mdx";

export async function getBlogPosts() {
  return getAllPosts(path.join(process.cwd(), "content"));
}
