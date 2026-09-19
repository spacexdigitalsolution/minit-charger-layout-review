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
  {
    id: "vid1",
    type: "video",
    src: "/assets/Home Page/Banner/Home banner - 01-01_1.mp4",
    duration: 5000,
    headline: "One charger for your entire fleet",
    subcopy: "Minit Charger closes the gap most EV operations didn't know was there. Keeping ground support equipment, forklifts, and buses connected, visible, and running as one.",
    features: ["20–200 kW Charging", "Up to 1000 VDC", "Up to 95% Efficiency", "Multi-Chemistry Support", "Cloud-Connected Fleet Data"]
  },
  {
    id: "vid2",
    type: "video",
    src: "/assets/Home Page/Banner/Home banner - 01-02.mp4",
    duration: 5000,
    headline: "Fewer Repairs. Less Downtime. Lower Cost.",
    subcopy: "Cables that retract automatically, ports that are doubled up, and damage that stays off your bill, all built into every charger you install.",
    features: ["Auto-Retracting Cable", "Dual-Port Charging Available", "Predictive Maintenance Alerts", "On-Screen Diagnostic Display", "Compact Wall or Pedestal Install"]
  },
  {
    id: "vid3",
    type: "video",
    src: "/assets/Home Page/Banner/Home banner - 01-03.mp4",
    duration: 5000,
    headline: "Optimize Power, Chargers and Warehouse Space",
    subcopy: "Compact 20 kW opportunity charging built with modern Silicon Carbide technology. Deliver powerful DC fast charging to your warehouse operations without sacrificing valuable floor space.",
    features: ["20 kW DC Fast Charging", "Compact Wall or Pedestal", "94% Max Efficiency", "Multi-Chemistry Support", "AssetPro Connected"]
  },
  {
    id: "img4",
    type: "image",
    src: "/assets/Home Page/Banner/Home banner - 01-04.webp",
    duration: 6000,
    headline: "Access Real-Time Data Instead of Guesswork",
    subcopy: "See charging activity, energy usage, asset status, battery health, and maintenance needs across your operation through connected Minit intelligence.",
    features: ["Cloud-Connected", "Live Dashboard", "Remote Monitoring", "Predictive Maintenance Alerts", "Charge History", "Fleet Data", "AssetPro Integration"]
  },
  {
    id: "vid5",
    type: "video",
    src: "/assets/Home Page/Banner/Home banner - 01-05.mp4",
    duration: 5000,
    headline: "Wherever Your Fleet Works, We've Already Built for It",
    subcopy: "From airport ramps to warehouse floors to public transit, Minit Charger's electric vehicle fleet charging infrastructure is eliminating daily operational bottlenecks.",
    features: ["Airport & Ground Support", "Warehouse & Distribution", "Transit & Municipal Fleets", "Mobile & Emergency Response"]
  }
];

export default function HomeHero() {
  const containerRef = useRef(null);
  const videoRefs = useRef([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isUserPaused, setIsUserPaused] = useState(false);
  const [isHoverPaused, setIsHoverPaused] = useState(false);
  const isPaused = isUserPaused || isHoverPaused;
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    if (mediaQuery.matches) {
      setIsUserPaused(true);
    }
    const handler = (e) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches) setIsUserPaused(true);
    };
    mediaQuery.addEventListener("change", handler);

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      mediaQuery.removeEventListener("change", handler);
      observer.disconnect();
    };
  }, []);

  const { contextSafe } = useGSAP(() => { }, { scope: containerRef });

  useEffect(() => {
    const triggerAnim = contextSafe(() => {
      let mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(".hero-anim",
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.1, ease: "power2.out", delay: 0.2, overwrite: "auto" }
        );
      });
    });
    triggerAnim();
  }, [activeSlide, contextSafe]);

  useEffect(() => {
    if (isPaused || !inView) return;

    const timer = setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, slides[activeSlide].duration);

    return () => clearTimeout(timer);
  }, [activeSlide, isPaused, inView]);

  useEffect(() => {
    const vid = videoRefs.current[activeSlide];
    if (vid) {
      vid.currentTime = 0;
    }
  }, [activeSlide]);

  useEffect(() => {
    videoRefs.current.forEach((vid, idx) => {
      if (vid) {
        if (idx === activeSlide && inView && !isPaused) {
          vid.play().catch(() => { });
        } else {
          vid.pause();
        }
      }
    });
  }, [activeSlide, inView, isPaused]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh]  bg-black overflow-hidden flex items-center"
      onMouseEnter={() => !prefersReducedMotion && setIsHoverPaused(true)}
      onMouseLeave={() => !prefersReducedMotion && setIsHoverPaused(false)}
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

      {/* Dynamic Content */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <h1 className="hero-anim font-display text-5xl md:text-6xl lg:text-7xl font-black  text-white uppercase  mb-6">
            {slides[activeSlide].headline}
          </h1>
          <p className="hero-anim text-xl text-zinc-300 font-light mb-8">
            {slides[activeSlide].subcopy}
          </p>

          {/* Feature Strip */}
          <div className="hero-anim flex flex-wrap items-center gap-x-3 gap-y-2 mb-10 text-[10px] font-bold text-white/80 uppercase ">
            {slides[activeSlide].features.map((feature, idx) => (
              <span key={idx} className="flex items-center">
                {feature}
                {idx < slides[activeSlide].features.length - 1 && (
                  <span className="mx-3 text-white/30">|</span>
                )}
              </span>
            ))}
          </div>

          <div className="hero-anim flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-none bg-green-600 px-8 py-4 text-sm font-bold text-white hover:bg-green-700 transition-colors uppercase r">
              Get a Quote
            </Link>
            <Link href="/products" className="inline-flex items-center justify-center rounded-none bg-transparent border border-white px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition-colors uppercase r">
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
              onClick={() => setIsUserPaused(!isUserPaused)}
              className="text-white/70 hover:text-white transition-colors p-2"
              aria-label={isUserPaused ? "Play slider" : "Pause slider"}
            >
              {isUserPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
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
