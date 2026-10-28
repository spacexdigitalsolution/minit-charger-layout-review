// section: article-body
export default function ArticleBody({ blog }) {
  return (
    <div data-section="article-body" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

        {/* Left Meta Column (Sticky) */}
        <aside className="lg:col-span-3 lg:col-start-1 order-2 lg:order-1 border-t lg:border-t-0 border-zinc-200 dark:border-zinc-800 pt-12 lg:pt-0">
          <div className="sticky top-32 flex flex-col gap-10">
            {blog.author && (
              <div>
                <span className="block text-[10px] font-bold uppercase text-zinc-400 dark:text-zinc-500 mb-2">Author</span>
                <span className="block font-display text-xl font-bold uppercase text-zinc-900 dark:text-white">{blog.author.name}</span>
                <span className="block text-sm text-zinc-500 dark:text-zinc-400 mt-1">{blog.author.title}</span>
              </div>
            )}
            <div>
              <span className="block text-[10px] font-bold uppercase text-zinc-400 dark:text-zinc-500 mb-2">Read Time</span>
              <span className="block text-lg font-medium text-zinc-900 dark:text-white">{blog.readTime}</span>
            </div>
            <div>
              <span className="block text-[10px] font-bold uppercase text-zinc-400 dark:text-zinc-500 mb-4">Share Article</span>
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
          <div className="prose prose-xl max-w-none prose-zinc dark:prose-invert prose-p:font-light prose-p:text-zinc-800 dark:prose-p:text-zinc-300 prose-headings:font-display prose-headings:font-bold prose-a:text-green-600">
            {blog.body.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-3xl md:text-4xl mt-20 mb-8 text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-800 pb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-2xl mt-12 mb-4 text-zinc-900 dark:text-white">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('> ')) {
                return (
                  <blockquote key={index} className="relative my-16">
                    <div className="absolute top-0 left-0 text-5xl font-display text-green-500/20 dark:text-green-500/10 -mt-10 -ml-4 pointer-events-none">&ldquo;</div>
                    <p className="font-display text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white relative z-10 pl-6 border-l-4 border-green-500">
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
                      <li key={i} className="text-xl text-zinc-800 dark:text-zinc-300 relative pl-8">
                        <span className="absolute left-0 top-3 w-2 h-2 bg-green-500 rounded-sm" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }

              const isFirstParagraph = index === 0;

              return (
                <p key={index} className={`mb-10 text-xl ${isFirstParagraph ? "first-letter:text-5xl first-letter:font-display first-letter:font-black first-letter:text-zinc-900 dark:first-letter:text-white first-letter:float-left first-letter:mr-4 first-letter:leading-[0.75] first-letter:mt-2" : ""}`}>
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* End of article marker */}
          <div className="mt-20 flex justify-center">
            <span className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700 mx-1" />
            <span className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700 mx-1" />
            <span className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700 mx-1" />
          </div>
        </div>

      </div>
    </div>
  );
}

