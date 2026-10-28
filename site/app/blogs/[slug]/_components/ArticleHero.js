// section: article-hero
import SmartImage from "@/components/SmartImage";

export default function ArticleHero({ blog }) {
  return (
    <header data-section="article-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-200 dark:border-zinc-800 pb-12 mb-12">
        <h1 className="font-display text-5xl md:text-5xl lg:text-[5.5rem] font-black text-zinc-900 dark:text-white max-w-4xl uppercase">
          {blog.title}
        </h1>
        <div className="mt-8 md:mt-0 text-left md:text-right shrink-0">
          <span className="block text-sm font-bold uppercase text-green-600 dark:text-green-500 mb-2">{blog.category}</span>
          <span className="block text-sm text-zinc-500 dark:text-zinc-400">
            {new Date(blog.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
        </div>
      </div>

      {blog.heroImage && (
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 rounded-sm">
          <SmartImage
            src={blog.heroImage || blog.thumbnailImage}
            alt={blog.title}
            fill
            className="object-cover object-center opacity-90"
            priority
          />
        </div>
      )}
    </header>
  );
}

