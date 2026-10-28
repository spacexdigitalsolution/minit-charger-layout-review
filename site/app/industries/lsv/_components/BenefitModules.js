"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SmartImage from "@/components/SmartImage";

gsap.registerPlugin(ScrollTrigger);

export default function BenefitModules() {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".lsv-hd-img-1", {
        scrollTrigger: { trigger: ".lsv-hd-block-1", start: "top 80%", toggleActions: "play none none none", once: true },
        x: -30, autoAlpha: 0, duration: 0.8, ease: "power2.out", clearProps: "all"
      });
      gsap.from(".lsv-hd-text-1", {
        scrollTrigger: { trigger: ".lsv-hd-block-1", start: "top 80%", toggleActions: "play none none none", once: true },
        y: 30, autoAlpha: 0, duration: 0.8, ease: "power2.out", clearProps: "all"
      });

      gsap.from(".lsv-hd-img-2", {
        scrollTrigger: { trigger: ".lsv-hd-block-2", start: "top 80%", toggleActions: "play none none none", once: true },
        x: 30, autoAlpha: 0, duration: 0.8, ease: "power2.out", clearProps: "all"
      });
      gsap.from(".lsv-hd-text-2", {
        scrollTrigger: { trigger: ".lsv-hd-block-2", start: "top 80%", toggleActions: "play none none none", once: true },
        y: 30, autoAlpha: 0, duration: 0.8, ease: "power2.out", clearProps: "all"
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} data-section="lsv-benefits" className="py-24 overflow-hidden bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Block 1 */}
        <div className="lsv-hd-block-1 lg:grid lg:grid-cols-12 lg:gap-16 items-center mb-32">
          <div className="lsv-hd-img-1 lg:col-span-7 relative w-full aspect-4/3 bg-zinc-200 dark:bg-zinc-800 overflow-hidden rounded-sm">
            <SmartImage
              src="/assets/homepage/Engineered for LSEVs.webp"
              alt="Rugged Onboard & Standalone Durus Charging"
              fill
              mode="placeholder"
              description="Durus Charger Installed Onboard Low Speed Utility Vehicle"
              className="object-cover"
            />
          </div>
          <div className="lsv-hd-text-1 lg:col-span-5 mt-12 lg:mt-0">
            <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-3 block">
              Deployment Flexibility
            </span>
            <h2 className="font-display text-3xl font-black text-zinc-900 dark:text-white sm:text-4xl uppercase mb-6 leading-tight">
              Onboard Mobility or Standalone Station Power
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-6">
              Mount Durus directly on the vehicle chassis to plug into any standard 120V or 240V outlet wherever work takes you, or mount on depot walls for dedicated multi-cart charging bays.
            </p>
          </div>
        </div>

        {/* Block 2 */}
        <div className="lsv-hd-block-2 lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lsv-hd-text-2 lg:col-span-5 order-2 lg:order-1 mt-12 lg:mt-0">
            <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-3 block">
              Fleet Telematics
            </span>
            <h2 className="font-display text-3xl font-black text-zinc-900 dark:text-white sm:text-4xl uppercase mb-6 leading-tight">
              Centralized Campus GPS Mapping &amp; Battery Telemetry
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-6">
              Never hunt across a 500-acre resort or university property for lost utility vehicles. CellTrac maps exact vehicle locations and sends automated push alerts when battery levels drop below 20%.
            </p>
          </div>
          <div className="lsv-hd-img-2 lg:col-span-7 order-1 lg:order-2 relative w-full aspect-4/3 bg-zinc-200 dark:bg-zinc-800 overflow-hidden rounded-sm">
            <SmartImage
              src="/assets/homepage/Cumulus Software-01.webp"
              alt="Centralized Campus GPS Mapping & Telemetry"
              fill
              mode="placeholder"
              description="Cumulus Cloud Real-Time GPS Map of Campus Utility Fleet"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

