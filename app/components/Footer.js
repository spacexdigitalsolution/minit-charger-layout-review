import Link from "next/link";
import { Globe, MessageCircle, Video } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Products</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/products/altus-ii" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Altus II</Link></li>
              <li><Link href="/products/magnus" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Magnus</Link></li>
              <li><Link href="/products/momentus" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Momentus</Link></li>
              <li><Link href="/products/maximus" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Maximus</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Industries</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/industries/airport-gse" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Airport GSE</Link></li>
              <li><Link href="/industries/material-handling" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Material Handling</Link></li>
              <li><Link href="/industries/commercial-fleets" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Commercial Fleets</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Company</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/about" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">About Us</Link></li>
              <li><Link href="/careers" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Careers</Link></li>
              <li><Link href="/news" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">News</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Connect</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/contact" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Contact Sales</Link></li>
              <li><Link href="/support" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Support</Link></li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-zinc-400 hover:text-zinc-500"><Globe className="h-5 w-5" /></a>
              <a href="#" className="text-zinc-400 hover:text-zinc-500"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="text-zinc-400 hover:text-zinc-500"><Video className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">&copy; 2026 Minit Charger. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
