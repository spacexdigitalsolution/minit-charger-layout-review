"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function VideoModule() {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: { 
          trigger: containerRef.current, 
          start: "top 80%", 
          toggleActions: "play none none none" 
        }
      });
      
      tl.from(".vid-anim", { y: 30, autoAlpha: 0, duration: 0.8, stagger: 0.1, ease: "power2.out", clearProps: "y,opacity,visibility" }, 0)
        .from("video", { scale: 1.05, duration: 1.2, ease: "power2.out", clearProps: "all" }, 0);
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-zinc-950 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="vid-anim mb-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-black tracking-tighter text-white uppercase mb-4">
            Beyond the Hardware
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light">
            See the Altus II ecosystem in action.
          </p>
        </div>
        <div className="vid-anim relative w-full aspect-video bg-zinc-900 border border-zinc-800 shadow-2xl">
          <video 
            className="w-full h-full object-cover" 
            autoPlay 
            muted 
            loop 
            playsInline
            poster="/assets/Products/altus-ii/context/altus_cta_bg.webp"
          >
            <source src="/assets/videos/ALTUS_II.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
