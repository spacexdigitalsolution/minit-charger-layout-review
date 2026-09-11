"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Shield, PlugZap, Wifi } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function TrustStrip() {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".trust-anim", {
        scrollTrigger: { trigger: containerRef.current, start: "top 90%", toggleActions: "play none none none" },
        y: 10, autoAlpha: 0, duration: 0.6, stagger: 0.1, ease: "power2.out"
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-12 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-zinc-200 dark:divide-zinc-800">
          
          <div className="trust-anim flex items-center gap-4 w-full md:w-1/3 pt-4 md:pt-0 justify-center md:justify-start">
            <Shield className="w-6 h-6 text-zinc-900 dark:text-white" strokeWidth={1.5} />
            <span className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-white">Industrial Expertise</span>
          </div>

          <div className="trust-anim flex items-center gap-4 w-full md:w-1/3 pt-8 md:pt-0 md:pl-8 justify-center md:justify-start">
            <PlugZap className="w-6 h-6 text-zinc-900 dark:text-white" strokeWidth={1.5} />
            <span className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-white">Universal Compatibility</span>
          </div>

          <div className="trust-anim flex items-center gap-4 w-full md:w-1/3 pt-8 md:pt-0 md:pl-8 justify-center md:justify-start">
            <Wifi className="w-6 h-6 text-zinc-900 dark:text-white" strokeWidth={1.5} />
            <span className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-white">Smart Connectivity</span>
          </div>

        </div>
      </div>
    </section>
  );
}
