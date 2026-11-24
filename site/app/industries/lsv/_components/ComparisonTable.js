// section: lsv-comparison
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Check, X } from "lucide-react";
import { lsvComparison } from "./lsvData";

gsap.registerPlugin(ScrollTrigger);

export default function ComparisonTable() {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".comp-header", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        y: 20,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "all"
      });

      const compRows = gsap.utils.toArray(".comp-row-lsv");
      gsap.from(compRows, {
        scrollTrigger: {
          trigger: ".comp-table-lsv",
          start: "top 80%",
          toggleActions: "play none none none"
        },
        y: 20,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "all"
      });
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      data-section="lsv-comparison"
      className="py-24 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="comp-header mb-16 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-emerald-500 font-bold mb-3 block">
            Infrastructure Comparison
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tight mb-4">
            {lsvComparison.heading}
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 font-light text-base md:text-lg leading-relaxed">
            {lsvComparison.intro}
          </p>
        </div>

        <div className="comp-table-lsv overflow-hidden border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm">
          {/* Table Header */}
          <div className="hidden lg:grid lg:grid-cols-12 bg-zinc-200 dark:bg-zinc-800 text-xs uppercase font-bold tracking-wider text-zinc-700 dark:text-zinc-300">
            <div className="lg:col-span-4 p-4 border-r border-zinc-300 dark:border-zinc-700">
              Factor
            </div>
            <div className="lg:col-span-4 p-4 border-r border-zinc-300 dark:border-zinc-700 flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
              <Check className="w-4 h-4 stroke-[3]" />
              Minit Durus
            </div>
            <div className="lg:col-span-4 p-4 flex items-center gap-2 text-red-500">
              <X className="w-4 h-4 stroke-[3]" />
              Basic Onboard Charger
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-zinc-200 dark:divide-zinc-800 bg-white dark:bg-zinc-950">
            {lsvComparison.rows.map((row, idx) => (
              <div
                key={idx}
                className="comp-row-lsv grid grid-cols-1 lg:grid-cols-12 items-center"
              >
                {/* Factor */}
                <div className="p-4 lg:p-5 lg:col-span-4 border-b lg:border-b-0 lg:border-r border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block lg:hidden mb-1">
                    Factor
                  </span>
                  <span className="text-sm font-semibold text-zinc-900 dark:text-white">
                    {row.factor}
                  </span>
                </div>

                {/* Minit Durus */}
                <div className="p-4 lg:p-5 lg:col-span-4 border-b lg:border-b-0 lg:border-r border-zinc-200 dark:border-zinc-800 flex items-start gap-3">
                  <div className="mt-1 shrink-0 text-emerald-500">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block lg:hidden mb-1">
                      Minit Durus
                    </span>
                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {row.minit}
                    </span>
                  </div>
                </div>

                {/* Basic Onboard Charger */}
                <div className="p-4 lg:p-5 lg:col-span-4 flex items-start gap-3 bg-zinc-50/30 dark:bg-zinc-900/20">
                  <div className="mt-1 shrink-0 text-red-400">
                    <X className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-500 block lg:hidden mb-1">
                      Basic Onboard Charger
                    </span>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400 font-light">
                      {row.traditional}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
