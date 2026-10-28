"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { Check } from "lucide-react";
import SmartImage from "@/components/SmartImage";

gsap.registerPlugin(ScrollTrigger);

const bullets = [
  "Tracks run time to schedule maintenance before problems start",
  "GPS and geofencing: know where every vehicle is at all times",
  "Alerts the moment a battery misses equalization or runs low on water"
];

export default function ProductPairing({ product }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const st = {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true
      };

      gsap.from(".pai-text", {
        scrollTrigger: st,
        x: 30,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.out"
      });
      gsap.from(".pai-img", {
        scrollTrigger: st,
        x: -30,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.1
      });
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      data-section="product-pairing"
      className="py-24 md:py-32 bg-zinc-50 dark:bg-black border-b-2 border-zinc-200 dark:border-zinc-800 overflow-hidden"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left Column: Visual Dashboard */}
          <div className="pai-img lg:col-span-6 order-2 lg:order-1 relative w-full aspect-4/3 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl bg-zinc-900">
            <SmartImage
              src="/assets/homepage/Cumulus Software-01.webp"
              alt="CellTrac & Cumulus Dashboard Integration"
              fill
              mode="placeholder"
              description={`${product.name} paired with CellTrac & Cumulus live dashboard telemetry`}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right Column: Copy & Bullets */}
          <div className="pai-text lg:col-span-6 order-1 lg:order-2 mb-12 lg:mb-0">
            <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-4 block">
              Ecosystem Synergy
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-zinc-950 dark:text-white uppercase leading-[0.95] tracking-tight mb-6">
              Pair with CellTrac: Know What Every Battery Is Doing
            </h2>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-8">
              A small tracking unit attached directly to the battery cable records voltage, temperature, and electrolyte levels every second it charges and runs. It communicates directly with {product.name} to optimize charge curves on the fly.
            </p>

            <ul className="space-y-4 mb-10">
              {bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-base md:text-lg font-light text-zinc-700 dark:text-zinc-300">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/products/celltrac"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors"
            >
              Explore CellTrac Telematics &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

