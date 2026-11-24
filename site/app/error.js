"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RotateCcw } from "lucide-react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // Log unexpected client exceptions for diagnostic telemetry
    console.error("Unhandled client error in route boundary:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-zinc-950 text-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-xl text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-red-500 mb-4 block">
          Application Error
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6">
          Something Went Wrong
        </h1>
        <p className="text-base text-zinc-400 font-light mb-10 leading-relaxed">
          An unexpected issue interrupted this view. You can attempt to re-render the view or navigate back to the home page.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-zinc-800 border border-zinc-700 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:bg-zinc-700 transition-colors cursor-pointer"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Try Again
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-green-600 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:bg-green-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
