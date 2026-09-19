"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function LeadershipQuote({ quote, name, title, imageSrc, isGap = false }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".quote-anim", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        clearProps: "all"
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <blockquote className="text-center">
          <div className="quote-anim mb-12">
            <p className="font-display text-4xl md:text-5xl font-medium text-white  ">
              "{quote}"
            </p>
          </div>
          <footer className="quote-anim flex flex-col items-center justify-center space-y-4">
            {imageSrc ? (
              <div className="relative w-20 h-20 rounded-full overflow-hidden">
                <Image src={imageSrc} alt={name} fill className="object-cover" />
              </div>
            ) : (
              <div className="w-20 h-20 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "8px 8px" }}></div>
              </div>
            )}
            <div>
              <div className="text-lg font-bold text-white">{name}</div>
              <div className="text-sm text-green-500 uppercase  mt-1">{title}</div>
            </div>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
