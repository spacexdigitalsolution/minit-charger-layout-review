"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SmartImage from "../../../components/SmartImage";

gsap.registerPlugin(ScrollTrigger);

export default function Var3Diagram() {
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

      tl.from(".v3-header", { y: 20, autoAlpha: 0, duration: 0.6, ease: "power2.out", clearProps: "all" })
        .from(".v3-image", { scale: 0.95, autoAlpha: 0, duration: 0.8, ease: "power2.out", clearProps: "all" }, "-=0.2")
        .from(".v3-line", { scaleX: 0, transformOrigin: "left center", duration: 0.4, stagger: 0.1, ease: "power2.out", clearProps: "all" }, "-=0.2")
        .from(".v3-label", { x: -10, autoAlpha: 0, duration: 0.4, stagger: 0.1, ease: "power2.out", clearProps: "all" }, "-=0.2")
        .from(".v3-cta", { y: 20, autoAlpha: 0, duration: 0.6, ease: "power2.out", clearProps: "all" }, "-=0.2");
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative min-h-screen w-full bg-zinc-50 flex flex-col items-center justify-center overflow-hidden py-24">

      {/* Variation Label */}
      <div className="absolute top-4 left-4 z-50 pointer-events-none">
        <span className="bg-zinc-900/10 text-zinc-900 backdrop-blur-md px-3 py-1 rounded-sm text-xs font-bold uppercase r border border-zinc-900/20 shadow-sm">
          Variation 3
        </span>
        <p className="text-zinc-600 text-[10px] mt-1 ml-1 uppercase ">Sequential diagram draw</p>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="v3-header text-center mb-12">
          <span className="text-xs font-bold text-zinc-400 uppercase  mb-4 block">
            Aviation GSE
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black  text-zinc-900 uppercase mb-4  max-w-3xl mx-auto">
            Your Ramp, Configured.
          </h1>
        </div>

        <div className="relative w-full max-w-5xl mx-auto aspect-video md:aspect-[21/9] flex items-center justify-center my-12">
          <div className="v3-image relative w-full h-full max-w-2xl mx-auto">
            <SmartImage
              src="/assets/Products/Altus II/Altus II Listing.webp"
              alt="Altus II Charging Station Diagram"
              fill
              className="object-contain"
            />
          </div>

          {/* Callout 1: Left */}
          <div className="absolute top-[30%] left-[10%] md:left-[20%] flex items-center">
            <div className="v3-label bg-white border border-zinc-200 shadow-sm px-3 py-2 rounded-sm z-10 text-right">
              <p className="font-display font-bold text-lg text-zinc-900 ">40 kW</p>
              <p className="text-[10px] uppercase  text-zinc-500 font-bold mt-1">Output</p>
            </div>
            <div className="v3-line w-8 md:w-16 h-px bg-zinc-300 ml-[-2px]"></div>
          </div>

          {/* Callout 2: Right */}
          <div className="absolute top-[40%] right-[10%] md:right-[20%] flex items-center flex-row-reverse">
            <div className="v3-label bg-white border border-zinc-200 shadow-sm px-3 py-2 rounded-sm z-10 text-left">
              <p className="font-display font-bold text-lg text-zinc-900 ">Dual</p>
              <p className="text-[10px] uppercase  text-zinc-500 font-bold mt-1">Connectors</p>
            </div>
            <div className="v3-line w-8 md:w-16 h-px bg-zinc-300 mr-[-2px]" style={{ transformOrigin: "right center" }}></div>
          </div>

          {/* Callout 3: Bottom Left */}
          <div className="absolute bottom-[20%] left-[15%] md:left-[25%] flex items-center">
            <div className="v3-label bg-white border border-zinc-200 shadow-sm px-3 py-2 rounded-sm z-10 text-right">
              <p className="font-display font-bold text-lg text-zinc-900 ">&gt; 94%</p>
              <p className="text-[10px] uppercase  text-zinc-500 font-bold mt-1">Efficiency</p>
            </div>
            <div className="v3-line w-12 md:w-20 h-px bg-zinc-300 ml-[-2px]"></div>
          </div>

        </div>

        <div className="v3-cta text-center mt-8">
          <button className="inline-flex items-center justify-center rounded border border-zinc-900 px-8 py-4 text-sm font-bold text-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors uppercase r">
            Explore Solutions
          </button>
        </div>

      </div>

    </div>
  );
}
