// section: altus-gate-power
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Check } from "lucide-react";
import SmartImage from "@/components/SmartImage";

gsap.registerPlugin(ScrollTrigger);

const bullets = [
  "Runs on spare power from the bridge or ground power unit",
  "Bridge keeps priority at all times, fail-safe by design",
  "Can be added to Altus II units already in the field"
];

export default function GatePowerManager() {
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

      tl.from(".gpm-img", {
        x: -30,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "all"
      }, 0)
      .from(".gpm-text", {
        y: 30,
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
      data-section="altus-gate-power"
      className="py-24 md:py-32 bg-zinc-950 border-b-2 border-white/10 overflow-hidden text-white"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left Column: Visual of Gate Power Integration */}
          <div className="gpm-img lg:col-span-6 order-2 lg:order-1 relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
            <SmartImage
              src="/assets/Industries/Aviation-GSE/Features/No infrastructure upgrade required.webp"
              alt="Passenger Boarding Bridge and Ground Power Integration"
              fill
              mode="placeholder"
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right Column: Text & Bullets */}
          <div className="gpm-text lg:col-span-6 order-1 lg:order-2 mb-12 lg:mb-0">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4 block">
              End the Power Struggle
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-[0.95] mb-6">
              Use the Power Already at the Gate.
            </h2>
            <p className="text-xl text-zinc-300 font-light leading-relaxed mb-8">
              Passenger bridges and ground power units are not always using their full power. With the Power Manager option, Altus II draws on that unused capacity, so adding chargers does not have to wait for new electrical supply. The bridge always comes first. When it needs power, the charger steps back.
            </p>

            <ul className="space-y-4">
              {bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start">
                  <Check
                    className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0"
                    strokeWidth={2}
                  />
                  <span className="text-lg text-zinc-200 font-light">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
