"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function ProductGallery({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [zoomOrigin, setZoomOrigin] = useState("50% 50%");
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Detect touch device
    if (typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0)) {
      setIsTouchDevice(true);
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || isTouchDevice) return;

    const handleWheel = (e) => {
      e.preventDefault(); // Stop native page scroll
      e.stopPropagation(); // Stop event from reaching Lenis smooth scroll
      
      setZoomLevel((prevZoom) => {
        // e.deltaY > 0 means scroll down (zoom out), < 0 means scroll up (zoom in)
        const zoomStep = 0.2;
        let newZoom = e.deltaY < 0 ? prevZoom + zoomStep : prevZoom - zoomStep;
        return Math.min(Math.max(newZoom, 1), 4); // clamp between 1 and 4
      });
    };

    // Attach non-passive event listener to allow preventDefault
    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [isTouchDevice]);

  const handleMouseEnter = () => {
    if (!isTouchDevice) {
      setZoomLevel(2);
    }
  };

  const handleMouseMove = (e) => {
    if (isTouchDevice || !containerRef.current) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomOrigin(`${x}% ${y}%`);
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      setZoomLevel(1);
    }
  };

  const handleImageClick = () => {
    if (isTouchDevice) {
      // Toggle zoom on tap for touch devices
      if (zoomLevel === 1) {
        setZoomOrigin("50% 50%");
        setZoomLevel(2);
      } else {
        setZoomLevel(1);
      }
    }
  };

  return (
    <div className="flex flex-col space-y-4 w-full">
      {/* Main Image Container */}
      <div
        ref={containerRef}
        data-lenis-prevent="true"
        className="relative bg-zinc-50 dark:bg-zinc-900/40 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center min-h-[500px] overflow-hidden group cursor-crosshair"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleImageClick}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out ${index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={800}
              priority={index === 0}
              className="object-contain w-full h-full p-4 drop-shadow-2xl mix-blend-multiply dark:mix-blend-normal transition-transform motion-reduce:transition-none"
              style={{
                transformOrigin: zoomOrigin,
                transform: `scale(${index === activeIndex ? zoomLevel : 1})`,
                transitionDuration: zoomLevel > 1 ? "0s" : "300ms", // Instantly track mouse, smooth zoom out
              }}
            />
          </div>
        ))}

        {/* Accessibility Hint for Zoom */}
        <div className="absolute top-4 right-4 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-600 dark:text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
          {isTouchDevice ? "Tap to zoom" : "Scroll to zoom"}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-4 overflow-x-auto hide-scrollbar py-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setZoomLevel(1); // Reset zoom on image change
              }}
              className={`relative flex-shrink-0 w-24 h-24 rounded-xl border-2 transition-all overflow-hidden bg-zinc-50 dark:bg-zinc-900/40 ${index === activeIndex
                ? "border-green-600 dark:border-green-500 ring-2 ring-green-600/20"
                : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600"
                }`}
              aria-label={`View ${image.alt}`}
              aria-current={index === activeIndex ? "true" : "false"}
            >
              <Image
                src={image.src}
                alt={`Thumbnail of ${image.alt}`}
                fill
                sizes="(max-width: 96px) 100vw, 96px"
                className="object-contain p-2 mix-blend-multiply dark:mix-blend-normal"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
