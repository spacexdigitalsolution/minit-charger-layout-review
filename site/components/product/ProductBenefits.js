"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ProductBenefits({ product }) {
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

  const benefits = [
    {
      num: "01",
      title: "Engineered for High Uptime",
      description: `${product.name} is built to endure continuous multi-shift cycles without thermal throttling or surprise component failure.`
    },
    {
      num: "02",
      title: "Universal Fleet Versatility",
      description: "Compatible with lead-acid, lithium-ion, and advanced battery chemistries across diverse voltage ranges."
    },
    {
      num: "03",
      title: "Autonomous Fault Isolation",
      description: "Independent power conversion channels isolate line disruptions to keep the remaining fleet charging uninterrupted."
    },
    {
      num: "04",
      title: "Cloud & Telematics Native",
      description: "Direct cellular integration with Cumulus Cloud allows remote charge curve updates, energy metering, and predictive health alerts."
    }
  ];

  return (
    <section ref={containerRef} data-section="product-benefits" className="py-32 bg-zinc-950 border-b-2 border-white/10 overflow-hidden relative">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="bg-header max-w-4xl mb-24">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-6 block">
            Operational Superiority
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-[0.9] tracking-tighter">
            Engineered Beyond Standard
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {benefits.map((b) => (
            <div key={b.num} className="bg-card flex flex-col border-t-4 border-zinc-800 pt-8 group hover:border-white transition-colors duration-500">
              <span className="font-display text-6xl md:text-7xl font-black text-zinc-800 group-hover:text-zinc-600 transition-colors duration-500 leading-none mb-6">
                {b.num}
              </span>
              <h3 className="font-display text-xl md:text-2xl font-bold text-white uppercase tracking-tight mb-4">
                {b.title}
              </h3>
              <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

