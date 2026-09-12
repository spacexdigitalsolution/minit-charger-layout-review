"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ValuesBlock({ title, description, imageSrc, imageAlt, align = "left", isGap = false, theme = "dark" }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Animate from the image side
      const direction = align === "left" ? -50 : 50;
      
      gsap.from(".value-anim", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
        x: direction,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        clearProps: "all"
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`flex flex-col ${align === "left" ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-16 items-center py-16 md:py-24 border-t ${theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'} last:border-b`}>
      <div className="w-full md:w-1/2 value-anim">
        {isGap || !imageSrc ? (
          <div className={`w-full aspect-video flex items-center justify-center p-8 text-center relative overflow-hidden border ${theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-100 border-zinc-200'}`}>
            <span className="text-zinc-500 font-mono text-sm relative z-10">[CONTENT GAP: Missing real photography for value "{title}"]</span>
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(${theme === 'dark' ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${theme === 'dark' ? '#fff' : '#000'} 1px, transparent 1px)`, backgroundSize: "32px 32px" }}></div>
          </div>
        ) : (
          <div className="relative w-full aspect-video">
            <Image src={imageSrc} alt={imageAlt || title} fill className="object-cover" />
          </div>
        )}
      </div>
      <div className="w-full md:w-1/2 value-anim">
        <h3 className={`font-display text-4xl font-bold mb-6 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-zinc-950'}`}>{title}</h3>
        {isGap || !description ? (
          <p className="text-zinc-500 font-mono text-sm">[CONTENT GAP: Missing definition for value "{title}"]</p>
        ) : (
          <p className={`text-xl font-light leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>{description}</p>
        )}
      </div>
    </div>
  );
}
