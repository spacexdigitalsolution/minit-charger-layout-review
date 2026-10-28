"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { AlertTriangle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function IndustryChallenges({ industry }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".chal-header", {
        scrollTrigger: { trigger: containerRef.current, start: "top 80%", toggleActions: "play none none none" },
        y: 30, autoAlpha: 0, duration: 0.8, ease: "power2.out", clearProps: "all"
      });
      gsap.from(".chal-card", {
        scrollTrigger: { trigger: ".chal-grid", start: "top 80%", toggleActions: "play none none none" },
        y: 40, autoAlpha: 0, duration: 0.8, stagger: 0.15, ease: "power2.out", clearProps: "all"
      });
    });
  }, { scope: containerRef });

  const challenges = industry.challenges || [
    {
      title: "Costly Battery Change Rooms",
      description: "Dedicated battery extraction areas waste square footage, demand hazardous chemical handling, and stall productive workflows."
    },
    {
      title: "Utility Peak Demand Surges",
      description: "Simultaneous multi-vehicle charging triggers expensive utility penalty charges, severely eroding fleet electrification ROI."
    },
    {
      title: "Unmonitored Battery Health",
      description: "Without cell-level diagnostics, undetected overheating and uneven cell degradation cause early battery retirement."
    }
  ];

  return (
    <section ref={containerRef} data-section="industry-challenges" className="py-28 bg-zinc-950 border-b-2 border-white/10 overflow-hidden relative">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="chal-header max-w-4xl mb-20">
          <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-4 block flex items-center gap-2">
            <AlertTriangle className="w-3.5 h-3.5" />
            Operational Bottlenecks
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-[0.9] tracking-tighter mb-6">
            The Reality On The Floor
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl">
            Why off-the-shelf commercial chargers break down under continuous industrial run-cycles.
          </p>
        </div>

        <div className="chal-grid grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {challenges.map((c, i) => (
            <div
              key={i}
              className="chal-card flex flex-col border-t-2 border-red-500/40 bg-zinc-900/40 p-8 rounded-b-lg border-b border-x border-zinc-800/80 group hover:border-red-500 transition-colors duration-500"
            >
              <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider mb-4">
                Constraint 0{i + 1}
              </span>
              <h3 className="font-display text-2xl font-bold text-white uppercase tracking-tight mb-4">
                {c.title}
              </h3>
              <p className="text-base text-zinc-400 font-light leading-relaxed">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

