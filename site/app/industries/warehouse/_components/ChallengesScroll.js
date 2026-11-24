// section: warehouse-challenges
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { warehouseChallenges } from "./warehouseData";

gsap.registerPlugin(ScrollTrigger);

export default function ChallengesScroll() {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const cards = gsap.utils.toArray(".warehouse-challenge-item");

      cards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 30,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power2.out"
        });
      });
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      data-section="warehouse-challenges"
      className="py-32 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          {/* Sticky Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 mb-16 lg:mb-0">
            <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block mb-4">
              Challenges & Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-zinc-900 dark:text-white uppercase leading-[1] mb-6">
              {warehouseChallenges.heading}
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light pr-8 leading-relaxed">
              {warehouseChallenges.intro}
            </p>
          </div>

          {/* Scrolling Right Column */}
          <div className="lg:col-span-7 border-t border-zinc-200 dark:border-zinc-800 divide-y divide-zinc-200 dark:divide-zinc-800">
            {warehouseChallenges.items.map((pt, i) => (
              <div key={i} className="warehouse-challenge-item py-12 lg:grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-2 hidden lg:block">
                  <span className="font-display font-black text-4xl text-zinc-200 dark:text-zinc-800 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="lg:col-span-10">
                  <h3 className="text-2xl font-display font-black text-zinc-900 dark:text-white uppercase leading-tight mb-4 pr-4">
                    {pt.question}
                  </h3>
                  <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                    {pt.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
