import BlurFade from "@/components/magicui/blur-fade";
import BlogSearch from "@/components/blog-search";
import { getBlogPosts } from "@/data/blog";

export const metadata = {
  title: "Blog",
  description: "My thoughts on building software, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  const sorted = posts.sort((a, b) =>
    new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1
  );

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">blog</h1>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <BlogSearch posts={sorted} />
      </BlurFade>
    </section>
  );
}
