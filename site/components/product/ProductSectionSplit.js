"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Check } from "lucide-react";
import SmartImage from "@/components/SmartImage";

gsap.registerPlugin(ScrollTrigger);

export default function ProductSectionSplit({
  kicker,
  heading,
  subheading,
  body,
  checkmarks = [],
  image,
  imageAlt,
  theme = "light",
  reverse = false,
  sectionId
}) {
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

      tl.from(".split-text", {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "all"
      }, 0)
      .from(".split-media", {
        x: reverse ? -30 : 30,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "all"
      }, 0.1);
    });
  }, { scope: containerRef });

  const isDark = theme === "dark";

  return (
    <section
      ref={containerRef}
      id={sectionId}
      className={`py-24 md:py-32 overflow-hidden border-b-2 ${
        isDark
          ? "bg-zinc-950 border-white/10 text-white"
          : "bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-900 text-zinc-900 dark:text-white"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          {/* Text Column */}
          <div
            className={`split-text lg:col-span-6 mb-12 lg:mb-0 ${
              reverse ? "order-1 lg:order-2" : "order-1"
            }`}
          >
            {kicker && (
              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-4 block">
                {kicker}
              </span>
            )}
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.95] mb-4">
              {heading}
            </h2>
            {subheading && (
              <p className="text-sm md:text-base font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-6">
                {subheading}
              </p>
            )}
            {body && (
              <p
                className={`text-lg md:text-xl font-light leading-relaxed mb-8 ${
                  isDark ? "text-zinc-300" : "text-zinc-600 dark:text-zinc-400"
                }`}
              >
                {body}
              </p>
            )}

            {checkmarks.length > 0 && (
              <ul className="space-y-4">
                {checkmarks.map((bullet, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check
                      className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0"
                      strokeWidth={2.5}
                    />
                    <span
                      className={`text-base md:text-lg font-light ${
                        isDark ? "text-zinc-200" : "text-zinc-800 dark:text-zinc-200"
                      }`}
                    >
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Media Column */}
          <div
            className={`split-media lg:col-span-6 relative w-full aspect-[4/3] rounded-lg overflow-hidden border shadow-2xl bg-zinc-900 ${
              isDark
                ? "border-white/10"
                : "border-zinc-200 dark:border-zinc-800"
            } ${reverse ? "order-2 lg:order-1" : "order-2"}`}
          >
            <SmartImage
              src={image || "/assets/homepage/Altus II.webp"}
              alt={imageAlt || heading}
              fill
              mode="placeholder"
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
