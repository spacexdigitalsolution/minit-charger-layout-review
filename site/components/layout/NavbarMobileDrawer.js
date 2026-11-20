"use client";

import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

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

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Drawer"
      className="md:hidden absolute top-full left-0 right-0 mt-2 w-full rounded-2xl bg-white border border-zinc-200/90 shadow-2xl p-5 overflow-y-auto max-h-[calc(100vh-100px)] transition-all origin-top"
    >
      <div className="flex flex-col gap-2">
        {/* Mobile Products Accordion */}
        <div className="border-b border-zinc-200/80 pb-2">
          <button
            onClick={() => toggleMobileMenu("products")}
            aria-expanded={activeMobileMenu === "products"}
            className="w-full flex items-center justify-between py-2.5 text-xs font-bold uppercase tracking-wider text-zinc-900"
          >
            <span>Products</span>
            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeMobileMenu === "products" ? "rotate-180 text-[#16a34a]" : "text-zinc-400"}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${activeMobileMenu === "products" ? "max-h-[600px] opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
            <div className="pl-3 py-2 flex flex-col gap-4 border-l border-zinc-200/80">
              <Link href="/products" onClick={handleLinkClick} className="text-xs font-bold text-[#16a34a] uppercase tracking-wider flex items-center">
                <span>All Products</span>
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
              {productCategories.map(cat => {
                const catProducts = products.filter(p => p.categories?.includes(cat.id));
                if (catProducts.length === 0) return null;
                return (
                  <div key={cat.id} className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">{cat.name}</span>
                    {catProducts.map(p => (
                      <Link key={p.id} href={p.productPageUrl} onClick={handleLinkClick} className="text-xs text-zinc-600 hover:text-zinc-950 py-0.5">
                        {p.name}
                      </Link>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Industries Accordion */}
        <div className="border-b border-zinc-200/80 pb-2">
          <button
            onClick={() => toggleMobileMenu("industries")}
            aria-expanded={activeMobileMenu === "industries"}
            className="w-full flex items-center justify-between py-2.5 text-xs font-bold uppercase tracking-wider text-zinc-900"
          >
            <span>Industries</span>
            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeMobileMenu === "industries" ? "rotate-180 text-[#16a34a]" : "text-zinc-400"}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${activeMobileMenu === "industries" ? "max-h-[300px] opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
            <div className="pl-3 py-2 flex flex-col gap-2.5 border-l border-zinc-200/80">
              <Link href="/industries" onClick={handleLinkClick} className="text-xs font-bold text-[#16a34a] uppercase tracking-wider flex items-center">
                <span>All Industries</span>
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
              {industryCategories.map(cat => (
                <Link key={cat.id} href={cat.slug} onClick={handleLinkClick} className="text-xs text-zinc-600 hover:text-zinc-950 py-0.5">
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Direct Links */}
        <Link href="/blogs" onClick={handleLinkClick} className="py-2.5 text-xs font-bold uppercase tracking-wider text-zinc-700 hover:text-zinc-950 border-b border-zinc-200/80">
          Blogs
        </Link>
        <Link href="/about" onClick={handleLinkClick} className="py-2.5 text-xs font-bold uppercase tracking-wider text-zinc-700 hover:text-zinc-950 border-b border-zinc-200/80">
          Company
        </Link>

        {/* Mobile CTA */}
        <div className="pt-4">
          <Link
            href="/contact"
            onClick={handleLinkClick}
            className="flex h-11 w-full items-center justify-center rounded-full bg-zinc-950 text-white font-bold text-xs uppercase tracking-wider hover:bg-[#8CD34D] hover:text-zinc-950 transition-colors shadow-sm"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
