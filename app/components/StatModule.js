"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function StatItem({ targetValue, unit, label, index }) {
  const valueRef = useRef(null);
  
  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Animate from 0 to targetValue
      const obj = { val: 0 };
      
      // If the targetValue is a number (e.g. 95, -13) we animate it. 
      // If it's something like "25+", we extract the number part if possible, or just don't animate.
      // Let's assume targetValue is the number we want to count up to.
      
      const targetNum = parseFloat(targetValue);
      
      if (!isNaN(targetNum)) {
        gsap.to(obj, {
          scrollTrigger: {
            trigger: valueRef.current,
            start: "top 90%",
          },
          val: targetNum,
          duration: 1.5,
          ease: "power2.out",
          onUpdate: () => {
            if (valueRef.current) {
              valueRef.current.innerText = Math.round(obj.val) + unit;
            }
          }
        });
      }
    });
  }, { scope: valueRef });

  return (
    <div className={`stat-anim py-8 md:py-0 ${index === 0 ? 'md:pr-8' : ''} ${index > 0 && index < 2 ? 'md:px-8' : ''} ${index === 2 ? 'md:pl-8' : ''}`}>
      <div 
        ref={valueRef} 
        className="font-display text-6xl leading-[0.8] font-black text-white mb-6 tracking-tighter"
      >
        {isNaN(parseFloat(targetValue)) ? targetValue + unit : `0${unit}`}
      </div>
      <div className="text-sm font-bold text-green-500 uppercase tracking-[0.2em]">{label}</div>
    </div>
  );
}

export default function StatModule({
  title = "Engineered\nfor Extremes",
  description = "Built to withstand the toughest outdoor ramp conditions while delivering exceptional efficiency.",
  stats = [
    { targetValue: 95, unit: "%", label: "Max Efficiency" },
    { targetValue: "IP54", unit: "", label: "Outdoor Rated" },
    { targetValue: -13, unit: "°F", label: "Operating Minimum" }
  ]
}) {
  const containerRef = useRef(null);

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
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-24 bg-zinc-900 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="stat-anim mb-24 md:w-3/4">
          <h2 className="font-display text-5xl font-black tracking-tighter text-white leading-[0.9] uppercase whitespace-pre-line">
            {title}
          </h2>
          <p className="mt-8 text-xl text-zinc-400 max-w-2xl font-light">
            {description}
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-${stats.length} gap-16 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-zinc-800`}>
          {stats.map((stat, idx) => (
            <StatItem 
              key={idx}
              index={idx}
              targetValue={stat.targetValue}
              unit={stat.unit}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
