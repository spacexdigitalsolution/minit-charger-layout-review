"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Plus } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const advantages = [
  {
    title: "Silicon Carbide Power Electronics",
    description: "Our SiC-powered chargers deliver higher energy density and greater heat tolerance in a smaller footprint, so you get serious charging power without a bulky, oversized unit. Select models also offer dual-port charging, letting you power two vehicles at once."
  },
  {
    title: "Smart Diagnostics That Catch Problems Early",
    description: "On-screen diagnostics catch problems early, and simple self-service upkeep, like cleaning the filter yourself, means small issues get fixed on the spot instead of waiting on a technician to fly out."
  },
  {
    title: "Built for Every Battery You Run",
    description: "Lithium, lead-acid, and AGM batteries all charge natively, no rewiring and no forced migration, so you upgrade your fleet on your own schedule."
  },
  {
    title: "Installation That Fits Your Space",
    description: "Wall-mount, pedestal, or fleet-bay configurations, with a cable that retracts automatically after every use, handle outdoor extremes and tight indoor footprints alike, so the charger adapts to your facility instead of the other way around."
  },
  {
    title: "Power Smarter, Not Harder",
    description: "Intelligent power sharing makes the most of your existing electrical capacity, so scaling your charging infrastructure doesn't mean waiting on a costly utility upgrade first."
  }
];

export default function EngineeredAdvantages() {
  const containerRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: { 
          trigger: containerRef.current, 
          start: "top 80%", toggleActions: "play none none none", once: true}
      });
      tl.from(".ea-anim", { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-start">
          
          <div className="ea-anim mb-12 lg:mb-0 lg:sticky lg:top-32">
            <h2 className="font-display text-4xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase mb-6">
              Engineered for Technology, Performance, and Style
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light">
              As amongst the leading electric vehicle charging manufacturers, we build every charger around real efficiency gains, practical everyday problem-solving features, and aesthetical designs that go with modern infrastructure.
            </p>
          </div>
          
          <div className="border-t border-zinc-200 dark:border-zinc-800 divide-y divide-zinc-200 dark:divide-zinc-800">
            {advantages.map((adv, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="ea-anim">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between py-8 text-left focus:outline-none group"
                  >
                    <span className={`font-display text-2xl uppercase tracking-wide transition-colors pr-8 ${isOpen ? 'font-black text-green-600' : 'font-bold text-zinc-900 dark:text-white group-hover:text-zinc-500'}`}>
                      {adv.title}
                    </span>
                    <span className={`shrink-0 transition-all duration-300 ${isOpen ? "rotate-45 text-green-600" : "rotate-0 text-zinc-400 group-hover:text-zinc-500"}`}>
                      <Plus className="w-6 h-6" />
                    </span>
                  </button>
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <div className="text-zinc-600 dark:text-zinc-400 font-light text-lg pr-12">
                        {adv.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
