"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CheckCircle2 } from "lucide-react";
import SmartImage from "../../../components/SmartImage";

gsap.registerPlugin(ScrollTrigger);

export default function BenefitModules() {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".hd-img-1", {
        scrollTrigger: { trigger: ".hd-block-1", start: "top 80%", toggleActions: "play none none none", once: true},
        x: -30, autoAlpha: 0, duration: 0.8, ease: "power2.out", clearProps: "all"
      });
      gsap.from(".hd-text-1", {
        scrollTrigger: { trigger: ".hd-block-1", start: "top 80%", toggleActions: "play none none none", once: true},
        y: 30, autoAlpha: 0, duration: 0.8, ease: "power2.out", clearProps: "all"
      });

      gsap.from(".hd-img-2", {
        scrollTrigger: { trigger: ".hd-block-2", start: "top 80%", toggleActions: "play none none none", once: true},
        x: 30, autoAlpha: 0, duration: 0.8, ease: "power2.out", clearProps: "all"
      });
      gsap.from(".hd-text-2", {
        scrollTrigger: { trigger: ".hd-block-2", start: "top 80%", toggleActions: "play none none none", once: true},
        y: 30, autoAlpha: 0, duration: 0.8, ease: "power2.out", clearProps: "all"
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 overflow-hidden bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Block 1 */}
        <div className="hd-block-1 lg:grid lg:grid-cols-12 lg:gap-16 items-center mb-32">
          <div className="hd-img-1 lg:col-span-7 relative w-full aspect-[4/3] bg-zinc-200 dark:bg-zinc-800 overflow-hidden rounded-sm">
            <SmartImage
              src="/assets/gse/MGNS_GSE_1.png"
              alt="Magnus Charger supporting mixed fleet operations"
              fill
              className="object-cover"
            />
          </div>
          <div className="hd-text-1 lg:col-span-5 mt-12 lg:mt-0">
            <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-3 block">Solution Benefits</span>
            <h2 className="font-display text-3xl font-black tracking-tighter text-zinc-900 dark:text-white sm:text-4xl uppercase mb-6">
              Unified Depot Charging with Magnus
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Consolidate your charging hardware. Rather than installing disparate chargers for each vehicle class, our Magnus multi-voltage fast chargers adapt dynamically to everything from light-duty delivery vans to heavy-duty transit buses. Simplify driver training, streamline maintenance, and reduce the physical footprint of infrastructure in your depot.
            </p>
          </div>
        </div>

        {/* Block 2 */}
        <div className="hd-block-2 lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="hd-text-2 order-2 lg:order-1 lg:col-span-5 mt-12 lg:mt-0">
            <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-3 block">Solution Benefits</span>
            <h2 className="font-display text-3xl font-black tracking-tighter text-zinc-900 dark:text-white sm:text-4xl uppercase mb-6">
              Intelligent Load Balancing
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Avoid multi-million dollar transformer upgrades and devastating peak demand charges. Our intelligent power distribution networks sequence charging sessions based on route schedules and vehicle priority. Guarantee that every vehicle is fully charged for its next shift while strictly capping your facility's maximum energy draw.
            </p>
          </div>
          <div className="hd-img-2 order-1 lg:order-2 lg:col-span-7 relative w-full aspect-[4/3] bg-zinc-200 dark:bg-zinc-100 overflow-hidden rounded-sm flex items-center justify-center p-8">
            <SmartImage
              src="/assets/Products/Mobilus/MOBILUS Hardware Listing.webp"
              alt="Mobilus mobile charging platform"
              fill
              className="object-contain p-12"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
