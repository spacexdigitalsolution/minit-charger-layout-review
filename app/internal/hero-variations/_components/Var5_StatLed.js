"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SmartImage from "../../../components/SmartImage";

gsap.registerPlugin(ScrollTrigger);

export default function Var5StatLed() {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%", toggleActions: "play none none none", once: true
        }
      });

      tl.from(".v5-header", { y: 20, autoAlpha: 0, duration: 0.6, ease: "power2.out", clearProps: "all" })
        .from(".v5-image", { scale: 0.95, autoAlpha: 0, duration: 0.8, ease: "power2.out", clearProps: "all" }, "-=0.2")
        .from(".v5-stat-container", { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", clearProps: "all" }, "-=0.4");

      // Number counter animation
      gsap.utils.toArray(".v5-counter").forEach((counter) => {
        const target = parseFloat(counter.getAttribute("data-target"));
        const format = counter.getAttribute("data-format") || "int";

        gsap.to(counter, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%", once: true,
          },
          innerHTML: target,
          duration: 1.2,
          ease: "power2.out",
          snap: { innerHTML: format === "float" ? 0.1 : 1 },
          onUpdate: function () {
            if (format === "float") {
              counter.innerHTML = Number(this.targets()[0].innerHTML).toFixed(1);
            } else {
              counter.innerHTML = Math.round(this.targets()[0].innerHTML);
            }
          }
        });
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative min-h-screen w-full bg-white flex flex-col items-center justify-center overflow-hidden py-24">

      {/* Variation Label */}
      <div className="absolute top-4 left-4 z-50 pointer-events-none">
        <span className="bg-zinc-900/10 text-zinc-900 backdrop-blur-md px-3 py-1 rounded-sm text-xs font-bold uppercase r border border-zinc-900/20 shadow-sm">
          Variation 5
        </span>
        <p className="text-zinc-600 text-[10px] mt-1 ml-1 uppercase ">Count-up on scroll</p>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">

        {/* Compact Header */}
        <div className="v5-header text-center mb-16 max-w-2xl mx-auto">
          <span className="text-[10px] font-bold text-green-600 uppercase  mb-3 block">
            Aviation GSE
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-black  text-zinc-900 uppercase mb-4 ">
            Keep The Ramp Moving.
          </h1>
          <p className="text-zinc-500 text-lg">Intelligent fast-charging infrastructure built for ultimate reliability.</p>
        </div>

        {/* Huge Stats */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-20">

          <div className="v5-stat-container flex flex-col items-center text-center">
            <div className="flex items-baseline font-display font-black text-zinc-900 text-5xl md:text-5xl   mb-4">
              <span className="v5-counter" data-target="99.9" data-format="float">0.0</span>
              <span className="text-4xl md:text-5xl text-green-500 ml-1">%</span>
            </div>
            <span className="text-xs font-bold text-zinc-400 uppercase ">Platform Uptime</span>
          </div>

          <div className="v5-stat-container flex flex-col items-center text-center">
            <div className="flex items-baseline font-display font-black text-zinc-900 text-5xl md:text-5xl   mb-4">
              <span className="v5-counter" data-target="1000" data-format="int">0</span>
              <span className="text-4xl md:text-5xl text-green-500 ml-2">VDC</span>
            </div>
            <span className="text-xs font-bold text-zinc-400 uppercase ">Maximum Output Voltage</span>
          </div>

          <div className="v5-stat-container flex flex-col items-center text-center">
            <div className="flex items-baseline font-display font-black text-zinc-900 text-5xl md:text-5xl   mb-4">
              <span className="v5-counter" data-target="24" data-format="int">0</span>
              <span className="text-4xl md:text-5xl text-green-500 ml-2">/7</span>
            </div>
            <span className="text-xs font-bold text-zinc-400 uppercase ">Continuous Operation</span>
          </div>

        </div>

        {/* Supporting Image & CTA */}
        <div className="v5-image relative w-full max-w-3xl aspect-[21/9] bg-zinc-100 rounded-sm flex items-center justify-center p-8 border border-zinc-200 mb-10">
          <SmartImage
            src="/assets/Products/Altus II/Altus II Listing.webp"
            alt="Altus II Charging Station"
            fill
            className="object-contain p-4"
          />
        </div>

        <div className="v5-header">
          <button className="inline-flex items-center justify-center rounded border border-zinc-900 px-8 py-4 text-sm font-bold text-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors uppercase r">
            Explore Solutions
          </button>
        </div>

      </div>

    </div>
  );
}
