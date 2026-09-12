"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SmartImage from "../../../components/SmartImage";

gsap.registerPlugin(ScrollTrigger);

const personaContent = {
  managers: {
    id: "managers",
    label: "Facility Managers",
    headline: "Reclaim Your Floor Space",
    problem: "Traditional lead-acid charging rooms consume massive amounts of revenue-generating floor space and require strict ventilation, eye-wash stations, and dedicated maintenance personnel.",
    solution: "Eliminate the battery room entirely. Deploy compact, high-frequency fast chargers directly at the point of use or mounted on walls/columns, instantly recovering valuable square footage for inventory.",
    image: null
  },
  directors: {
    id: "directors",
    label: "Supply Chain Directors",
    headline: "Uninterrupted Throughput",
    problem: "Battery swaps mid-shift disrupt flow and reduce throughput. When equipment dies, pallets don't move, and SLAs are missed.",
    solution: "Fast opportunity charging during natural breaks keeps the fleet running 24/7. Achieve 100% equipment availability without the need for spare batteries or swap infrastructure.",
    image: null
  },
  operators: {
    id: "operators",
    label: "Equipment Operators",
    headline: "Safety & Simplicity",
    problem: "Swapping 3,000lb batteries is dangerous, time-consuming, and prone to accidents. Operators want to drive, not wrestle with cables.",
    solution: "Simply plug in during a break. No hoists, no acid spills, and no specialized training required. A highly visible UI confirms charging status immediately.",
    image: null
  }
};

export default function PersonaSplit() {
  const [activePersona, setActivePersona] = useState("managers");
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  const { contextSafe } = useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".persona-nav", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", once: true,
        },
        y: 20,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power2.out",
        clearProps: "all"
      });
      
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%", once: true,
        },
        y: 20,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power2.out",
        clearProps: "all"
      });
    });
  }, { scope: containerRef });

  const handleTabClick = contextSafe((id) => {
    if (id === activePersona) return;
    
    gsap.to(contentRef.current, {
      autoAlpha: 0,
      y: 10,
      duration: 0.2,
      onComplete: () => {
        setActivePersona(id);
        gsap.to(contentRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out"
        });
      }
    });
  });

  const activeData = personaContent[activePersona];

  return (
    <section ref={containerRef} className="py-24 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Tabs */}
        <div className="persona-nav flex flex-wrap justify-center gap-2 mb-16">
          {Object.values(personaContent).map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`px-6 py-3 text-sm font-bold uppercase tracking-wider rounded-sm transition-all duration-300 ${
                activePersona === tab.id
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950"
                  : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Content */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          <div className="lg:col-span-6">
            <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-4 block">
              Built For Your Role
            </span>
            <h2 className="font-display text-3xl font-black tracking-tighter text-zinc-900 dark:text-white sm:text-4xl uppercase mb-10 leading-tight">
              {activeData.headline}
            </h2>
            
            <div className="mb-8">
              <h3 className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-3 border-b border-zinc-200 dark:border-zinc-800 pb-2">The Challenge</h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {activeData.problem}
              </p>
            </div>

            <div>
              <h3 className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-3 border-b border-zinc-200 dark:border-zinc-800 pb-2">The Capability</h3>
              <p className="text-lg text-zinc-900 dark:text-white leading-relaxed font-medium">
                {activeData.solution}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative w-full aspect-square md:aspect-[4/3] bg-zinc-100 dark:bg-zinc-900 overflow-hidden rounded-sm">
            <SmartImage 
              key={activeData.id}
              src={activeData.image} 
              alt={activeData.label} 
              fill 
              className="object-contain object-center p-4"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
