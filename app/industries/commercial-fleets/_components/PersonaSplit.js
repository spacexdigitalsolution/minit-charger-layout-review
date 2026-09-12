"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SmartImage from "../../../components/SmartImage";

gsap.registerPlugin(ScrollTrigger);

const personaContent = {
  managers: {
    id: "managers",
    label: "Fleet Managers",
    headline: "Keep Vehicles on the Road",
    problem: "You have a mixed fleet of class 2 to class 6 vehicles. Managing different charger types, cables, and software dashboards creates a disjointed, chaotic depot.",
    solution: "Unify your depot with a multi-voltage platform that handles your entire mixed fleet. Monitor vehicle state-of-charge, schedule charging, and manage uptime from a single cloud dashboard.",
    image: null
  },
  facilities: {
    id: "facilities",
    label: "Facilities & Energy",
    headline: "Scale Without the Substation",
    problem: "Adding chargers usually means requesting multi-million dollar transformer upgrades and waiting 18 months for utility interconnection.",
    solution: "Intelligent load management dynamically distributes available power based on vehicle departure schedules. Add more chargers to your existing electrical capacity without blowing peak demand limits.",
    image: null
  },
  executives: {
    id: "executives",
    label: "Executives & Finance",
    headline: "De-risk the Transition",
    problem: "Electrifying a commercial fleet involves massive capital expenditure and the risk of stranding assets if technology changes or software companies fail.",
    solution: "Future-proof hardware designed for a 10+ year lifespan. Our platforms are chemistry-agnostic, OCPP-compliant, and built to scale alongside your operations seamlessly.",
    image: null
  }
};

export default function PersonaSplit() {
  const [activePersona, setActivePersona] = useState("managers");
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  const { contextSafe } = useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".persona-nav", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", once: true,
        },
        y: 20,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power2.out",
        clearProps: "all"
      });
      
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%", once: true,
        },
        y: 20,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power2.out",
        clearProps: "all"
      });
    });
  }, { scope: containerRef });

  const handleTabClick = contextSafe((id) => {
    if (id === activePersona) return;
    
    gsap.to(contentRef.current, {
      autoAlpha: 0,
      y: 10,
      duration: 0.2,
      onComplete: () => {
        setActivePersona(id);
        gsap.to(contentRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out"
        });
      }
    });
  });

  const activeData = personaContent[activePersona];

  return (
    <section ref={containerRef} className="py-24 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Tabs */}
        <div className="persona-nav flex flex-wrap justify-center gap-2 mb-16">
          {Object.values(personaContent).map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`px-6 py-3 text-sm font-bold uppercase tracking-wider rounded-sm transition-all duration-300 ${
                activePersona === tab.id
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950"
                  : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Content */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          <div className="lg:col-span-6">
            <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-4 block">
              Built For Your Role
            </span>
            <h2 className="font-display text-3xl font-black tracking-tighter text-zinc-900 dark:text-white sm:text-4xl uppercase mb-10 leading-tight">
              {activeData.headline}
            </h2>
            
            <div className="mb-8">
              <h3 className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-3 border-b border-zinc-200 dark:border-zinc-800 pb-2">The Challenge</h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {activeData.problem}
              </p>
            </div>

            <div>
              <h3 className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-3 border-b border-zinc-200 dark:border-zinc-800 pb-2">The Capability</h3>
              <p className="text-lg text-zinc-900 dark:text-white leading-relaxed font-medium">
                {activeData.solution}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative w-full aspect-square md:aspect-[4/3] bg-zinc-100 dark:bg-zinc-900 overflow-hidden rounded-sm">
            <SmartImage 
              key={activeData.id}
              src={activeData.image} 
              alt={activeData.label} 
              fill 
              className="object-contain object-center p-4"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
