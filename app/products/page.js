import ImageCardGrid from "@/app/components/ImageCardGrid";
import { products } from "@/data/products";
import { productCategories } from "@/data/categories";

export const metadata = {
  title: "Products | Minit Charger",
  description: "Browse our complete line of EV charging infrastructure solutions.",
};

export default function ProductsPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="pt-24 pb-16 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
          <h1 className="font-oswald text-5xl font-bold uppercase tracking-wide text-white mb-3">
            Products
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl font-sans">
            From compact opportunity charging to high-throughput mixed fleet hubs, explore the full Minit Charger ecosystem.
          </p>
        </div>
      </div>

      {/* Sticky Jump Nav */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-sm hidden md:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8 overflow-x-auto py-4 scrollbar-hide">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 shrink-0">Jump to:</span>
            {productCategories.map(cat => {
              const hasProducts = products.some(p => p.categories?.includes(cat.id));
              if (!hasProducts) return null;
              return (
                <a key={cat.id} href={`#cat-${cat.id}`} className="text-xs font-bold uppercase tracking-widest text-zinc-600 hover:text-zinc-900 transition-colors whitespace-nowrap">
                  {cat.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {productCategories.map((category) => {
        const categoryProducts = products
          .filter(p => p.categories?.includes(category.id))
          .map(p => {
            const otherCategories = p.categories?.filter(c => c !== category.id) || [];
            if (otherCategories.length > 0) {
              const otherCatNames = otherCategories
                .map(c => productCategories.find(pc => pc.id === c)?.name)
                .filter(Boolean)
                .join(", ");
              return { ...p, secondaryTag: `Also in: ${otherCatNames}` };
            }
            return p;
          });

        if (categoryProducts.length === 0) return null;

        return (
          <div key={category.id} id={`cat-${category.id}`} className="border-t border-zinc-200 first:border-0 scroll-mt-36">
            <ImageCardGrid
              title={category.name}
              description=""
              linkText=""
              linkHref=""
              items={categoryProducts}
              imageMode="contain"
              theme="light"
              cardType="product"
            />
          </div>
        );
      })}
    </main>
  );
}
