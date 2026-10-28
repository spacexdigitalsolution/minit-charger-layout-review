"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const points = [
  {
    challenge: "Wasting thousands of square feet on dedicated battery change rooms?",
    solution: "Opportunity charging happens directly at workstation break zones, freeing up valuable warehouse floor space for productive racking."
  },
  {
    challenge: "Operators losing 30 to 45 minutes per shift swapping heavy batteries?",
    solution: "Fast charging keeps the battery inside the forklift permanently. Operators simply plug in with one hand during standard rest breaks."
  },
  {
    challenge: "Forklift batteries dying before the end of the second shift?",
    solution: "Maximus dual 20 kW ports deliver high-throughput top-offs that keep multi-shift fleets operating 24/7 with zero battery swaps."
  },
  {
    challenge: "Utility peak demand charges spiking your monthly electric bill?",
    solution: "Cumulus Cloud dynamically throttles power during peak tariff windows, capping aggregate facility demand automatically."
  },
  {
    challenge: "Batteries failing early due to over-temperature or lack of watering?",
    solution: "CellTrac sensors monitor real-time electrolyte temperature, water levels, and equalization cycles, alerting maintenance before damage occurs."
  },
  {
    challenge: "Mixed fleet of lead-acid and lithium forklifts needing different chargers?",
    solution: "A single Minit Charger automatically detects the connected battery chemistry and applies the optimal charging profile."
  },
  {
    challenge: "Charger hardware faults taking days to diagnose and repair?",
    solution: "On-screen diagnostics show the exact error code, and power modules slide out like drawers for 10-minute field replacements."
  }
];

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
    <section ref={containerRef} data-section="warehouse-challenges" className="py-32 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          {/* Sticky Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 mb-16 lg:mb-0">
            <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block mb-4">
              Challenges & Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-zinc-900 dark:text-white uppercase leading-[1] mb-6">
              Modern Logistics Demands Zero Charging Downtime.
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light pr-8">
              Legacy battery swapping rooms create unnecessary bottlenecks, safety hazards, and lost pick time. <strong className="text-zinc-900 dark:text-white font-bold">Minit Charger replaces them with clean opportunity power.</strong>
            </p>
          </div>

          {/* Scrolling Right Column */}
          <div className="lg:col-span-7 border-t border-zinc-200 dark:border-zinc-800 divide-y divide-zinc-200 dark:divide-zinc-800">
            {points.map((pt, i) => (
              <div key={i} className="warehouse-challenge-item py-12 lg:grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-2 hidden lg:block">
                  <span className="font-display font-black text-4xl text-zinc-200 dark:text-zinc-800 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="lg:col-span-10">
                  <h3 className="text-2xl font-display font-black text-zinc-900 dark:text-white uppercase leading-tight mb-4 pr-4">
                    {pt.challenge}
                  </h3>
                  <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                    {pt.solution}
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

