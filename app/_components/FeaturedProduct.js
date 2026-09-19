"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import SmartImage from "../components/SmartImage";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProduct() {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const st = { trigger: containerRef.current, start: "top 80%", toggleActions: "play none none none", once: true };

      gsap.from(".fp-text", { scrollTrigger: st, x: -30, autoAlpha: 0, duration: 0.6, ease: "power2.out" });
      gsap.from(".fp-img", { scrollTrigger: st, x: 30, autoAlpha: 0, duration: 0.6, ease: "power2.out", delay: 0.1 });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-zinc-50 dark:bg-black border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

          <div className="fp-text lg:order-2 mb-12 lg:mb-0">
            <span className="text-[10px] font-bold text-green-600 uppercase  mb-4 block">
              Featured Solution
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-black  text-zinc-900 dark:text-white uppercase mb-6 ">
              Meet Momentus
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light mb-8 ">
              The ultimate 20kW fast charger for industrial and forklift applications. Compact, efficient, and ready to integrate into your existing fleet management ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products/momentus" className="inline-flex items-center justify-center rounded-none bg-green-600 px-8 py-4 text-sm font-bold text-white hover:bg-green-700 transition-colors uppercase r">
                Explore Momentus
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-none bg-transparent border border-zinc-900 dark:border-white px-8 py-4 text-sm font-bold text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors uppercase r">
                Request Specs
              </Link>
            </div>
          </div>

          <div className="fp-img lg:order-1 relative w-full aspect-square bg-zinc-200 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center overflow-hidden">
            <SmartImage
              src="/assets/homepage/Meet MOMENTUs-02.webp"
              alt="Minit Charger Momentus Platform"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
