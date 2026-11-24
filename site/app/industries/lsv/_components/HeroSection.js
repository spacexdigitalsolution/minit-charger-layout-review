// section: lsv-hero
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import SmartImage from "@/components/SmartImage";
import { lsvBanner } from "./lsvData";

export default function HeroSection() {
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
    <section
      ref={containerRef}
      data-section="lsv-hero"
      className="relative overflow-hidden w-full h-[97vh] max-h-[97vh] flex flex-col justify-between border-b border-zinc-800 bg-zinc-950"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <SmartImage
          src="/assets/homepage/Engineered for LSEVs.webp"
          alt="Low Speed Electric Vehicle Fleet Charging"
          fill
          priority
          mode="placeholder"
          description="Campus & Resort Low Speed Vehicle Fleet Charging Staging Area"
          className="object-cover object-center opacity-85"
        />
      </div>

      {/* Legibility Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/75 to-transparent z-10" />
      <div className="absolute inset-x-0 bottom-0 h-32 md:h-44 bg-gradient-to-t from-zinc-950/80 to-transparent z-10" />

      {/* Top Nav Spacer */}
      <div className="pt-20 md:pt-24 shrink-0" />

      {/* Content Layer */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-center py-4 md:py-6">
        <div className="max-w-3xl">
          <p className="hero-subcopy text-emerald-400 font-bold uppercase tracking-wider text-xs mb-3">
            {lsvBanner.eyebrow}
          </p>

          <h1 className="hero-headline font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-[0.95] tracking-tight mb-4">
            {lsvBanner.headline}
          </h1>

          <div className="hero-subcopy mb-6 max-w-2xl space-y-4">
            <p className="text-xl sm:text-2xl font-bold text-white leading-snug">
              {lsvBanner.subhead}
            </p>

            {/* Stacked Pain Fragments */}
            <div className="border-l-2 border-emerald-500/70 pl-4 py-1 space-y-1">
              {lsvBanner.painFragments.map((fragment, idx) => (
                <p
                  key={idx}
                  className={`text-sm sm:text-base ${
                    idx === lsvBanner.painFragments.length - 1
                      ? "font-semibold text-emerald-400"
                      : "text-zinc-300 font-light"
                  }`}
                >
                  {fragment}
                </p>
              ))}
            </div>

            <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              {lsvBanner.body}
            </p>
          </div>

          <div className="hero-buttons flex items-center gap-4 sm:gap-6">
            <Link
              href={lsvBanner.ctaButton.href}
              className="inline-flex items-center justify-center rounded border border-white px-8 py-3.5 text-xs sm:text-sm font-bold text-white hover:bg-white hover:text-zinc-950 transition-colors uppercase tracking-wider backdrop-blur-sm shadow-lg"
            >
              {lsvBanner.ctaButton.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
