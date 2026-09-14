import Link from "next/link";
import SmartImage from "./SmartImage";

export default function BlogCard({ item, imageMode = "cover", isLight = false, paddingClass = "" }) {
  return (
    <Link href={item.link} className={`rp-card group flex flex-col h-full`}>
      <div className={`relative w-full aspect-[4/3] overflow-hidden rounded-sm mb-6 ${isLight ? "bg-zinc-100" : "bg-zinc-900"}`}>
        {item.image ? (
          <SmartImage
            src={item.image}
            alt={item.name}
            fill
            className={`${imageMode === 'contain' ? `object-contain ${paddingClass}` : 'object-cover'} transition-all duration-500`}
          />
        ) : (
          <div className={`absolute inset-0 ${isLight ? "bg-zinc-200 border-zinc-300" : "bg-zinc-900 border-zinc-800"} border`}></div>
        )}
      </div>

      <div className="flex flex-col flex-grow">
        {item.kicker && (
          <span className="text-[10px] font-bold text-green-600 dark:text-green-500 uppercase tracking-widest mb-3 pointer-events-auto">
            {item.kicker}
          </span>
        )}
        <h3 className={`font-display text-2xl font-bold uppercase tracking-wide text-balance ${isLight ? 'text-zinc-900 group-hover:text-green-600' : 'text-white group-hover:text-green-400'} transition-colors leading-tight`}>
          {item.name}
        </h3>
        {item.description && (
          <p className={`mt-3 text-sm line-clamp-2 ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
            {item.description}
          </p>
        )}
      </div>
    </Link>
  );
}
