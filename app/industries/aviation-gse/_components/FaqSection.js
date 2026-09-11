"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Plus } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "Do I need separate chargers for low-voltage baggage tractors and high-voltage EVs?",
    answer: "No. With our Magnus platform, you can support 24-1000 VDC on a single charger. This eliminates the need for separate charging architectures as you transition your fleet to higher voltage equipment."
  },
  {
    question: "How do we deploy chargers if our airport has limited electrical capacity?",
    answer: "Minit Charger utilizes intelligent power sharing to sequence charging across connected vehicles, maximizing the utilization of your available power without overdrawing the grid. Additionally, our Mobilus platform offers mobile energy storage and charging to bypass grid constraints entirely."
  },
  {
    question: "Can these chargers survive the harsh conditions on the ramp?",
    answer: "Yes. Our outdoor-rated enclosures are designed specifically to withstand harsh weather, jet blast, and extreme temperatures, ensuring maximum uptime."
  },
  {
    question: "How do we handle energy billing for different ground handlers?",
    answer: "Our chargers can integrate certified energy metering that precisely tracks power usage. This data syncs to the AssetPro cloud platform, allowing for automated compliance reporting and streamlined billing by vehicle or tenant."
  },
  {
    question: "Does Minit support lead-acid batteries or only lithium-ion?",
    answer: "Our charging ecosystem is chemistry-agnostic. We support Lead Acid, Lithium-ion, AGM, and standard EV battery architectures, ensuring compatibility across mixed legacy and modern fleets."
  }
];

export default function FaqSection() {
  const containerRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

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
      
      tl.from(".faq-anim", { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.15, ease: "power2.out", clearProps: "all" });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-16 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Heading & Intro */}
          <div className="lg:col-span-4 mb-12 lg:mb-0 faq-anim">
            <h2 className="font-display text-3xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase mb-4">
              Aviation GSE FAQ
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 font-light text-lg">
              Answers to the most common questions from ground handlers, airlines, and airport authorities regarding fleet electrification.
            </p>
          </div>
          
          {/* Right Column: Flat Accordion List */}
          <div className="lg:col-span-8">
            <div className="border-t border-zinc-200 dark:border-zinc-800 divide-y divide-zinc-200 dark:divide-zinc-800">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="faq-anim">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                    >
                      <span className="font-bold text-lg text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors pr-8">
                        {faq.question}
                      </span>
                      <span className={`shrink-0 text-zinc-400 dark:text-zinc-500 transition-all duration-300 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 ${isOpen ? "rotate-45" : "rotate-0"}`}>
                        <Plus className="w-5 h-5" />
                      </span>
                    </button>
                    <div 
                      className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden">
                        <div className="text-zinc-600 dark:text-zinc-400 font-light pr-12 pb-2">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
