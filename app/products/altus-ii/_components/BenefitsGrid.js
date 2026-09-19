"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Zap, Plug, Cable, BatteryMedium } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function BenefitsGrid() {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".bg-header", {
        scrollTrigger: { trigger: containerRef.current, start: "top 80%", toggleActions: "play none none none", once: true },
        y: 20, autoAlpha: 0, duration: 0.6, ease: "power2.out", clearProps: "all"
      });
      gsap.from(".bg-card", {
        scrollTrigger: { trigger: ".bg-header", start: "top 80%", toggleActions: "play none none none", once: true },
        y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", clearProps: "all"
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-zinc-50 dark:bg-zinc-900/50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-header text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl font-bold  text-zinc-900 dark:text-white sm:text-4xl uppercase">
            Not Like the Rest, But Beyond
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          <div className="bg-card flex flex-col group cursor-default">
            <div className="mb-6 text-zinc-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors transform group-hover:scale-110 origin-left duration-300">
              <Zap size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">Your Compact Powerhouse</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-base ">Delivers 40kW of dual-port charging without taking up extra space on your ramp.</p>
          </div>

          <div className="bg-card flex flex-col group cursor-default">
            <div className="mb-6 text-zinc-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors transform group-hover:scale-110 origin-left duration-300">
              <Plug size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">Charges Every Fleet</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-base ">Every GSE vehicle, any chemistry. Suitable for every lithium battery brand, just plug and it works, plus an optional 3rd port for passenger EVs.</p>
          </div>

          <div className="bg-card flex flex-col group cursor-default">
            <div className="mb-6 text-zinc-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors transform group-hover:scale-110 origin-left duration-300">
              <Cable size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">Power On Demand</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-base ">Automatically sequences charging across its ports, so every connected vehicle gets power when it needs it.</p>
          </div>

          <div className="bg-card flex flex-col group cursor-default">
            <div className="mb-6 text-zinc-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors transform group-hover:scale-110 origin-left duration-300">
              <BatteryMedium size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">Zero Damage Engineering</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-base ">The cable retracts automatically, never touching the ground, and detaches for easy swaps.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
