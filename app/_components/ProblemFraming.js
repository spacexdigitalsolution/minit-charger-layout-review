"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ProblemFraming() {
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
      tl.from(".pf-anim", { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="pf-anim mb-16 md:w-2/3">
          <h2 className="font-display text-4xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase mb-6">
            Why Industrial Fleets Are Switching to Smarter Charging
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
            Industrial battery chargers only pay off when they cut downtime, manage and protect every battery chemistry, and run on an intelligent cloud platform that helps you scale while easing the strain on your grid.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pt-12 border-t border-zinc-200 dark:border-zinc-800">
          
          <div className="pf-anim">
            <h3 className="font-display text-xl font-bold uppercase tracking-wide text-zinc-900 dark:text-white mb-4">
              One Fleet, Multiple Voltage Requirements
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 font-light text-sm leading-relaxed">
              Low-voltage GSE and high-voltage EVs don't have to run on separate systems, one charger now handles both, so your infrastructure grows with your fleet instead of holding it back.
            </p>
          </div>

          <div className="pf-anim">
            <h3 className="font-display text-xl font-bold uppercase tracking-wide text-zinc-900 dark:text-white mb-4">
              Outdoor GSE, Harsh Conditions
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 font-light text-sm leading-relaxed">
              Apron conditions don't forgive equipment that wasn't built for them. Outdoor-rated, dual-port charging with remote diagnostics keeps ground support fleets moving regardless.
            </p>
          </div>

          <div className="pf-anim">
            <h3 className="font-display text-xl font-bold uppercase tracking-wide text-zinc-900 dark:text-white mb-4">
              Charger-Related Downtime
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 font-light text-sm leading-relaxed">
              Slow or failed charges stall shift plans, and it's rarely clear if the charger or the battery is to blame. Real-time diagnostics pinpoint the cause instantly.
            </p>
          </div>

          <div className="pf-anim">
            <h3 className="font-display text-xl font-bold uppercase tracking-wide text-zinc-900 dark:text-white mb-4">
              Mixed Battery Chemistries
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 font-light text-sm leading-relaxed">
              Migrating from lead-acid to lithium usually means running both for a while. Minit Charger supports lithium, lead-acid, and AGM equally, protecting your existing hardware investment.
            </p>
          </div>

          <div className="pf-anim">
            <h3 className="font-display text-xl font-bold uppercase tracking-wide text-zinc-900 dark:text-white mb-4">
              Different Sites, Different Charging Systems
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 font-light text-sm leading-relaxed">
              3PL and distribution networks often run different fleet charging solutions at every location. You'll need one industrial charging stack, configured once, to bring the same standard to every site.
            </p>
          </div>

          <div className="pf-anim">
            <h3 className="font-display text-xl font-bold uppercase tracking-wide text-zinc-900 dark:text-white mb-4">
              CapEx Without Clear ROI
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 font-light text-sm leading-relaxed">
              Procurement teams get pricing pages, not real answers. You'll need a quote scoped to fleet size, duty cycles, and install constraints, so every dollar maps to uptime.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
