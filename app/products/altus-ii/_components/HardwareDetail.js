"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function HardwareDetail() {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".hd-img-1", {
        scrollTrigger: { trigger: ".hd-block-1", start: "top 80%", toggleActions: "play none none none" },
        x: -30, autoAlpha: 0, duration: 0.8, ease: "power2.out", clearProps: "all"
      });
      gsap.from(".hd-text-1", {
        scrollTrigger: { trigger: ".hd-block-1", start: "top 80%", toggleActions: "play none none none" },
        y: 30, autoAlpha: 0, duration: 0.8, ease: "power2.out", clearProps: "all"
      });

      gsap.from(".hd-img-2", {
        scrollTrigger: { trigger: ".hd-block-2", start: "top 80%", toggleActions: "play none none none" },
        x: 30, autoAlpha: 0, duration: 0.8, ease: "power2.out", clearProps: "all"
      });
      gsap.from(".hd-text-2", {
        scrollTrigger: { trigger: ".hd-block-2", start: "top 80%", toggleActions: "play none none none" },
        y: 30, autoAlpha: 0, duration: 0.8, ease: "power2.out", clearProps: "all"
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="hd-block-1 lg:grid lg:grid-cols-12 lg:gap-16 items-center mb-32">
          <div className="hd-img-1 lg:col-span-7 relative w-full aspect-square bg-zinc-50 dark:bg-zinc-900/50 flex items-center justify-center border border-dashed border-zinc-300 dark:border-zinc-700">
            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">[ASSET GAP: Detail/Context Shot]</span>
          </div>
          <div className="hd-text-1 lg:col-span-5 mt-12 lg:mt-0">
            <h2 className="font-display text-3xl font-black tracking-tighter text-zinc-900 dark:text-white sm:text-4xl uppercase mb-6">
              Power Usage Billing, Automated
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              With a certified power meter, the Altus II precisely records power usage for each vehicle in your fleet. Integrated with our cloud platform, it provides automated billing capabilities that eliminate manual legwork and improve energy accountability.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                <span className="text-zinc-700 dark:text-zinc-300">Certified energy metering for precise tracking</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                <span className="text-zinc-700 dark:text-zinc-300">Seamless cloud platform integration</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                <span className="text-zinc-700 dark:text-zinc-300">Automated reporting and billing data</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="hd-block-2 lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="hd-text-2 order-2 lg:order-1 lg:col-span-5 mt-12 lg:mt-0">
            <h2 className="font-display text-3xl font-black tracking-tighter text-zinc-900 dark:text-white sm:text-4xl uppercase mb-6">
              End the Power Struggle
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              Avoid costly infrastructure upgrades. Through intelligent power sharing, the Altus II sequences charging across connected vehicles, ensuring maximum utilization of available power without overdrawing the grid.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                <span className="text-zinc-700 dark:text-zinc-300">Smart port management and prioritization</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                <span className="text-zinc-700 dark:text-zinc-300">Reduce peak load requirements</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                <span className="text-zinc-700 dark:text-zinc-300">Simultaneous GSE and EV charging support</span>
              </li>
            </ul>
          </div>
          <div className="hd-img-2 order-1 lg:order-2 lg:col-span-7 relative w-full aspect-square bg-zinc-50 dark:bg-zinc-900/50 flex items-center justify-center border border-dashed border-zinc-300 dark:border-zinc-700">
            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">[ASSET GAP: Detail/Context Shot]</span>
          </div>
        </div>

      </div>
    </section>
  );
}
