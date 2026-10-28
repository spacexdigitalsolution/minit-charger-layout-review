"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const points = [
  {
    challenge: "Disparate chargers scattered across campus with mismatched cords?",
    solution: "Standardize on Durus universal chargers that plug into standard 120/240V outlets, eliminating specialized proprietary charging drops."
  },
  {
    challenge: "Outdoor rain, salt air, and dust destroying consumer chargers?",
    solution: "IP66 sealed ruggedized enclosures protect internal electronics against torrential downpours, high-pressure washdowns, and grit."
  },
  {
    challenge: "Vehicles stranded far across campus with dead batteries?",
    solution: "CellTrac monitors state of charge and transmits live GPS telemetry to Cumulus Cloud, alerting staff before batteries drop below critical thresholds."
  },
  {
    challenge: "Slow overnight trickle chargers failing during peak event days?",
    solution: "Durus fast opportunity charging recovers 50% capacity during standard lunch hours, enabling double-shift vehicle utilization."
  },
  {
    challenge: "Different battery types at risk of improper charging profiles?",
    solution: "Patented charging curves adapt to flooded lead-acid, AGM, or lithium battery packs automatically, preventing boil-overs or cell degradation."
  },
  {
    challenge: "Noisy cooling fans disturbing guests at luxury resorts and hotels?",
    solution: "Durus utilizes solid-state sealed convection cooling with zero noisy fans, delivering whisper-quiet charging in guest areas."
  }
];

export default function ChallengesScroll() {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const cards = gsap.utils.toArray(".lsv-challenge-item");

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
    <section ref={containerRef} data-section="lsv-challenges" className="py-32 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          {/* Sticky Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 mb-16 lg:mb-0">
            <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block mb-4">
              Challenges & Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-zinc-900 dark:text-white uppercase leading-[1] mb-6">
              Campus Mobility Demands Bulletproof Chargers.
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light pr-8">
              Fragile consumer chargers lead to dead shuttles, uncharged security patrols, and frustrated facility teams. <strong className="text-zinc-900 dark:text-white font-bold">Minit Charger provides sealed commercial durability.</strong>
            </p>
          </div>

          {/* Scrolling Right Column */}
          <div className="lg:col-span-7 border-t border-zinc-200 dark:border-zinc-800 divide-y divide-zinc-200 dark:divide-zinc-800">
            {points.map((pt, i) => (
              <div key={i} className="lsv-challenge-item py-12 lg:grid lg:grid-cols-12 gap-8 items-start">
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

