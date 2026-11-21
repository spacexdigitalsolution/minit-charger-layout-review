// section: tabbed-product-catalog
"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import SmartImage from "@/components/SmartImage";
import { ArrowRight } from "lucide-react";

import { products } from "@/data/products";
import { industries } from "@/data/industries";

gsap.registerPlugin(ScrollTrigger);

export default function TabbedProductCatalog() {
  const [activeTab, setActiveTab] = useState(industries[0].id);
  const contentRef = useRef(null);
  const containerRef = useRef(null);
  const isInitialMount = useRef(true);

  useGSAP(() => {
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

  useGSAP(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    gsap.fromTo(
      ".catalog-card",
      { y: 20, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.4, stagger: 0.08, ease: "power2.out", clearProps: "all" }
    );

    gsap.to(contentRef.current, {
      autoAlpha: 1,
      y: 0,
      duration: 0.3,
    });
  }, { dependencies: [activeTab], scope: containerRef });

  const handleTabClick = (id) => {
    if (id === activeTab) return;

    gsap.to(contentRef.current, {
      autoAlpha: 0,
      y: 10,
      duration: 0.15,
      onComplete: () => {
        setActiveTab(id);
      }
    });
  };

  const activeIndustry = industries.find(ind => ind.id === activeTab);

  const rawProducts = activeIndustry?.recommendedProductIds
    ? activeIndustry.recommendedProductIds.map(id => products.find(p => p.id === id)).filter(Boolean)
    : products.filter(p => {
        if (activeIndustry?.matchIndustry) {
          return p.industries?.includes(activeIndustry.matchIndustry);
        }
        if (activeIndustry?.matchCategory) {
          return p.categoryTag === activeIndustry.matchCategory;
        }
        return p.industries?.includes(activeIndustry?.id) || p.industries?.includes(activeIndustry?.slug);
      });

  const filteredProducts = rawProducts.map(p => ({
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
    <section ref={containerRef} data-section="tabbed-product-catalog" className="py-24 bg-zinc-950 text-white overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="catalog-nav font-display text-4xl md:text-5xl font-black  uppercase mb-8">
            Purpose-Built Platforms
          </h2>

          {/* Navigation Tabs */}
          <div className="catalog-nav flex flex-wrap justify-center gap-2">
            {industries.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`px-6 py-3 text-sm font-bold uppercase r rounded-sm transition-all duration-300 ${activeTab === tab.id
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
            const paddingClass = product.imagePadding || "p-6";

            return (
              <Link
                key={product.id}
                href={product.link}
                className="catalog-card group flex flex-col rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/90 hover:border-zinc-700 hover:shadow-2xl transition-all duration-300 h-full w-full"
              >
                {/* Level 1: Dedicated Non-Overlapping Image Stage */}
                <div className="relative w-full aspect-[4/3] bg-zinc-950/70 flex items-center justify-center overflow-hidden shrink-0 border-b border-zinc-800/80">
                  <SmartImage
                    src={product.image || null}
                    alt={product.name}
                    fill
                    mode={product.image ? "image" : "placeholder"}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                    className={`object-contain ${paddingClass} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                </div>

                {/* Level 2-5: Structured Content Area Completely Below Image */}
                <div className="flex flex-col flex-grow p-5 sm:p-6">
                  {product.kicker && (
                    <div className="mb-2.5">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-950/40 text-emerald-400 border border-emerald-800/50">
                        {product.kicker}
                      </span>
                    </div>
                  )}

                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wide text-white">
                    {product.name}
                  </h3>

                  {product.description && (
                    <p className="mt-2 text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  )}

                  <div className="mt-auto pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-zinc-300 group-hover:text-emerald-400 transition-colors">
                    <span>Explore Details</span>
                    <ArrowRight className="h-4 w-4 text-emerald-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
