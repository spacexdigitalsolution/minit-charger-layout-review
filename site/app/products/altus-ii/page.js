import HeroSection from "./_components/HeroSection";
import SpecsTable from "./_components/SpecsTable";
import BenefitsGrid from "./_components/BenefitsGrid";
import PowerUsageBilling from "./_components/PowerUsageBilling";
import GatePowerManager from "./_components/GatePowerManager";
import StatModule from "@/components/StatModule";
import VideoModule from "./_components/VideoModule";
import PairAltusII from "./_components/PairAltusII";
import ImageCardGrid from "@/components/ImageCardGrid";
import FaqSection from "@/components/FaqSection";
import ConversionBand from "@/components/ConversionBand";
import { altusFaqs, relatedProducts, altusStats } from "./_components/altusData";

export const metadata = {
  title: "Altus II Dual-Port DC Fast Charger | Minit Charger",
  description: "High-throughput airport GSE charger with dual independent ports, retractable cables, and 480VAC 3-phase efficiency.",
};

export default function AltusIIProductPage() {
  return (
    <>
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
        <ImageCardGrid
          title="Minit Charger for Every Bottleneck You Run Into"
          description="The problem doesn't stop at one fleet. Airports, warehouses, transit, every operation has its own. Explore what solves yours."
          linkText="View All Products"
          linkHref="/products"
          items={relatedProducts}
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
          bgImage={null}
        />
      </div>
    </>
  );
}
