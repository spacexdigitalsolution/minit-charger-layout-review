"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SmartImage from "@/app/components/SmartImage";

gsap.registerPlugin(ScrollTrigger);

export default function HardwareDetail() {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".hd-reveal", {
        scrollTrigger: { trigger: ".hd-reveal", start: "top 80%", toggleActions: "play none none none" },
        y: 40, autoAlpha: 0, duration: 1, stagger: 0.15, ease: "power2.out"
      });
      gsap.from(".hd-line", {
        scrollTrigger: { trigger: ".hd-reveal", start: "top 80%", toggleActions: "play none none none" },
        scaleX: 0, transformOrigin: "left center", duration: 1, ease: "power2.out"
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 bg-zinc-100 dark:bg-zinc-950 border-b-2 border-zinc-200 dark:border-zinc-900 overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="order-2 lg:order-1 hd-reveal">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-6 block">Hardware Engineering</span>
            <h2 className="text-4xl md:text-6xl font-display font-black text-zinc-900 dark:text-white uppercase leading-[0.95] mb-8">
              Built for the Ramp.
            </h2>
            <div className="w-12 h-1 bg-zinc-900 dark:bg-zinc-700 mb-8 hd-line" />
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-12">
              Altus II was engineered from the ground up for extreme environments. It isn&apos;t a modified warehouse charger; it&apos;s a high-voltage industrial platform built to withstand continuous use, severe weather, and the physical realities of ground support.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-zinc-200 dark:border-zinc-800">
              <div className="hd-reveal">
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-2">Sealed Architecture</h4>
                <p className="text-zinc-500 dark:text-zinc-400 font-light">IP54 rating ensures dust and water resistance, protecting critical power electronics.</p>
              </div>
              <div className="hd-reveal">
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-2">Cable Management</h4>
                <p className="text-zinc-500 dark:text-zinc-400 font-light">Integrated automatic retraction keeps heavy cables off the ground, reducing damage and trip hazards.</p>
              </div>
              <div className="hd-reveal">
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-2">Modular Power</h4>
                <p className="text-zinc-500 dark:text-zinc-400 font-light">Independent 20kW power modules slide in and out for rapid maintenance with zero downtime.</p>
              </div>
              <div className="hd-reveal">
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-2">Universal Connection</h4>
                <p className="text-zinc-500 dark:text-zinc-400 font-light">Supports Anderson, Euro, REMA, and optional J1772 for passenger EVs on a single pedestal.</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 w-full h-[60vh] lg:h-[80vh] relative bg-zinc-900 overflow-hidden hd-reveal">
            <SmartImage
              src="/assets/ai_placeholders/altus_hardware_1791407949017.jpg"
              alt="Heavy duty industrial charging cable macro shot"
              fill
              mode="placeholder"
              className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
