import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wider">Products</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/products/altus-ii" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Altus II Dual-Port</Link></li>
              <li><Link href="/products/magnus" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Magnus Universal</Link></li>
              <li><Link href="/products/mobilus" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Mobilus Mobile BESS</Link></li>
              <li><Link href="/products/momentus" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Momentus Opportunity</Link></li>
              <li><Link href="/products/maximus" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Maximus Dual 20kW</Link></li>
              <li><Link href="/products" className="text-sm font-semibold text-emerald-600 hover:text-emerald-500 dark:text-emerald-400">View All Products →</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wider">Industries</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/industries/aviation-gse" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Aviation & Airport GSE</Link></li>
              <li><Link href="/industries/warehouse" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Warehouse & Logistics</Link></li>
              <li><Link href="/industries/commercial-fleets" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Commercial Fleets</Link></li>
              <li><Link href="/industries/lsv" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Low-Speed Vehicles (LSV)</Link></li>
              <li><Link href="/industries" className="text-sm font-semibold text-emerald-600 hover:text-emerald-500 dark:text-emerald-400">View All Industries →</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/about" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Contact & Feasibility</Link></li>
              <li><Link href="/blogs" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Knowledge Hub & Insights</Link></li>
              <li><Link href="/internal/hero-variations" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Hero Variations Review</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wider">Legal & Governance</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/privacy" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">&copy; {new Date().getFullYear()} Minit Charger LLC. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-zinc-500 dark:text-zinc-400">
            <Link href="/privacy" className="hover:text-zinc-900 dark:hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-zinc-900 dark:hover:text-white">Terms</Link>
            <Link href="/contact" className="hover:text-zinc-900 dark:hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
