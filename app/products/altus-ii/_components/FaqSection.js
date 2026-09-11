"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Plus, Minus } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What battery chemistries does the Altus II support?",
    answer: "The Altus II is universally compatible and chemistry-agnostic. It seamlessly supports Lead Acid, Lithium-ion, and standard EV battery architectures."
  },
  {
    question: "Can it charge both heavy GSE and passenger EVs?",
    answer: "Yes. By utilizing the optional 3rd port for Level 2 (J1772) charging, the Altus II can simultaneously support your heavy-duty fleet and light passenger EVs."
  },
  {
    question: "Does the charger require significant infrastructure upgrades?",
    answer: "No. Our intelligent power sharing technology sequences charging across connected vehicles, ensuring maximum utilization of your available power without overdrawing the grid or requiring costly peak load upgrades."
  },
  {
    question: "Is it rated for outdoor environments?",
    answer: "Absolutely. The Altus II is built for the harshest ramp conditions with an IP54 outdoor-rated enclosure and an operating minimum temperature of -13°F."
  },
  {
    question: "How does the automated billing work?",
    answer: "The Altus II integrates a certified energy meter that precisely tracks power usage. This data is synced to the AssetPro cloud platform, allowing for automated compliance reporting and streamlined billing."
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
              Common Questions
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 font-light text-lg">
              Find answers to the most common inquiries regarding the Altus II deployment, hardware capabilities, and ecosystem integrations.
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
