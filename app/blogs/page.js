"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SmartImage from "@/app/components/SmartImage";
import ConversionBand from "@/app/components/ConversionBand";

import { blogs } from "@/data/blogs";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  const categories = ["All", ...Array.from(new Set(blogs.map((b) => b.category)))];

  const { contextSafe } = useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".blog-header", {
        y: 20, autoAlpha: 0, duration: 0.6, ease: "power2.out", clearProps: "all"
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%", once: true,
        }
      });

      tl.from(".blog-card", {
        y: 20,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "all"
      });
    });
  }, { scope: containerRef });

  const handleTabClick = contextSafe((cat) => {
    if (cat === activeCategory) return;

    gsap.to(contentRef.current, {
      autoAlpha: 0,
      y: 10,
      duration: 0.2,
      onComplete: () => {
        setActiveCategory(cat);
        gsap.set(contentRef.current, { y: 0 });

        gsap.fromTo(".blog-card",
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.4, stagger: 0.1, ease: "power2.out", clearProps: "all" }
        );

        gsap.to(contentRef.current, {
          autoAlpha: 1,
          duration: 0.4,
        });
      }
    });
  });

  const filteredBlogs = activeCategory === "All"
    ? blogs
    : blogs.filter(b => b.category === activeCategory);

  return (
    <>
      <div ref={containerRef} className="relative z-10 bg-white dark:bg-zinc-950 font-sans min-h-screen pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16 blog-header">
            <h1 className="font-display text-5xl md:text-6xl font-black tracking-tighter uppercase mb-6 text-zinc-900 dark:text-white">
              Insights & Resources
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light max-w-2xl mx-auto mb-10">
              Explore our latest case studies, deployment guides, and news.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleTabClick(cat)}
                  className={`px-6 py-2 text-sm font-bold uppercase tracking-wider rounded-sm transition-all duration-300 border ${activeCategory === cat
                      ? "bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-zinc-950 dark:border-white"
                      : "bg-transparent text-zinc-600 border-zinc-200 hover:border-zinc-900 hover:text-zinc-900 dark:text-zinc-400 dark:border-zinc-800 dark:hover:border-white dark:hover:text-white"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post & Grid */}
          <div ref={contentRef}>
            {filteredBlogs.length > 0 && (
              <div className="flex flex-col lg:flex-row gap-8 mb-16 border-b border-zinc-200 dark:border-zinc-800 pb-16 blog-card">
                <Link href={`/blogs/${filteredBlogs[0].slug}`} className="lg:w-2/3 group relative aspect-[16/9] lg:aspect-[2/1] overflow-hidden bg-zinc-100 dark:bg-zinc-900 rounded-sm">
                  <SmartImage
                    src={filteredBlogs[0].heroImage || filteredBlogs[0].thumbnailImage}
                    alt={filteredBlogs[0].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
                <div className="lg:w-1/3 flex flex-col justify-center py-4 pr-8">
                  <div className="flex items-center gap-3 mb-4 text-[10px] uppercase tracking-widest font-bold text-zinc-500 dark:text-zinc-400">
                    <span className="text-green-600 dark:text-green-500">{filteredBlogs[0].category}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
                    <span>{new Date(filteredBlogs[0].publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <Link href={`/blogs/${filteredBlogs[0].slug}`} className="group">
                    <h3 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-green-600 transition-colors mb-6 leading-tight">
                      {filteredBlogs[0].title}
                    </h3>
                  </Link>
                  <p className="text-zinc-600 dark:text-zinc-400 text-lg font-light leading-relaxed mb-8 line-clamp-3">
                    {filteredBlogs[0].excerpt}
                  </p>
                  <Link href={`/blogs/${filteredBlogs[0].slug}`} className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-white hover:text-green-600 dark:hover:text-green-500 transition-colors">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {filteredBlogs.slice(1).map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blogs/${blog.slug}`}
                  className="blog-card group block flex flex-col border-b border-zinc-200 dark:border-zinc-800 pb-8"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 rounded-sm mb-6">
                    <SmartImage
                      src={blog.thumbnailImage}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-4 text-[10px] uppercase tracking-widest font-bold text-zinc-500 dark:text-zinc-400">
                      <span className="text-green-600 dark:text-green-500">{blog.category}</span>
                      <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
                      <span>{new Date(blog.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors leading-tight">
                      {blog.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {filteredBlogs.length === 0 && (
            <div className="text-center py-20 text-zinc-500">
              No articles found in this category.
            </div>
          )}

        </div>
      </div>

      <ConversionBand
        headline="Ready to power your fleet?"
        primaryCTA={{ label: "Contact Sales", href: "/contact" }}
        secondaryCTA={{ label: "Explore Products", href: "/products" }}
      />
    </>
  );
}
