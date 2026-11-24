import HeroSection from "./_components/HeroSection";
import ChallengesScroll from "./_components/ChallengesScroll";
import ComparisonTable from "./_components/ComparisonTable";
import BenefitModules from "./_components/BenefitModules";
import CumulusSpotlight from "@/components/ui/CumulusSpotlight";
import FaqSection from "@/components/ui/FaqSection";
import ConversionBand from "@/components/ui/ConversionBand";
import {
  lsvSeo,
  lsvMonitoring,
  lsvFaqs,
  lsvCta
} from "./_components/lsvData";

export const metadata = {
  title: lsvSeo.title,
  description: lsvSeo.description,
  keywords: lsvSeo.keywords,
};

export default function LSVIndustryPage() {
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
          headline={lsvMonitoring.heading}
          supportingCopy={`${lsvMonitoring.intro} ${lsvMonitoring.body}`}
          featureBullets={lsvMonitoring.bullets}
          imageSide="right"
        />

        {/* Section 7: FAQs */}
        <FaqSection
          title="Frequently Asked Questions"
          description="Common questions from campus, site and fleet teams running small electric vehicles."
          faqs={lsvFaqs}
        />

        {/* Section 8: Closing CTA */}
        <ConversionBand
          headline={lsvCta.headline}
          subheadline={lsvCta.subhead}
          primaryCTA={lsvCta.button}
          bgImage={null}
        />
      </div>
    </>
  );
}
