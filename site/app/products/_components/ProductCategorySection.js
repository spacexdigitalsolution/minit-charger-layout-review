"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ProductCatalogCard from "@/components/product/ProductCatalogCard";

gsap.registerPlugin(ScrollTrigger);

export default function ProductCategorySection({ category, items }) {
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

      tl.from(".cat-header", { y: 20, autoAlpha: 0, duration: 0.6, ease: "power2.out", clearProps: "all" })
        .from(".cat-card", { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.08, ease: "power2.out", clearProps: "all" }, "-=0.3");
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-white text-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Category Header */}
        <div className="cat-header flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-zinc-100">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-zinc-900">
              {category.name}
            </h2>
            {category.description && (
              <p className="mt-2 text-base md:text-lg text-zinc-500 max-w-2xl font-light">
                {category.description}
              </p>
            )}
          </div>
          <span className="mt-4 md:mt-0 text-xs font-bold uppercase tracking-wider text-zinc-400">
            {items.length} {items.length === 1 ? "Product" : "Products"}
          </span>
        </div>

        {/* Left-Aligned Grid: Spans natural columns from the left margin, never forced-centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {items.map((product) => (
            <div key={product.id} className="cat-card h-full">
              <ProductCatalogCard item={product} isLight={true} paddingClass={product.imagePadding || "p-3 sm:p-4"} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
