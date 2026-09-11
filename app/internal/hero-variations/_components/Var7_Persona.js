"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SmartImage from "../../../components/SmartImage";

gsap.registerPlugin(ScrollTrigger);

const personaData = {
  handlers: {
    id: "handlers",
    label: "Ground Handlers",
    headline: "Maximize Uptime on the Ramp",
    image: "/assets/gse/MGNS_GSE_2.png"
  },
  authorities: {
    id: "authorities",
    label: "Airport Authorities",
    headline: "Electrify Without Grid Constraints",
    image: "/assets/gse/ALTUS_II_GSE_BACKGROUND.png"
  },
  airlines: {
    id: "airlines",
    label: "Airlines",
    headline: "Protect Turnarounds & TCO",
    image: "/assets/gse/MOB_GSE_1.jpg"
  }
};

export default function Var7Persona() {
  const [activePersona, setActivePersona] = useState("handlers");
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const bgRef = useRef(null);

  const { contextSafe } = useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%", toggleActions: "play none none none", once: true}
      });

      tl.from(".v7-element", { 
        y: 20, 
        autoAlpha: 0, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: "power2.out", 
        clearProps: "all" 
      });
    });
  }, { scope: containerRef });

  const handleTabClick = contextSafe((id) => {
    if (id === activePersona) return;
    
    // Crossfade background and text
    gsap.to([contentRef.current, bgRef.current], {
      autoAlpha: 0,
      duration: 0.15,
      onComplete: () => {
        setActivePersona(id);
        gsap.to([contentRef.current, bgRef.current], {
          autoAlpha: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });
  });

  const activeData = personaData[activePersona];

  return (
    <div ref={containerRef} className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      
      {/* Variation Label */}
      <div className="absolute top-4 left-4 z-50 pointer-events-none">
        <span className="bg-white/10 text-white backdrop-blur-md px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider border border-white/20 shadow-sm">
          Variation 7
        </span>
        <p className="text-white/60 text-[10px] mt-1 ml-1 uppercase tracking-widest">Interactive crossfade hero</p>
      </div>

      {/* Dynamic Background */}
      <div ref={bgRef} className="absolute inset-0 w-full h-full">
        <SmartImage 
          src={activeData.image} 
          alt={activeData.label}
          fill
          className="object-cover opacity-60 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pt-24 pb-12">
        
        {/* Interactive Tabs within Hero */}
        <div className="v7-element flex flex-wrap justify-center gap-2 mb-16 bg-white/5 p-2 rounded-full backdrop-blur-md border border-white/10">
          {Object.values(personaData).map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 ${
                activePersona === tab.id
                  ? "bg-white text-zinc-950"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        <div ref={contentRef} className="max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-xs font-bold text-green-500 uppercase tracking-widest mb-6">
            Aviation GSE Solutions
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase mb-8 leading-[1.05]">
            {activeData.headline}.
          </h1>
          <p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed mb-12">
            Intelligent fast-charging infrastructure built for ultimate reliability.
          </p>
          
          <button className="inline-flex items-center justify-center rounded bg-green-600 px-10 py-5 text-sm font-bold text-white hover:bg-green-700 transition-colors uppercase tracking-widest">
            Speak to an Expert
          </button>
        </div>

      </div>

    </div>
  );
}
