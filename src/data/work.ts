import path from "path";
import { getAllPosts } from "@/lib/mdx";

export { getPost as getWork, markdownToHTML } from "@/lib/mdx";
export type { Post, PostMetadata } from "@/lib/mdx";

export async function getWorkPosts() {
  return getAllPosts(path.join(process.cwd(), "content"));
}
