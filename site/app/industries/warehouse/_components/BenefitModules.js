// section: warehouse-benefits
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SmartImage from "@/components/SmartImage";
import { warehouseEcosystem, warehouseMobile } from "./warehouseData";

gsap.registerPlugin(ScrollTrigger);

export default function BenefitModules() {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".wh-hd-img-1", {
        scrollTrigger: {
          trigger: ".wh-hd-block-1",
          start: "top 80%",
          toggleActions: "play none none none",
          once: true
        },
        x: -30,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "all"
      });
      gsap.from(".wh-hd-text-1", {
        scrollTrigger: {
          trigger: ".wh-hd-block-1",
          start: "top 80%",
          toggleActions: "play none none none",
          once: true
        },
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "all"
      });

      gsap.from(".wh-hd-img-2", {
        scrollTrigger: {
          trigger: ".wh-hd-block-2",
          start: "top 80%",
          toggleActions: "play none none none",
          once: true
        },
        x: 30,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "all"
      });
      gsap.from(".wh-hd-text-2", {
        scrollTrigger: {
          trigger: ".wh-hd-block-2",
          start: "top 80%",
          toggleActions: "play none none none",
          once: true
        },
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "all"
      });
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      data-section="warehouse-benefits"
      className="py-24 overflow-hidden bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Block 1: Section 4 - Ecosystem Attributes */}
        <div className="wh-hd-block-1 lg:grid lg:grid-cols-12 lg:gap-16 items-start mb-32">
          <div className="wh-hd-img-1 lg:col-span-5 relative w-full aspect-4/3 bg-zinc-200 dark:bg-zinc-800 overflow-hidden rounded-sm lg:sticky lg:top-32">
            <SmartImage
              src="/assets/homepage/Engineered for Warehouses.webp"
              alt="One ecosystem for the whole fleet"
              fill
              mode="placeholder"
              description="Warehouse Ecosystem Overview Visual"
              className="object-cover"
            />
          </div>

          <div className="wh-hd-text-1 lg:col-span-7 mt-12 lg:mt-0">
            <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-3 block">
              {warehouseEcosystem.eyebrow}
            </span>
            <h2 className="font-display text-3xl font-black text-zinc-900 dark:text-white sm:text-4xl lg:text-5xl uppercase mb-6 leading-tight">
              {warehouseEcosystem.heading}
            </h2>
            <p className="text-xl font-medium text-zinc-800 dark:text-zinc-200 leading-relaxed mb-4">
              {warehouseEcosystem.intro}
            </p>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-10">
              {warehouseEcosystem.body}
            </p>

            {/* 7 Attribute Tiles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {warehouseEcosystem.tiles.map((tile, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm"
                >
                  <h3 className="font-display font-black text-base uppercase text-zinc-900 dark:text-white tracking-wide mb-2">
                    {tile.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                    {tile.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Block 2: Section 5 - Mobile Power Solution */}
        <div className="wh-hd-block-2 lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="wh-hd-text-2 lg:col-span-6 order-2 lg:order-1 mt-12 lg:mt-0">
            <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-3 block">
              {warehouseMobile.eyebrow}
            </span>
            <h2 className="font-display text-3xl font-black text-zinc-900 dark:text-white sm:text-4xl lg:text-5xl uppercase mb-6 leading-tight">
              {warehouseMobile.heading}
            </h2>
            <p className="text-xl font-medium text-zinc-800 dark:text-zinc-200 leading-relaxed mb-4">
              {warehouseMobile.intro}
            </p>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              {warehouseMobile.body}
            </p>
          </div>

          <div className="wh-hd-img-2 lg:col-span-6 order-1 lg:order-2 relative w-full aspect-4/3 bg-zinc-200 dark:bg-zinc-800 overflow-hidden rounded-sm">
            <SmartImage
              src="/assets/homepage/Indoor material handling-01.webp"
              alt="Fast charging that moves with demand"
              fill
              mode="placeholder"
              description="Mobilus Mobile Fast Charger for Yard and Seasonal Operations"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
