"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function UnderDevelopment({ title = "This Page", returnUrl = "/" }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="max-w-2xl">
        <h1 className="mb-6 font-oswald text-4xl font-bold uppercase  md:text-5xl lg:text-5xl text-zinc-900 dark:text-white">
          {title}
        </h1>
        <p className="mb-8 font-sans text-lg text-zinc-600 dark:text-zinc-400">
          This page is currently in development. Check back soon, or contact us to learn more.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={returnUrl}
            className="group flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-none border border-zinc-200 bg-white px-8 text-sm font-bold uppercase r text-zinc-900 transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Go Back
          </Link>
          <Link
            href="/contact"
            className="flex h-12 w-full sm:w-auto items-center justify-center rounded-none bg-zinc-900 px-8 text-sm font-bold uppercase r text-white transition-all hover:bg-[#8CD34D] hover:text-zinc-900 dark:bg-white dark:text-zinc-900 dark:hover:bg-[#8CD34D]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
