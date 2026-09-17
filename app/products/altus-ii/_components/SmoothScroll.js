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
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      lerp: 0.06, // Creates the soft, "fuzzy" momentum scroll
      wheelMultiplier: 1,
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });
    
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  useEffect(() => {
    // Disable native scroll restoration to prevent conflicts with Lenis
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const resetScroll = () => {
      // Force native scroll instantly
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      
      // Force Lenis to reset its internal state to top immediately
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true, force: true });
        // Optionally stop and start to clear momentum
        lenisRef.current.stop();
        lenisRef.current.start();
      }
    };

    // Force scroll reset immediately, on next frame, and after DOM paints
    resetScroll();
    requestAnimationFrame(resetScroll);
    setTimeout(resetScroll, 50);

  }, [pathname]);

  return <>{children}</>;
}
