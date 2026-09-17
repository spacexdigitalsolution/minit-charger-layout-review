import Link from "next/link";
import SmartImage from "./SmartImage";
import HoverZoomImage from "./HoverZoomImage";
import { ArrowRight } from "lucide-react";

export default function ProductCard({ item, imageMode = "cover", isLight = false, paddingClass = "" }) {
  return (
    <Link
      href={item.link || item.productPageUrl || "#"}
      className={`rp-card group relative block aspect-square overflow-hidden rounded-sm ${isLight ? "bg-zinc-100" : "bg-zinc-900"}`}
    >
      {(item.image || item.cardImage) ? (
        <HoverZoomImage>
          <SmartImage
            src={item.image || item.cardImage}
            alt={item.name}
            fill
            className={`${imageMode === 'contain' ? `object-contain ${paddingClass}` : 'object-cover'} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
          />
        </HoverZoomImage>
      ) : (
        <div className={`absolute inset-0 ${isLight ? "bg-zinc-200 border-zinc-300" : "bg-zinc-900 border-zinc-800"} border`}></div>
      )}

      {/* Gradient Overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90"></div>

      {/* Text Content overlay */}
      <div className="absolute inset-0 p-8 pr-16 flex flex-col justify-end pointer-events-none">
        {(item.kicker || item.categoryTag) && (
          <span className={`text-[10px] font-bold text-[#8CD34D] uppercase tracking-widest pointer-events-auto ${item.secondaryTag ? 'mb-0.5' : 'mb-2'}`}>
            {item.kicker || item.categoryTag}
          </span>
        )}
        {item.secondaryTag && (
          <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest mb-2 pointer-events-auto">
            {item.secondaryTag}
          </span>
        )}
        <h3 className="font-oswald text-2xl md:text-3xl font-bold uppercase tracking-wide text-white pointer-events-auto text-balance line-clamp-4">
          {item.name}
        </h3>
        {(item.description || item.shortDescription) && (
          <p className="mt-2 font-sans text-sm text-zinc-300 line-clamp-2 group-hover:text-white transition-colors pointer-events-auto">
            {item.description || item.shortDescription}
          </p>
        )}
      </div>

      {/* Arrow Icon */}
      <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center transition-colors group-hover:bg-white group-hover:border-white shrink-0">
        <ArrowRight className="h-4 w-4 text-white group-hover:text-zinc-950 transition-colors" />
      </div>
    </Link>
  );
}
