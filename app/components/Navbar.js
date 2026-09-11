"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="#" className="flex items-center gap-2">
            <div className="flex items-center text-xl font-bold tracking-tight">
              MINIT <span className="text-green-600 ml-1">CHARGER</span>
            </div>
          </Link>
          <div className="hidden md:flex md:gap-6">
            <Link href="/products/altus-ii" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors">Products</Link>
            <Link href="/industries/aviation-gse" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors">Industries</Link>
            <Link href="#" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors">Company</Link>
          </div>
        </div>
        <div className="hidden md:flex md:items-center md:gap-4">
          <Link href="#" className="inline-flex h-9 items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors">
            Contact Us
          </Link>
        </div>
        <div className="flex md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-zinc-200 bg-white px-4 py-4 dark:border-zinc-800 dark:bg-zinc-950 md:hidden">
          <div className="flex flex-col space-y-4">
            <Link href="/products/altus-ii" className="text-sm font-medium text-zinc-600 dark:text-zinc-300">Products</Link>
            <Link href="/industries/aviation-gse" className="text-sm font-medium text-zinc-600 dark:text-zinc-300">Industries</Link>
            <Link href="#" className="text-sm font-medium text-zinc-600 dark:text-zinc-300">Company</Link>
            <Link href="#" className="inline-flex h-9 items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-zinc-900">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
