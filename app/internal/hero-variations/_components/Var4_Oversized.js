"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SmartImage from "../../../components/SmartImage";

gsap.registerPlugin(ScrollTrigger);

export default function Var4Oversized() {
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

      // Split the words conceptually in the DOM, animate them in stagger
      tl.from(".v4-word", { 
        y: 40, 
        autoAlpha: 0, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: "power3.out", 
        clearProps: "all" 
      })
      .from(".v4-cta", { 
        y: 20, 
        autoAlpha: 0, 
        duration: 0.8, 
        ease: "power2.out", 
        clearProps: "all" 
      }, "-=0.4");
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative min-h-screen w-full bg-zinc-950 flex flex-col items-center justify-center overflow-hidden py-24">
      
      {/* Variation Label */}
      <div className="absolute top-4 left-4 z-50 pointer-events-none">
        <span className="bg-white/10 text-white backdrop-blur-md px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider border border-white/20 shadow-sm">
          Variation 4
        </span>
        <p className="text-white/60 text-[10px] mt-1 ml-1 uppercase tracking-widest">Word-by-word reveal</p>
      </div>

      {/* Subtle Background Texture */}
      <div className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
        <SmartImage 
          src="/assets/gse/MGNS_GSE_1.png" 
          alt="Background Texture"
          fill
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-zinc-950/80"></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        <span className="v4-word inline-block text-xs md:text-sm font-bold text-green-500 uppercase tracking-[0.3em] mb-8">
          Aviation GSE
        </span>
        
        <h1 className="font-display font-black tracking-tighter text-white uppercase leading-[0.85] flex flex-col items-center">
          <div className="overflow-hidden pb-2"><span className="v4-word inline-block text-[15vw] md:text-[12vw]">KEEP</span></div>
          <div className="overflow-hidden pb-2"><span className="v4-word inline-block text-[15vw] md:text-[12vw]">THE</span></div>
          <div className="overflow-hidden pb-2 text-green-500"><span className="v4-word inline-block text-[15vw] md:text-[12vw]">RAMP</span></div>
          <div className="overflow-hidden pb-2"><span className="v4-word inline-block text-[15vw] md:text-[12vw]">MOVING.</span></div>
        </h1>

        <div className="v4-cta mt-16">
          <button className="inline-flex items-center justify-center rounded border border-white px-10 py-5 text-sm font-bold text-white hover:bg-white hover:text-zinc-950 transition-colors uppercase tracking-widest backdrop-blur-sm">
            Explore Solutions
          </button>
        </div>

      </div>

    </div>
  );
}
