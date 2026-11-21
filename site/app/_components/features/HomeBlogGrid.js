"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogCard from "@/components/ui/BlogCard";

gsap.registerPlugin(ScrollTrigger);

export default function HomeBlogGrid({
  title = "Knowledge Hub & Field Updates",
  description = "Insights from active airport ramps, high-throughput distribution centers, and fleet charging deployments.",
  linkText = "View All Articles",
  linkHref = "/blogs",
  blogs = []
}) {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true
        }
      });

      tl.from(".blog-header", { y: 20, autoAlpha: 0, duration: 0.6, ease: "power2.out", clearProps: "all" })
        .from(".blog-item", { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.08, ease: "power2.out", clearProps: "all" }, "-=0.3");
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 overflow-hidden bg-zinc-950 text-white border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="blog-header flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-black uppercase text-white mb-3">
              {title}
            </h2>
            {description && (
              <p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-light">
                {description}
              </p>
            )}
          </div>
          {linkText && linkHref && (
            <Link
              href={linkHref}
              className="mt-6 md:mt-0 inline-flex items-center text-xs font-bold uppercase tracking-wider text-white hover:text-emerald-400 border-b border-white hover:border-emerald-400 pb-1 transition-colors group"
            >
              {linkText}
              <ArrowRight className="ml-2 h-4 w-4 text-emerald-500 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        {/* Left-Aligned Grid: Exactly 4 columns, left aligned */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-item h-full">
              <BlogCard item={blog} isLight={false} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
