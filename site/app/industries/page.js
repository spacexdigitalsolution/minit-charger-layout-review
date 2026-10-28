import { industryCategories } from "@/data/categories";
import ConversionBand from "@/components/ConversionBand";
import IndustryListClient from "./_components/IndustryListClient";

export const metadata = {
  title: "Industries We Serve | Minit Charger",
  description: "Tailored fast-charging infrastructure for airport GSE, material handling warehouses, and commercial transit fleets.",
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="pt-24 bg-zinc-950 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-4 mt-12 text-center">
          <h1 className="font-oswald text-5xl md:text-5xl font-bold uppercase text-white mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl font-sans mx-auto">
            Tailored charging infrastructure for the world&apos;s most demanding operational environments.
          </p>
        </div>
      </div>

      <IndustryListClient industryCategories={industryCategories} />

      <ConversionBand
        headline="Ready to power your operations?"
        primaryCTA={{ label: "Contact Us", href: "/contact" }}
        secondaryCTA={{ label: "View Products", href: "/products" }}
      />
    </main>
  );
}
