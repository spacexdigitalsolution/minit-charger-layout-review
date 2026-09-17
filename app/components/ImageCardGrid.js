"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import BlogCard from "./BlogCard";
import IndustryCard from "./IndustryCard";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ImageCardGrid({
  title = "One Connected Ecosystem",
  description = "Purpose-built platforms for aviation ground support operations.",
  linkText = "View All Products",
  linkHref = "/products",
  items = [],
  imageMode = "contain",
  theme = "dark",
  cardType = "product"
}) {
  const containerRef = useRef(null);
  const isLight = theme === "light";

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", toggleActions: "play none none none", once: true
        }
      });

      tl.from(".rp-header", { y: 20, autoAlpha: 0, duration: 0.6, ease: "power2.out", clearProps: "all" })
        .from(".rp-card", { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", clearProps: "all" }, "-=0.3");
    });
  }, { scope: containerRef });

  // Dynamically determine grid columns and max-width based on number of items
  // This prevents 1 or 2 items from stretching across the entire 4-column span
  let gridColsClass = "md:grid-cols-2 lg:grid-cols-4";
  if (items.length === 1) gridColsClass = "md:grid-cols-1 max-w-sm";
  else if (items.length === 2) gridColsClass = "md:grid-cols-2 max-w-3xl";
  else if (items.length === 3) gridColsClass = "md:grid-cols-3 max-w-5xl";

  return (
    <section ref={containerRef} className={`py-24 overflow-hidden ${isLight ? "bg-white text-zinc-900" : "bg-zinc-950 text-white"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="rp-header flex flex-col md:flex-row md:items-end justify-between mb-6">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">
              {title}
            </h2>
            <p className={`text-xl max-w-2xl font-light ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
              {description}
            </p>
          </div>
          {linkText && linkHref && (
            <Link href={linkHref} className={`mt-6 md:mt-0 inline-flex items-center font-bold border-b pb-1 transition-colors uppercase tracking-wider text-sm group ${isLight ? "text-zinc-900 border-zinc-900 hover:text-zinc-600 hover:border-zinc-600" : "text-white border-white hover:text-zinc-300 hover:border-zinc-300"}`}>
              {linkText} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        <div className={`grid grid-cols-1 ${gridColsClass} gap-4`}>
          {items.map((product) => {
            const paddingClass = product.imagePadding || 'p-4 pb-32';

            if (cardType === "blog") {
              return <BlogCard key={product.id} item={product} imageMode={imageMode} isLight={isLight} paddingClass={paddingClass} />;
            } else if (cardType === "industry") {
              return <IndustryCard key={product.id} item={product} imageMode={imageMode} isLight={isLight} paddingClass={paddingClass} />;
            } else {
              return <ProductCard key={product.id} item={product} imageMode={imageMode} isLight={isLight} paddingClass={paddingClass} />;
            }
          })}
        </div>

      </div>
    </section>
  );
}
