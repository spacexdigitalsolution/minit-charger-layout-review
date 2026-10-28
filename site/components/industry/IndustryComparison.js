"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Check, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function IndustryComparison({ industry }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".comp-header", {
        scrollTrigger: { trigger: containerRef.current, start: "top 80%", toggleActions: "play none none none" },
        y: 20, autoAlpha: 0, duration: 0.8, ease: "power2.out", clearProps: "all"
      });
      gsap.from(".comp-row", {
        scrollTrigger: { trigger: ".comp-table", start: "top 80%", toggleActions: "play none none none" },
        y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.08, ease: "power2.out", clearProps: "all"
      });
    });
  }, { scope: containerRef });

  const rows = [
    {
      minit: "Modern silicon carbide (SiC) electronics with 94%+ electrical efficiency",
      outdated: "15+ year old legacy transformer topologies with massive heat dissipation"
    },
    {
      minit: "Multi-chemistry adaptive curves: lithium-ion, AGM, and lead-acid supported natively",
      outdated: "Rigid single-chemistry hardware requiring costly re-racking or replacement"
    },
    {
      minit: "Independent dual-port charging: one port fault never disrupts the adjacent vehicle",
      outdated: "Master/slave setups where a single port issue disables the entire drop"
    },
    {
      minit: "Integrated CellTrac telemetry and cloud-managed peak load balancing",
      outdated: "Blind power draw with severe utility peak demand penalties"
    },
    {
      minit: "Overhead spring-assisted cable management preventing floor drive-over damage",
      outdated: "Trailing ground cables resulting in frequent cord cuts and downtime"
    }
  ];

  return (
    <section ref={containerRef} data-section="industry-comparison" className="py-24 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="comp-header mb-16 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-emerald-500 font-bold mb-3 block">
            Architectural Comparison
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tight mb-4">
            The Traditional Bottleneck vs. Minit Charger
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 font-light text-base md:text-lg">
            See how upgrading to Minit Charger infrastructure transforms {industry.label} operations from day one.
          </p>
        </div>

        <div className="comp-table overflow-hidden border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 bg-zinc-200 dark:bg-zinc-800 text-xs uppercase font-bold tracking-wider text-zinc-700 dark:text-zinc-300">
            <div className="p-4 border-b md:border-b-0 md:border-r border-zinc-300 dark:border-zinc-700 flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
              <Check className="w-4 h-4 stroke-[3]" />
              Minit Charger Modern Architecture
            </div>
            <div className="p-4 flex items-center gap-2 text-red-500">
              <X className="w-4 h-4 stroke-[3]" />
              Outdated Legacy Hardware
            </div>
          </div>

          <div className="divide-y divide-zinc-200 dark:divide-zinc-800 bg-white dark:bg-zinc-950">
            {rows.map((row, idx) => (
              <div key={idx} className="comp-row grid grid-cols-1 md:grid-cols-2">
                <div className="p-5 border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-800 flex items-start gap-3">
                  <div className="mt-1 shrink-0 text-emerald-500">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {row.minit}
                  </span>
                </div>
                <div className="p-5 flex items-start gap-3 bg-zinc-50/50 dark:bg-zinc-900/30">
                  <div className="mt-1 shrink-0 text-red-400">
                    <X className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    {row.outdated}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

