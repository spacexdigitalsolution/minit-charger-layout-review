// section: aviation-challenges
"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { categories } from "./challengesData";

gsap.registerPlugin(ScrollTrigger);

export default function ChallengesScroll() {
  const [activeTab, setActiveTab] = useState("durability");
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".cs-header-anim", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
        y: 25,
        autoAlpha: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "all"
      });

      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
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

  const handleTabClick = (id) => {
    if (id === activeTab) return;

    if (!contentRef.current) {
      setActiveTab(id);
      return;
    }

    gsap.to(contentRef.current, {
      autoAlpha: 0,
      y: 8,
      duration: 0.15,
      ease: "power2.in",
      onComplete: () => {
        setActiveTab(id);
        if (contentRef.current) {
          gsap.to(contentRef.current, {
            autoAlpha: 1,
            y: 0,
            duration: 0.35,
            ease: "power2.out"
          });
        }
      }
    });
  };

  const activeCategory = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section
      ref={containerRef}
      data-section="aviation-challenges"
      className="py-16 md:py-20 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="cs-header-anim text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase block mb-3 tracking-widest">
            Challenges & Capabilities
          </span>
          <h2 className="cs-header-anim text-3xl sm:text-4xl md:text-5xl font-display font-black text-zinc-900 dark:text-white uppercase leading-[1.08] mb-4">
            Electrifying the Airports Is the New Norm.
          </h2>
          <p className="cs-header-anim text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
            Incapable chargers have made horrifying experiences on the ramp yet, so staff fear chargers.{" "}
            <strong className="text-zinc-900 dark:text-white font-bold">But not anymore.</strong>
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-zinc-200 dark:border-zinc-800 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleTabClick(cat.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs font-bold uppercase transition-all duration-200 ${
                  isActive
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 shadow-sm"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                    isActive
                      ? "bg-white/20 text-white dark:bg-zinc-950/20 dark:text-zinc-950"
                      : "bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  }`}
                >
                  {cat.items.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Matrix */}
        <div ref={contentRef} className="min-h-[320px]">
          <div
            className={`grid gap-4 lg:gap-6 ${
              activeCategory.items.length === 1
                ? "grid-cols-1 max-w-3xl"
                : "grid-cols-1 md:grid-cols-2"
            }`}
          >
            {activeCategory.items.map((item) => (
              <div
                key={item.num}
                className="p-6 md:p-8 rounded-sm bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display font-black text-2xl md:text-3xl text-zinc-300 dark:text-zinc-700 leading-none">
                      {item.num}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-green-600 dark:text-green-500 font-bold bg-green-500/10 px-2 py-0.5 rounded">
                      Ramp Ready
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-black text-zinc-900 dark:text-white uppercase leading-snug mb-3">
                    {item.challenge}
                  </h3>
                </div>
                <p className="text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mt-2 border-t border-zinc-200/60 dark:border-zinc-800/60 pt-3">
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
