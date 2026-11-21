// section: altus-hero
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SmartImage from "@/components/SmartImage";

export default function HeroSection() {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out", clearProps: "all" } });

      tl.fromTo(".hero-bg-scale", { scale: 1.05 }, { scale: 1, duration: 2, ease: "power2.out" }, 0)
        .from(".hero-title", { autoAlpha: 0, y: 30, duration: 1 }, 0.2)
        .from(".hero-subtext", { autoAlpha: 0, duration: 1 }, 0.4)
        .from(".hero-data-bar > div", { autoAlpha: 0, y: 20, duration: 0.8, stagger: 0.1 }, 0.5);
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} data-section="altus-hero" className="relative overflow-hidden w-full h-[97vh] max-h-[97vh] flex flex-col justify-between border-b-2 border-white/10 bg-zinc-950">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div className="hero-bg-scale absolute inset-0 w-full h-full">
          <SmartImage
            src="/assets/products/altus-ii/hero/altus-ii-dual-port-rapid-airport-gse-charging-unit-deployed.png"
            alt="Altus II Charging Unit on Tarmac"
            fill
            priority
            mode="image"
            className="object-cover object-top opacity-95"
          />
        </div>
      </div>

      {/* Directional Scrim: Dark on left for text legibility, transparent on right and top so sky, floodlights & charger are 100% visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/50 to-transparent z-10" />
      <div className="absolute inset-x-0 bottom-0 h-28 md:h-36 bg-gradient-to-t from-zinc-950/90 via-zinc-950/50 to-transparent z-10" />

      {/* Top Nav Spacer */}
      <div className="pt-16 sm:pt-18 md:pt-20 shrink-0" />

      {/* Main Content Area */}
      <div className="relative z-20 flex-grow flex flex-col justify-center px-6 md:px-12 w-full max-w-[1600px] mx-auto py-2 sm:py-3 md:py-4">
        <div className="max-w-2xl">
          <span className="hero-subtext text-[11px] sm:text-xs tracking-widest uppercase font-bold text-zinc-400 mb-1.5 md:mb-2 block">Industrial Grade</span>
          <h1 className="hero-title font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-[0.95] tracking-tight mb-1.5 md:mb-2">
            Altus II
          </h1>
          <h2 className="hero-subtext text-base sm:text-lg md:text-xl lg:text-2xl font-display font-bold text-zinc-100 uppercase tracking-tight mb-1.5 md:mb-2">
            Built to Withstand Anything Outdoors
          </h2>
          <p className="hero-subtext text-xs sm:text-sm md:text-base text-zinc-300 font-light max-w-xl leading-relaxed">
            IP54-rated for -25°C to 50°C, charges your ground equipment on lead-acid or lithium batteries, plus passenger EVs. Deployed at airports worldwide, built for whatever the ramp brings.
          </p>
        </div>
      </div>

      {/* Data-Forward Bottom Bar */}
      <div className="relative z-20 hero-data-bar grid grid-cols-2 md:grid-cols-4 border-t border-white/10 bg-zinc-950/80 backdrop-blur-xl shrink-0">
        <div className="py-2.5 sm:py-3 md:py-3.5 px-4 sm:px-6 md:px-8 border-r border-white/10 flex flex-col justify-center">
          <dt className="text-[9px] sm:text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-0.5">Max Power</dt>
          <dd className="text-xl sm:text-2xl md:text-3xl font-display font-black text-white">80kW</dd>
        </div>
        <div className="py-2.5 sm:py-3 md:py-3.5 px-4 sm:px-6 md:px-8 border-r border-white/10 flex flex-col justify-center">
          <dt className="text-[9px] sm:text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-0.5">Architecture</dt>
          <dd className="text-xl sm:text-2xl md:text-3xl font-display font-black text-white">Dual Port</dd>
        </div>
        <div className="py-2.5 sm:py-3 md:py-3.5 px-4 sm:px-6 md:px-8 border-r border-white/10 flex flex-col justify-center hidden md:flex">
          <dt className="text-[9px] sm:text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-0.5">Environment</dt>
          <dd className="text-xl sm:text-2xl md:text-3xl font-display font-black text-white">IP54 Rated</dd>
        </div>
        <div className="py-2.5 sm:py-3 md:py-3.5 px-4 sm:px-6 md:px-8 flex items-center justify-center hover:bg-white transition-colors group cursor-pointer">
          <span className="text-xs sm:text-sm font-bold text-white group-hover:text-zinc-950 uppercase tracking-wider transition-colors">
            Request Specs &rarr;
          </span>
        </div>
      </div>
    </section>
  );
}
