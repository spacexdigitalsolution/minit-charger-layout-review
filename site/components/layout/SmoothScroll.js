// section: smooth-scroll
"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

export default function SmoothScroll({ children }) {
  const pathname = usePathname();
  const lenisRef = useRef(null);

  useEffect(() => {
    // Respect user motion preferences
    if (typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      lerp: 0.1, // Responsive momentum scroll
      wheelMultiplier: 1,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothWheel: true,
      syncTouch: false, // Native touch scroll on mobile devices to prevent touch latency
      touchMultiplier: 1,
      respectReducedMotion: true,
    });
    
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const rafCallback = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(rafCallback);

    // Disable GSAP lag smoothing completely to prevent delta-time clamping fighting Lenis lerp
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(rafCallback);
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    // Disable native scroll restoration to prevent conflicts with Lenis
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true, force: true });
        lenisRef.current.stop();
        lenisRef.current.start();
      }
    };

    resetScroll();
    requestAnimationFrame(resetScroll);
  }, [pathname]);

  return <>{children}</>;
}
