"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    title: "Your Compact Powerhouse",
    description: "Delivers 40kW of dual-port charging without taking up extra space on your ramp."
  },
  {
    title: "Charges Every Fleet",
    description: "Every GSE vehicle, any chemistry. Suitable for every lithium battery brand, just plug and it works, plus an optional 3rd port for passenger EVs."
  },
  {
    title: "Power On Demand",
    description: "Automatically sequences charging across its ports, so every connected vehicle gets power when it needs it."
  },
  {
    title: "Zero Damage Engineering",
    description: "The cable retracts automatically, never touching the ground, and detaches for easy swaps."
  }
];

export default function BenefitsGrid() {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".bg-header", {
        scrollTrigger: { trigger: containerRef.current, start: "top 80%", toggleActions: "play none none none" },
        y: 30, autoAlpha: 0, duration: 0.8, ease: "power2.out", clearProps: "all"
      });
      gsap.from(".bg-card", {
        scrollTrigger: { trigger: ".bg-header", start: "top 80%", toggleActions: "play none none none" },
        y: 40, autoAlpha: 0, duration: 0.8, stagger: 0.15, ease: "power2.out", clearProps: "all"
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 bg-zinc-950 border-b-2 border-white/10 overflow-hidden relative">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="bg-header max-w-4xl mb-24">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-6 block">Beyond Standard</span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-[0.9] tracking-tighter">
            Not Like the Rest, But Beyond.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {benefits.map((b, i) => (
            <div key={i} className="bg-card flex flex-col border-t-4 border-zinc-800 pt-8 group hover:border-white transition-colors duration-500">
              <span className="font-display text-6xl md:text-7xl font-black text-zinc-800 group-hover:text-zinc-600 transition-colors duration-500 leading-none mb-6">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-black text-white uppercase leading-tight mb-4 pr-4">
                {b.title}
              </h3>
              <p className="text-lg text-zinc-400 font-light leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
