import Link from "next/link";
import SmartImage from "@/components/SmartImage";
import { ArrowRight } from "lucide-react";

/**
 * ProductCatalogCard
 * Purpose-built for the main /products catalog grid.
 * Strict 5-level vertical architecture with zero overlap:
 * Level 1: Visual Stage (fixed aspect ratio, clean background, centered SmartImage, no zoom, generous hardware sizing)
 * Level 2: Badges Bar (primary category pill + optional secondary category tag)
 * Level 3: Product Heading (Responsive Oswald, max 2 lines, full name readable with zero truncation)
 * Level 4: Value Proposition / Short Description (3 lines max)
 * Level 5: Action Footer (pinned to bottom with mt-auto)
 */
export default function ProductCatalogCard({
  item,
  isLight = true,
  paddingClass = "p-3 sm:p-4",
}) {
  const href = item.link || item.productPageUrl || `/products/${item.id}`;
  const imageSrc = item.cardImage || item.image;
  const hasTags = Boolean(item.kicker || item.categoryTag || item.secondaryTag);

  return (
    <Link
      href={href}
      className={`group flex flex-col rounded-xl overflow-hidden border transition-all duration-300 h-full ${
        isLight
          ? "bg-white border-zinc-200 hover:border-zinc-400 hover:shadow-xl"
          : "bg-zinc-900 border-zinc-800 hover:border-zinc-700 hover:shadow-2xl"
      }`}
    >
      {/* Level 1: Dedicated Image Area (Fixed 4:3 Aspect Ratio, Static Contain, No Zoom, Generous Sizing) */}
      <div
        className={`relative w-full aspect-[4/3] ${
          isLight ? "bg-zinc-50" : "bg-zinc-950/60"
        } flex items-center justify-center overflow-hidden shrink-0 border-b ${
          isLight ? "border-zinc-200/80" : "border-zinc-800/80"
        }`}
      >
        {imageSrc ? (
          <SmartImage
            src={imageSrc}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
            className={`object-contain ${paddingClass} transition-opacity duration-300 group-hover:opacity-100 opacity-90`}
          />
        ) : (
          <div
            className={`w-full h-full flex items-center justify-center text-xs uppercase font-bold tracking-wider ${
              isLight ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Product Hardware
          </div>
        )}
      </div>

      {/* Structured Content Area */}
      <div className="flex flex-col flex-grow p-5 sm:p-6">
        {/* Level 2: Badges & Taxonomy Row (Rendered only when tags exist) */}
        {hasTags && (
          <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
            {(item.kicker || item.categoryTag) && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50">
                {item.kicker || item.categoryTag}
              </span>
            )}

            {item.secondaryTag && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium tracking-wide bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
                {item.secondaryTag}
              </span>
            )}
          </div>
        )}

        {/* Level 3: Product Heading - Responsive Oswald, max 2 lines, full name readable with zero truncation */}
        <h3
          className={`font-oswald text-sm sm:text-base font-bold uppercase tracking-wide leading-snug line-clamp-2 min-h-[2.5rem] sm:min-h-[2.75rem] flex items-center ${
            isLight ? "text-zinc-900" : "text-white"
          }`}
          title={item.name}
        >
          {item.name}
        </h3>

        {/* Level 4: Description (3 lines max) */}
        {(item.description || item.shortDescription) && (
          <p
            className={`mt-2 font-sans text-xs sm:text-sm line-clamp-3 leading-relaxed ${
              isLight ? "text-zinc-600" : "text-zinc-400"
            }`}
          >
            {item.description || item.shortDescription}
          </p>
        )}

        {/* Level 5: Action Footer Pinned to Bottom */}
        <div
          className={`mt-auto pt-4 border-t flex items-center justify-between text-xs font-bold uppercase tracking-wider transition-colors ${
            isLight
              ? "border-zinc-100 text-zinc-700 group-hover:text-emerald-600"
              : "border-zinc-800/80 text-zinc-300 group-hover:text-emerald-400"
          }`}
        >
          <span>View Specifications</span>
          <ArrowRight className="h-4 w-4 text-emerald-500 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
