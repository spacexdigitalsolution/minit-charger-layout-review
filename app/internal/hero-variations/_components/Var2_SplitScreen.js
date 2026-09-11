"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SmartImage from "../../../components/SmartImage";

gsap.registerPlugin(ScrollTrigger);

export default function Var2SplitScreen() {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none none"
        }
      });

      tl.from(".v2-image", { 
        x: "-10%", 
        autoAlpha: 0, 
        duration: 0.8, 
        ease: "power2.out", 
        clearProps: "all" 
      })
      .from(".v2-element", { 
        x: 20, 
        autoAlpha: 0, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: "power2.out", 
        clearProps: "all" 
      }, "-=0.6");
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative min-h-screen w-full flex flex-col md:flex-row bg-white overflow-hidden">
      
      {/* Variation Label */}
      <div className="absolute top-4 left-4 z-50 pointer-events-none">
        <span className="bg-zinc-900/10 text-zinc-900 backdrop-blur-md px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider border border-zinc-900/20 shadow-sm">
          Variation 2
        </span>
        <p className="text-zinc-600 text-[10px] mt-1 ml-1 uppercase tracking-widest">Simultaneous slide from edges</p>
      </div>

      {/* Image Left */}
      <div className="v2-image w-full md:w-1/2 min-h-[50vh] md:min-h-screen relative bg-zinc-100 flex items-center justify-center p-12">
        <SmartImage 
          src="/assets/Products/altus-ii/context/altus_specs_render.png" 
          alt="Altus II Charging Station"
          fill
          className="object-contain p-12 md:p-24"
        />
      </div>

      {/* Content Right */}
      <div className="w-full md:w-1/2 flex items-center p-8 md:p-16 lg:p-24 bg-white">
        <div className="max-w-xl">
          <span className="v2-element block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6">
            Aviation GSE
          </span>
          <h1 className="v2-element font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-zinc-900 uppercase mb-6 leading-[1.1]">
            Keep The Ramp Moving.
          </h1>
          <p className="v2-element text-lg md:text-xl text-zinc-600 mb-10 font-light leading-relaxed">
            Intelligent fast-charging infrastructure built to consolidate a broad range of applications into fewer, more compact platforms.
          </p>
          <div className="v2-element">
            <button className="inline-flex items-center justify-center rounded border border-zinc-900 px-8 py-4 text-sm font-bold text-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors uppercase tracking-wider">
              Explore Solutions
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
