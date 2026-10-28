"use client";

import { useState, useRef, useEffect } from "react";
import SmartImage from "@/components/SmartImage";

export default function ProductGallery({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [zoomOrigin, setZoomOrigin] = useState("50% 50%");
  const containerRef = useRef(null);

  const isTouchDevice = () => {
    return typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container || isTouchDevice()) return;

    const handleWheel = (e) => {
      e.preventDefault();
      e.stopPropagation();

      setZoomLevel((prevZoom) => {
        const zoomStep = 0.2;
        const newZoom = e.deltaY < 0 ? prevZoom + zoomStep : prevZoom - zoomStep;
        return Math.min(Math.max(newZoom, 1), 4);
      });
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const handleMouseEnter = () => {
    if (!isTouchDevice()) setZoomLevel(2);
  };

  const handleMouseMove = (e) => {
    if (isTouchDevice() || !containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomOrigin(`${x}% ${y}%`);
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice()) setZoomLevel(1);
  };

  const handleImageClick = () => {
    if (isTouchDevice()) {
      setZoomLevel(zoomLevel === 1 ? 2 : 1);
      setZoomOrigin("50% 50%");
    }
  };

  const currentList = images && images.length > 0 ? images : [
    { src: "/assets/homepage/Altus II.webp", alt: "Hardware Profile" }
  ];

  return (
    <div data-section="product-gallery" className="flex flex-col space-y-4 w-full">
      {/* Main Image Container */}
      <div
        ref={containerRef}
        data-lenis-prevent="true"
        className="relative bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 flex items-center justify-center min-h-[500px] overflow-hidden group cursor-crosshair rounded-lg"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleImageClick}
      >
        {currentList.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out ${
              index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <SmartImage
              src={image.src}
              alt={image.alt}
              width={800}
              height={800}
              priority={index === 0}
              mode="placeholder"
              description={image.desc || image.alt}
              className="object-contain w-full h-full p-6 drop-shadow-2xl mix-blend-multiply dark:mix-blend-normal transition-transform motion-reduce:transition-none"
              style={{
                transformOrigin: zoomOrigin,
                transform: `scale(${index === activeIndex ? zoomLevel : 1})`,
                transitionDuration: zoomLevel > 1 ? "0s" : "300ms",
              }}
            />
          </div>
        ))}

        <div className="absolute top-4 right-4 bg-zinc-950 px-3 py-1.5 border border-zinc-800 text-[10px] uppercase tracking-widest font-bold text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
          Scroll to zoom
        </div>
      </div>

      {/* Thumbnails */}
      {currentList.length > 1 && (
        <div className="flex gap-4 overflow-x-auto hide-scrollbar py-2">
          {currentList.map((image, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setZoomLevel(1);
              }}
              className={`relative flex-shrink-0 w-24 h-24 border transition-all overflow-hidden rounded bg-zinc-100 dark:bg-zinc-900 ${
                index === activeIndex
                  ? "border-zinc-900 dark:border-white ring-2 ring-emerald-500/20"
                  : "border-zinc-300 dark:border-zinc-800 hover:border-zinc-500 dark:hover:border-zinc-600"
              }`}
              aria-label={`View ${image.alt}`}
            >
              <SmartImage
                src={image.src}
                alt={`Thumbnail of ${image.alt}`}
                fill
                mode="placeholder"
                description={`Thumbnail ${index + 1}`}
                className="object-contain p-2 mix-blend-multiply dark:mix-blend-normal"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

