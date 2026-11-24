import HeroSection from "./_components/overview/HeroSection";
import SpecsTable from "./_components/overview/SpecsTable";
import BenefitsGrid from "./_components/overview/BenefitsGrid";
import PowerUsageBilling from "./_components/features/PowerUsageBilling";
import GatePowerManager from "./_components/features/GatePowerManager";
import StatModule from "@/components/ui/StatModule";
import VideoModule from "./_components/overview/VideoModule";
import PairAltusII from "./_components/features/PairAltusII";
import RelatedProductsSection from "@/components/product/RelatedProductsSection";
import FaqSection from "@/components/ui/FaqSection";
import ConversionBand from "@/components/ui/ConversionBand";
import { altusFaqs, altusStats } from "./_components/overview/altusData";
import { products } from "@/data/products";

const RELATED_PRODUCT_IDS = ["magnus", "momentus", "maximus"];
const RELATED_PRODUCTS = products
  .filter(p => RELATED_PRODUCT_IDS.includes(p.id))
  .map(p => ({
    ...p,
    kicker: p.categoryTag,
    image: p.cardImage,
    link: p.productPageUrl,
    description: p.keyUSP
  }));

export const metadata = {
  title: "Altus II Dual-Port DC Fast Charger | Minit Charger",
  description: "High-throughput airport GSE charger with dual independent ports, retractable cables, and 480VAC 3-phase efficiency.",
};

export default function AltusIIProductPage() {
  const altusJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Altus II Dual-Port DC Fast Charger",
    description: "High-throughput airport GSE charger with dual independent ports, retractable cables, and 480VAC 3-phase efficiency.",
    brand: {
      "@type": "Brand",
      name: "Minit Charger",
    },
    category: "Airport GSE Fast Charger",
    url: "https://minitcharger.com/products/altus-ii",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(altusJsonLd) }}
      />
      <HeroSection />

      <div className="relative z-10 bg-white dark:bg-zinc-950">
        <SpecsTable />
        <BenefitsGrid />
        <PowerUsageBilling />
        <GatePowerManager />
        <StatModule
          title={"Extreme Conditions,\nBuilt-In Protection"}
          description="From desert heat to freezing ramps, Altus II keeps working. Its silicon carbide electronics handle heat better, and if temperatures climb too high, it lowers its own power to protect itself instead of shutting down."
          stats={altusStats}
        />
        <VideoModule />
        <PairAltusII />
        <RelatedProductsSection
          title="Minit Charger for Every Bottleneck You Run Into"
          description="The problem doesn't stop at one fleet. Airports, warehouses, transit, every operation has its own. Explore what solves yours."
          linkText="View All Products"
          linkHref="/products"
          items={RELATED_PRODUCTS}
        />
        <FaqSection
          title="Some Questions You May Have"
          description="Here's generally what most people ask frequently before deploying Altus II."
          faqs={altusFaqs}
        />
        <ConversionBand
          headline="Space. Power. Damage. Downtime. Altus II Solves It All."
          primaryCTA={{ label: "Speak to an Expert", href: "/contact" }}
          secondaryCTA={{ label: "Request a Quote", href: "/contact" }}
          bgImage="/assets/products/altus-ii/cta/airport-ramp-operations-beneath-snowy-peaks.png"
        />
      </div>
    </>
  );
}
