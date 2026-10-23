"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Check } from "lucide-react";
import SmartImage from "@/app/components/SmartImage";

gsap.registerPlugin(ScrollTrigger);

const bullets = [
  "Connects with the systems you already run",
  "Get alerted before a charger needs service",
  "Track every asset, not just chargers"
];

export default function PowerUsageBilling() {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true
        }
      });

      tl.from(".pub-text", {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "all"
      }, 0)
      .from(".pub-img", {
        x: 30,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "all"
      }, 0.1);
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-32 bg-white dark:bg-zinc-950 border-b-2 border-zinc-200 dark:border-zinc-900 overflow-hidden"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left Column: Text & Bullets */}
          <div className="pub-text lg:col-span-6 mb-12 lg:mb-0">
            <span className="text-[10px] font-bold text-green-600 dark:text-green-400 uppercase tracking-widest mb-4 block">
              Power Usage Billing
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 dark:text-white uppercase leading-[0.95] mb-6">
              Track What&apos;s Used.
              <br />
              Bill It Automatically.
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-8">
              Every vehicle&apos;s power use is metered and billed automatically, fair to every airline or team you charge. The same data shows your carbon footprint, your off-peak savings, and your charger performance, shared across your team so everyone can act on it.
            </p>

            <ul className="space-y-4">
              {bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start">
                  <Check
                    className="w-5 h-5 text-green-600 dark:text-green-400 mr-3 mt-1 flex-shrink-0"
                    strokeWidth={2}
                  />
                  <span className="text-lg text-zinc-800 dark:text-zinc-200 font-light">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Visual Dashboard */}
          <div className="pub-img lg:col-span-6 relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl bg-zinc-900">
            <SmartImage
              src="/assets/homepage/Cumulus Software-01.webp"
              alt="Power Usage Billing and Metering Dashboard"
              fill
              mode="placeholder"
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
