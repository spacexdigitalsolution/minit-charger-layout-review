"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Check, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const rows = [
  {
    minit: "IP66 sealed cast aluminum enclosure built for outdoor weather and washdowns",
    outdated: "Plastic consumer chargers with open cooling vents that ingest water and dust"
  },
  {
    minit: "Dual-mount flexibility: install directly onboard or use as a standalone station",
    outdated: "Bulky standalone bench chargers that cannot be transported with the vehicle"
  },
  {
    minit: "Universal multi-chemistry adaptive curves for lead-acid, AGM, and lithium packs",
    outdated: "Inflexible charging algorithms that damage batteries if chemistry changes"
  },
  {
    minit: "Integrated CellTrac GPS tracking preventing stranded carts across large campuses",
    outdated: "Zero remote visibility; supervisors discover dead batteries after vehicles stall"
  },
  {
    minit: "Solid-state convection cooling with 100% silent operation in guest areas",
    outdated: "Whining cooling fans that create annoying background noise at luxury properties"
  }
];

export default function ComparisonTable() {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".comp-header", {
        scrollTrigger: { trigger: containerRef.current, start: "top 80%", toggleActions: "play none none none" },
        y: 20, autoAlpha: 0, duration: 0.8, ease: "power2.out", clearProps: "all"
      });

      const compRows = gsap.utils.toArray(".comp-row-lsv");
      gsap.from(compRows, {
        scrollTrigger: { trigger: ".comp-table-lsv", start: "top 80%", toggleActions: "play none none none" },
        y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", clearProps: "all"
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} data-section="lsv-comparison" className="py-24 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="comp-header mb-16 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-emerald-500 font-bold mb-3 block">
            Infrastructure Comparison
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tight mb-4">
            Consumer Chargers vs. Minit Charger Durus
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 font-light text-base md:text-lg">
            Why commercial campus and resort fleets transition away from fragile consumer chargers.
          </p>
        </div>

        <div className="comp-table-lsv overflow-hidden border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 bg-zinc-200 dark:bg-zinc-800 text-xs uppercase font-bold tracking-wider text-zinc-700 dark:text-zinc-300">
            <div className="p-4 border-b md:border-b-0 md:border-r border-zinc-300 dark:border-zinc-700 flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
              <Check className="w-4 h-4 stroke-[3]" />
              Minit Charger Durus Commercial Standard
            </div>
            <div className="p-4 flex items-center gap-2 text-red-500">
              <X className="w-4 h-4 stroke-[3]" />
              Standard OEM Consumer Chargers
            </div>
          </div>

          <div className="divide-y divide-zinc-200 dark:divide-zinc-800 bg-white dark:bg-zinc-950">
            {rows.map((row, idx) => (
              <div key={idx} className="comp-row-lsv grid grid-cols-1 md:grid-cols-2">
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

