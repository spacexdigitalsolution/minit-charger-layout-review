import Link from "next/link";
import SmartImage from "@/components/SmartImage";
import { ArrowRight } from "lucide-react";

/**
 * ProductCard
 * Purpose-built for ecosystem grids ("Meet the rest of the family") & general product showcases.
 * Clean 5-level vertical architecture with zero overlap:
 * Level 1: Dedicated Image Area (Fixed 4:3 Aspect Ratio, Static Contain, No Zoom, Generous Hardware Sizing)
 * Level 2: Category Kicker Tag (Rendered only when tags exist)
 * Level 3: Product Heading (Responsive Oswald, max 2 lines, full name visible with zero truncation/ellipsis)
 * Level 4: Short Description (3 lines max, comfortable line height)
 * Level 5: Action Footer (pinned to bottom with mt-auto)
 */
export default function ProductCard({
  item,
  isLight = false,
  paddingClass = "p-3 sm:p-4",
}) {
  const href = item.link || item.productPageUrl || `/products/${item.id}`;
  const imageSrc = item.cardImage || item.image;
  const hasTags = Boolean(item.kicker || item.categoryTag || item.tag || item.secondaryTag);

  return (
    <Link
      href={href}
      className={`rp-card group flex flex-col rounded-xl overflow-hidden border transition-all duration-300 h-full ${
        isLight
          ? "bg-white border-zinc-200 hover:border-zinc-400 hover:shadow-xl"
          : "bg-zinc-900 border-zinc-800 hover:border-zinc-700 hover:shadow-2xl"
      }`}
    >
      {/* Level 1: Dedicated Non-Overlapping Image Stage (No Zoom, Generous Hardware Sizing) */}
      <div
        className={`relative w-full aspect-[4/3] ${
          isLight ? "bg-zinc-50" : "bg-zinc-950/60"
        } flex items-center justify-center overflow-hidden shrink-0 border-b ${
          isLight ? "border-zinc-200/80" : "border-zinc-800/80"
        }`}
      >
        <SmartImage
          src={imageSrc || null}
          alt={item.name}
          fill
          mode={item.cardImageMode || (item.cardImage ? "image" : "placeholder")}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
          className={`object-contain ${paddingClass} transition-opacity duration-300 group-hover:opacity-100 opacity-90`}
        />
      </div>

      {/* Structured Content Area */}
      <div className="flex flex-col flex-grow p-5 sm:p-6">
        {/* Level 2: Category Kicker & Tags (Rendered ONLY when tags exist to prevent empty gaps) */}
        {hasTags && (
          <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
            {(item.kicker || item.categoryTag || item.tag) && (
              <span
                className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                  isLight
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "bg-emerald-950/40 text-emerald-400 border border-emerald-800/50"
                }`}
              >
                {item.kicker || item.categoryTag || item.tag}
              </span>
            )}

            {item.secondaryTag && (
              <span
                className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium tracking-wide ${
                  isLight
                    ? "bg-zinc-100 text-zinc-600 border border-zinc-200"
                    : "bg-zinc-800 text-zinc-400 border border-zinc-700"
                }`}
              >
                {item.secondaryTag}
              </span>
            )}
          </div>
        )}

        {/* Level 3: Product Heading - Consistent font-display Oswald matching website cards */}
        <h3
          className={`font-display text-xl sm:text-2xl font-bold uppercase tracking-wide leading-tight ${
            isLight ? "text-zinc-900" : "text-white"
          }`}
          title={item.name}
        >
          {item.name}
        </h3>

        {/* Level 4: Description (3 lines max for comfortable reading) */}
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
          <span>Explore Details</span>
          <ArrowRight className="h-4 w-4 text-emerald-500 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
