"use client";

import Link from "next/link";
import Image from "next/image";
import { Cloud, ArrowRight } from "lucide-react";

const ProductLinkItem = ({ product, onLinkClick, onHover }) => (
  <Link
    href={product.productPageUrl}
    onClick={onLinkClick}
    onMouseEnter={() => onHover(product)}
    className="group flex items-center py-1.5"
  >
    <span className="text-[15px] text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
      {product.name}
    </span>
  </Link>
);

const MenuColumn = ({ title, products, onLinkClick, onHover }) => (
  <div className="mega-menu-column flex flex-col gap-1">
    <h4 className="text-xs font-semibold uppercase text-zinc-900 dark:text-zinc-100 mb-4">{title}</h4>
    {products.map(p => (
      <ProductLinkItem
        key={p.id}
        product={p}
        onLinkClick={onLinkClick}
        onHover={onHover}
      />
    ))}
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
  industryCategories
}) {
  return (
    <div
      className={`hidden md:block fixed top-20 left-0 w-full h-[calc(100vh-80px)] transition-all origin-top ${isMenuOpen
        ? 'opacity-100 translate-y-0 duration-180 ease-out'
        : 'opacity-0 -translate-y-2 duration-120 ease-in pointer-events-none'
        }`}
    >
      {/* Dimmed backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={() => { setIsMenuOpen(false); setActiveDesktopMenu(null); }} />

      <div className="relative w-full h-full bg-white dark:bg-zinc-950 overflow-y-auto">
        <div ref={menuContainerRef} className="mx-auto max-w-[1600px] h-full flex flex-col">

          {/* Products Menu */}
          {activeDesktopMenu === 'products' && (
            <div className="pl-12 mt-12 mb-12 flex flex-col justify-center">
              <div className="grid grid-cols-[repeat(5,1fr)_2.5fr] gap-8">
                <MenuColumn title="Aviation" products={colAviation} onLinkClick={() => setIsMenuOpen(false)} onHover={handleProductHover} />
                <MenuColumn title="MHE" products={colMHE} onLinkClick={() => setIsMenuOpen(false)} onHover={handleProductHover} />
                <MenuColumn title="EV / LSV" products={colEVLSV} onLinkClick={() => setIsMenuOpen(false)} onHover={handleProductHover} />
                <MenuColumn title="BMS / Acc." products={colBMSAcc} onLinkClick={() => setIsMenuOpen(false)} onHover={handleProductHover} />
                <MenuColumn title="Software" products={colSoftware} onLinkClick={() => setIsMenuOpen(false)} onHover={handleProductHover} />

                {/* Live Preview Panel */}
                <div className="mega-menu-column pl-12 flex flex-col justify-between border-l border-zinc-100 dark:border-zinc-800/50">
                  <div ref={previewPanelRef} className="flex flex-col opacity-0">
                    <div className="relative w-full h-[240px] mb-8 flex items-center justify-center shrink-0 bg-zinc-50 dark:bg-zinc-900/50">
                      {hoveredProduct?.id === 'cumulus' ? (
                        <Cloud className="w-24 h-24 text-zinc-300 dark:text-zinc-700" strokeWidth={1} />
                      ) : hoveredProduct?.cardImage ? (
                        <Image src={hoveredProduct.cardImage} alt={hoveredProduct.name} fill className="object-contain p-6" />
                      ) : null}
                    </div>

                    <div className="flex flex-col w-full">
                      <h5 className="font-display text-3xl font-black uppercase text-zinc-900 dark:text-white mb-3">
                        {hoveredProduct?.name}
                      </h5>
                      <p className="text-[14px] text-zinc-500 dark:text-zinc-400 mb-6 line-clamp-2">
                        {hoveredProduct?.shortDescription}
                      </p>

                      <div className="flex items-center">
                        <Link href={hoveredProduct?.productPageUrl || "#"} onClick={() => setIsMenuOpen(false)} className="inline-flex items-center text-xs font-bold uppercase text-zinc-900 dark:text-white hover:text-zinc-500 transition-colors group">
                          Explore {hoveredProduct?.name} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800/50">
                    <Link href="/products" onClick={() => setIsMenuOpen(false)} className="inline-flex items-center text-xs font-bold uppercase text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors group">
                      View All Products <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Industries Menu */}
          {activeDesktopMenu === 'industries' && (
            <div className="pl-12 mt-12 mb-12 flex flex-col justify-center">
              <div className="grid grid-cols-4 gap-8">
                <div className="col-span-1 flex flex-col justify-between border-r border-zinc-100 dark:border-zinc-800/50 pr-8">
                  <div>
                    <h3 className="text-xs font-semibold uppercase text-zinc-900 dark:text-zinc-100 mb-4">Industries</h3>
                    <p className="text-[14px] text-zinc-500 dark:text-zinc-400">
                      Tailored charging infrastructure for the world&apos;s most demanding operational environments.
                    </p>
                  </div>
                  <div className="mt-8 pt-6">
                    <Link href="/industries" onClick={() => setIsMenuOpen(false)} className="inline-flex items-center text-xs font-bold uppercase text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors group">
                      View All Industries <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
                <div className="col-span-3 grid grid-cols-3 gap-8 pl-4">
                  {industryCategories.map(cat => (
                    <Link
                      key={cat.id}
                      href={cat.slug}
                      onClick={() => setIsMenuOpen(false)}
                      className="mega-menu-column group flex flex-col p-8 bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                      <span className="font-display text-2xl font-black uppercase text-zinc-900 dark:text-white mb-auto pb-12">
                        {cat.name}
                      </span>
                      <span className="text-xs font-bold uppercase text-zinc-500 dark:text-zinc-400 flex items-center group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                        Explore <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

