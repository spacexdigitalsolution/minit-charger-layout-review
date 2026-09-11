"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SmartImage from "../components/SmartImage";

gsap.registerPlugin(ScrollTrigger);

const scenes = {
  warehouse: {
    id: "warehouse",
    label: "Warehouse & Logistics",
    headline: "Unify Your Material Handling",
    problem: "Forklifts, reach trucks, and pallet jacks running on different chemistries require disparate charging stations, eating up valuable floor space.",
    solution: "A single, multi-port station capable of charging lead-acid and lithium-ion assets simultaneously, freeing up square footage and simplifying operations.",
    image: "/assets/homepage/Interactive Charging Scenes- warehouse-01.webp"
  },
  airport: {
    id: "airport",
    label: "Airport & GSE",
    headline: "Keep the Ramp Moving",
    problem: "Strict SLA windows and constrained electrical capacity make electrifying ground support equipment incredibly challenging.",
    solution: "Weather-resistant, high-throughput charging with dynamic power sharing that charges your GSE faster without blowing past peak demand limits.",
    image: "/assets/homepage/Interactive Charging Scenes- Airport-02.webp"
  }
};

export default function InteractiveScenes() {
  const [activeScene, setActiveScene] = useState("warehouse");
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  const { contextSafe } = useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".scene-nav", {
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
    if (id === activeScene) return;
    setActiveScene(id);
  });

  return (
    <section ref={containerRef} className="py-24 bg-zinc-50 dark:bg-black border-b border-zinc-200 dark:border-zinc-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navigation Tabs */}
        <div className="scene-nav flex flex-wrap justify-center gap-2 mb-16">
          {Object.values(scenes).map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`px-6 py-3 text-sm font-bold uppercase tracking-wider rounded-none border transition-all duration-300 ${activeScene === tab.id
                  ? "bg-zinc-900 border-zinc-900 text-white dark:bg-white dark:border-white dark:text-zinc-950"
                  : "bg-transparent border-zinc-200 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Content (True Crossfade) */}
        <div ref={contentRef} className="relative w-full max-w-6xl mx-auto min-h-[750px] lg:min-h-[450px]">
          {Object.values(scenes).map((data) => {
            const isActive = data.id === activeScene;
            return (
              <div
                key={data.id}
                className={`absolute inset-0 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center transition-all duration-700 ease-in-out ${isActive ? 'opacity-100 z-10 translate-y-0 pointer-events-auto' : 'opacity-0 z-0 translate-y-4 pointer-events-none'}`}
              >

                <div className="lg:col-span-6">
                  <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-4 block">
                    Application Profile
                  </span>
                  <h2 className="font-display text-3xl font-black tracking-tighter text-zinc-900 dark:text-white sm:text-4xl uppercase mb-10 leading-tight">
                    {data.headline}
                  </h2>

                  <div className="mb-8">
                    <h3 className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-3 border-b border-zinc-200 dark:border-zinc-800 pb-2">The Challenge</h3>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                      {data.problem}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-3 border-b border-zinc-200 dark:border-zinc-800 pb-2">The Capability</h3>
                    <p className="text-lg text-zinc-900 dark:text-white leading-relaxed font-medium">
                      {data.solution}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-6 relative w-full aspect-square md:aspect-[4/3] bg-zinc-200 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden flex items-center justify-center">
                  {data.image ? (
                    <SmartImage
                      src={data.image}
                      alt={data.label}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    // TODO: Missing Asset - {data.label} Scene
                    <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-900"></div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
