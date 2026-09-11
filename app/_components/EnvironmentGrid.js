"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SmartImage from "../components/SmartImage";

gsap.registerPlugin(ScrollTrigger);

const environments = [
  { name: "Warehouse & Logistics", image: "/assets/homepage/Engineered for Warehouses.webp" },
  { name: "Airport & GSE", image: "/assets/homepage/Engineered for Airports.webp" },
  { name: "Industrial & Manufacturing", image: "/assets/homepage/Engineered for Industrial & Commercial.webp" },
  { name: "Commercial Fleets", image: "/assets/homepage/Engineered for LSEVs.webp" }
];

export default function EnvironmentGrid() {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", toggleActions: "play none none none", once: true}
      });
      tl.from(".eg-anim", { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-zinc-50 dark:bg-black border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="eg-anim text-center mb-16">
          <h2 className="font-display text-4xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase">
            Engineered for Every Environment
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {environments.map((env, idx) => (
            <div key={idx} className="eg-anim group">
              <div className="relative aspect-square w-full bg-zinc-200 dark:bg-zinc-900 overflow-hidden mb-4 border border-zinc-200 dark:border-zinc-800">
                {env.image ? (
                  <SmartImage 
                    src={env.image} 
                    alt={env.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  // TODO: Missing Asset - {env.name}
                  <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-900"></div>
                )}
              </div>
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-white text-center">
                {env.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
