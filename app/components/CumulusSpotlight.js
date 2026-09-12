"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { Check } from "lucide-react";
import SmartImage from "./SmartImage";

gsap.registerPlugin(ScrollTrigger);

export default function CumulusSpotlight({
  headline = "Total Fleet Visibility",
  supportingCopy = "Manage the complete charging operation, not only the charger. Connect your hardware to the Cumulus cloud platform.",
  featureBullets = [
    "Real-time charger status and remote session management",
    "Deep insights into battery health, temperature, and equalization",
    "Automated energy compliance reports and precise metering"
  ],
  dashboardImage = "/assets/homepage/Cumulus Software-01.webp",
  ctaLabel = "Explore Cumulus",
  ctaHref = "/products/cumulus",
  imageSide = "right"
}) {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const st = { trigger: containerRef.current, start: "top 80%", toggleActions: "play none none none", once: true };
      
      const xOffsetText = imageSide === "right" ? -30 : 30;
      const xOffsetImg = imageSide === "right" ? 30 : -30;
      
      gsap.from(".cs-text", { scrollTrigger: st, x: xOffsetText, autoAlpha: 0, duration: 0.6, ease: "power2.out" });
      gsap.from(".cs-img", { scrollTrigger: st, x: xOffsetImg, autoAlpha: 0, duration: 0.6, ease: "power2.out", delay: 0.1 });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-zinc-50 dark:bg-black border-y border-zinc-200 dark:border-zinc-800 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div className={`cs-text mb-12 lg:mb-0 ${imageSide === 'left' ? 'lg:order-2' : 'lg:order-1'}`}>
            <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest mb-4 block">
              Beyond the Hardware
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase mb-6 leading-tight">
              {headline}
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light mb-8 leading-relaxed">
              {supportingCopy}
            </p>
            
            <ul className="space-y-4 mb-10">
              {featureBullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" strokeWidth={2} />
                  <span className="text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>

            <Link href={ctaHref} className="inline-flex items-center justify-center rounded-none bg-green-600 px-8 py-4 text-sm font-bold text-white hover:bg-green-700 transition-colors uppercase tracking-wider">
              {ctaLabel}
            </Link>
          </div>
          
          <div className={`cs-img relative w-full aspect-[4/3] lg:aspect-[16/11] bg-zinc-200 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center overflow-hidden ${imageSide === 'left' ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="relative w-[90%] h-[90%]">
               <SmartImage 
                 src={dashboardImage} 
                 alt="Cumulus Dashboard Interface" 
                 fill 
                 className="object-contain drop-shadow-xl"
               />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
