"use client";

import Link from "next/link";
import SmartImage from "@/components/SmartImage";
import { Cloud, ArrowRight } from "lucide-react";

const ProductLinkItem = ({ product, onLinkClick, onHover }) => (
  <Link
    href={product.productPageUrl}
    onClick={onLinkClick}
    onMouseEnter={() => onHover(product)}
    onFocus={() => onHover(product)}
    className="group flex items-center py-1 text-[13px] text-zinc-600 hover:text-zinc-950 transition-colors"
  >
    <span className="truncate">{product.name}</span>
  </Link>
);

const MenuColumn = ({ title, products, onLinkClick, onHover }) => (
  <div className="mega-menu-column flex flex-col gap-1 min-w-0">
    <h4 className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-3 border-b border-zinc-200/80 pb-1.5">
      {title}
    </h4>
    <div className="flex flex-col gap-0.5">
      {products.map(p => (
        <ProductLinkItem
          key={p.id}
          product={p}
          onLinkClick={onLinkClick}
          onHover={onHover}
        />
      ))}
    </div>
  </div>
);

export default function NavbarMegaMenu({
  isMenuOpen,
  setIsMenuOpen,
  activeDesktopMenu,
  setActiveDesktopMenu,
  menuContainerRef,
  previewPanelRef,
  colAviation,
  colMHE,
  colEVLSV,
  colBMSAcc,
  colSoftware,
  hoveredProduct,
  handleProductHover,
  industryCategories,
  onMenuEnter,
  onMenuLeave
}) {
  const handleItemClick = () => {
    setIsMenuOpen(false);
    setActiveDesktopMenu(null);
  };

  if (!activeDesktopMenu && !isMenuOpen) return null;

  return (
    <>
      {/* Dimmed backdrop to close on outside click */}
      <div
        className={`fixed inset-0 bg-black/25 backdrop-blur-xs transition-opacity duration-200 -z-10 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleItemClick}
        aria-hidden="true"
      />

      <div
        role="region"
        aria-label="Desktop mega menu"
        onMouseEnter={onMenuEnter}
        onMouseLeave={onMenuLeave}
        className={`hidden md:block absolute top-full left-0 right-0 mt-3 w-full rounded-2xl bg-white border border-zinc-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden transition-all origin-top ${
          isMenuOpen
            ? "opacity-100 scale-100 translate-y-0 duration-200 ease-out pointer-events-auto"
            : "opacity-0 scale-98 -translate-y-2 duration-150 ease-in pointer-events-none"
        }`}
      >
        <div ref={menuContainerRef} className="p-6 lg:p-8">
          {/* Products Menu */}
          {activeDesktopMenu === "products" && (
            <div className="grid grid-cols-[repeat(5,1fr)_280px] gap-6 items-start">
              <MenuColumn title="Aviation" products={colAviation} onLinkClick={handleItemClick} onHover={handleProductHover} />
              <MenuColumn title="MHE" products={colMHE} onLinkClick={handleItemClick} onHover={handleProductHover} />
              <MenuColumn title="EV / LSV" products={colEVLSV} onLinkClick={handleItemClick} onHover={handleProductHover} />
              <MenuColumn title="BMS / Acc." products={colBMSAcc} onLinkClick={handleItemClick} onHover={handleProductHover} />
              <MenuColumn title="Software" products={colSoftware} onLinkClick={handleItemClick} onHover={handleProductHover} />

              {/* Live Preview Panel */}
              <div className="mega-menu-column pl-6 border-l border-zinc-200/80 flex flex-col justify-between h-full">
                <div ref={previewPanelRef} className="flex flex-col">
                  <div className="relative w-full h-[140px] mb-4 flex items-center justify-center shrink-0 rounded-xl bg-zinc-50 border border-zinc-200/60 overflow-hidden">
                    {hoveredProduct?.id === "cumulus" ? (
                      <Cloud className="w-16 h-16 text-[#16a34a]" strokeWidth={1.5} />
                    ) : hoveredProduct?.cardImage ? (
                      <SmartImage
                        src={hoveredProduct.cardImage}
                        alt={hoveredProduct.name}
                        fill
                        sizes="(max-width: 1200px) 25vw, 320px"
                        mode="placeholder"
                        className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="text-xs uppercase text-zinc-400 font-bold">Hardware Preview</div>
                    )}
                  </div>

                  <h5 className="font-oswald text-lg font-bold uppercase text-zinc-950 mb-1 tracking-wide">
                    {hoveredProduct?.name}
                  </h5>
                  <p className="text-xs text-zinc-500 mb-4 line-clamp-2 leading-relaxed">
                    {hoveredProduct?.shortDescription || hoveredProduct?.keyUSP}
                  </p>

                  <Link
                    href={hoveredProduct?.productPageUrl || "/products"}
                    onClick={handleItemClick}
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#16a34a] hover:text-zinc-950 transition-colors group"
                  >
                    <span>Explore Platform</span>
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-200/80">
                  <Link
                    href="/products"
                    onClick={handleItemClick}
                    className="inline-flex items-center text-[11px] font-bold uppercase tracking-wider text-zinc-500 hover:text-zinc-950 transition-colors group"
                  >
                    <span>View All Products</span>
                    <ArrowRight className="ml-1.5 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Industries Menu */}
          {activeDesktopMenu === "industries" && (
            <div className="grid grid-cols-12 gap-6 items-center">
              <div className="col-span-4 pr-6 border-r border-zinc-200/80">
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  Industries We Power
                </h3>
                <p className="text-sm text-zinc-600 font-light mb-6 leading-relaxed">
                  Heavy-duty fleet charging engineered for the world&apos;s most demanding operating conditions.
                </p>
                <Link
                  href="/industries"
                  onClick={handleItemClick}
                  className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#16a34a] hover:text-zinc-950 transition-colors group"
                >
                  <span>Explore All Sectors</span>
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="col-span-8 grid grid-cols-3 gap-4">
                {industryCategories.map(cat => (
                  <Link
                    key={cat.id}
                    href={cat.slug}
                    onClick={handleItemClick}
                    className="group flex flex-col p-4 rounded-xl bg-zinc-50/80 hover:bg-zinc-100 border border-zinc-200/80 hover:border-zinc-300 transition-all duration-200"
                  >
                    <span className="font-oswald text-base font-bold uppercase text-zinc-900 mb-2 group-hover:text-[#16a34a] transition-colors">
                      {cat.name}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 flex items-center mt-auto group-hover:text-zinc-900">
                      View Solutions <ArrowRight className="ml-1.5 h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
