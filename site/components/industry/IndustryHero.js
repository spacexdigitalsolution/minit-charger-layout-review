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
    <section ref={containerRef} data-section="industry-hero" className="relative overflow-hidden w-full min-h-[85vh] flex items-center border-b border-zinc-200 dark:border-zinc-800 bg-zinc-950">
      {/* Background Image Layer */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <SmartImage
          src={industry.heroImage || "/assets/homepage/Outdoor eGSE & yards-01.webp"}
          alt={industry.title}
          fill
          priority
          mode="placeholder"
          description={`${industry.label} Cinematic Background`}
          className="object-cover object-center opacity-70 mix-blend-luminosity"
        />
      </div>

      {/* Legibility Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/75 to-transparent z-10" />

      {/* Content Layer */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16">
        <div className="max-w-3xl mb-16">
          <p className="hero-subcopy text-emerald-400 font-bold uppercase tracking-wider text-xs mb-4">
            {industry.label} Solutions
          </p>
          <h1 className="hero-headline font-display text-5xl md:text-7xl font-black text-white uppercase leading-[0.95] tracking-tight mb-6">
            {industry.headline}
          </h1>
          <div className="hero-subcopy text-lg text-zinc-300 font-light mb-10 max-w-2xl space-y-4">
            <p className="font-bold text-white text-xl">
              Minit Charger solves {industry.label} bottlenecks BEYOND just &quot;charging&quot;.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              {industry.shortDescription}
            </p>
          </div>

          <div className="hero-buttons flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded border border-white px-8 py-4 text-sm font-bold text-white hover:bg-white hover:text-zinc-950 transition-colors uppercase tracking-wider backdrop-blur-sm"
            >
              Talk to an Expert
            </Link>
            <span className="text-zinc-400 text-sm italic hidden sm:inline-block">
              Need a fleet feasibility study right away?
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

