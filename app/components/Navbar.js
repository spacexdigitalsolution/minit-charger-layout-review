"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ChevronRight, Cloud, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { productCategories, industryCategories } from "@/data/categories";
import { products } from "@/data/products";
import gsap from "gsap";
import { usePathname } from "next/navigation";

const DEFAULT_PREVIEW_PRODUCT = products.find(p => p.id === "magnus");

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
    <h4 className="text-xs font-semibold tracking-widest uppercase text-zinc-900 dark:text-zinc-100 mb-4">{title}</h4>
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

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(true);

  const [activeDesktopMenu, setActiveDesktopMenu] = useState(null); // 'products' | 'industries' | null
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controls transition states

  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(DEFAULT_PREVIEW_PRODUCT);

  const timeoutRef = useRef(null);
  const menuContainerRef = useRef(null);
  const previewPanelRef = useRef(null);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDesktopMenu(null);
    setIsMenuOpen(false);



    // handleMouseEnterNav("products");
  }, [pathname]);

  // Lock body scroll & handle Escape key
  useEffect(() => {
    if (isMenuOpen || isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setIsOpen(false);
        setActiveDesktopMenu(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen, isOpen]);

  const handleMouseEnterNav = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveDesktopMenu(menu);
      setIsMenuOpen(true);
    }, 120); // 120ms hover intent delay
  };

  const handleNavClick = (menu) => {
    if (activeDesktopMenu === menu && isMenuOpen) {
      setIsMenuOpen(false);
      setActiveDesktopMenu(null);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    } else {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setActiveDesktopMenu(menu);
      setIsMenuOpen(true);
    }
  };

  const handleMouseLeaveNav = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsMenuOpen(false);
      // Wait for close transition (120ms) before clearing the DOM state
      setTimeout(() => setActiveDesktopMenu(null), 120);
    }, 150);
  };

  const toggleMobileMenu = (menu) => {
    if (activeMobileMenu === menu) {
      setActiveMobileMenu(null);
    } else {
      setActiveMobileMenu(menu);
    }
  };

  // Staggered column animation on open
  useEffect(() => {
    if (isMenuOpen && activeDesktopMenu && menuContainerRef.current) {
      const columns = menuContainerRef.current.querySelectorAll('.mega-menu-column');
      gsap.fromTo(columns,
        { autoAlpha: 0, y: 10 },
        { autoAlpha: 1, y: 0, duration: 0.3, stagger: 0.04, ease: "power2.out", overwrite: true }
      );
    }
  }, [isMenuOpen, activeDesktopMenu]);

  // Preview panel crossfade animation
  useEffect(() => {
    if (previewPanelRef.current && isMenuOpen) {
      gsap.fromTo(previewPanelRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.18, ease: "power1.inOut", overwrite: true }
      );
    }
  }, [hoveredProduct, isMenuOpen]);

  const handleProductHover = (product) => {
    if (hoveredProduct?.id !== product.id) {
      setHoveredProduct(product);
    }
  };

  const getProductsByCategories = (catIds) => {
    return products.filter(p => p.categories?.some(cat => catIds.includes(cat)));
  };

  // Group columns per spec
  const colAviation = getProductsByCategories(["aviation"]);
  const colMHE = getProductsByCategories(["mhe"]);
  const colEVLSV = getProductsByCategories(["ev", "lsv"]);
  const colBMSAcc = getProductsByCategories(["bms", "accessories"]);
  const colSoftware = getProductsByCategories(["software"]);

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-colors duration-300  ${scrolled || activeDesktopMenu || isOpen
          ? "border-b border-zinc-200 bg-white/95 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/95 shadow-sm"
          : "border-b border-transparent bg-transparent"
          }`}
        onMouseLeave={handleMouseLeaveNav}
      >
        <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between ">
          <div className="flex items-center gap-8 h-full">
            <Link href="/" className="flex items-center gap-2" onClick={() => { setIsMenuOpen(false); setActiveDesktopMenu(null); }}>
              <div className="relative w-32 h-10">
                <Image src="/assets/logo.webp" alt="Minit Charger Logo" fill className="object-contain object-left" />
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex md:gap-8 items-center h-full">
              <div
                onMouseEnter={() => handleMouseEnterNav('products')}
                onClick={() => handleNavClick('products')}
                className={`group flex items-center h-full cursor-pointer text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${activeDesktopMenu === 'products'
                  ? "text-[#16a34a]"
                  : scrolled || activeDesktopMenu || isOpen ? "text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white" : "text-white/80 hover:text-white"
                  }`}
              >
                Products
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${activeDesktopMenu === 'products' ? 'rotate-180 text-[#16a34a]' : ''}`} />
              </div>

              <div
                onMouseEnter={() => handleMouseEnterNav('industries')}
                onClick={() => handleNavClick('industries')}
                className={`group flex items-center h-full cursor-pointer text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${activeDesktopMenu === 'industries'
                  ? "text-[#16a34a]"
                  : scrolled || activeDesktopMenu || isOpen ? "text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white" : "text-white/80 hover:text-white"
                  }`}
              >
                Industries
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${activeDesktopMenu === 'industries' ? 'rotate-180 text-[#16a34a]' : ''}`} />
              </div>

              <Link href="/blogs" onMouseEnter={handleMouseLeaveNav} onClick={() => { setIsMenuOpen(false); setActiveDesktopMenu(null); }} className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${scrolled || activeDesktopMenu || isOpen ? "text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white" : "text-white/80 hover:text-white"}`}>Blogs</Link>
              <Link href="#" onMouseEnter={handleMouseLeaveNav} onClick={() => { setIsMenuOpen(false); setActiveDesktopMenu(null); }} className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${scrolled || activeDesktopMenu || isOpen ? "text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white" : "text-white/80 hover:text-white"}`}>Company</Link>
            </div>
          </div>

          <div className="hidden md:flex md:items-center md:gap-4 h-full" onMouseEnter={handleMouseLeaveNav}>
            <Link href="/contact" className={`inline-flex h-10 items-center justify-center rounded-none px-6 py-2 text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${scrolled || activeDesktopMenu || isOpen
              ? "bg-zinc-900 text-white hover:bg-[#8CD34D] hover:text-zinc-900 dark:bg-white dark:text-zinc-900 dark:hover:bg-[#8CD34D]"
              : "bg-white text-zinc-900 hover:bg-[#8CD34D]"
              }`}>
              Contact Us
            </Link>
          </div>

          <div className="flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`transition-colors duration-300 ${scrolled || activeDesktopMenu || isOpen ? "text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white" : "text-white"}`}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Mega Menus */}
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

                    {/* Column 1: Aviation */}
                    <MenuColumn title="Aviation" products={colAviation} onLinkClick={() => setIsMenuOpen(false)} onHover={handleProductHover} />

                    {/* Column 2: MHE */}
                    <MenuColumn title="MHE" products={colMHE} onLinkClick={() => setIsMenuOpen(false)} onHover={handleProductHover} />

                    {/* Column 3: EV / LSV */}
                    <MenuColumn title="EV / LSV" products={colEVLSV} onLinkClick={() => setIsMenuOpen(false)} onHover={handleProductHover} />

                    {/* Column 4: BMS / Accessories */}
                    <MenuColumn title="BMS / Acc." products={colBMSAcc} onLinkClick={() => setIsMenuOpen(false)} onHover={handleProductHover} />

                    {/* Column 5: Software */}
                    <MenuColumn title="Software" products={colSoftware} onLinkClick={() => setIsMenuOpen(false)} onHover={handleProductHover} />

                    {/* Column 6: Live Preview Panel */}
                    <div className="mega-menu-column pl-12 flex flex-col justify-between border-l border-zinc-100 dark:border-zinc-800/50">
                      <div ref={previewPanelRef} className="flex flex-col opacity-0">
                        {/* Clean background container for the image */}
                        <div className="relative w-full h-[240px] mb-8 flex items-center justify-center shrink-0 bg-zinc-50 dark:bg-zinc-900/50">
                          {hoveredProduct?.id === 'cumulus' ? (
                            <Cloud className="w-24 h-24 text-zinc-300 dark:text-zinc-700" strokeWidth={1} />
                          ) : hoveredProduct?.cardImage ? (
                            <Image src={hoveredProduct.cardImage} alt={hoveredProduct.name} fill className="object-contain p-6" />
                          ) : null}
                        </div>

                        {/* Text Stack */}
                        <div className="flex flex-col w-full">
                          <h5 className="font-display text-3xl font-black tracking-tighter uppercase text-zinc-900 dark:text-white mb-3">
                            {hoveredProduct?.name}
                          </h5>
                          <p className="text-[14px] leading-relaxed text-zinc-500 dark:text-zinc-400 mb-6 line-clamp-2">
                            {hoveredProduct?.shortDescription}
                          </p>

                          <div className="flex items-center">
                            <Link href={hoveredProduct?.productPageUrl || "#"} onClick={() => setIsMenuOpen(false)} className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-white hover:text-zinc-500 transition-colors group">
                              Explore {hoveredProduct?.name} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800/50">
                        <Link href="/products" onClick={() => setIsMenuOpen(false)} className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors group">
                          View All Products <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* End of Products Menu */}

              {/* Industries Menu */}
              {activeDesktopMenu === 'industries' && (
                <div className="pl-12  mt-12 mb-12 flex flex-col justify-center">
                  <div className="grid grid-cols-4 gap-8">
                    <div className="col-span-1 flex flex-col justify-between border-r border-zinc-100 dark:border-zinc-800/50 pr-8">
                      <div>
                        <h3 className="text-xs font-semibold tracking-widest uppercase text-zinc-900 dark:text-zinc-100 mb-4">Industries</h3>
                        <p className="text-[14px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                          Tailored charging infrastructure for the world's most demanding operational environments.
                        </p>
                      </div>
                      <div className="mt-8 pt-6">
                        <Link href="/industries" onClick={() => setIsMenuOpen(false)} className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors group">
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
                          <span className="font-display text-2xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white mb-auto pb-12">
                            {cat.name}
                          </span>
                          <span className="text-xs font-bold tracking-widest uppercase text-zinc-500 dark:text-zinc-400 flex items-center group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
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

        {/* Mobile Menu Accordion (Unchanged logic, just styled to match) */}
        {isOpen && (
          <div className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 md:hidden absolute top-20 left-0 w-full h-[calc(100vh-80px)] overflow-y-auto pb-20">
            <div className="flex flex-col">

              {/* Mobile Products */}
              <div className="border-b border-zinc-100 dark:border-zinc-800">
                <button
                  onClick={() => toggleMobileMenu('products')}
                  className="w-full flex items-center justify-between px-4 py-4 text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white"
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
                          <span className="text-md font-bold uppercase tracking-[0.08em] text-zinc-500 border-b border-zinc-200 dark:border-zinc-800 pb-2">{cat.name}</span>
                          {catProducts.map(p => (
                            <Link key={p.id} href={p.productPageUrl} onClick={() => setIsOpen(false)} className="text-sm font-medium text-zinc-900 dark:text-zinc-300 flex items-center gap-2 py-1">
                              {p.name}
                            </Link>
                          ))}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Mobile Industries */}
              <div className="border-b border-zinc-100 dark:border-zinc-800">
                <button
                  onClick={() => toggleMobileMenu('industries')}
                  className="w-full flex items-center justify-between px-4 py-4 text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white"
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

              <Link href="/blogs" onClick={() => setIsOpen(false)} className="block px-4 py-4 text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white border-b border-zinc-100 dark:border-zinc-800">Blogs</Link>
              <Link href="#" onClick={() => setIsOpen(false)} className="block px-4 py-4 text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white border-b border-zinc-100 dark:border-zinc-800">Company</Link>

              <div className="p-4 mt-4">
                <Link href="/contact" onClick={() => setIsOpen(false)} className="flex h-12 w-full items-center justify-center rounded-none bg-zinc-900 px-4 py-2 text-sm font-bold uppercase tracking-wider text-white dark:bg-white dark:text-zinc-900 hover:bg-[#8CD34D] hover:text-zinc-900 dark:hover:bg-[#8CD34D] transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* We need the spacer to prevent content jumping, but we only want it if the nav is solid at top. Since it's fixed, we need an empty block. */}
      <div className="h-20 bg-zinc-950 hidden md:block"></div>
    </>
  );
}
