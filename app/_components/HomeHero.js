"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import SmartImage from "../components/SmartImage";
import { Volume2, VolumeX, Pause, Play } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  { id: "vid5", type: "video", src: "/assets/Home Page/Banner/Home banner - 01-05.mp4", duration: 8000 },
  { id: "vid1", type: "video", src: "/assets/Home Page/Banner/Home banner - 01-01_1.mp4", duration: 8000 },
  { id: "vid2", type: "video", src: "/assets/Home Page/Banner/Home banner - 01-02.mp4", duration: 8000 },
  { id: "vid3", type: "video", src: "/assets/Home Page/Banner/Home banner - 01-03.mp4", duration: 8000 },
  { id: "img4", type: "image", src: "/assets/Home Page/Banner/Home banner - 01-04.webp", duration: 6000 },
];

export default function HomeHero() {
  const containerRef = useRef(null);
  const videoRefs = useRef([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    if (mediaQuery.matches) {
      setIsPaused(true);
    }
    const handler = (e) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches) setIsPaused(true);
    };
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline();
      tl.from(".hero-anim", { y: 20, autoAlpha: 0, duration: 0.7, stagger: 0.1, ease: "power2.out", delay: 0.2 });
    });
  }, { scope: containerRef });

  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, slides[activeSlide].duration);

    return () => clearTimeout(timer);
  }, [activeSlide, isPaused]);

  useEffect(() => {
    videoRefs.current.forEach((vid, idx) => {
      if (vid) {
        if (idx === activeSlide) {
          vid.currentTime = 0;
          vid.play().catch(() => { });
        } else {
          vid.pause();
        }
      }
    });
  }, [activeSlide]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] md:min-h-screen bg-black overflow-hidden flex items-center"
      onMouseEnter={() => !prefersReducedMotion && setIsPaused(true)}
      onMouseLeave={() => !prefersReducedMotion && setIsPaused(false)}
    >
      {/* Background Slides */}
      {slides.map((slide, index) => {
        const isActive = index === activeSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${isActive ? 'opacity-100 z-0' : 'opacity-0 -z-10'}`}
          >
            {slide.type === "video" ? (
              <video
                ref={el => videoRefs.current[index] = el}
                src={slide.src}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[10000ms] ease-out ${isActive && !prefersReducedMotion ? 'scale-105' : 'scale-100'}`}
                muted={isMuted}
                playsInline
                loop
              />
            ) : (
              <SmartImage
                src={slide.src}
                alt="Minit Charger Platform"
                fill
                priority={index === 0}
                className={`object-cover transition-transform duration-[10000ms] ease-out ${isActive && !prefersReducedMotion ? 'scale-105' : 'scale-100'}`}
              />
            )}
          </div>
        );
      })}

      {/* Dark Overlay for Legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/20 z-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>

      {/* Static Content */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <h1 className="hero-anim font-display text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-[0.9] mb-6">
            Charging Infrastructure, Built to Scale With You
          </h1>
          <p className="hero-anim text-xl text-zinc-300 font-light mb-10">
            Minit Charger closes the gap most EV operations didn't know was there. Keeping ground support equipment, forklifts, and buses connected, visible, and running as one.
          </p>
          <div className="hero-anim flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-none bg-green-600 px-8 py-4 text-sm font-bold text-white hover:bg-green-700 transition-colors uppercase tracking-wider">
              Get a Quote
            </Link>
            <Link href="/products" className="inline-flex items-center justify-center rounded-none bg-transparent border border-white px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition-colors uppercase tracking-wider">
              Explore Solutions
            </Link>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Progress Indicators */}
          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={`ind-${index}`}
                onClick={() => setActiveSlide(index)}
                className="group py-2 relative"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div className={`h-1 w-12 transition-colors duration-500 rounded-full ${index === activeSlide ? 'bg-white' : 'bg-white/30 group-hover:bg-white/50'}`}></div>
              </button>
            ))}
          </div>

          {/* Mute/Pause Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="text-white/70 hover:text-white transition-colors p-2"
              aria-label={isPaused ? "Play slider" : "Pause slider"}
            >
              {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
            </button>

            {slides[activeSlide].type === "video" && (
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-white/70 hover:text-white transition-colors p-2"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
            )}
          </div>

        </div>
      </div>

    </section>
  );
}
