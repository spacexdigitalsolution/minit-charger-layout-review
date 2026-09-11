"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Var1FullBleed() {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%", toggleActions: "play none none none", once: true}
      });

      tl.from(".v1-element", { 
        x: -20, 
        autoAlpha: 0, 
        duration: 0.8, 
        stagger: 0.15, 
        ease: "power2.out", 
        clearProps: "all" 
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative min-h-screen w-full flex items-center overflow-hidden">
      
      {/* Variation Label */}
      <div className="absolute top-4 left-4 z-50 pointer-events-none">
        <span className="bg-white/10 text-white backdrop-blur-md px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider border border-white/20 shadow-sm">
          Variation 1
        </span>
        <p className="text-white/60 text-[10px] mt-1 ml-1 uppercase tracking-widest">Staggered fade + slide</p>
      </div>

      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="object-cover w-full h-full"
        >
          <source src="/assets/optimized-videos/ALTUS_II.mp4" type="video/mp4" />
        </video>
        {/* Dark gradient overlay left side only */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="v1-element block text-xs font-bold text-green-500 uppercase tracking-widest mb-4">
            Aviation GSE
          </span>
          <h1 className="v1-element font-display text-5xl md:text-7xl font-black tracking-tighter text-white uppercase mb-8 leading-[1.1]">
            Keep The Ramp Moving.
          </h1>
          <div className="v1-element">
            <button className="inline-flex items-center justify-center rounded border border-white px-8 py-4 text-sm font-bold text-white hover:bg-white hover:text-zinc-950 transition-colors uppercase tracking-wider backdrop-blur-sm">
              Explore Solutions
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
