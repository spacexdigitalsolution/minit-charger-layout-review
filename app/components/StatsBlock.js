"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function StatsBlock({ stats = [] }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true
        },
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        clearProps: "all"
      });
    });
  }, { scope: containerRef });

  if (!stats || stats.length === 0) return null;

  return (
    <section ref={containerRef} className="py-24 bg-zinc-950 border-t border-b border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-800">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item flex flex-col items-center justify-center pt-8 md:pt-0 md:first:pt-0 px-6">
              <span className="font-display text-5xl md:text-5xl font-black text-green-500 mb-4 ">
                {stat.value}
              </span>
              <h3 className="font-bold text-white text-xl mb-2 uppercase ">
                {stat.label}
              </h3>
              <p className="text-zinc-400 font-light text-sm max-w-xs">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
