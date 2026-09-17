"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Download } from "lucide-react";
import SmartImage from "@/app/components/SmartImage";

export default function HeroSection() {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out", clearProps: "all" } });

      tl.from(".hero-headline", { autoAlpha: 0, y: 30, duration: 0.8 }, 0)
        .from(".hero-subcopy", { autoAlpha: 0, duration: 0.8 }, 0.2)
        .from(".hero-specs", { autoAlpha: 0, x: -20, duration: 0.8 }, 0.35)
        .from(".hero-buttons", { autoAlpha: 0, scale: 0.95, duration: 0.6 }, 0.5);
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative overflow-hidden w-full min-h-[90vh] flex items-center border-b border-zinc-200 dark:border-zinc-800">

      {/* Static Hero Image Layer (Extracted from Video) */}
      <div className="absolute inset-0 w-full h-full z-0 bg-zinc-900">
        <SmartImage
          src="/assets/Industries/Aviation-GSE/Why Minit Charger/Banner.webp"
          alt="Altus II Charging Unit"
          fill
          priority
          className="object-cover object-center opacity-80"
        />
      </div>

      {/* Legibility Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent z-10" />



      {/* Content Layer */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="hero-headline font-display text-6xl md:text-7xl font-black tracking-tighter text-white uppercase leading-[0.9] mb-4">
            Altus II
          </h1>
          <p className="hero-subcopy mt-3 text-lg text-zinc-300 sm:mt-5 sm:text-2xl lg:text-xl xl:text-2xl font-light">
            <strong className="block text-white font-medium mb-2">Built to Withstand Anything Outdoors</strong>
            IP54-rated for -25°C to 50°C, charges all your GSE and small EVs, any battery chemistry. <br />
            Deployed at airports worldwide, built for whatever the ramp brings.
          </p>

          <div className="hero-specs mt-10 flex flex-col sm:flex-row gap-4">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 p-5 rounded flex items-center justify-between sm:w-1/2">
              <dt className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Power Output</dt>
              <dd className="mt-1 text-2xl font-display font-bold tracking-tight text-white">40 kW</dd>
            </div>
            <div className="bg-black/40 backdrop-blur-md border border-white/10 p-5 rounded flex items-center justify-between sm:w-1/2">
              <dt className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Ports</dt>
              <dd className="mt-1 text-2xl font-display font-bold tracking-tight text-white">2 - 3</dd>
            </div>
          </div>

          <div className="hero-buttons mt-10 flex gap-4">
            <button className="inline-flex items-center justify-center rounded bg-green-600 px-8 py-4 text-sm font-bold text-white hover:bg-green-700 transition-colors uppercase tracking-wider">
              Get a Quote
            </button>
            <button className="inline-flex items-center justify-center rounded border border-white/20 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition-colors uppercase tracking-wider backdrop-blur-sm">
              <Download className="mr-2 h-4 w-4" /> Specs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
