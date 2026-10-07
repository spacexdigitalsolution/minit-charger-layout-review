"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Download } from "lucide-react";
import ProductGallery from "./ProductGallery";

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
      { label: "Port Configuration", value: "Dual Port" },
      { label: "Battery Chemistry Support", value: "Lead Acid, Lithium, EV" },
    ]
  },
  {
    name: "Hardware",
    specs: [
      { label: "Port Options", value: "Anderson, Euro 320, REMA 320, BIW (standard), J1772 (optional 3rd port)" },
      { label: "User Interface", value: "7\" Graphic LCD with Touch Panel" },
      { label: "Communication", value: "Cellular, Wi-Fi, Ethernet" },
      { label: "Protection", value: "Over current, voltage, short circuit, ground fault, over temp" },
      { label: "Regulatory Certification", value: "UL1564" },
    ]
  },
  {
    name: "Environmental",
    specs: [
      { label: "Operating Temperature", value: "-13°F to 122°F (-25°C to 50°C)" },
      { label: "Dimensions & Weight", value: "63\"H x 20\"W x 12\"D, 250lbs (113 kg)" },
      { label: "Mounting", value: "Pedestal Mount" },
      { label: "Enclosure Rating", value: "IP54" },
    ]
  }
];

const galleryImages = [
  { src: "/assets/Products/Altus II/Altus II Listing.webp", alt: "Altus II Hardware Render (Angled)" },
  { src: "/assets/Products/Altus II/ALTUSII_FRONT.webp", alt: "Altus II Hardware Render (Front)" },
  { src: "/assets/ai_placeholders/altus_side_profile_1789225073213.jpg", alt: "Altus II Side Profile" },
  { src: "/assets/ai_placeholders/altus_port_closeup_1789225089877.jpg", alt: "Altus II Port Close-up" },
  { src: "/assets/ai_placeholders/altus_screen_closeup_1789225105457.jpg", alt: "Altus II Screen Close-up" },
  { src: "/assets/ai_placeholders/altus_deployment_shot_1789225117192.jpg", alt: "Altus II Tarmac Deployment" }
];

export default function SpecsTable() {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".specs-anim", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", toggleActions: "play none none none"
        },
        y: 30, autoAlpha: 0, duration: 0.8, stagger: 0.1, ease: "power2.out"
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="specs" className="py-24 bg-white dark:bg-zinc-950 border-b-2 border-zinc-200 dark:border-zinc-900 overflow-hidden relative">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">

        {/* Header Area */}
        <div className="specs-anim flex flex-col md:flex-row md:items-end justify-between mb-16 border-b-4 border-zinc-900 dark:border-white pb-8">
          <div>
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4 block">Hardware Specifications</span>
            <h2 className="font-display text-4xl md:text-6xl font-black text-zinc-900 dark:text-white uppercase leading-none">
              The Full Technical Picture.
            </h2>
          </div>
          <a href="#" className="mt-8 md:mt-0 group inline-flex items-center text-sm font-bold uppercase text-zinc-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors">
            Download Tech Sheet
            <Download className="ml-3 h-5 w-5 group-hover:scale-110 transition-transform" />
          </a>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-24 items-start">

          {/* Left Column: Sticky Product Render */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32 specs-anim">
            <ProductGallery images={galleryImages} />
          </div>

          {/* Right Column: Spec Data */}
          <div className="lg:col-span-7">
            {/* Tabs Row */}
            <div className="specs-anim mb-12 border-b border-zinc-200 dark:border-zinc-800 flex overflow-x-auto hide-scrollbar relative gap-8">
              {specCategories.map((cat, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`pb-4 text-sm md:text-base font-bold uppercase tracking-wider whitespace-nowrap transition-colors border-b-2 ${isActive ? "border-zinc-900 dark:border-white text-zinc-900 dark:text-white" : "border-transparent text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                      }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="specs-anim">
              <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                {specCategories[activeTab].specs.map((spec, i) => (
                  <div key={`${activeTab}-${i}`} className="spec-row flex flex-col md:flex-row py-8 md:items-start">
                    <div className="md:w-2/5 mb-2 md:mb-0 pr-4">
                      <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold block mt-1">
                        {spec.label}
                      </span>
                    </div>
                    <div className="md:w-3/5">
                      <span className="text-xl md:text-2xl text-zinc-900 dark:text-white font-light leading-snug">
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
