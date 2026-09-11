"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SmartImage from "../components/SmartImage";

gsap.registerPlugin(ScrollTrigger);

export default function ComparisonSplit() {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const st = { trigger: containerRef.current, start: "top 80%", toggleActions: "play none none none", once: true};
      
      gsap.from(".cs-title", { scrollTrigger: st, y: 20, autoAlpha: 0, duration: 0.6, ease: "power2.out" });
      gsap.from(".cs-left", { scrollTrigger: st, x: -30, autoAlpha: 0, duration: 0.6, ease: "power2.out", delay: 0.1 });
      gsap.from(".cs-right", { scrollTrigger: st, x: 30, autoAlpha: 0, duration: 0.6, ease: "power2.out", delay: 0.2 });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="cs-title text-center mb-16">
          <h2 className="font-display text-4xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase">
            One Architecture. Any Environment.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          <div className="cs-left flex flex-col">
            <div className="relative w-full aspect-[4/3] bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-6 flex items-center justify-center overflow-hidden">
              <SmartImage 
                src="/assets/homepage/Indoor material handling-01.webp" 
                alt="Indoor Warehouse Environment" 
                fill 
                className="object-cover"
              />
            </div>
            <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-zinc-900 dark:text-white mb-2">
              Indoor / Warehouse
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              Compact footprint, silent operation, and zero emissions. Minit Charger integrates seamlessly into high-traffic distribution centers without demanding massive utility upgrades or eating up valuable pallet space.
            </p>
          </div>

          <div className="cs-right flex flex-col">
            <div className="relative w-full aspect-[4/3] bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-6 flex items-center justify-center overflow-hidden">
              <SmartImage 
                src="/assets/homepage/Outdoor eGSE & yards-01.webp" 
                alt="Outdoor Ramp Environment" 
                fill 
                className="object-cover"
              />
            </div>
            <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-zinc-900 dark:text-white mb-2">
              Outdoor / Ramp
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              IP54-rated enclosures built to survive extreme temperatures, blowing rain, and jet blast. Deliver reliable high-power charging to GSE and heavy transport vehicles no matter the weather.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
