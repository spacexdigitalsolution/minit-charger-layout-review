import HeroSection from "./_components/HeroSection";
import ChallengesScroll from "./_components/ChallengesScroll";
import ComparisonTable from "./_components/ComparisonTable";
import BenefitModules from "./_components/BenefitModules";
import CumulusSpotlight from "@/components/ui/CumulusSpotlight";
import FaqSection from "@/components/ui/FaqSection";
import ConversionBand from "@/components/ui/ConversionBand";
import {
  warehouseSeo,
  warehouseMonitoring,
  warehouseFaqs,
  warehouseCta
} from "./_components/warehouseData";

export const metadata = {
  title: warehouseSeo.title,
  description: warehouseSeo.description,
  keywords: warehouseSeo.keywords,
};

export default function WarehouseIndustryPage() {
  return (
    <>
      {/* Section 1: Banner */}
      <HeroSection />

      <div className="relative z-10 bg-white dark:bg-zinc-950">
        {/* Section 2: Challenges and capabilities */}
        <ChallengesScroll />

        {/* Section 3: Comparison */}
        <ComparisonTable />

        {/* Section 4: Ecosystem attributes & Section 5: Mobile power solution */}
        <BenefitModules />

        {/* Section 6: Monitoring and data */}
        <CumulusSpotlight
          headline={warehouseMonitoring.heading}
          supportingCopy={`${warehouseMonitoring.intro} ${warehouseMonitoring.body}`}
          featureBullets={warehouseMonitoring.bullets}
          imageSide="right"
        />

        {/* Section 7: FAQs */}
        <FaqSection
          title="Frequently Asked Questions"
          description="Common questions from warehouse, operations and maintenance teams."
          faqs={warehouseFaqs}
        />

        {/* Section 8: Closing CTA */}
        <ConversionBand
          headline={warehouseCta.headline}
          subheadline={warehouseCta.subhead}
          primaryCTA={warehouseCta.button}
          bgImage={null}
        />
      </div>
    </>
  );
}
