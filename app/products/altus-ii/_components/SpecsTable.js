"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Download } from "lucide-react";
import SmartImage from "../../../components/SmartImage";

gsap.registerPlugin(ScrollTrigger);

const specCategories = [
  {
    name: "Input Power",
    specs: [
      { label: "Nominal Input Voltage", value: "323-530VAC, 3 Phase (4-Wire), 50/60Hz" },
      { label: "Rated Input Current", value: "52A @ 480VAC" },
      { label: "Max Efficiency", value: "95%" },
    ]
  },
  {
    name: "Output Power",
    specs: [
      { label: "Output Power Rating", value: "40 kW" },
      { label: "Output Voltage Range", value: "24-100 VDC" },
    ]
  },
  {
    name: "Hardware",
    specs: [
      { label: "Port Options", value: "Anderson, Euro 320, REMA 320, BIW, J1772" },
      { label: "User Interface", value: "7\" Graphic LCD with Touch Panel" },
      { label: "Communication", value: "Cellular, Wi-Fi, Ethernet" },
    ]
  },
  {
    name: "Environmental",
    specs: [
      { label: "Operating Temperature", value: "-13°F to 122°F (-25°C to 50°C)" },
      { label: "Dimensions & Weight", value: "63\"H x 20\"W x 12\"D, 250lbs (113 kg)" },
      { label: "Mounting", value: "Pedestal Mount" },
    ]
  }
];

export default function SpecsTable() {
  const containerRef = useRef(null);
  const tabsWrapperRef = useRef(null);
  const tabsRef = useRef([]);
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const { contextSafe } = useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: { 
          trigger: containerRef.current, 
          start: "top 80%", toggleActions: "play none none none", once: true}
      });
      
      tl.from(".specs-anim", { y: 30, autoAlpha: 0, duration: 0.8, stagger: 0.1, ease: "power2.out", clearProps: "all" });
    });
    
    // Initial indicator position
    if (tabsRef.current[0]) {
      gsap.set(".tab-indicator", {
        x: tabsRef.current[0].offsetLeft,
        width: tabsRef.current[0].offsetWidth
      });
    }
  }, { scope: containerRef });

  const handleTabChange = contextSafe((index) => {
    if (index === activeTab || isAnimating) return;
    setIsAnimating(true);
    
    // Slide indicator
    if (tabsRef.current[index]) {
      gsap.to(".tab-indicator", {
        x: tabsRef.current[index].offsetLeft,
        width: tabsRef.current[index].offsetWidth,
        duration: 0.3,
        ease: "power2.out"
      });
    }

    // Animate rows out
    gsap.to(".spec-row", {
      autoAlpha: 0,
      x: -10,
      duration: 0.15,
      stagger: 0.02,
      onComplete: () => {
        setActiveTab(index);
        // Animate rows in
        gsap.fromTo(".spec-row",
          { autoAlpha: 0, x: 10 },
          { autoAlpha: 1, x: 0, duration: 0.2, stagger: 0.05, ease: "power2.out", clearProps: "all",
            onComplete: () => setIsAnimating(false)
          }
        );
      }
    });
  });

  return (
    <section ref={containerRef} id="specs" className="py-24 bg-white dark:bg-zinc-950 overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="specs-anim flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="font-display text-4xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-zinc-500 font-light max-w-xl">
              Comprehensive datasheet and engineering specifications for the Altus II platform.
            </p>
          </div>
          <a href="#" className="mt-8 md:mt-0 group inline-flex items-center text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors">
            Download PDF
            <Download className="ml-3 h-5 w-5 text-green-600 group-hover:scale-110 transition-transform" />
          </a>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Product Render */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32 specs-anim">
            <div className="bg-zinc-50 dark:bg-zinc-900/40 rounded-2xl p-10 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center min-h-[500px]">
              <SmartImage 
                src="/assets/Products/altus-ii/context/altus_specs_render.png" 
                alt="Altus II Hardware Render" 
                width={500} 
                height={500}
                className="object-contain w-full h-auto drop-shadow-2xl mix-blend-multiply dark:mix-blend-normal"
                priority
              />
            </div>
          </div>

          {/* Right Column: Spec Data */}
          <div className="lg:col-span-7">
            {/* Tabs Row */}
            <div ref={tabsWrapperRef} className="specs-anim mb-8 border-b border-zinc-200 dark:border-zinc-800 flex overflow-x-auto hide-scrollbar relative">
              {specCategories.map((cat, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={index}
                    ref={el => tabsRef.current[index] = el}
                    onClick={() => handleTabChange(index)}
                    className={`pb-4 px-1 mr-8 text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${
                      isActive ? "text-zinc-900 dark:text-white" : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
              <span className="tab-indicator absolute bottom-0 left-0 h-[2px] bg-zinc-900 dark:bg-white" />
            </div>

            {/* Tab Content */}
            <div className="specs-anim">
              <div className="divide-y divide-zinc-200 dark:divide-zinc-800 border-t border-b border-zinc-200 dark:border-zinc-800">
                {specCategories[activeTab].specs.map((spec, i) => (
                  <div key={`${activeTab}-${i}`} className="spec-row flex flex-col sm:flex-row py-6 sm:items-center">
                    <div className="sm:w-1/3 mb-2 sm:mb-0 pr-4">
                      <span className="text-sm text-zinc-500 dark:text-zinc-400 font-normal">
                        {spec.label}
                      </span>
                    </div>
                    <div className="sm:w-2/3">
                      <span className="text-base text-zinc-900 dark:text-zinc-100 font-semibold">
                        {spec.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
