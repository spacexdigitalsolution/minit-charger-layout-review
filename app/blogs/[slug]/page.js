import { notFound } from "next/navigation";
import Link from "next/link";
import SmartImage from "@/app/components/SmartImage";
import ConversionBand from "@/app/components/ConversionBand";

import { blogs } from "@/data/blogs";

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const relatedPosts = blogs
    .filter((b) => b.id !== blog.id && b.category === blog.category)
    .slice(0, 3);

  // Fallback to latest posts if not enough related
  if (relatedPosts.length < 3) {
    const additional = blogs.filter(b => b.id !== blog.id && !relatedPosts.includes(b));
    relatedPosts.push(...additional.slice(0, 3 - relatedPosts.length));
  }

  return (
    <>
      <article className="relative z-10 bg-white dark:bg-zinc-950 font-sans min-h-screen pt-32 pb-24">

        {/* Immersive Hero */}
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-200 dark:border-zinc-800 pb-12 mb-12">
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-zinc-900 dark:text-white leading-[0.9] max-w-4xl uppercase">
              {blog.title}
            </h1>
            <div className="mt-8 md:mt-0 text-left md:text-right shrink-0">
              <span className="block text-sm font-bold uppercase tracking-widest text-green-600 dark:text-green-500 mb-2">{blog.category}</span>
              <span className="block text-sm text-zinc-500 dark:text-zinc-400">{new Date(blog.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
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

        {/* Split-Pane Body */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

            {/* Left Meta Column (Sticky) */}
            <aside className="lg:col-span-3 lg:col-start-1 order-2 lg:order-1 border-t lg:border-t-0 border-zinc-200 dark:border-zinc-800 pt-12 lg:pt-0">
              <div className="sticky top-32 flex flex-col gap-10">
                {blog.author && (
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">Author</span>
                    <span className="block font-display text-xl font-bold uppercase text-zinc-900 dark:text-white leading-tight">{blog.author.name}</span>
                    <span className="block text-sm text-zinc-500 dark:text-zinc-400 mt-1">{blog.author.title}</span>
                  </div>
                )}
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">Read Time</span>
                  <span className="block text-lg font-medium text-zinc-900 dark:text-white">{blog.readTime}</span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">Share Article</span>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:border-zinc-900 hover:text-zinc-900 dark:hover:border-white dark:hover:text-white transition-colors text-xs font-bold">
                      IN
                    </button>
                    <button className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:border-zinc-900 hover:text-zinc-900 dark:hover:border-white dark:hover:text-white transition-colors text-xs font-bold">
                      TW
                    </button>
                    <button className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:border-zinc-900 hover:text-zinc-900 dark:hover:border-white dark:hover:text-white transition-colors text-xs font-bold">
                      FB
                    </button>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right Reading Column */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <div className="prose prose-xl max-w-none prose-zinc dark:prose-invert prose-p:font-light prose-p:leading-[1.8] prose-p:text-zinc-800 dark:prose-p:text-zinc-300 prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-a:text-green-600">
                {blog.body.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return <h2 key={index} className="text-3xl md:text-4xl mt-20 mb-8 text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-800 pb-4">{paragraph.replace('## ', '')}</h2>;
                  }
                  if (paragraph.startsWith('### ')) {
                    return <h3 key={index} className="text-2xl mt-12 mb-4 text-zinc-900 dark:text-white">{paragraph.replace('### ', '')}</h3>;
                  }
                  if (paragraph.startsWith('> ')) {
                    return (
                      <blockquote key={index} className="relative my-16">
                        <div className="absolute top-0 left-0 text-9xl font-display text-green-500/20 dark:text-green-500/10 -mt-10 -ml-4 pointer-events-none">"</div>
                        <p className="font-display text-3xl md:text-4xl leading-[1.3] font-bold text-zinc-900 dark:text-white tracking-tight relative z-10 pl-6 border-l-4 border-green-500">
                          {paragraph.replace('> ', '').replace(/"/g, '')}
                        </p>
                      </blockquote>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n').map(item => item.replace('- ', ''));
                    return (
                      <ul key={index} className="list-none space-y-4 my-10 pl-2">
                        {items.map((item, i) => (
                          <li key={i} className="text-xl tracking-normal text-zinc-800 dark:text-zinc-300 relative pl-8">
                            <span className="absolute left-0 top-3 w-2 h-2 bg-green-500 rounded-sm"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  // Perfected Editorial Drop Cap for the first paragraph
                  const isFirstParagraph = index === 0;

                  return (
                    <p key={index} className={`mb-10 text-xl tracking-normal ${isFirstParagraph ? "first-letter:text-8xl first-letter:font-display first-letter:font-black first-letter:text-zinc-900 dark:first-letter:text-white first-letter:float-left first-letter:mr-4 first-letter:leading-[0.75] first-letter:mt-2" : ""}`}>
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* End of article marker */}
              <div className="mt-20 flex justify-center">
                <span className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700 mx-1"></span>
                <span className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700 mx-1"></span>
                <span className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700 mx-1"></span>
              </div>
            </div>

          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50 border-t border-zinc-200 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-4xl font-black uppercase tracking-tight text-zinc-900 dark:text-white mb-12">
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
                    <div className="flex items-center gap-3 mb-4 text-[10px] uppercase tracking-widest font-bold text-zinc-500 dark:text-zinc-400">
                      <span className="text-green-600 dark:text-green-500">{related.category}</span>
                      <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
                      <span>{related.readTime}</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors leading-tight">
                      {related.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Enhanced CTA Band */}
      <ConversionBand
        headline="Accelerate Your Transition"
        supportingCopy="Transform your fleet's charging infrastructure with our purpose-built, high-uptime platforms."
        primaryCTA={{ label: "Contact Sales", href: "/contact" }}
        secondaryCTA={{ label: "View Our Hardware", href: "/products" }}
        bgImage="/assets/Industries/Aviation-GSE/CTA/Banner.png"
      />
    </>
  );
}
