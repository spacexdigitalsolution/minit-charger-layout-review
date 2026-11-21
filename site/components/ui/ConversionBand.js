"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ConversionBand({
  headline,
  title,
  subheadline,
  description,
  primaryCTA,
  buttonText,
  buttonLink,
  secondaryCTA = { label: "Request a Quote", href: "/contact" },
  bgImage = null // Optional background image
}) {
  const containerRef = useRef(null);

  const displayHeadline = headline || title || "Ready to deploy the Altus II in your fleet?";
  const displaySubheadline = subheadline || description || null;
  const displayPrimaryCTA = primaryCTA || (buttonText ? { label: buttonText, href: buttonLink || "/contact" } : { label: "Speak to an Expert", href: "/contact" });

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".cb-anim", {
        scrollTrigger: { trigger: containerRef.current, start: "top 80%", toggleActions: "play none none none", once: true },
        y: 20, scale: 0.98, autoAlpha: 0, duration: 0.8, stagger: 0.1, ease: "power2.out", clearProps: "all"
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-28 md:py-32 overflow-hidden border-t border-zinc-800 bg-zinc-950">

      {/* Background Image Layer */}
      {bgImage && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: `url('${bgImage}')` }}
        />
      )}

      {/* Legibility Gradient Overlay (translucent background to showcase the scene while keeping text readable) */}
      <div className={`absolute inset-0 z-10 ${bgImage ? 'bg-gradient-to-b from-zinc-950/80 via-zinc-950/65 to-zinc-950/85 backdrop-blur-[1px]' : ''}`} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-20">
        <h2 className="cb-anim font-display text-4xl sm:text-5xl font-black text-white uppercase mb-4 max-w-4xl mx-auto">
          {displayHeadline}
        </h2>
        {displaySubheadline && (
          <p className="cb-anim text-lg sm:text-xl text-zinc-300 font-light mb-10 max-w-2xl mx-auto">
            {displaySubheadline}
          </p>
        )}
        <div className="cb-anim flex flex-col sm:flex-row gap-6 justify-center">
          <Link href={displayPrimaryCTA.href} className="inline-flex items-center justify-center rounded-none bg-green-600 px-8 py-4 text-lg font-bold text-white hover:bg-green-700 transition-colors uppercase r">
            {displayPrimaryCTA.label}
          </Link>
          <Link href={secondaryCTA.href} className="inline-flex items-center justify-center px-6 py-4 text-sm font-bold text-zinc-300 hover:text-white transition-colors uppercase r group">
            {secondaryCTA.label} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

