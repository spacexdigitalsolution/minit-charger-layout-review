"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import SmartImage from "@/components/SmartImage";

export default function ProductHero({ product, banner }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out", clearProps: "all" } });

      tl.from(".hero-bg-scale", { autoAlpha: 0.85, duration: 1.5, ease: "power2.out" }, 0)
        .from(".hero-title", { autoAlpha: 0, y: 25, duration: 1 }, 0.2)
        .from(".hero-subtext", { autoAlpha: 0, duration: 1 }, 0.4)
        .from(".hero-data-bar > div", { autoAlpha: 0, y: 20, duration: 0.8, stagger: 0.1 }, 0.5);
    });
  }, { scope: containerRef });

  const powerDisplay = product.specs?.powerOutput || "High Output";
  const archDisplay = product.specs?.portConfiguration || "Dual Port";
  const envDisplay = product.specs?.ingressProtection || product.specs?.operatingTemp || "IP54 Rated";

  const bannerHeadline = banner?.headline || product.tagline || product.shortDescription;
  const bannerBody = banner?.body || product.longDescription || product.keyUSP;
  const bannerButtons = banner?.buttons;
  const bannerImage = banner?.image || product.heroImage || product.cardImage || "/assets/homepage/Altus II.webp";

  return (
    <section ref={containerRef} data-section="product-hero" className="relative w-full flex flex-col border-b-2 border-white/10 bg-zinc-950">
      {/* Cinematic Banner Visual Stage (Increased height so banner hardware is fully visible) */}
      <div className="relative overflow-hidden w-full min-h-[90vh] md:min-h-[96vh] lg:min-h-[100vh] min-h-[640px] md:min-h-[820px] lg:min-h-[940px] flex flex-col justify-between">
        {/* Background Image Layer */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <div className="hero-bg-scale absolute inset-0 w-full h-full">
            <SmartImage
              src={bannerImage}
              alt={banner?.imageAlt || `${product.name} Industrial Deployment`}
              fill
              priority
              mode={banner?.imageMode || product.heroImageMode || "placeholder"}
              description={`${product.name} Cinematic Background`}
              className="object-cover object-center opacity-90"
            />
          </div>
        </div>

        {/* Directional Scrim: Dark on left for text legibility, transparent on right so vehicle & charger are 100% visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/45 to-transparent z-10" />

        {/* Top Nav Spacer */}
        <div className="pt-28 md:pt-36" />

        {/* Main Content Area: Left-aligned with constrained width so it never covers the product */}
        <div className="relative z-20 flex-grow flex flex-col justify-center px-6 md:px-12 w-full max-w-[1600px] mx-auto py-10 md:py-16">
          <div className="max-w-xl">
            <span className="hero-subtext text-xs tracking-widest uppercase font-bold text-emerald-400 mb-4 block">
              {product.categoryTag || "Industrial Fleet Hardware"}
            </span>
            <h1 className="hero-title font-display text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-[0.95] tracking-tight mb-4">
              {product.name}
            </h1>
            <h2 className="hero-subtext text-xl md:text-2xl lg:text-3xl font-display font-bold text-zinc-200 uppercase tracking-tight mb-4">
              {bannerHeadline}
            </h2>
            <p className="hero-subtext text-base md:text-lg text-zinc-300 font-light max-w-lg leading-relaxed mb-8">
              {bannerBody}
            </p>
            {bannerButtons && bannerButtons.length > 0 && (
              <div className="hero-subtext flex flex-wrap gap-4 items-center">
                {bannerButtons.map((btn, idx) => (
                  <Link
                    key={idx}
                    href={btn.href}
                    className={`px-8 py-4 font-bold uppercase tracking-wider text-xs transition-colors rounded ${btn.primary
                        ? "bg-white text-zinc-950 hover:bg-zinc-200 shadow-lg"
                        : "border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                      }`}
                  >
                    {btn.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Data-Forward Bottom Bar (Placed BELOW the banner stage so it NEVER cuts off the charger or vehicle) */}
      <div className="relative z-20 hero-data-bar grid grid-cols-2 md:grid-cols-4 border-t border-white/10 bg-zinc-950">
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
