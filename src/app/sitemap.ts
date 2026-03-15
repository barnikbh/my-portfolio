import { getBlogPosts } from "@/data/blog";
import { getWorkPosts } from "@/data/work";
import { DATA } from "@/data/resume";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getBlogPosts();
  const workPosts = await getWorkPosts();

  const blogRoutes = blogPosts.map((post) => ({
    url: `${DATA.url}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt).toISOString(),
  }));

  const workRoutes = workPosts.map((post) => ({
    url: `${DATA.url}/work/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt).toISOString(),
  }));

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: DATA.url, lastModified: new Date().toISOString() },
    { url: `${DATA.url}/blog`, lastModified: new Date().toISOString() },
    { url: `${DATA.url}/work`, lastModified: new Date().toISOString() },
  ];

  return [...staticRoutes, ...blogRoutes, ...workRoutes];
}
