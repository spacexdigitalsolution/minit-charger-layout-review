"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroAnimation() {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".hero-anim", {
        y: 40,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative pb-24  md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="relative z-10 w-full max-w-4xl">
        <h1 className="hero-anim font-display text-5xl md:text-5xl font-black text-white   uppercase mb-8">
          We Are<br />
          <span className="text-green-500">Minit Charger</span>
        </h1>
      </div>

      <div className="hero-anim w-full aspect-[21/9] md:aspect-[3/1] mt-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center p-8 text-center relative overflow-hidden">
        <span className="text-zinc-500 font-mono text-sm relative z-10">[CONTENT GAP: Missing real full-bleed photography of team/facility]</span>
        {/* Subtle grid pattern for the gap placeholder */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
      </div>
    </section>
  );
}
