"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Cloud, Activity, LineChart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CloudEcosystem() {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: { 
          trigger: containerRef.current, 
          start: "top 80%", 
          toggleActions: "play none none none" 
        }
      });
      
      tl.from(".ce-header", { y: 20, autoAlpha: 0, duration: 0.6, ease: "power2.out", clearProps: "all" })
        .from(".ce-item", { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.15, ease: "power2.out", clearProps: "all" }, "-=0.3");
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="ce-header text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase mb-4">
            Total Fleet Visibility
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light">
            Manage the complete charging operation, not only the charger. Connect your Altus II to the AssetPro cloud platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="ce-item bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-8 rounded-lg flex flex-col items-center text-center">
            <Cloud className="w-12 h-12 text-green-600 mb-6" strokeWidth={1.5} />
            <h3 className="font-display font-bold text-2xl text-zinc-900 dark:text-white mb-3 uppercase tracking-tight">AssetPro Integration</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">Monitor charger status, initiate sessions remotely, and deploy OTA updates across your global footprint.</p>
          </div>
          <div className="ce-item bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-8 rounded-lg flex flex-col items-center text-center">
            <Activity className="w-12 h-12 text-green-600 mb-6" strokeWidth={1.5} />
            <h3 className="font-display font-bold text-2xl text-zinc-900 dark:text-white mb-3 uppercase tracking-tight">CellTrac Synergy</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">Pair with CellTrac battery monitors for deep insights into battery health, temperature, and equalization.</p>
          </div>
          <div className="ce-item bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-8 rounded-lg flex flex-col items-center text-center">
            <LineChart className="w-12 h-12 text-green-600 mb-6" strokeWidth={1.5} />
            <h3 className="font-display font-bold text-2xl text-zinc-900 dark:text-white mb-3 uppercase tracking-tight">Automated Reporting</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">Generate automated energy compliance reports and streamline billing with precise, certified metering data.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
