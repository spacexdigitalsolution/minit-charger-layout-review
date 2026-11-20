"use client";

import Link from "next/link";
import SmartImage from "@/components/SmartImage";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { productCategories, industryCategories } from "@/data/categories";
import { products } from "@/data/products";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import NavbarMegaMenu from "./NavbarMegaMenu";
import NavbarMobileDrawer from "./NavbarMobileDrawer";

const DEFAULT_PREVIEW_PRODUCT = products.find(p => p.id === "magnus") || products[0];

export default function Navbar() {
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [isOpen, setIsOpen] = useState(false);

  const [activeDesktopMenu, setActiveDesktopMenu] = useState(null); // 'products' | 'industries' | null
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(DEFAULT_PREVIEW_PRODUCT);

  const timeoutRef = useRef(null);
  const menuContainerRef = useRef(null);
  const previewPanelRef = useRef(null);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
    setActiveDesktopMenu(null);
    setIsMenuOpen(false);
  }

  // Handle Escape key and mobile scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setIsOpen(false);
        setActiveDesktopMenu(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Close mega menu on scroll
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleScroll = () => {
      setIsMenuOpen(false);
      setActiveDesktopMenu(null);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  // Staggered column animation on open
  useEffect(() => {
    if (isMenuOpen && activeDesktopMenu && menuContainerRef.current) {
      const columns = menuContainerRef.current.querySelectorAll(".mega-menu-column");
      gsap.fromTo(
        columns,
        { autoAlpha: 0, y: 8 },
        { autoAlpha: 1, y: 0, duration: 0.25, stagger: 0.03, ease: "power2.out", overwrite: true }
      );
    }
  }, [isMenuOpen, activeDesktopMenu]);

  // Preview panel crossfade animation
  useEffect(() => {
    if (previewPanelRef.current && isMenuOpen) {
      gsap.fromTo(
        previewPanelRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.18, ease: "power1.inOut", overwrite: true }
      );
    }
  }, [hoveredProduct, isMenuOpen]);

  const handleMouseEnterNav = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (isMenuOpen) {
      setActiveDesktopMenu(menu);
    } else {
      timeoutRef.current = setTimeout(() => {
        setActiveDesktopMenu(menu);
        setIsMenuOpen(true);
      }, 80);
    }
  };

  const handleMenuEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleNavLinkClick = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsMenuOpen(false);
    setActiveDesktopMenu(null);
  };

  const handleMouseLeaveNav = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsMenuOpen(false);
      setTimeout(() => setActiveDesktopMenu(null), 120);
    }, 120);
  };

  const toggleMobileMenu = (menu) => {
    setActiveMobileMenu(activeMobileMenu === menu ? null : menu);
  };

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

  const isProductsActive = pathname.startsWith("/products") || activeDesktopMenu === "products";
  const isIndustriesActive = pathname.startsWith("/industries") || activeDesktopMenu === "industries";
  const isBlogsActive = pathname.startsWith("/blogs");
  const isCompanyActive = pathname.startsWith("/about");

  return (
    <header className="fixed top-4 md:top-6 inset-x-0 mx-auto w-[calc(100%-2rem)] max-w-5xl z-50 pointer-events-none">
      <nav
        aria-label="Main Navigation"
        onMouseLeave={handleMouseLeaveNav}
        className="relative pointer-events-auto rounded-full bg-zinc-950/85 backdrop-blur-md [@media(prefers-reduced-transparency:reduce)]:backdrop-blur-none [@media(prefers-reduced-transparency:reduce)]:bg-zinc-950 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.36)] h-14 md:h-16 px-4 md:px-6 flex items-center justify-between transition-all duration-300"
      >
        {/* Left: Brand Logo */}
        <Link
          href="/"
          onClick={handleNavLinkClick}
          aria-label="Minit Charger Home"
          className="flex items-center gap-2 shrink-0 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8CD34D]"
        >
          <div className="relative w-28 md:w-32 h-8">
            <SmartImage
              src="/assets/logo.webp"
              alt="Minit Charger Logo"
              fill
              sizes="128px"
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex md:items-center md:gap-7 h-full">
          {/* Products Dropdown Trigger */}
          <Link
            href="/products"
            onMouseEnter={() => handleMouseEnterNav("products")}
            onClick={handleNavLinkClick}
            aria-expanded={isMenuOpen && activeDesktopMenu === "products"}
            aria-haspopup="true"
            className={`group inline-flex items-center text-xs font-bold uppercase tracking-wider transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8CD34D] rounded-full px-2 py-1 ${
              isProductsActive
                ? "text-white"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <span>Products</span>
            <ChevronDown className={`ml-1 h-3.5 w-3.5 transition-transform duration-200 ${activeDesktopMenu === "products" ? "rotate-180 text-[#8CD34D]" : "text-zinc-400"}`} />
            {isProductsActive && <span className="w-1.5 h-1.5 rounded-full bg-[#8CD34D] ml-1.5" aria-hidden="true" />}
          </Link>

          {/* Industries Dropdown Trigger */}
          <Link
            href="/industries"
            onMouseEnter={() => handleMouseEnterNav("industries")}
            onClick={handleNavLinkClick}
            aria-expanded={isMenuOpen && activeDesktopMenu === "industries"}
            aria-haspopup="true"
            className={`group inline-flex items-center text-xs font-bold uppercase tracking-wider transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8CD34D] rounded-full px-2 py-1 ${
              isIndustriesActive
                ? "text-white"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <span>Industries</span>
            <ChevronDown className={`ml-1 h-3.5 w-3.5 transition-transform duration-200 ${activeDesktopMenu === "industries" ? "rotate-180 text-[#8CD34D]" : "text-zinc-400"}`} />
            {isIndustriesActive && <span className="w-1.5 h-1.5 rounded-full bg-[#8CD34D] ml-1.5" aria-hidden="true" />}
          </Link>

          {/* Direct Blogs Link */}
          <Link
            href="/blogs"
            onMouseEnter={handleMouseLeaveNav}
            onClick={handleNavLinkClick}
            className={`inline-flex items-center text-xs font-bold uppercase tracking-wider transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8CD34D] rounded-full px-2 py-1 ${
              isBlogsActive ? "text-white" : "text-zinc-400 hover:text-white"
            }`}
          >
            <span>Blogs</span>
            {isBlogsActive && <span className="w-1.5 h-1.5 rounded-full bg-[#8CD34D] ml-1.5" aria-hidden="true" />}
          </Link>

          {/* Direct Company Link */}
          <Link
            href="/about"
            onMouseEnter={handleMouseLeaveNav}
            onClick={handleNavLinkClick}
            className={`inline-flex items-center text-xs font-bold uppercase tracking-wider transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8CD34D] rounded-full px-2 py-1 ${
              isCompanyActive ? "text-white" : "text-zinc-400 hover:text-white"
            }`}
          >
            <span>Company</span>
            {isCompanyActive && <span className="w-1.5 h-1.5 rounded-full bg-[#8CD34D] ml-1.5" aria-hidden="true" />}
          </Link>
        </div>

        {/* Right: CTA Pill & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            onClick={handleNavLinkClick}
            className="hidden md:inline-flex items-center justify-center rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider bg-white text-zinc-950 hover:bg-[#8CD34D] hover:text-zinc-950 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8CD34D]"
          >
            Contact Us
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden text-zinc-300 hover:text-white p-1 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8CD34D]"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop Mega Menu Dropdown */}
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
          onMenuEnter={handleMenuEnter}
          onMenuLeave={handleMouseLeaveNav}
        />

        {/* Mobile Navigation Drawer */}
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
    </header>
  );
}
