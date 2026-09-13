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

const testimonials = [
  {
    quote: "Switching to this infrastructure entirely changed how we manage our ground support equipment. The chargers just run, and we finally have visibility into our real power usage without having to send someone out to check.",
    name: "Placeholder Name",
    title: "Director of Ground Operations",
    company: "Major Airline Logistics",
    initials: "PN"
  },
  {
    quote: "We needed a charging solution that could survive our outdoor elements and keep up with relentless shift demands. The durability and ease of use have made a massive difference for our ramp agents on a daily basis.",
    name: "Placeholder Name",
    title: "Fleet Manager",
    company: "Regional Hub Operations",
    initials: "PN"
  },
  {
    quote: "The ability to run both our older lead-acid gear and new lithium assets off the same stations has simplified our transition immensely. It's an intelligent system that just works in the background.",
    name: "Placeholder Name",
    title: "VP of Facilities",
    company: "National Distribution Center",
    initials: "PN"
  }
];

export default function ConsolidatedProof({ 
  title = "Trusted by the World's Best", 
  description = "For over two decades, leading fleets have relied on Minit Charger to keep their operations moving.", 
  stats = [
    { targetValue: 25, unit: "+", label: "Years Experience" },
    { targetValue: 15000, unit: "+", label: "Global Installs" },
    { targetValue: 99, unit: "%", label: "Uptime SLA" }
  ]
}) {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%", 
          toggleActions: "play none none none", 
          once: true
        }
      });

      tl.from(".proof-header", { y: 20, autoAlpha: 0, duration: 0.6, ease: "power2.out", clearProps: "all" })
        .from(".marquee-track", { autoAlpha: 0, duration: 0.6, ease: "power2.out", clearProps: "opacity,visibility" }, "-=0.3")
        .from(".quote-anim", { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }, "-=0.3");

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
            start: "top 85%", 
            toggleActions: "play none none none", 
            once: true
          }
        });
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header & Stats */}
        <div className="proof-header mb-16 text-center">
          <h2 className="font-display text-4xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase mb-6">
            {title}
          </h2>
          {description && (
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-light">
              {description}
            </p>
          )}

          {stats && (
            <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center relative">
                  <div className="font-display text-4xl font-black text-zinc-900 dark:text-white tracking-tighter flex items-center">
                    <span className="stat-num" data-target={stat.targetValue}>
                      {stat.targetValue}
                    </span>
                    {stat.unit}
                  </div>
                  <div className="text-xs font-bold text-green-600 dark:text-green-500 uppercase tracking-widest mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Logo Strip */}
        <div className="relative w-full overflow-hidden mt-20 mb-24 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-16 before:bg-gradient-to-r before:from-white dark:before:from-zinc-900 before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-16 after:bg-gradient-to-l after:from-white dark:after:from-zinc-900 after:to-transparent after:z-10">
          <div className="marquee-track flex w-max items-center gap-16 md:gap-24 pl-16 md:pl-24">
            {[...logos, ...logos].map((logo, idx) => (
              <div key={idx} className="w-[120px] md:w-[160px] shrink-0 aspect-[3/2] relative flex items-center justify-center">
                <SmartImage
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  fill
                  className="object-contain filter grayscale opacity-40 hover:opacity-100 transition-opacity duration-500 dark:brightness-0 dark:invert dark:opacity-60 dark:hover:opacity-100"
                  sizes="(max-width: 768px) 120px, 160px"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0 md:divide-x divide-zinc-200 dark:divide-zinc-800">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="quote-anim flex flex-col md:px-12 first:md:pl-0 last:md:pr-0">
              <p className="text-xl md:text-2xl text-zinc-900 dark:text-white font-light leading-relaxed mb-8 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              
              <div className="mt-auto flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-xs font-bold text-zinc-500 uppercase tracking-widest shrink-0 border border-zinc-200 dark:border-zinc-800">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
                    {testimonial.name}
                  </div>
                  <div className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mt-1">
                    {testimonial.title}
                    <br />
                    <span className="text-zinc-400 dark:text-zinc-500">{testimonial.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
