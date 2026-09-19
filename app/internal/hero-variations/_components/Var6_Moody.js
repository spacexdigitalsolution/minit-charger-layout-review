"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Var6Moody() {
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

      tl.from(".v6-bg", {
        autoAlpha: 0,
        duration: 2,
        ease: "power2.inOut",
        clearProps: "all"
      })
        .from(".v6-element", {
          y: 10,
          autoAlpha: 0,
          duration: 1.5,
          stagger: 0.2,
          ease: "power2.out",
          clearProps: "all"
        }, "-=1.5")
        .from(".v6-glow", {
          scaleX: 0,
          transformOrigin: "left center",
          autoAlpha: 0,
          duration: 1.2,
          ease: "power2.out",
          clearProps: "all"
        }, "-=1");
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative min-h-screen w-full bg-zinc-950 flex flex-col items-center justify-center overflow-hidden">

      {/* Variation Label */}
      <div className="absolute top-4 left-4 z-50 pointer-events-none">
        <span className="bg-white/5 text-white backdrop-blur-md px-3 py-1 rounded-sm text-xs font-bold uppercase r border border-white/10 shadow-sm">
          Variation 6
        </span>
        <p className="text-white/40 text-[10px] mt-1 ml-1 uppercase ">Slow, moody fade</p>
      </div>

      {/* Video Background with Extreme Dark Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="v6-bg object-cover w-full h-full grayscale opacity-30"
        >
          <source src="/assets/optimized-videos/ALTUS_II.mp4" type="video/mp4" />
        </video>
        {/* Near-black overlay */}
        <div className="absolute inset-0 bg-zinc-950/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

        <span className="v6-element block text-xs font-bold text-zinc-500 uppercase  mb-6">
          Aviation GSE
        </span>

        <div className="relative inline-block mb-12">
          <h1 className="v6-element font-display text-5xl md:text-7xl lg:text-8xl font-black  text-white uppercase ">
            Keep The Ramp<br />Moving.
          </h1>
          {/* Glowing neon green accent line */}
          <div className="v6-glow absolute -bottom-4 left-0 w-full h-1 bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)]"></div>
        </div>

        <div className="v6-element mt-8">
          <button className="inline-flex items-center justify-center rounded border border-green-500/50 bg-green-500/10 hover:bg-green-500/20 px-10 py-5 text-sm font-bold text-green-400 transition-colors uppercase  backdrop-blur-md shadow-[0_0_20px_rgba(34,197,94,0.15)] hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]">
            Explore Solutions
          </button>
        </div>

      </div>

    </div>
  );
}
