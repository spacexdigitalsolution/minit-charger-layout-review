"use client";

import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

export default function NavbarMobileDrawer({
  isOpen,
  setIsOpen,
  activeMobileMenu,
  toggleMobileMenu,
  productCategories,
  industryCategories,
  products
}) {
  const pathname = usePathname();
  if (!isOpen) return null;

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const isBlogsActive = pathname.startsWith("/blogs");
  const isCompanyActive = pathname.startsWith("/about");
  const isContactActive = pathname.startsWith("/contact");

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
            <span className="flex items-center gap-1.5">
              <span>Products</span>
              {pathname.startsWith("/products") && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]" aria-label="Current section" />
              )}
            </span>
            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeMobileMenu === "products" ? "rotate-180 text-[#16a34a]" : "text-zinc-400"}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${activeMobileMenu === "products" ? "max-h-[600px] opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
            <div className="pl-3 py-2 flex flex-col gap-4 border-l border-zinc-200/80">
              <Link
                href="/products"
                onClick={handleLinkClick}
                className={`text-xs font-bold uppercase tracking-wider flex items-center justify-between py-1 px-2 rounded-md ${
                  pathname === "/products" || pathname === "/products/"
                    ? "bg-emerald-50 text-[#16a34a] border-l-2 border-[#16a34a]"
                    : "text-[#16a34a] hover:text-zinc-950"
                }`}
              >
                <span>All Products</span>
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
              {productCategories.map(cat => {
                const catProducts = products.filter(p => p.categories?.includes(cat.id));
                if (catProducts.length === 0) return null;
                return (
                  <div key={cat.id} className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">{cat.name}</span>
                    {catProducts.map(p => {
                      const isActive = pathname === p.productPageUrl || pathname.startsWith(p.productPageUrl + "/");
                      return (
                        <Link
                          key={p.id}
                          href={p.productPageUrl}
                          onClick={handleLinkClick}
                          className={`text-xs py-1 px-2 rounded-md flex items-center justify-between transition-colors ${
                            isActive
                              ? "bg-emerald-50 text-[#16a34a] font-bold border-l-2 border-[#16a34a]"
                              : "text-zinc-600 hover:text-zinc-950"
                          }`}
                        >
                          <span>{p.name}</span>
                          {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]" aria-label="Current page" />}
                        </Link>
                      );
                    })}
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
            <span className="flex items-center gap-1.5">
              <span>Industries</span>
              {pathname.startsWith("/industries") && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]" aria-label="Current section" />
              )}
            </span>
            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeMobileMenu === "industries" ? "rotate-180 text-[#16a34a]" : "text-zinc-400"}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${activeMobileMenu === "industries" ? "max-h-[300px] opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
            <div className="pl-3 py-2 flex flex-col gap-2.5 border-l border-zinc-200/80">
              <Link
                href="/industries"
                onClick={handleLinkClick}
                className={`text-xs font-bold uppercase tracking-wider flex items-center justify-between py-1 px-2 rounded-md ${
                  pathname === "/industries" || pathname === "/industries/"
                    ? "bg-emerald-50 text-[#16a34a] border-l-2 border-[#16a34a]"
                    : "text-[#16a34a] hover:text-zinc-950"
                }`}
              >
                <span>All Industries</span>
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
              {industryCategories.map(cat => {
                const isIndustryActive = pathname === cat.slug || pathname.startsWith(cat.slug + "/");
                return (
                  <Link
                    key={cat.id}
                    href={cat.slug}
                    onClick={handleLinkClick}
                    className={`text-xs py-1 px-2 rounded-md flex items-center justify-between transition-colors ${
                      isIndustryActive
                        ? "bg-emerald-50 text-[#16a34a] font-bold border-l-2 border-[#16a34a]"
                        : "text-zinc-600 hover:text-zinc-950"
                    }`}
                  >
                    <span>{cat.name}</span>
                    {isIndustryActive && <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]" aria-label="Current page" />}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Direct Links */}
        <Link
          href="/blogs"
          onClick={handleLinkClick}
          className={`py-2.5 text-xs font-bold uppercase tracking-wider border-b border-zinc-200/80 flex items-center justify-between ${
            isBlogsActive ? "text-[#16a34a] font-black" : "text-zinc-700 hover:text-zinc-950"
          }`}
        >
          <span>Blogs</span>
          {isBlogsActive && <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]" aria-label="Current page" />}
        </Link>
        <Link
          href="/about"
          onClick={handleLinkClick}
          className={`py-2.5 text-xs font-bold uppercase tracking-wider border-b border-zinc-200/80 flex items-center justify-between ${
            isCompanyActive ? "text-[#16a34a] font-black" : "text-zinc-700 hover:text-zinc-950"
          }`}
        >
          <span>Company</span>
          {isCompanyActive && <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]" aria-label="Current page" />}
        </Link>

        {/* Mobile CTA */}
        <div className="pt-4">
          <Link
            href="/contact"
            onClick={handleLinkClick}
            className={`flex h-11 w-full items-center justify-center rounded-full font-bold text-xs uppercase tracking-wider transition-colors shadow-sm ${
              isContactActive
                ? "bg-[#16a34a] text-white ring-2 ring-[#16a34a]/30"
                : "bg-zinc-950 text-white hover:bg-[#8CD34D] hover:text-zinc-950"
            }`}
          >
            <span>Contact Us</span>
            {isContactActive && <span className="w-1.5 h-1.5 rounded-full bg-white ml-1.5" aria-label="Current page" />}
          </Link>
        </div>
      </div>
    </div>
  );
}
