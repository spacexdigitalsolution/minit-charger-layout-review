"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function RelatedProducts() {
  const containerRef = useRef(null);

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

      tl.from(".rp-header", { y: 20, autoAlpha: 0, duration: 0.6, ease: "power2.out", clearProps: "all" })
        .from(".rp-card", { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.15, ease: "power2.out", clearProps: "all" }, "-=0.3");
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rp-header flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="font-display text-4xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase mb-4">
              Explore the Ecosystem
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl font-light">
              Purpose-built charging platforms for every fleet application.
            </p>
          </div>
          <Link href="/products" className="mt-6 md:mt-0 inline-flex items-center text-green-600 font-bold hover:text-green-700 transition-colors uppercase tracking-wider text-sm group">
            View All Products <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/products/magnus" className="rp-card group block bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-green-500 transition-colors">
            <div className="aspect-[4/3] bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center border-b border-zinc-200 dark:border-zinc-800 p-8">
              <span className="text-xs text-zinc-400 uppercase tracking-widest">[Magnus Asset Gap]</span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl font-bold text-zinc-900 dark:text-white uppercase mb-2">Magnus</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">Universal Mixed Fleet • 100-200 kW</p>
              <span className="text-green-600 text-sm font-bold uppercase tracking-wider group-hover:text-green-700">Explore Platform &rarr;</span>
            </div>
          </Link>

          <Link href="/products/momentus" className="rp-card group block bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-green-500 transition-colors">
            <div className="aspect-[4/3] bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center border-b border-zinc-200 dark:border-zinc-800 p-8">
              <span className="text-xs text-zinc-400 uppercase tracking-widest">[Momentus Asset Gap]</span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl font-bold text-zinc-900 dark:text-white uppercase mb-2">Momentus</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">Industrial / Forklift • 20 kW</p>
              <span className="text-green-600 text-sm font-bold uppercase tracking-wider group-hover:text-green-700">Explore Platform &rarr;</span>
            </div>
          </Link>

          <Link href="/products/maximus" className="rp-card group block bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-green-500 transition-colors">
            <div className="aspect-[4/3] bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center border-b border-zinc-200 dark:border-zinc-800 p-8">
              <span className="text-xs text-zinc-400 uppercase tracking-widest">[Maximus Asset Gap]</span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl font-bold text-zinc-900 dark:text-white uppercase mb-2">Maximus</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">High-Throughput Industrial • 40 kW</p>
              <span className="text-green-600 text-sm font-bold uppercase tracking-wider group-hover:text-green-700">Explore Platform &rarr;</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
