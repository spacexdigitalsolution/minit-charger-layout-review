"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import SmartImage from "../components/SmartImage";
import HoverZoomImage from "../components/HoverZoomImage";
import { ArrowRight } from "lucide-react";

import { products } from "@/data/products";
import { industries } from "@/data/industries";

gsap.registerPlugin(ScrollTrigger);

export default function TabbedProductCatalog() {
  const [activeTab, setActiveTab] = useState(industries[0].id);
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  const { contextSafe } = useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".catalog-nav", {
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
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%", once: true,
        }
      });

      tl.from(".catalog-card", { 
        y: 20, 
        autoAlpha: 0, 
        duration: 0.6, 
        stagger: 0.1, 
        ease: "power2.out", 
        clearProps: "all" 
      });
    });
  }, { scope: containerRef });

  const handleTabClick = contextSafe((id) => {
    if (id === activeTab) return;
    
    gsap.to(contentRef.current, {
      autoAlpha: 0,
      y: 10,
      duration: 0.2,
      onComplete: () => {
        setActiveTab(id);
        gsap.set(contentRef.current, { y: 0 });
        
        // Setup new stagger
        gsap.fromTo(".catalog-card", 
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.4, stagger: 0.1, ease: "power2.out", clearProps: "all" }
        );
        
        gsap.to(contentRef.current, {
          autoAlpha: 1,
          duration: 0.4,
        });
      }
    });
  });

  const activeIndustry = industries.find(ind => ind.id === activeTab);
  
  const filteredProducts = products.filter(p => {
    if (activeIndustry.matchIndustry) {
      return p.industries.includes(activeIndustry.matchIndustry);
    }
    if (activeIndustry.matchCategory) {
      return p.categoryTag === activeIndustry.matchCategory;
    }
    return false;
  }).map(p => ({
    ...p,
    kicker: p.categoryTag,
    image: p.cardImage,
    link: p.productPageUrl,
    description: p.shortDescription || p.keyUSP
  }));

  const gridColsClass = filteredProducts.length === 1 ? "md:grid-cols-1 max-w-sm mx-auto" : 
                        filteredProducts.length === 2 ? "md:grid-cols-2 max-w-4xl mx-auto" : 
                        filteredProducts.length === 3 ? "md:grid-cols-3" : 
                        "md:grid-cols-2 lg:grid-cols-4";

  return (
    <section ref={containerRef} className="py-24 bg-zinc-950 text-white overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="catalog-nav font-display text-4xl md:text-5xl font-black tracking-tighter uppercase mb-8">
            Purpose-Built Platforms
          </h2>
          
          {/* Navigation Tabs */}
          <div className="catalog-nav flex flex-wrap justify-center gap-2">
            {industries.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`px-6 py-3 text-sm font-bold uppercase tracking-wider rounded-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-white text-zinc-950"
                    : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Content */}
        <div ref={contentRef} className={`grid grid-cols-1 ${gridColsClass} gap-4`}>
          {filteredProducts.map((product) => {
            const paddingClass = product.imagePadding || 'p-4 pb-32';
            
            return (
              <Link
                key={product.id}
                href={product.link}
                className={`catalog-card group relative block aspect-square overflow-hidden rounded-sm bg-zinc-900 w-full`}
              >
                {product.image ? (
                  <HoverZoomImage>
                    <SmartImage
                      src={product.image}
                      alt={product.name}
                      fill
                      className={`object-contain ${paddingClass} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                  </HoverZoomImage>
                ) : (
                  <div className={`absolute inset-0 bg-zinc-900 border-zinc-800 border flex items-center justify-center text-zinc-600 text-xs uppercase tracking-widest`}>
                    Asset Missing
                  </div>
                )}

                {/* Gradient Overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90"></div>

                {/* Text Content overlay */}
                <div className="absolute inset-0 p-8 pr-16 flex flex-col justify-end pointer-events-none">
                  {product.kicker && (
                    <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest mb-2 pointer-events-auto">
                      {product.kicker}
                    </span>
                  )}
                  <h3 className="font-display text-3xl font-bold uppercase tracking-wide text-white pointer-events-auto">
                    {product.name}
                  </h3>
                  {product.description && (
                    <p className="mt-2 text-sm text-zinc-300 line-clamp-2 group-hover:text-white transition-colors pointer-events-auto">
                      {product.description}
                    </p>
                  )}
                </div>

                {/* Arrow Icon */}
                <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center transition-colors group-hover:bg-white group-hover:border-white shrink-0">
                  <ArrowRight className="h-4 w-4 text-white group-hover:text-zinc-950 transition-colors" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
