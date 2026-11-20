import Link from "next/link";
import SmartImage from "@/components/SmartImage";
import HoverZoomImage from "@/components/media/HoverZoomImage";
import { ArrowRight } from "lucide-react";

export default function ProductCard({ item, imageMode = "contain", isLight = false, paddingClass = "" }) {
  return (
    <Link
      href={item.link || item.productPageUrl || "#"}
      className={`rp-card group flex flex-col rounded-xl overflow-hidden border transition-all duration-300 h-full ${
        isLight
          ? "bg-white border-zinc-200 hover:border-zinc-400 hover:shadow-lg"
          : "bg-zinc-900 border-zinc-800 hover:border-zinc-700 hover:shadow-2xl"
      }`}
    >
      {/* 1. Dedicated, non-overlapping image area with fixed aspect ratio */}
      <div
        className={`relative w-full aspect-[4/3] ${
          isLight ? "bg-zinc-100" : "bg-zinc-950/60"
        } p-4 flex items-center justify-center overflow-hidden shrink-0 border-b ${
          isLight ? "border-zinc-200" : "border-zinc-800/80"
        }`}
      >
        {(item.image || item.cardImage) ? (
          <HoverZoomImage>
            <SmartImage
              src={item.image || item.cardImage}
              alt={item.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
              className={`object-contain ${paddingClass || "p-3"} opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500`}
            />
          </HoverZoomImage>
        ) : (
          <div
            className={`w-full h-full flex items-center justify-center text-xs uppercase font-bold tracking-wider ${
              isLight ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Product Image
          </div>
        )}
      </div>

      {/* 2. Structured text content below the image (no overlap) */}
      <div className="flex flex-col flex-grow p-5 sm:p-6 pt-4">
        {/* Category kicker */}
        {(item.kicker || item.categoryTag) && (
          <span className="text-[10px] font-bold text-[#8CD34D] uppercase tracking-wider mb-1">
            {item.kicker || item.categoryTag}
          </span>
        )}

        {/* Optional secondary tag */}
        {item.secondaryTag && (
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
            {item.secondaryTag}
          </span>
        )}

        {/* Product Name: responsive sizing, 2 lines max, full name readable */}
        <h3
          className={`font-oswald text-base sm:text-lg font-bold uppercase tracking-wide leading-snug line-clamp-2 ${
            isLight ? "text-zinc-900" : "text-white"
          }`}
        >
          {item.name}
        </h3>

        {/* Short description */}
        {(item.description || item.shortDescription) && (
          <p
            className={`mt-2 font-sans text-xs sm:text-sm line-clamp-3 leading-relaxed transition-colors ${
              isLight ? "text-zinc-600 group-hover:text-zinc-900" : "text-zinc-400 group-hover:text-zinc-200"
            }`}
          >
            {item.description || item.shortDescription}
          </p>
        )}

        {/* Bottom CTA affordance */}
        <div
          className={`mt-auto pt-4 border-t flex items-center justify-between text-xs font-bold uppercase tracking-wider transition-colors ${
            isLight
              ? "border-zinc-100 text-zinc-600 group-hover:text-zinc-950"
              : "border-zinc-800/80 text-zinc-400 group-hover:text-white"
          }`}
        >
          <span>Explore Details</span>
          <ArrowRight className="h-4 w-4 text-[#8CD34D] group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
