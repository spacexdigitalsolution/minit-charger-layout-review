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
        .from(".ss-callout", { opacity: 0, duration: 0.5, stagger: 0.1, ease: "power2.out", clearProps: "all" }, "-=0.2")
        .from(".ss-stat", { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", clearProps: "all" }, "-=0.4");
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-zinc-100 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="ss-header text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase  mb-4 block">
            Signature Solution
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black  uppercase text-zinc-900 dark:text-white">
            Your Site, Configured.
          </h2>
        </div>

        {/* Centerpiece Image area */}
        <div className="ss-image relative w-full max-w-5xl mx-auto aspect-[4/5] md:aspect-video mb-12 bg-transparent flex items-center justify-center">
          <SmartImage
            src="/assets/Products/Altus II/ALTUSII_FRONT.webp"
            alt="Altus II Charging Station Diagram"
            fill
            className="object-contain z-10 p-8"
          />

          {/* Callout Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none hidden md:block" xmlns="http://www.w3.org/2000/svg">
            {/* Line 1: Power Output */}
            <line x1="26%" y1="35%" x2="44%" y2="45%" stroke="currentColor" strokeWidth="1" className="text-zinc-400 dark:text-zinc-500" />
            <circle cx="44%" cy="45%" r="3" fill="currentColor" className="text-zinc-400 dark:text-zinc-500" />

            {/* Line 2: Port Configuration */}
            <line x1="74%" y1="55%" x2="56%" y2="55%" stroke="currentColor" strokeWidth="1" className="text-zinc-400 dark:text-zinc-500" />
            <circle cx="56%" cy="55%" r="3" fill="currentColor" className="text-zinc-400 dark:text-zinc-500" />

            {/* Line 3: Connectors */}
            <line x1="26%" y1="65%" x2="44%" y2="55%" stroke="currentColor" strokeWidth="1" className="text-zinc-400 dark:text-zinc-500" />
            <circle cx="44%" cy="55%" r="3" fill="currentColor" className="text-zinc-400 dark:text-zinc-500" />

            {/* Line 4: Battery Chemistry */}
            <line x1="74%" y1="28%" x2="54%" y2="28%" stroke="currentColor" strokeWidth="1" className="text-zinc-400 dark:text-zinc-500" />
            <circle cx="54%" cy="28%" r="3" fill="currentColor" className="text-zinc-400 dark:text-zinc-500" />
          </svg>

          {/* HTML Callouts */}
          {/* Callout 1 (Top Left) */}
          <div className="ss-callout absolute top-[33%] right-[75%] text-right z-30 hidden md:block max-w-[200px]">
            <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase r block mb-1">Power Output</span>
            <span className="text-sm font-black text-zinc-900 dark:text-white uppercase ">30–80 kW Output</span>
          </div>

          {/* Callout 2 (Middle Right) */}
          <div className="ss-callout absolute top-[53%] left-[75%] text-left z-30 hidden md:block max-w-[200px]">
            <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase r block mb-1">Port Configuration</span>
            <span className="text-sm font-black text-zinc-900 dark:text-white uppercase ">Dual Port</span>
          </div>

          {/* Callout 3 (Bottom Left) */}
          <div className="ss-callout absolute top-[63%] right-[75%] text-right z-30 hidden md:block max-w-[200px]">
            <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase r block mb-1">Connectors</span>
            <span className="text-sm font-black text-zinc-900 dark:text-white uppercase ">Anderson, Euro, REMA</span>
          </div>

          {/* Callout 4 (Top Right) */}
          <div className="ss-callout absolute top-[26%] left-[75%] text-left z-30 hidden md:block max-w-[220px]">
            <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase r block mb-1">Battery Chemistry</span>
            <span className="text-sm font-black text-zinc-900 dark:text-white uppercase ">Lead Acid, Lithium, EV Compatible</span>
          </div>
        </div>

        {/* Stat Strip */}
        <div className="bg-white dark:bg-zinc-950 rounded-sm border border-zinc-200 dark:border-zinc-800 py-10 px-8 mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-zinc-200 dark:divide-zinc-800">

            <div className="ss-stat flex flex-col items-center text-center px-4 pt-4 md:pt-0">
              <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase  mb-2">Max Efficiency</span>
              <span className="font-display text-4xl md:text-5xl font-black text-zinc-900 dark:text-white">95<span className="text-2xl md:text-3xl ml-1">%</span></span>
            </div>

            <div className="ss-stat flex flex-col items-center text-center px-4 pt-8 md:pt-0">
              <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase  mb-2">Operating Environment</span>
              <span className="font-display text-2xl md:text-3xl font-black text-zinc-900 dark:text-white  mt-2">Outdoor Rated</span>
            </div>

            <div className="ss-stat flex flex-col items-center text-center px-4 pt-8 md:pt-0">
              <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase  mb-2">Installation</span>
              <span className="font-display text-2xl md:text-3xl font-black text-zinc-900 dark:text-white  mt-2">Pedestal</span>
            </div>

          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/contact" className="inline-flex items-center justify-center rounded border border-zinc-900 dark:border-white px-8 py-4 text-sm font-bold text-zinc-900 dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950 transition-colors uppercase r">
            Speak to an Expert
          </Link>
        </div>

      </div>
    </section>
  );
}
