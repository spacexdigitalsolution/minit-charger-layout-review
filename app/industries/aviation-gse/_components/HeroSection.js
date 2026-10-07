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
        style={{ backgroundImage: "url('/assets/Industries/Aviation/Banner/Banner-Aviation.webp')" }}
      />

      {/* Legibility Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/70 to-transparent z-10" />

      {/* Content Layer */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl mb-16">
          <p className="hero-subcopy text-green-500 font-bold uppercase  text-xs mb-4">
            Aviation Ground Support Equipment
          </p>
          <h1 className="hero-headline font-display text-5xl md:text-6xl font-black  text-white uppercase  mb-6">
            CHARGING FOR THE AIRPORTS OF TODAY
          </h1>
          <div className="hero-subcopy text-lg text-zinc-300  font-light  mb-10 max-w-2xl space-y-4">
            <p className="font-bold text-white text-xl">Minit Charger to fix all ramp problems BEYOND just &quot;charging&quot;.</p>
            <p>Run-over cables. Chargers down for days. No spare power at the gate. No way to know which tug is ready. Got more? Minit charger solves them too.</p>
          </div>

          <div className="hero-buttons flex items-center gap-6">
            <button className="inline-flex items-center justify-center rounded border border-white px-8 py-4 text-sm font-bold text-white hover:bg-white hover:text-zinc-950 transition-colors uppercase r backdrop-blur-sm">
              Talk to an Expert
            </button>
            <span className="text-zinc-400 text-sm italic hidden sm:inline-block">Need a solution right away?</span>
          </div>
        </div>
      </div>
    </section>
  );
}
