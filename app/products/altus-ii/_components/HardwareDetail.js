"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CheckCircle2 } from "lucide-react";
import SmartImage from "@/app/components/SmartImage";

gsap.registerPlugin(ScrollTrigger);

export default function HardwareDetail() {
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
    <section ref={containerRef} className="py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="hd-block-1 lg:grid lg:grid-cols-12 lg:gap-16 items-center mb-32">
          <div className="hd-img-1 lg:col-span-7 relative w-full aspect-square bg-zinc-50 dark:bg-zinc-900/50 flex items-center justify-center overflow-hidden rounded-sm">
            <SmartImage
              // AI-generated placeholder — replace with real photography, approved 2026-09-12
              src="/assets/ai_placeholders/cumulus_billing_dashboard_1789225361318.jpg"
              alt="Power Usage Billing Dashboard"
              fill
              className="object-cover"
            />
          </div>
          <div className="hd-text-1 lg:col-span-5 mt-12 lg:mt-0">
            <h2 className="font-display text-3xl font-black tracking-tighter text-zinc-900 dark:text-white sm:text-4xl uppercase mb-6">
              Track What's Used. Bill It Automatically.
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              Every vehicle's power use is metered and billed automatically, fair to every airline or team you charge. The same data shows your carbon footprint, your off-peak savings, and your charger performance, shared across your team so everyone can act on it.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                <span className="text-zinc-700 dark:text-zinc-300">Connects with the systems you already run</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                <span className="text-zinc-700 dark:text-zinc-300">Get alerted before a charger needs service</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                <span className="text-zinc-700 dark:text-zinc-300">Track every asset, not just chargers</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="hd-block-2 lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="hd-text-2 order-2 lg:order-1 lg:col-span-5 mt-12 lg:mt-0">
            <h2 className="font-display text-3xl font-black tracking-tighter text-zinc-900 dark:text-white sm:text-4xl uppercase mb-6">
              More Power. No New Wiring.
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              Adding more chargers doesn't mean adding more power. Altus II sequences charging automatically across two GSE ports and an optional EV port, running at up to 95% efficiency, cutting peak demand and reducing how much new electrical capacity you actually need.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                <span className="text-zinc-700 dark:text-zinc-300">Smart port prioritization, no manual switching</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                <span className="text-zinc-700 dark:text-zinc-300">Rated for high-capacity, 3-phase power</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                <span className="text-zinc-700 dark:text-zinc-300">Charges GSE and EV vehicles together</span>
              </li>
            </ul>
          </div>
          <div className="hd-img-2 order-1 lg:order-2 lg:col-span-7 relative w-full aspect-square bg-zinc-50 dark:bg-zinc-900/50 flex items-center justify-center overflow-hidden rounded-sm">
            <SmartImage
              // AI-generated placeholder — replace with real photography, approved 2026-09-12
              src="/assets/ai_placeholders/altus_power_struggle_1789225372860.jpg"
              alt="Intelligent Power Sharing Illustration"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
