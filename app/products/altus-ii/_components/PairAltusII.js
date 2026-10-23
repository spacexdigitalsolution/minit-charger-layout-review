"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { Check } from "lucide-react";
import SmartImage from "@/app/components/SmartImage";

gsap.registerPlugin(ScrollTrigger);

const bullets = [
  "Tracks run time to schedule maintenance before problems start",
  "GPS and geofencing, know where every vehicle is",
  "Alerts the moment a battery misses equalization"
];

export default function PairAltusII() {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const st = {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true
      };

      gsap.from(".pai-text", {
        scrollTrigger: st,
        x: 30,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.out"
      });
      gsap.from(".pai-img", {
        scrollTrigger: st,
        x: -30,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.1
      });
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-32 bg-zinc-50 dark:bg-black border-b-2 border-zinc-200 dark:border-zinc-800 overflow-hidden"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left Column: Visual Dashboard */}
          <div className="pai-img lg:col-span-6 order-2 lg:order-1 relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl bg-zinc-900">
            <SmartImage
              src="/assets/homepage/Cumulus Software-01.webp"
              alt="Cumulus Cloud Fleet Dashboard"
              fill
              mode="placeholder"
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right Column: Text & Bullets */}
          <div className="pai-text lg:col-span-6 order-1 lg:order-2 mb-12 lg:mb-0">
            <span className="text-[10px] font-bold text-green-600 dark:text-green-400 uppercase tracking-widest mb-4 block">
              Pair Altus II
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 dark:text-white uppercase leading-[0.95] mb-6">
              Charge It. Track It. See It All.
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-8">
              <strong className="font-bold text-zinc-900 dark:text-white">Altus II</strong> handles the charging.{" "}
              <strong className="font-bold text-zinc-900 dark:text-white">CellTrac</strong>, installed on the vehicle, checks the battery, its temperature, charge level, and health, then tells Altus II exactly how much power to send.{" "}
              <strong className="font-bold text-zinc-900 dark:text-white">Cumulus</strong> is the dashboard where you see it all, your chargers and your batteries at one place without switching screens.
            </p>

            <ul className="space-y-4 mb-10">
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

            <Link
              href="/products/cumulus"
              className="inline-flex items-center justify-center rounded-none bg-green-600 px-8 py-4 text-sm font-bold text-white hover:bg-green-700 transition-colors uppercase tracking-wider"
            >
              Explore Cumulus
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
