"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// TODO: Replace with real sourced testimonials before final launch.
// Do not use fabricated quantitative claims.
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

export default function CustomerQuotes() {
  const containerRef = useRef(null);
  
  const isDev = process.env.NODE_ENV === "development";

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".quote-anim", {
        scrollTrigger: { trigger: containerRef.current, start: "top 80%", toggleActions: "play none none none", once: true},
        y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.1, ease: "power2.out"
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 relative">
      {/* TODO: PLACEHOLDER TESTIMONIALS - Replace with real sourced testimonials before launch */}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="quote-anim mb-16 text-center">
          <h2 className="font-display text-4xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase">
            What Our Customers Say
          </h2>
        </div>

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
