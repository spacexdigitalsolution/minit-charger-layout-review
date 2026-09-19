"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { industryCategories } from "@/data/categories";
import ConversionBand from "@/app/components/ConversionBand";

gsap.registerPlugin(ScrollTrigger);

const industryData = {
  "aviation-gse": {
    image: "/assets/homepage/Outdoor eGSE & yards-01.webp",
    description: "Keep your airport ground support operations moving with rapid, reliable charging infrastructure designed for the tarmac."
  },
  "warehouse": {
    image: "/assets/homepage/Indoor material handling-01.webp",
    description: "Optimize material handling efficiency with compact, high-throughput charging solutions that eliminate operational bottlenecks."
  },
  "commercial-fleets": {
    image: "", // Asset gap: context photo needed
    description: "Empower your commercial fleet with universal charging platforms capable of supporting diverse vehicle types."
  }
};

function IndustryBlock({ industry, index }) {
  const containerRef = useRef(null);
  const isEven = index % 2 === 0;
  const data = industryData[industry.id] || { description: "Industry solutions in development.", image: "" };

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
          once: true
        }
      });

      tl.from(".ind-image", {
        x: isEven ? -50 : 50,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "all"
      })
        .from(".ind-text", {
          x: isEven ? 50 : -50,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power2.out",
          clearProps: "all"
        }, "-=0.6");
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh] bg-white text-zinc-900 overflow-hidden border-b border-zinc-100">
      <div className={`ind-image relative h-[40vh] md:h-auto bg-zinc-50 ${isEven ? "md:order-1" : "md:order-2"}`}>
        {data.image ? (
          <Image
            src={data.image}
            alt={industry.name}
            fill
            className="object-contain object-center p-8 md:p-16"
          />
        ) : (
          <div className="absolute inset-0 bg-zinc-100 flex items-center justify-center p-8 text-center">
            <span className="text-zinc-500 font-oswald uppercase ">Asset Gap: Context Photo Needed</span>
          </div>
        )}
      </div>
      <div className={`ind-text flex flex-col justify-center p-8 md:p-16 lg:p-24 ${isEven ? "md:order-2" : "md:order-1"}`}>
        <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase  mb-6">
          {industry.name}
        </h2>
        <p className="font-sans text-lg text-zinc-600 mb-8 max-w-lg">
          {data.description}
        </p>
        <div>
          <Link
            href={industry.slug}
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-none bg-zinc-900 px-8 text-sm font-bold uppercase r text-white transition-all hover:bg-[#8CD34D] hover:text-zinc-900"
          >
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="pt-24 bg-zinc-950 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-4 mt-12 text-center">
          <h1 className="font-oswald text-5xl md:text-5xl font-bold uppercase  text-white mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl font-sans mx-auto">
            Tailored charging infrastructure for the world's most demanding operational environments.
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        {industryCategories.map((industry, idx) => (
          <IndustryBlock key={industry.id} industry={industry} index={idx} />
        ))}
      </div>

      <ConversionBand
        headline="Ready to power your operations?"
        primaryCTA={{ label: "Contact Us", href: "/contact" }}
        secondaryCTA={{ label: "View Products", href: "/products" }}
      />
    </main>
  );
}
