"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SmartImage from "../components/SmartImage";

gsap.registerPlugin(ScrollTrigger);

const logos = [
  { name: "Air China", src: "/assets/Home Page/Trusted by Industry Leaders Optimized/Air China.webp" },
  { name: "Americold", src: "/assets/Home Page/Trusted by Industry Leaders Optimized/Americold.webp" },
  { name: "Boeing", src: "/assets/Home Page/Trusted by Industry Leaders Optimized/Boeing.webp" },
  { name: "Coca Cola", src: "/assets/Home Page/Trusted by Industry Leaders Optimized/Coco cola.webp" },
  { name: "General Mills", src: "/assets/Home Page/Trusted by Industry Leaders Optimized/General Mills.webp" },
  { name: "Nestle", src: "/assets/Home Page/Trusted by Industry Leaders Optimized/Nestle.webp" },
  { name: "Southwest", src: "/assets/Home Page/Trusted by Industry Leaders Optimized/Southwest.webp" },
  { name: "United", src: "/assets/Home Page/Trusted by Industry Leaders Optimized/United.webp" }
];

export default function LogoStrip({ title, description, stats }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%", toggleActions: "play none none none", once: true}
      });

      tl.from(".strip-header", { y: 20, autoAlpha: 0, duration: 0.6, ease: "power2.out", clearProps: "all" })
        .from(".marquee-track", { autoAlpha: 0, duration: 0.6, ease: "power2.out", clearProps: "opacity,visibility" }, "-=0.3");

      // Auto-scrolling marquee
      gsap.to(".marquee-track", {
        xPercent: -50,
        ease: "none",
        duration: 35, // Adjust speed (higher is slower)
        repeat: -1,
      });

      // Stat Count Up
      gsap.utils.toArray(".stat-num").forEach(el => {
        gsap.to(el, {
          innerHTML: el.getAttribute("data-target"),
          duration: 2,
          ease: "power2.out",
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%", toggleActions: "play none none none", once: true}
        });
      });
    });
  }, { scope: containerRef });

  const isDev = process.env.NODE_ENV === "development";

  return (
    <section ref={containerRef} className="py-24 bg-zinc-900 border-b border-zinc-800 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="strip-header mb-16 text-center">
          <h2 className="font-display text-4xl font-black tracking-tighter text-white uppercase mb-6">
            {title}
          </h2>
          {description && (
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light">
              {description}
            </p>
          )}

          {stats && (
            <div className="mt-8 flex flex-wrap justify-center gap-8 md:gap-16">
              {/* TODO: UNVERIFIED - confirm stats against Product Comparison Matrix before launch */}
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center relative">
                  <div className="font-display text-4xl font-black text-white tracking-tighter flex items-center">
                    <span className="stat-num" data-target={stat.targetValue}>
                      {/* Server-side render targetValue for no-js, GSAP will override */}
                      {stat.targetValue}
                    </span>
                    {stat.unit}
                  </div>
                  <div className="text-xs font-bold text-green-500 uppercase tracking-widest mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="relative w-full overflow-hidden mt-20 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-16 before:bg-gradient-to-r before:from-zinc-900 before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-16 after:bg-gradient-to-l after:from-zinc-900 after:to-transparent after:z-10">
          <div className="marquee-track flex w-max items-center gap-16 md:gap-24 pl-16 md:pl-24">
            {[...logos, ...logos].map((logo, idx) => (
              <div key={idx} className="w-[120px] md:w-[160px] shrink-0 aspect-[3/2] relative flex items-center justify-center">
                <SmartImage
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  fill
                  className="object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-500"
                  sizes="(max-width: 768px) 120px, 160px"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
