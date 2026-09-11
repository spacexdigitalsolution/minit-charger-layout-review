"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ConversionBand() {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".cb-anim", {
        scrollTrigger: { trigger: containerRef.current, start: "top 80%", toggleActions: "play none none none" },
        y: 20, scale: 0.98, autoAlpha: 0, duration: 0.8, stagger: 0.1, ease: "power2.out", clearProps: "all"
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden border-t border-zinc-800">
      
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/assets/gse/MOB_GSE_2.png')" }}
      />
      
      {/* Legibility Gradient Overlay */}
      <div className="absolute inset-0 bg-zinc-950/85 z-10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-20">
        <h2 className="cb-anim font-display text-4xl font-black tracking-tighter text-white uppercase mb-10">
          Ready to electrify the ramp?
        </h2>
        <div className="cb-anim flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/contact" className="inline-flex items-center justify-center rounded-sm bg-green-600 px-8 py-4 text-lg font-bold text-white hover:bg-green-700 transition-colors uppercase tracking-wider">
            Speak to a GSE Expert
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center px-6 py-4 text-sm font-bold text-zinc-300 hover:text-white transition-colors uppercase tracking-wider group">
            Request an Assessment <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
