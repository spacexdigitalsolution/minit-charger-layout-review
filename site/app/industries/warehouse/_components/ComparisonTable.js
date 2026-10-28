"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Check, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const rows = [
  {
    minit: "Eliminates dedicated battery rooms entirely; vehicles charge in aisles",
    outdated: "Consumes 2,000+ sq ft for hoists, battery wash, and storage carousels"
  },
  {
    minit: "Batteries stay permanently inside the forklift for life of equipment",
    outdated: "Dangerous physical battery swaps using hoists with acid spill risks"
  },
  {
    minit: "Dual independent 20 kW ports charging two vehicles simultaneously",
    outdated: "Single-port bulky chargers creating long queue lines during shifts"
  },
  {
    minit: "94%+ Silicon Carbide efficiency with low operating heat dissipation",
    outdated: "Legacy copper transformers that overheat and waste massive energy"
  },
  {
    minit: "Automated cloud peak shaving preventing utility demand penalty surcharges",
    outdated: "Uncoordinated plug-ins triggering costly facility demand peaks"
  },
  {
    minit: "CellTrac telemetry extends battery service life by up to 2 years",
    outdated: "Unmonitored overcharging degrading cells prematurely without warning"
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

      const compRows = gsap.utils.toArray(".comp-row-wh");
      gsap.from(compRows, {
        scrollTrigger: { trigger: ".comp-table-wh", start: "top 80%", toggleActions: "play none none none" },
        y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", clearProps: "all"
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} data-section="warehouse-comparison" className="py-24 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="comp-header mb-16 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-emerald-500 font-bold mb-3 block">
            Infrastructure Comparison
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tight mb-4">
            The Traditional Battery Room vs. Minit Charger
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 font-light text-base md:text-lg">
            See how switching to in-aisle opportunity fast charging reclaims warehouse square footage and cuts downtime.
          </p>
        </div>

        <div className="comp-table-wh overflow-hidden border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 bg-zinc-200 dark:bg-zinc-800 text-xs uppercase font-bold tracking-wider text-zinc-700 dark:text-zinc-300">
            <div className="p-4 border-b md:border-b-0 md:border-r border-zinc-300 dark:border-zinc-700 flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
              <Check className="w-4 h-4 stroke-[3]" />
              Minit Charger In-Aisle Setup
            </div>
            <div className="p-4 flex items-center gap-2 text-red-500">
              <X className="w-4 h-4 stroke-[3]" />
              Outdated Battery Swapping Room
            </div>
          </div>

          <div className="divide-y divide-zinc-200 dark:divide-zinc-800 bg-white dark:bg-zinc-950">
            {rows.map((row, idx) => (
              <div key={idx} className="comp-row-wh grid grid-cols-1 md:grid-cols-2">
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

