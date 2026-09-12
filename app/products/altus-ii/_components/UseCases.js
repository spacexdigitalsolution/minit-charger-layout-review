"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Plane, Package, Truck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function UseCases() {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: { 
          trigger: containerRef.current, 
          start: "top 80%", toggleActions: "play none none none", once: true}
      });
      
      tl.from(".uc-header", { y: 20, autoAlpha: 0, duration: 0.6, ease: "power2.out", clearProps: "all" })
        .from(".uc-card", { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.15, ease: "power2.out", clearProps: "all" }, "-=0.3");
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="uc-header font-display text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase mb-12 text-center leading-tight">
          Primary Applications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="uc-card flex flex-col items-center text-center p-8 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <Plane className="h-12 w-12 text-green-600 mb-6" strokeWidth={1.5} />
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Airport GSE</h3>
            <p className="text-zinc-600 dark:text-zinc-400">Reliable everyday fleet charging</p>
          </div>
          <div className="uc-card flex flex-col items-center text-center p-8 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <Package className="h-12 w-12 text-green-600 mb-6" strokeWidth={1.5} />
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Material Handling</h3>
            <p className="text-zinc-600 dark:text-zinc-400">High-uptime indoor/outdoor operations</p>
          </div>
          <div className="uc-card flex flex-col items-center text-center p-8 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <Truck className="h-12 w-12 text-green-600 mb-6" strokeWidth={1.5} />
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Commercial Fleets</h3>
            <p className="text-zinc-600 dark:text-zinc-400">Flexible dual-port depot charging</p>
          </div>
        </div>
      </div>
    </section>
  );
}
