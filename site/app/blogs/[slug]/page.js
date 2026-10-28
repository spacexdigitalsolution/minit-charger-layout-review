import { notFound } from "next/navigation";
import ConversionBand from "@/components/ConversionBand";
import ArticleHero from "./_components/ArticleHero";
import ArticleBody from "./_components/ArticleBody";
import RelatedPosts from "./_components/RelatedPosts";
import { blogs } from "@/data/blogs";

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return { title: "Blog Not Found | Minit Charger" };

  return {
    title: `${blog.title} | Minit Charger`,
    description: blog.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const relatedPosts = blogs
    .filter((b) => b.id !== blog.id && b.category === blog.category)
    .slice(0, 3);

  if (relatedPosts.length < 3) {
    const additional = blogs.filter(b => b.id !== blog.id && !relatedPosts.includes(b));
    relatedPosts.push(...additional.slice(0, 3 - relatedPosts.length));
  }

  return (
    <>
      <article className="relative z-10 bg-white dark:bg-zinc-950 font-sans min-h-screen pt-32 pb-24">
        <ArticleHero blog={blog} />
        <ArticleBody blog={blog} />
      </article>

      <RelatedPosts relatedPosts={relatedPosts} />

      <ConversionBand
        headline="Accelerate Your Transition"
        supportingCopy="Transform your fleet's charging infrastructure with our purpose-built, high-uptime platforms."
        primaryCTA={{ label: "Contact Sales", href: "/contact" }}
        secondaryCTA={{ label: "View Our Hardware", href: "/products" }}
        bgImage="/assets/Industries/Aviation-GSE/CTA/Banner.png"
      />
    </>
  );
}
