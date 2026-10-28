"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { productCategories, industryCategories } from "@/data/categories";
import { products } from "@/data/products";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import NavbarMegaMenu from "./NavbarMegaMenu";
import NavbarMobileDrawer from "./NavbarMobileDrawer";

const DEFAULT_PREVIEW_PRODUCT = products.find(p => p.id === "magnus");

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

  const colAviation = getProductsByCategories(["aviation"]);
  const colMHE = getProductsByCategories(["mhe"]);
  const colEVLSV = getProductsByCategories(["ev", "lsv"]);
  const colBMSAcc = getProductsByCategories(["bms", "accessories"]);
  const colSoftware = getProductsByCategories(["software"]);

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-colors duration-300 ${scrolled || activeDesktopMenu || isOpen
          ? "border-b border-zinc-200 bg-white/95 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/95 shadow-sm"
          : "border-b border-transparent bg-transparent"
          }`}
        onMouseLeave={handleMouseLeaveNav}
      >
        <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between">
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
                className={`group flex items-center h-full cursor-pointer text-sm font-bold uppercase transition-colors duration-300 ${activeDesktopMenu === 'products'
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
                className={`group flex items-center h-full cursor-pointer text-sm font-bold uppercase transition-colors duration-300 ${activeDesktopMenu === 'industries'
                  ? "text-[#16a34a]"
                  : scrolled || activeDesktopMenu || isOpen ? "text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white" : "text-white/80 hover:text-white"
                  }`}
              >
                Industries
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${activeDesktopMenu === 'industries' ? 'rotate-180 text-[#16a34a]' : ''}`} />
              </div>

              <Link href="/blogs" onMouseEnter={handleMouseLeaveNav} onClick={() => { setIsMenuOpen(false); setActiveDesktopMenu(null); }} className={`text-sm font-bold uppercase transition-colors duration-300 ${scrolled || activeDesktopMenu || isOpen ? "text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white" : "text-white/80 hover:text-white"}`}>Blogs</Link>
              <Link href="#" onMouseEnter={handleMouseLeaveNav} onClick={() => { setIsMenuOpen(false); setActiveDesktopMenu(null); }} className={`text-sm font-bold uppercase transition-colors duration-300 ${scrolled || activeDesktopMenu || isOpen ? "text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white" : "text-white/80 hover:text-white"}`}>Company</Link>
            </div>
          </div>

          <div className="hidden md:flex md:items-center md:gap-4 h-full" onMouseEnter={handleMouseLeaveNav}>
            <Link href="/contact" className={`inline-flex h-10 items-center justify-center rounded-none px-6 py-2 text-sm font-bold uppercase transition-colors duration-300 ${scrolled || activeDesktopMenu || isOpen
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
        <NavbarMegaMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          activeDesktopMenu={activeDesktopMenu}
          setActiveDesktopMenu={setActiveDesktopMenu}
          menuContainerRef={menuContainerRef}
          previewPanelRef={previewPanelRef}
          colAviation={colAviation}
          colMHE={colMHE}
          colEVLSV={colEVLSV}
          colBMSAcc={colBMSAcc}
          colSoftware={colSoftware}
          hoveredProduct={hoveredProduct}
          handleProductHover={handleProductHover}
          industryCategories={industryCategories}
        />

        {/* Mobile Menu Accordion */}
        <NavbarMobileDrawer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          activeMobileMenu={activeMobileMenu}
          toggleMobileMenu={toggleMobileMenu}
          productCategories={productCategories}
          industryCategories={industryCategories}
          products={products}
        />
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-20 bg-zinc-950 hidden md:block" />
    </>
  );
}

