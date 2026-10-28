"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SmartImage from "@/components/SmartImage";
import { lsvPersonas } from "./lsvData";

gsap.registerPlugin(ScrollTrigger);

export default function PersonaSplit() {
  const [activePersona, setActivePersona] = useState("campus");
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".lsv-persona-nav", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
        y: 20,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power2.out",
        clearProps: "all"
      });
    });
  }, { scope: containerRef });

  const activeData = lsvPersonas[activePersona];

  return (
    <section ref={containerRef} data-section="lsv-persona-split" className="py-24 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Tabs */}
        <div className="lsv-persona-nav flex flex-wrap gap-4 mb-16 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          {Object.values(lsvPersonas).map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePersona(p.id)}
              className={`text-sm md:text-base font-display font-bold uppercase tracking-wider px-6 py-3 rounded transition-all duration-300 ${
                activePersona === p.id
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 shadow-md"
                  : "bg-zinc-100 text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400 hover:text-white"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Persona Content Split */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 mb-12 lg:mb-0">
            <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-3 block">
              Perspective: {activeData.label}
            </span>
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 dark:text-white uppercase leading-[1.05] mb-8">
              {activeData.headline}
            </h3>

            <div className="space-y-6">
              <div className="border-l-2 border-red-500 pl-4 py-1">
                <span className="text-xs uppercase font-bold text-red-500 tracking-wider block mb-1">
                  The Friction
                </span>
                <p className="text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  {activeData.problem}
                </p>
              </div>

              <div className="border-l-2 border-emerald-500 pl-4 py-1">
                <span className="text-xs uppercase font-bold text-emerald-500 tracking-wider block mb-1">
                  The Minit Charger Solution
                </span>
                <p className="text-base text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
                  {activeData.solution}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative w-full aspect-4/3 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl bg-zinc-900">
            <SmartImage
              src={activeData.image}
              alt={activeData.headline}
              fill
              mode="placeholder"
              description={`Low Speed Vehicle Persona: ${activeData.label}`}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

