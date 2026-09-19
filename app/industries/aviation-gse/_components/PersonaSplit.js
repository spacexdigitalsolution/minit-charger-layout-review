"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SmartImage from "../../../components/SmartImage";

gsap.registerPlugin(ScrollTrigger);

const personaContent = {
  handlers: {
    id: "handlers",
    label: "Ground Handlers",
    headline: "Maximize Uptime on the Ramp",
    problem: "Ground support teams face strict turnaround windows and mixed fleets of varying ages, chemistries, and voltages. Charger downtime or incompatibility immediately impacts SLAs.",
    solution: "A single, multi-voltage platform capable of charging everything from legacy lead-acid baggage tractors to new lithium loaders. Minimize footprint, simplify crew training, and eliminate charger sprawl.",
    // AI-generated placeholder — replace with real photography, approved 2026-09-12
    image: "/assets/ai_placeholders/gse_ground_handlers_1789225264394.jpg"
  },
  authorities: {
    id: "authorities",
    label: "Airport Authorities",
    headline: "Electrify Without Grid Constraints",
    problem: "Transitioning an entire airport to zero-emission operations places unprecedented strain on existing electrical infrastructure. Trenching and transformer upgrades are slow and extremely costly.",
    solution: "Deploy intelligent fast charging equipped with dynamic power balancing and mobile energy storage. Support multiple tenants across the airfield while strictly managing peak demand limits and avoiding costly infrastructure upgrades.",
    // AI-generated placeholder — replace with real photography, approved 2026-09-12
    image: "/assets/ai_placeholders/gse_airport_authorities_1789225276868.jpg"
  },
  airlines: {
    id: "airlines",
    label: "Airlines",
    headline: "Protect Turnarounds & Cost of Ownership",
    problem: "Airlines face increasing pressure to meet emissions targets without compromising on-time performance or inflating total cost of ownership (TCO) across global hub operations.",
    solution: "High-reliability charging platforms designed for intense 24/7 utilization. Maximize fleet availability, ensure strict turnaround guarantees, and gain real-time visibility into energy consumption and asset health across your entire network.",
    // AI-generated placeholder — replace with real photography, approved 2026-09-12
    image: "/assets/ai_placeholders/gse_airlines_1789225313589.jpg"
  }
};

export default function PersonaSplit() {
  const [activePersona, setActivePersona] = useState("handlers");
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  const { contextSafe } = useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".persona-nav", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", once: true,
        },
        y: 20,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power2.out",
        clearProps: "all"
      });

      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%", once: true,
        },
        y: 20,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power2.out",
        clearProps: "all"
      });
    });
  }, { scope: containerRef });

  const handleTabClick = contextSafe((id) => {
    if (id === activePersona) return;

    gsap.to(contentRef.current, {
      autoAlpha: 0,
      y: 10,
      duration: 0.2,
      onComplete: () => {
        setActivePersona(id);
        gsap.to(contentRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out"
        });
      }
    });
  });

  const activeData = personaContent[activePersona];

  return (
    <section ref={containerRef} className="py-24 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navigation Tabs */}
        <div className="persona-nav flex flex-wrap justify-center gap-2 mb-16">
          {Object.values(personaContent).map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`px-6 py-3 text-sm font-bold uppercase r rounded-sm transition-all duration-300 ${activePersona === tab.id
                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950"
                : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Content */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">

          <div className="lg:col-span-6">
            <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase  mb-4 block">
              Built For Your Role
            </span>
            <h2 className="font-display text-3xl font-black  text-zinc-900 dark:text-white sm:text-4xl uppercase mb-10 ">
              {activeData.headline}
            </h2>

            <div className="mb-8">
              <h3 className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase  mb-3 border-b border-zinc-200 dark:border-zinc-800 pb-2">The Challenge</h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 ">
                {activeData.problem}
              </p>
            </div>

            <div>
              <h3 className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase  mb-3 border-b border-zinc-200 dark:border-zinc-800 pb-2">The Capability</h3>
              <p className="text-lg text-zinc-900 dark:text-white  font-medium">
                {activeData.solution}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative w-full aspect-square md:aspect-[4/3] bg-zinc-100 dark:bg-zinc-900 overflow-hidden rounded-sm">
            <SmartImage
              key={activeData.id}
              src={activeData.image}
              alt={activeData.label}
              fill
              className="object-contain object-center p-4"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
