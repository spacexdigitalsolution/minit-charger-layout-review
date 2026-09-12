"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import SmartImage from "./SmartImage";
import HoverZoomImage from "./HoverZoomImage";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ImageCardGrid({
  title = "One Connected Ecosystem",
  description = "Purpose-built platforms for aviation ground support operations.",
  linkText = "View All Products",
  linkHref = "/products",
  items = [],
  imageMode = "contain",
  theme = "dark"
}) {
  const containerRef = useRef(null);
  const isLight = theme === "light";

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", toggleActions: "play none none none", once: true}
      });

      tl.from(".rp-header", { y: 20, autoAlpha: 0, duration: 0.6, ease: "power2.out", clearProps: "all" })
        .from(".rp-card", { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", clearProps: "all" }, "-=0.3");
    });
  }, { scope: containerRef });

  // Dynamically determine grid columns based on number of items
  // Up to 4 items -> 2x2. 3 items -> 3 columns.
  const gridColsClass = items.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4";

  return (
    <section ref={containerRef} className={`py-24 overflow-hidden ${isLight ? "bg-white text-zinc-900" : "bg-zinc-950 text-white"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="rp-header flex flex-col md:flex-row md:items-end justify-between mb-16">
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
            
            return (
              <Link
                key={product.id}
                href={product.link}
                className={`rp-card group relative block aspect-square overflow-hidden rounded-sm ${isLight ? "bg-zinc-100" : "bg-zinc-900"}`}
              >
                {product.image ? (
                  <HoverZoomImage>
                    <SmartImage
                      src={product.image}
                      alt={product.name}
                      fill
                      className={`${imageMode === 'contain' ? `object-contain ${paddingClass}` : 'object-cover'} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                  </HoverZoomImage>
                ) : (
                  // TODO: Missing Asset - {product.name}
                  <div className={`absolute inset-0 ${isLight ? "bg-zinc-200 border-zinc-300" : "bg-zinc-900 border-zinc-800"} border`}></div>
                )}

                {/* Gradient Overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90"></div>

                {/* Text Content overlay */}
                <div className="absolute inset-0 p-8 pr-16 flex flex-col justify-end pointer-events-none">
                  {product.kicker && (
                    <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest mb-2 pointer-events-auto">
                      {product.kicker}
                    </span>
                  )}
                  <h3 className="font-display text-3xl font-bold uppercase tracking-wide text-white pointer-events-auto">
                    {product.name}
                  </h3>
                  {product.description && (
                    <p className="mt-2 text-sm text-zinc-300 line-clamp-2 group-hover:text-white transition-colors pointer-events-auto">
                      {product.description}
                    </p>
                  )}
                </div>

                {/* Arrow Icon */}
                <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center transition-colors group-hover:bg-white group-hover:border-white shrink-0">
                  <ArrowRight className="h-4 w-4 text-white group-hover:text-zinc-950 transition-colors" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
