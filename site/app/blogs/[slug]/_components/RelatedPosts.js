// section: related-posts
import Link from "next/link";
import SmartImage from "@/components/SmartImage";

export default function RelatedPosts({ relatedPosts }) {
  if (!relatedPosts || relatedPosts.length === 0) return null;

  return (
    <section data-section="related-posts" className="py-24 bg-zinc-50 dark:bg-zinc-900/50 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl font-black uppercase text-zinc-900 dark:text-white mb-12">
          Continue Reading
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {relatedPosts.map((related) => (
            <Link
              key={related.id}
              href={`/blogs/${related.slug}`}
              className="group block flex flex-col border-b border-zinc-200 dark:border-zinc-800 pb-8"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-200 dark:bg-zinc-800 rounded-sm mb-6">
                <SmartImage
                  src={related.thumbnailImage}
                  alt={related.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4 text-[10px] uppercase font-bold text-zinc-500 dark:text-zinc-400">
                  <span className="text-green-600 dark:text-green-500">{related.category}</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  <span>{related.readTime}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  {related.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

