"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import SmartImage from "@/components/SmartImage";

export default function IndustryHero({ industry }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out", clearProps: "all" } });

      tl.from(".hero-headline", { autoAlpha: 0, y: 30, duration: 0.8 }, 0)
        .from(".hero-subcopy", { autoAlpha: 0, duration: 0.8 }, 0.2)
        .from(".hero-buttons", { autoAlpha: 0, scale: 0.95, duration: 0.6 }, 0.4);
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} data-section="industry-hero" className="relative overflow-hidden w-full h-[97vh] max-h-[97vh] flex flex-col justify-between border-b border-zinc-800 bg-zinc-950">
      {/* Background Image Layer */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <SmartImage
          src={industry.heroImage || null}
          alt={industry.title}
          fill
          priority
          mode="placeholder"
          description={`${industry.label} Cinematic Background`}
          className="object-cover object-top opacity-80 mix-blend-luminosity"
        />
      </div>

      {/* Legibility Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/70 to-transparent z-10" />
      <div className="absolute inset-x-0 bottom-0 h-32 md:h-44 bg-gradient-to-t from-zinc-950/80 to-transparent z-10" />

      {/* Top Nav Spacer: Clearance strictly for floating navbar fill */}
      <div className="pt-20 md:pt-24 shrink-0" />

      {/* Content Layer */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-center py-4 md:py-6">
        <div className="max-w-3xl">
          <p className="hero-subcopy text-emerald-400 font-bold uppercase tracking-wider text-xs mb-2 md:mb-3">
            {industry.label} Solutions
          </p>
          <h1 className="hero-headline font-display text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase leading-[0.95] tracking-tight mb-3 md:mb-4">
            {industry.headline}
          </h1>
          <div className="hero-subcopy text-base sm:text-lg text-zinc-300 font-light mb-6 md:mb-8 max-w-2xl space-y-2 md:space-y-3">
            <p className="font-bold text-white text-lg sm:text-xl leading-snug">
              Minit Charger solves {industry.label} bottlenecks BEYOND just &quot;charging&quot;.
            </p>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-zinc-300">
              {industry.shortDescription}
            </p>
          </div>

          <div className="hero-buttons flex flex-wrap items-center gap-4 sm:gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded border border-white px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-white hover:bg-white hover:text-zinc-950 transition-colors uppercase tracking-wider backdrop-blur-sm"
            >
              Talk to an Expert
            </Link>
            <span className="text-zinc-400 text-xs sm:text-sm italic hidden sm:inline-block">
              Need a fleet feasibility study right away?
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

