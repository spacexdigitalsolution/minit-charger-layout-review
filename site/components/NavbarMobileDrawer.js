"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function NavbarMobileDrawer({
  isOpen,
  setIsOpen,
  activeMobileMenu,
  toggleMobileMenu,
  productCategories,
  industryCategories,
  products
}) {
  if (!isOpen) return null;

  return (
    <div className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 md:hidden absolute top-20 left-0 w-full h-[calc(100vh-80px)] overflow-y-auto pb-20">
      <div className="flex flex-col">

        {/* Mobile Products */}
        <div className="border-b border-zinc-100 dark:border-zinc-800">
          <button
            onClick={() => toggleMobileMenu('products')}
            className="w-full flex items-center justify-between px-4 py-4 text-sm font-bold uppercase text-zinc-900 dark:text-white"
          >
            Products
            <ChevronDown className={`h-4 w-4 transition-transform ${activeMobileMenu === 'products' ? 'rotate-180 text-[#16a34a]' : ''}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 bg-zinc-50 dark:bg-zinc-900/50 ${activeMobileMenu === 'products' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-4 py-4 flex flex-col gap-6">
              <Link href="/products" onClick={() => setIsOpen(false)} className="text-sm font-bold text-[#16a34a] uppercase">View All Products</Link>
              {productCategories.map(cat => {
                const catProducts = products.filter(p => p.categories?.includes(cat.id));
                if (catProducts.length === 0) return null;
                return (
                  <div key={cat.id} className="flex flex-col gap-3">
                    <span className="text-md font-bold uppercase text-zinc-500 border-b border-zinc-200 dark:border-zinc-800 pb-2">{cat.name}</span>
                    {catProducts.map(p => (
                      <Link key={p.id} href={p.productPageUrl} onClick={() => setIsOpen(false)} className="text-sm font-medium text-zinc-900 dark:text-zinc-300 flex items-center gap-2 py-1">
                        {p.name}
                      </Link>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Industries */}
        <div className="border-b border-zinc-100 dark:border-zinc-800">
          <button
            onClick={() => toggleMobileMenu('industries')}
            className="w-full flex items-center justify-between px-4 py-4 text-sm font-bold uppercase text-zinc-900 dark:text-white"
          >
            Industries
            <ChevronDown className={`h-4 w-4 transition-transform ${activeMobileMenu === 'industries' ? 'rotate-180 text-[#16a34a]' : ''}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 bg-zinc-50 dark:bg-zinc-900/50 ${activeMobileMenu === 'industries' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-4 py-4 flex flex-col gap-4">
              <Link href="/industries" onClick={() => setIsOpen(false)} className="text-sm font-bold text-[#16a34a] uppercase">View All Industries</Link>
              {industryCategories.map(cat => (
                <Link key={cat.id} href={cat.slug} onClick={() => setIsOpen(false)} className="text-sm font-medium text-zinc-900 dark:text-zinc-300 py-1">
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Link href="/blogs" onClick={() => setIsOpen(false)} className="block px-4 py-4 text-sm font-bold uppercase text-zinc-900 dark:text-white border-b border-zinc-100 dark:border-zinc-800">Blogs</Link>
        <Link href="#" onClick={() => setIsOpen(false)} className="block px-4 py-4 text-sm font-bold uppercase text-zinc-900 dark:text-white border-b border-zinc-100 dark:border-zinc-800">Company</Link>

        <div className="p-4 mt-4">
          <Link href="/contact" onClick={() => setIsOpen(false)} className="flex h-12 w-full items-center justify-center rounded-none bg-zinc-900 px-4 py-2 text-sm font-bold uppercase text-white dark:bg-white dark:text-zinc-900 hover:bg-[#8CD34D] hover:text-zinc-900 dark:hover:bg-[#8CD34D] transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

