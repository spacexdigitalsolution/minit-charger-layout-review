// section: altus-video
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SmartImage from "@/components/SmartImage";

gsap.registerPlugin(ScrollTrigger);

export default function VideoModule() {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", toggleActions: "play none none none", once: true
        }
      });

      tl.from(".vid-anim", { y: 30, autoAlpha: 0, duration: 0.8, stagger: 0.1, ease: "power2.out", clearProps: "y,opacity,visibility" }, 0);
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} data-section="altus-video" className="py-24 bg-zinc-950 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="vid-anim mb-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-black  text-white uppercase mb-4">
            The X-Ray of Our Engineering
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light">
            Never judge a charger by its cover. Let&apos;s look at what&apos;s inside.
          </p>
        </div>
        <div className="vid-anim relative w-full aspect-video bg-zinc-900 border border-zinc-800 shadow-2xl">
          <SmartImage
            src={null}
            alt="The X-Ray of Our Engineering"
            fill
            mode="placeholder"
            sizes="100vw"
            description="Altus II Internal Engineering Architecture and Power Module Layout"
          />
        </div>
      </div>
    </section>
  );
}
