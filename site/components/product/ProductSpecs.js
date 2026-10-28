"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Download } from "lucide-react";
import ProductGallery from "./ProductGallery";

gsap.registerPlugin(ScrollTrigger);

export default function ProductSpecs({ product }) {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  const specCategories = [
    {
      name: "Output Power",
      specs: [
        { label: "Output Power Rating", value: product.specs?.powerOutput || "Continuous Duty" },
        { label: "Output Voltage Range", value: product.specs?.outputVoltage || "24–1000 VDC" },
        { label: "Port Configuration", value: product.specs?.portConfiguration || "Dual Independent Ports" },
        { label: "Charging Type", value: product.specs?.chargingType || "DC Fast / Opportunity" },
      ]
    },
    {
      name: "Input Power",
      specs: [
        { label: "Nominal Input Voltage", value: product.specs?.inputVoltage || "208–480 VAC, 3Ø, 50/60Hz" },
        { label: "Maximum Electrical Efficiency", value: product.specs?.maxEfficiency || "Up to 95%" },
        { label: "Power Factor Correction", value: "> 0.98 at rated load" },
      ]
    },
    {
      name: "Hardware & Interface",
      specs: [
        { label: "User Interface / Display", value: "High-contrast LCD with diagnostic status" },
        { label: "Connector Options", value: "Euro 320, Anderson, REMA, CCS, J1772" },
        { label: "Cable Management", value: "Integrated strain relief with overhead retractor option" },
        { label: "Network Connectivity", value: "Cellular 4G/LTE, Ethernet, Wi-Fi, OCPP 1.6J" },
      ]
    },
    {
      name: "Environmental",
      specs: [
        { label: "Operating Temperature", value: product.specs?.operatingTemp || "-25°C to 50°C (-13°F to 122°F)" },
        { label: "Enclosure Ingress Rating", value: product.specs?.ingressProtection || "IP54 / NEMA 3R" },
        { label: "Regulatory Compliance", value: "UL 1564, UL 2202, CE, FCC Class A" },
      ]
    }
  ];

  const galleryImages = [
    {
      src: product.cardImage || "/assets/homepage/Altus II.webp",
      alt: `${product.name} Main Profile View`,
      desc: `${product.name} Angled Profile Placeholder`
    },
    {
      src: product.heroImage || product.cardImage || "/assets/homepage/Altus II.webp",
      alt: `${product.name} Front Enclosure`,
      desc: `${product.name} Front Face & HMI Display Placeholder`
    },
    {
      src: "/assets/homepage/Altus II.webp",
      alt: `${product.name} Connector Bay`,
      desc: `${product.name} Power Coupler & Cable Bay Placeholder`
    }
  ];

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".specs-anim", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="specs" data-section="product-specs" className="py-24 bg-white dark:bg-zinc-950 border-b-2 border-zinc-200 dark:border-zinc-900 overflow-hidden relative">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="specs-anim max-w-4xl mb-16">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4 block">
            Engineering Precision
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-zinc-900 dark:text-white uppercase leading-[0.9] tracking-tighter mb-6">
            Technical Specifications
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-light max-w-2xl">
            Detailed electrical, mechanical, and environmental parameters for {product.name} fleet deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Spec Categories & Rows */}
          <div className="specs-anim lg:col-span-7">
            <div className="flex flex-wrap gap-2 mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-4">
              {specCategories.map((cat, idx) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-colors ${
                    activeTab === idx
                      ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950"
                      : "bg-zinc-100 text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400 hover:text-white"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {specCategories[activeTab].specs.map((spec) => (
                <div key={spec.label} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <dt className="text-xs uppercase font-mono tracking-wider text-zinc-500">
                    {spec.label}
                  </dt>
                  <dd className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white sm:text-right">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white hover:text-emerald-500 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Technical Datasheet
              </a>
              <span className="text-xs text-zinc-500 font-mono">Document Rev: 2026.4</span>
            </div>
          </div>

          {/* Right Column: Hardware Showcase Gallery with interactive zoom */}
          <div className="specs-anim lg:col-span-5">
            <ProductGallery images={galleryImages} />
          </div>
        </div>
      </div>
    </section>
  );
}
