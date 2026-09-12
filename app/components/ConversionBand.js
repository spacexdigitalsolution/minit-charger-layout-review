"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ConversionBand({
  headline = "Ready to deploy the Altus II in your fleet?",
  primaryCTA = { label: "Speak to an Expert", href: "/contact" },
  secondaryCTA = { label: "Request a Quote", href: "/contact" },
  bgImage = null // Optional background image
}) {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".cb-anim", {
        scrollTrigger: { trigger: containerRef.current, start: "top 80%", toggleActions: "play none none none", once: true},
        y: 20, scale: 0.98, autoAlpha: 0, duration: 0.8, stagger: 0.1, ease: "power2.out", clearProps: "all"
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden border-t border-zinc-800 bg-zinc-950">
      
      {/* Background Image Layer */}
      {bgImage && (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: `url('${bgImage}')` }}
        />
      )}
      
      {/* Legibility Gradient Overlay (only applied heavily if there's an image) */}
      <div className={`absolute inset-0 z-10 ${bgImage ? 'bg-zinc-950/85' : ''}`} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-20">
        <h2 className="cb-anim font-display text-5xl md:text-6xl font-black tracking-tighter text-white uppercase leading-[0.9] mb-10 max-w-4xl mx-auto">
          {headline}
        </h2>
        <div className="cb-anim flex flex-col sm:flex-row gap-6 justify-center">
          <Link href={primaryCTA.href} className="inline-flex items-center justify-center rounded-none bg-green-600 px-8 py-4 text-lg font-bold text-white hover:bg-green-700 transition-colors uppercase tracking-wider">
            {primaryCTA.label}
          </Link>
          <Link href={secondaryCTA.href} className="inline-flex items-center justify-center px-6 py-4 text-sm font-bold text-zinc-300 hover:text-white transition-colors uppercase tracking-wider group">
            {secondaryCTA.label} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
