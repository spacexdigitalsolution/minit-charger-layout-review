"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SmartImage from "@/components/SmartImage";

gsap.registerPlugin(ScrollTrigger);

export default function BenefitModules() {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".wh-hd-img-1", {
        scrollTrigger: { trigger: ".wh-hd-block-1", start: "top 80%", toggleActions: "play none none none", once: true },
        x: -30, autoAlpha: 0, duration: 0.8, ease: "power2.out", clearProps: "all"
      });
      gsap.from(".wh-hd-text-1", {
        scrollTrigger: { trigger: ".wh-hd-block-1", start: "top 80%", toggleActions: "play none none none", once: true },
        y: 30, autoAlpha: 0, duration: 0.8, ease: "power2.out", clearProps: "all"
      });

      gsap.from(".wh-hd-img-2", {
        scrollTrigger: { trigger: ".wh-hd-block-2", start: "top 80%", toggleActions: "play none none none", once: true },
        x: 30, autoAlpha: 0, duration: 0.8, ease: "power2.out", clearProps: "all"
      });
      gsap.from(".wh-hd-text-2", {
        scrollTrigger: { trigger: ".wh-hd-block-2", start: "top 80%", toggleActions: "play none none none", once: true },
        y: 30, autoAlpha: 0, duration: 0.8, ease: "power2.out", clearProps: "all"
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} data-section="warehouse-benefits" className="py-24 overflow-hidden bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Block 1 */}
        <div className="wh-hd-block-1 lg:grid lg:grid-cols-12 lg:gap-16 items-center mb-32">
          <div className="wh-hd-img-1 lg:col-span-7 relative w-full aspect-4/3 bg-zinc-200 dark:bg-zinc-800 overflow-hidden rounded-sm">
            <SmartImage
              src="/assets/homepage/Engineered for Warehouses.webp"
              alt="Reclaim Valuable Distribution Square Footage"
              fill
              mode="placeholder"
              description="Warehouse Storage Square Footage Reclaimed from Battery Rooms"
              className="object-cover"
            />
          </div>
          <div className="wh-hd-text-1 lg:col-span-5 mt-12 lg:mt-0">
            <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-3 block">
              Architectural Efficiency
            </span>
            <h2 className="font-display text-3xl font-black text-zinc-900 dark:text-white sm:text-4xl uppercase mb-6 leading-tight">
              Reclaim Thousands of Square Feet of High-Bay Storage
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-6">
              Traditional battery change rooms require massive floor plates for overhead cranes, roller beds, and charging racks. By shifting to in-aisle opportunity charging, that footprint converts back into revenue-generating pallet racking.
            </p>
          </div>
        </div>

        {/* Block 2 */}
        <div className="wh-hd-block-2 lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="wh-hd-text-2 lg:col-span-5 order-2 lg:order-1 mt-12 lg:mt-0">
            <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-3 block">
              Multi-Shift Availability
            </span>
            <h2 className="font-display text-3xl font-black text-zinc-900 dark:text-white sm:text-4xl uppercase mb-6 leading-tight">
              Keep Forklifts Moving 24/7 With Zero Physical Battery Swaps
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-6">
              Lifting 2,000 lb batteries introduces severe crush and acid exposure risks. With Minit Charger, operators plug in with one hand during breaks. Batteries remain inside the vehicle for its entire service lifespan.
            </p>
          </div>
          <div className="wh-hd-img-2 lg:col-span-7 order-1 lg:order-2 relative w-full aspect-4/3 bg-zinc-200 dark:bg-zinc-800 overflow-hidden rounded-sm">
            <SmartImage
              src="/assets/homepage/Indoor material handling-01.webp"
              alt="Continuous Multi-Shift Operations"
              fill
              mode="placeholder"
              description="High-Throughput Material Handling Opportunity Fast Charging"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

