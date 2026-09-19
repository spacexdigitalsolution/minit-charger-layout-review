"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Initial Consultation",
    description: "We ask about your fleet mix, shift patterns, and battery chemistries before we talk about chargers at all, because a forklift fleet running two shifts has nothing in common with an airport apron running mixed voltage GSE, and the wrong assumption here gets expensive later."
  },
  {
    num: "02",
    title: "Tailored Configuration",
    description: "Port count, chemistry support, voltage range, and mounting get decided together, not separately, because a charger sized for today's fleet and not tomorrow's growth is a charger you'll be replacing sooner than you planned."
  },
  {
    num: "03",
    title: "Transparent Quote",
    description: "You get a quote built from your actual fleet size, duty cycles, and site constraints, not a price list, so what you're paying for maps directly to uptime you can measure, not a package tier you had to squeeze your operation into."
  },
  {
    num: "04",
    title: "Installation and Go-Live",
    description: "Installation is scheduled around your operation, not the other way around, wall, pedestal, or fleet-bay units go live and cloud-connected with minimal disruption to whatever's already running on your floor or your ramp."
  }
];

export default function ProcessSteps() {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", toggleActions: "play none none none", once: true
        }
      });
      tl.from(".ps-header", { y: 20, autoAlpha: 0, duration: 0.6, ease: "power2.out" })
        .from(".ps-anim", { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }, "-=0.3");
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="ps-header mb-16 md:w-2/3">
          <h2 className="font-display text-4xl font-black  text-zinc-900 dark:text-white uppercase mb-6">
            From First Call to Fully Installed
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light ">
            Charging infrastructure isn't a fixed price, it's an engineering decision. We start by understanding your fleet, not by quoting a number that has nothing to do with how you operate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pt-12 border-t border-zinc-200 dark:border-zinc-800">
          {steps.map((step, idx) => (
            <div key={idx} className="ps-anim">
              <div className="font-display text-5xl font-black text-zinc-200 dark:text-zinc-800 mb-6 ">
                {step.num}
              </div>
              <h3 className="font-display text-xl font-bold uppercase  text-zinc-900 dark:text-white mb-4">
                {step.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-light text-sm ">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
