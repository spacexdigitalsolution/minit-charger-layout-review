import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Page Not Found",
  description: "The requested page could not be located.",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-zinc-950 text-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-xl text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-green-500 mb-4 block">
          404 Error
        </span>
        <h1 className="font-display text-5xl sm:text-6xl font-black uppercase tracking-tight text-white mb-6">
          Page Not Located
        </h1>
        <p className="text-lg text-zinc-400 font-light mb-10 leading-relaxed">
          The fleet charging resource, product specification, or page you requested could not be found or has moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-green-600 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:bg-green-700 transition-colors"
          >
            Return to Home
          </Link>
          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-white transition-colors group"
          >
            Explore Products
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
