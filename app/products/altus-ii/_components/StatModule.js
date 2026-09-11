"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function StatModule() {
  const containerRef = useRef(null);
  const effRef = useRef(null);
  const tempRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".stat-anim", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "all"
      });

      const effObj = { val: 0 };
      gsap.to(effObj, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        val: 95,
        duration: 1.5,
        ease: "power2.out",
        onUpdate: () => {
          if (effRef.current) effRef.current.innerText = Math.round(effObj.val) + "%";
        }
      });

      const tempObj = { val: 0 };
      gsap.to(tempObj, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        val: -13,
        duration: 1.5,
        ease: "power2.out",
        onUpdate: () => {
          if (tempRef.current) tempRef.current.innerText = Math.round(tempObj.val) + "°F";
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-24 bg-zinc-900 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="stat-anim mb-24 md:w-3/4">
          <h2 className="font-display text-5xl font-black tracking-tighter text-white leading-[0.9] uppercase">
            Engineered <br />for Extremes
          </h2>
          <p className="mt-8 text-xl text-zinc-400 max-w-2xl font-light">
            Built to withstand the toughest outdoor ramp conditions while delivering exceptional efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
          <div className="stat-anim py-8 md:py-0 md:pr-8">
            <div ref={effRef} className="font-display text-6xl leading-[0.8] font-black text-white mb-6 tracking-tighter">95%</div>
            <div className="text-sm font-bold text-green-500 uppercase tracking-[0.2em]">Max Efficiency</div>
          </div>
          <div className="stat-anim py-8 md:py-0 md:px-8">
            <div className="font-display text-6xl leading-[0.8] font-black text-white mb-6 tracking-tighter">IP54</div>
            <div className="text-sm font-bold text-green-500 uppercase tracking-[0.2em]">Outdoor Rated</div>
          </div>
          <div className="stat-anim py-8 md:py-0 md:pl-8">
            <div ref={tempRef} className="font-display text-6xl leading-[0.8] font-black text-white mb-6 tracking-tighter">-13°F</div>
            <div className="text-sm font-bold text-green-500 uppercase tracking-[0.2em]">Operating Minimum</div>
          </div>
        </div>
      </div>
    </section>
  );
}
