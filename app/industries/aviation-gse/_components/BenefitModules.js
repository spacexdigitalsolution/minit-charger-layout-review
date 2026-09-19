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
        scrollTrigger: { trigger: ".hd-block-1", start: "top 80%", toggleActions: "play none none none", once: true },
        x: -30, autoAlpha: 0, duration: 0.8, ease: "power2.out", clearProps: "all"
      });
      gsap.from(".hd-text-1", {
        scrollTrigger: { trigger: ".hd-block-1", start: "top 80%", toggleActions: "play none none none", once: true },
        y: 30, autoAlpha: 0, duration: 0.8, ease: "power2.out", clearProps: "all"
      });

      gsap.from(".hd-img-2", {
        scrollTrigger: { trigger: ".hd-block-2", start: "top 80%", toggleActions: "play none none none", once: true },
        x: 30, autoAlpha: 0, duration: 0.8, ease: "power2.out", clearProps: "all"
      });
      gsap.from(".hd-text-2", {
        scrollTrigger: { trigger: ".hd-block-2", start: "top 80%", toggleActions: "play none none none", once: true },
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
              // AI-generated placeholder — replace with real photography, approved 2026-09-12
              src="/assets/ai_placeholders/gse_ecosystem_1789225330392.jpg"
              alt="Magnus Charger supporting mixed fleet operations"
              fill
              className="object-cover"
            />
          </div>
          <div className="hd-text-1 lg:col-span-5 mt-12 lg:mt-0">
            <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase  mb-3 block">Solution Benefits</span>
            <h2 className="font-display text-3xl font-black  text-zinc-900 dark:text-white sm:text-4xl uppercase mb-6">
              One Ecosystem from GSE to EV
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 ">
              Airports are electrifying both ground support equipment and on-road passenger vehicles. Instead of managing separate legacy networks, deploy a unified multi-voltage platform capable of serving everything from a 24V baggage tractor to a 1000V electric shuttle bus. With support for CCS, NACS, and REMA connectors on a single platform, you can dramatically simplify training and maintenance for ground crew while reducing charger sprawl.
            </p>
          </div>
        </div>

        {/* Block 2 */}
        <div className="hd-block-2 lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="hd-text-2 order-2 lg:order-1 lg:col-span-5 mt-12 lg:mt-0">
            <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase  mb-3 block">Solution Benefits</span>
            <h2 className="font-display text-3xl font-black  text-zinc-900 dark:text-white sm:text-4xl uppercase mb-6">
              Scale Without Infrastructure Constraints
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 ">
              Deploy charging power exactly where it's needed without waiting for grid upgrades. Mobile charging and energy storage platforms like Mobilus allow you to avoid costly trenching and transformational upgrades. Paired with dynamic power balancing across multiple active ports, you can maximize the utilization of your existing electrical capacity across the ramp.
            </p>
          </div>
          <div className="hd-img-2 order-1 lg:order-2 lg:col-span-7 relative w-full aspect-[4/3] bg-zinc-200 dark:bg-zinc-100 overflow-hidden rounded-sm flex items-center justify-center p-8">
            <SmartImage
              // AI-generated placeholder — replace with real photography, approved 2026-09-12
              src="/assets/ai_placeholders/mobilus_deployment_1789225347110.jpg"
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
