"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Check, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const rows = [
  {
    minit: "Latest silicon carbide technology",
    outdated: "15+ year old design"
  },
  {
    minit: "Dual independent 20 kW ports",
    outdated: "Master/slave: if the master fails, the others stop"
  },
  {
    minit: "Charges high-voltage EVs through J1772",
    outdated: "Not offered"
  },
  {
    minit: "Built-in cable management, no ground penetration",
    outdated: "Hard-wired cable, expensive to replace"
  },
  {
    minit: "Waterproof connection, removable cable ports, sealed cable entry",
    outdated: "Hard-wired cable raises maintenance cost"
  },
  {
    minit: "Lower purchase cost, longer time between failures, lower lifetime cost",
    outdated: "Higher cost, complex maintenance, pricey spares"
  }
];

export default function ComparisonTable() {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".comp-header", {
        scrollTrigger: { trigger: ".comp-header", start: "top 80%", toggleActions: "play none none none" },
        y: 20, autoAlpha: 0, duration: 0.8, ease: "power2.out", clearProps: "all"
      });
      
      const rows = gsap.utils.toArray('.comp-row');
      gsap.from(rows, {
        scrollTrigger: { trigger: ".comp-table", start: "top 80%", toggleActions: "play none none none" },
        y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", clearProps: "all"
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="comp-header text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-black text-zinc-900 dark:text-white uppercase mb-6 leading-tight">
            Why 10,000+ Minit Chargers Are Already Installed at Airports
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Every airport facility has to keep up. Fall behind the others and the image goes with it, because outdated technology alone can ruin the experience for people, staff, and operations.
          </p>
        </div>

        <div className="comp-table max-w-5xl mx-auto bg-white dark:bg-zinc-950 rounded border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm">
          {/* Table Header */}
          <div className="grid grid-cols-2 divide-x divide-zinc-200 dark:divide-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800">
            <div className="p-6 md:p-8 flex items-center justify-center text-center">
              <h3 className="text-xl md:text-2xl font-black text-zinc-900 dark:text-white uppercase">Minit Charger</h3>
            </div>
            <div className="p-6 md:p-8 flex items-center justify-center text-center">
              <h3 className="text-xl md:text-2xl font-black text-zinc-500 dark:text-zinc-500 uppercase">Outdated Chargers</h3>
            </div>
          </div>
          
          {/* Table Body */}
          <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {rows.map((row, idx) => (
              <div key={idx} className="comp-row grid grid-cols-2 divide-x divide-zinc-200 dark:divide-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-colors">
                <div className="p-6 flex items-start gap-4">
                  <Check className="text-green-600 dark:text-green-500 flex-shrink-0 mt-1" size={24} />
                  <p className="text-base text-zinc-900 dark:text-white font-medium">{row.minit}</p>
                </div>
                <div className="p-6 flex items-start gap-4 opacity-75">
                  <X className="text-red-500 flex-shrink-0 mt-1" size={24} />
                  <p className="text-base text-zinc-600 dark:text-zinc-400">{row.outdated}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
