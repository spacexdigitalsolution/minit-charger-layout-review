"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

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
    <section ref={containerRef} className="relative overflow-hidden w-full min-h-[85vh] flex items-center border-b border-zinc-200 dark:border-zinc-800">
      
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/assets/gse/ALTUS_II_GSE_BACKGROUND.png')" }}
      />

      {/* Legibility Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/70 to-transparent z-10" />

      {/* Content Layer */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl mb-16">
          <p className="hero-subcopy text-green-500 font-bold uppercase tracking-widest text-xs mb-4">
            Commercial Delivery & Transit
          </p>
          <h1 className="hero-headline font-display text-5xl md:text-7xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9] mb-6">
            Electrify Your Routes.
          </h1>
          <p className="hero-subcopy text-lg text-zinc-300 sm:text-2xl font-light leading-relaxed mb-10 max-w-2xl">
            Scalable, intelligent depot charging that grows with your fleet.
          </p>

          <div className="hero-buttons flex gap-4">
            <button className="inline-flex items-center justify-center rounded border border-white px-8 py-4 text-sm font-bold text-white hover:bg-white hover:text-zinc-950 transition-colors uppercase tracking-wider backdrop-blur-sm">
              Explore Solutions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
