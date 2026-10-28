"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Check } from "lucide-react";
import SmartImage from "@/components/SmartImage";

gsap.registerPlugin(ScrollTrigger);

export default function ProductFeatureSplit({ product }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".split-anim-1", {
        scrollTrigger: { trigger: ".split-section-1", start: "top 80%", toggleActions: "play none none none", once: true },
        y: 30, autoAlpha: 0, duration: 0.8, stagger: 0.1, ease: "power2.out", clearProps: "all"
      });
      gsap.from(".split-anim-2", {
        scrollTrigger: { trigger: ".split-section-2", start: "top 80%", toggleActions: "play none none none", once: true },
        y: 30, autoAlpha: 0, duration: 0.8, stagger: 0.1, ease: "power2.out", clearProps: "all"
      });
    });
  }, { scope: containerRef });

  const feature1Bullets = (product.features || []).slice(0, 3);
  const feature2Bullets = (product.features || []).slice(3, 6);

  return (
    <div ref={containerRef}>
      {/* Module 1: Light Theme (Text Left, Image Right) */}
      <section className="split-section-1 py-24 md:py-32 bg-white dark:bg-zinc-950 border-b-2 border-zinc-200 dark:border-zinc-900 overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            {/* Left: Text & Checkmarks */}
            <div className="split-anim-1 lg:col-span-6 mb-12 lg:mb-0">
              <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-4 block">
                Intelligent Power Architecture
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-zinc-950 dark:text-white uppercase leading-[0.95] tracking-tight mb-6">
                Silicon Carbide Efficiency
              </h2>
              <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-8">
                {product.name} leverages next-generation semiconductor electronics. It handles peak operating heat with low thermal losses, running cooler and longer than legacy chargers.
              </p>
              <ul className="space-y-4">
                {(feature1Bullets.length > 0 ? feature1Bullets : [
                  "Patented adaptive charging curves prevent cell overheating",
                  "Modular power components allow rapid field-swaps",
                  "Built-in automated power derating under extreme ambient heat"
                ]).map((bullet, i) => (
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
            </div>

            {/* Right: Hardware Image */}
            <div className="split-anim-1 lg:col-span-6 relative w-full aspect-4/3 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl bg-zinc-900">
              <SmartImage
                src={product.cardImage || "/assets/homepage/Altus II.webp"}
                alt={`${product.name} Power Architecture`}
                width={800}
                height={600}
                mode="placeholder"
                description={`${product.name} Silicon Carbide Power Module Bay Diagram`}
                className="w-full h-full object-contain p-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Module 2: Dark Theme (Image Left, Text Right) */}
      <section className="split-section-2 py-24 md:py-32 bg-zinc-950 border-b-2 border-white/10 overflow-hidden text-white">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            {/* Left: Diagram */}
            <div className="split-anim-2 lg:col-span-6 order-2 lg:order-1 relative w-full aspect-4/3 rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
              <SmartImage
                src={product.heroImage || product.cardImage || "/assets/homepage/Altus II.webp"}
                alt={`${product.name} Telematics Integration`}
                width={800}
                height={600}
                mode="placeholder"
                description={`${product.name} Cloud Telematics & Metering Interface`}
                className="w-full h-full object-contain p-6"
              />
            </div>

            {/* Right: Text & Checkmarks */}
            <div className="split-anim-2 lg:col-span-6 order-1 lg:order-2 mb-12 lg:mb-0">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4 block">
                Cumulus Cloud Integration
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.95] tracking-tight mb-6">
                Connected Fleet Intelligence
              </h2>
              <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed mb-8">
                Seamlessly bridges hardware telemetry to depot operations. Track kilowatt-hour consumption, vehicle dwell times, and preventative maintenance alarms from any screen.
              </p>
              <ul className="space-y-4">
                {(feature2Bullets.length > 0 ? feature2Bullets : [
                  "Certified energy metering with automated tenant billing",
                  "Live status alerts before maintenance disrupts the shift",
                  "Over-the-air firmware upgrades and charging profile adjustments"
                ]).map((bullet, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-base md:text-lg font-light text-zinc-300">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

