"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const points = [
  {
    challenge: "Cables always on the ground, at risk of damage?",
    solution: "A retractor pulls the cables up after every charge, keeping them off the ground and away from wheels."
  },
  {
    challenge: "Never sure which vehicle is fully charged?",
    solution: "Cumulus (our live dashboard) shows every vehicle's charge level, with a ready-to-use list for your team."
  },
  {
    challenge: "Too little time to charge between flights?",
    solution: "Dual 20 kW ports charge two vehicles at once, so even short stops between flights become charging time."
  },
  {
    challenge: "Can one small fault stop the whole charger?",
    solution: "The dual charging ports work independently. If one has a fault, the other keeps charging as normal."
  },
  {
    challenge: "Finding out about a fault too late?",
    solution: "Cumulus (our live dashboard) sends an alert the moment a fault appears, naming the charger and the problem."
  },
  {
    challenge: "Could a charger repair take many days?",
    solution: "The screen shows the exact fault, and the power modules slide out like drawers for quick replacement."
  },
  {
    challenge: "Will your power supply handle more chargers?",
    solution: "The charger can run on spare power from your passenger bridges, so adding chargers need not mean adding supply."
  },
  {
    challenge: "Different vehicles, each needing a different charger?",
    solution: "A single charger for all your vehicles (48 to 1000 volts), charging buses, trucks, passenger EVs, high-voltage ground equipment, and forklifts."
  },
  {
    challenge: "Different battery types, at risk of wrong charging?",
    solution: "CellTrac (a small tracker on each battery) tells the charger the battery type, so lead-acid and lithium each charge correctly."
  },
  {
    challenge: "Batteries at risk of wearing out early?",
    solution: "Every charge adjusts to the battery's temperature, and CellTrac (a small tracker on each battery) records its health over time."
  },
  {
    challenge: "Never sure where each vehicle is?",
    solution: "CellTrac (a small tracker on each battery) follows every vehicle by GPS and shows them all on one live map."
  },
  {
    challenge: "Shared chargers, but who pays how much?",
    solution: "Cumulus (our live dashboard) records each company's charging time and energy used, then prepares the bill automatically."
  },
  {
    challenge: "Vehicles parked far from any power point?",
    solution: "Mobilus (a battery charger on wheels) goes to where vehicles are parked, with six ports and no power point needed there."
  }
];

export default function ChallengesScroll() {
  const containerRef = useRef(null);
  
  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const cards = gsap.utils.toArray('.challenge-item');
      
      cards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 30,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power2.out"
        });
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Sticky Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 mb-16 lg:mb-0">
            <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase block mb-4">
              Challenges & Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-zinc-900 dark:text-white uppercase leading-[1] mb-6">
              Electrifying the Airports Is the New Norm.
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light pr-8">
              Incapable chargers have made horrifying experiences on the ramp yet, so staff fear chargers. <strong className="text-zinc-900 dark:text-white font-bold">But not anymore.</strong>
            </p>
          </div>
          
          {/* Scrolling Right Column (Minimalist List) */}
          <div className="lg:col-span-7 border-t border-zinc-200 dark:border-zinc-800 divide-y divide-zinc-200 dark:divide-zinc-800">
            {points.map((pt, i) => (
              <div key={i} className="challenge-item py-12 lg:grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-2 hidden lg:block">
                   <span className="font-display font-black text-4xl text-zinc-200 dark:text-zinc-800 leading-none">
                     {String(i + 1).padStart(2, '0')}
                   </span>
                </div>
                <div className="lg:col-span-10">
                  <h3 className="text-2xl font-display font-black text-zinc-900 dark:text-white uppercase leading-tight mb-4 pr-4">
                    {pt.challenge}
                  </h3>
                  <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                    {pt.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
