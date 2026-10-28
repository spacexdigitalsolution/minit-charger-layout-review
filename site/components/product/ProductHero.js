"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import SmartImage from "@/components/SmartImage";

export default function ProductHero({ product }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out", clearProps: "all" } });

      tl.fromTo(".hero-bg-scale", { scale: 1.05 }, { scale: 1, duration: 2, ease: "power2.out" }, 0)
        .from(".hero-title", { autoAlpha: 0, y: 30, duration: 1 }, 0.2)
        .from(".hero-subtext", { autoAlpha: 0, duration: 1 }, 0.4)
        .from(".hero-data-bar > div", { autoAlpha: 0, y: 20, duration: 0.8, stagger: 0.1 }, 0.5);
    });
  }, { scope: containerRef });

  const powerDisplay = product.specs?.powerOutput || "High Output";
  const archDisplay = product.specs?.portConfiguration || "Dual Port";
  const envDisplay = product.specs?.ingressProtection || "IP54 Rated";

  return (
    <section ref={containerRef} data-section="product-hero" className="relative overflow-hidden w-full min-h-[95vh] flex flex-col justify-between border-b-2 border-white/10 bg-zinc-950">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div className="hero-bg-scale absolute inset-0 w-full h-full">
          <SmartImage
            src={product.heroImage || product.cardImage || "/assets/homepage/Altus II.webp"}
            alt={`${product.name} Industrial Deployment`}
            fill
            priority
            mode="placeholder"
            description={`${product.name} Cinematic Background`}
            className="object-cover object-center opacity-75 mix-blend-luminosity"
          />
        </div>
      </div>

      {/* Editorial Gradient / Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10" />

      {/* Top Nav Spacer */}
      <div className="pt-24 md:pt-32" />

      {/* Main Content Area */}
      <div className="relative z-20 flex-grow flex flex-col justify-center px-6 md:px-12 w-full max-w-[1600px] mx-auto">
        <div className="max-w-4xl">
          <span className="hero-subtext text-xs tracking-widest uppercase font-bold text-zinc-400 mb-6 block">
            {product.categoryTag || "Industrial Fleet Hardware"}
          </span>
          <h1 className="hero-title font-display text-7xl md:text-8xl lg:text-[10rem] font-black text-white uppercase leading-[0.9] tracking-tighter mb-4">
            {product.name}
          </h1>
          <h2 className="hero-subtext text-2xl md:text-3xl lg:text-4xl font-display font-bold text-zinc-200 uppercase tracking-tight mb-6">
            {product.tagline || product.shortDescription}
          </h2>
          <p className="hero-subtext text-xl md:text-2xl text-zinc-300 font-light max-w-2xl leading-relaxed">
            {product.longDescription || product.keyUSP}
          </p>
        </div>
      </div>

      {/* Data-Forward Bottom Bar */}
      <div className="relative z-20 hero-data-bar grid grid-cols-2 md:grid-cols-4 border-t border-white/10 bg-zinc-950/80 backdrop-blur-xl">
        <div className="p-6 md:p-8 border-r border-white/10 flex flex-col justify-center">
          <dt className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Max Power</dt>
          <dd className="text-3xl md:text-4xl font-display font-black text-white">{powerDisplay}</dd>
        </div>
        <div className="p-6 md:p-8 border-r border-white/10 flex flex-col justify-center">
          <dt className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Architecture</dt>
          <dd className="text-3xl md:text-4xl font-display font-black text-white">{archDisplay}</dd>
        </div>
        <div className="p-6 md:p-8 border-r border-white/10 flex flex-col justify-center hidden md:flex">
          <dt className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Environment</dt>
          <dd className="text-3xl md:text-4xl font-display font-black text-white">{envDisplay}</dd>
        </div>
        <Link
          href="/contact"
          className="p-6 md:p-8 flex items-center justify-center hover:bg-white transition-colors group cursor-pointer"
        >
          <span className="text-sm font-bold text-white group-hover:text-zinc-950 uppercase tracking-wider transition-colors inline-flex items-center gap-2">
            Request Specs &rarr;
          </span>
        </Link>
      </div>
    </section>
  );
}

