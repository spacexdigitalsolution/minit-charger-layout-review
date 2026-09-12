"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SmartImage from "../../../components/SmartImage";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function SignatureSolution() {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", toggleActions: "play none none none", once: true
        }
      });

      tl.from(".ss-header", { y: 20, autoAlpha: 0, duration: 0.6, ease: "power2.out", clearProps: "all" })
        .from(".ss-image", { scale: 0.95, autoAlpha: 0, duration: 0.8, ease: "power2.out", clearProps: "all" }, "-=0.2")
        .from(".ss-stat", { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", clearProps: "all" }, "-=0.4");
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-zinc-100 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="ss-header text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-4 block">
            Signature Solution
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter uppercase text-zinc-900 dark:text-white">
            Your Site, Configured.
          </h2>
        </div>

        {/* Centerpiece Image area */}
        <div className="ss-image relative w-full max-w-5xl mx-auto aspect-video mb-12 bg-transparent flex items-center justify-center">
          <SmartImage
            src="/assets/Products/Altus II/Altus II Listing.webp"
            alt="Altus II Charging Station Diagram"
            fill
            className="object-contain"
          />

          {/* Static CSS Callouts */}
          <div className="absolute top-1/4 left-2 md:left-8 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm px-4 py-2 rounded-sm border border-zinc-200 dark:border-zinc-700 shadow-sm text-[10px] font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider hidden md:block">
            Dual Connectors
          </div>
          <div className="absolute bottom-1/4 right-2 md:right-8 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm px-4 py-2 rounded-sm border border-zinc-200 dark:border-zinc-700 shadow-sm text-[10px] font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider hidden md:block">
            Compact Footprint
          </div>
        </div>

        {/* Stat Strip */}
        <div className="bg-white dark:bg-zinc-950 rounded-sm border border-zinc-200 dark:border-zinc-800 py-10 px-8 mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-zinc-200 dark:divide-zinc-800">

            <div className="ss-stat flex flex-col items-center text-center px-4 pt-4 md:pt-0">
              <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2">Power Output</span>
              <span className="font-display text-4xl md:text-5xl font-black text-zinc-900 dark:text-white">30–80<span className="text-2xl md:text-3xl ml-1">kW</span></span>
            </div>

            <div className="ss-stat flex flex-col items-center text-center px-4 pt-8 md:pt-0">
              <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2">Max Efficiency</span>
              <span className="font-display text-4xl md:text-5xl font-black text-zinc-900 dark:text-white">&gt; 94%</span>
            </div>

            <div className="ss-stat flex flex-col items-center text-center px-4 pt-8 md:pt-0">
              <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2">Deployment</span>
              <span className="font-display text-2xl md:text-3xl font-black text-zinc-900 dark:text-white leading-tight mt-2">Dual-Port Pedestal</span>
            </div>

          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/products/magnus" className="inline-flex items-center justify-center rounded border border-zinc-900 dark:border-white px-8 py-4 text-sm font-bold text-zinc-900 dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950 transition-colors uppercase tracking-wider">
            Explore Magnus Specs
          </Link>
        </div>

      </div>
    </section>
  );
}
