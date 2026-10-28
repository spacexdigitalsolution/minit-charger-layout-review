import HeroSection from "./_components/HeroSection";
import ChallengesScroll from "./_components/ChallengesScroll";
import ComparisonTable from "./_components/ComparisonTable";
import PersonaSplit from "./_components/PersonaSplit";
import BenefitModules from "./_components/BenefitModules";
import CumulusSpotlight from "@/components/CumulusSpotlight";
import FaqSection from "@/components/FaqSection";
import ConversionBand from "@/components/ConversionBand";
import { lsvFaqs } from "./_components/lsvData";

export const metadata = {
  title: "Low Speed Vehicle (LSV) Charging Solutions | Minit Charger",
  description: "Durable onboard and standalone charging solutions for low-speed electric vehicles, campus shuttles, resort carts, and utility fleets.",
};

export default function LSVIndustryPage() {
  return (
    <>
      <HeroSection />
      <div className="relative z-10 bg-white dark:bg-zinc-950">
        <ChallengesScroll />
        <ComparisonTable />
        <PersonaSplit />
        <BenefitModules />

        <CumulusSpotlight
          headline="Nothing In Your Campus Fleet Goes Unseen"
          supportingCopy="Track vehicle GPS locations, battery SoC, and charging status across sprawling university campuses, corporate parks, and resort grounds in one live dashboard."
          featureBullets={[
            "Instant notifications when utility carts reach low battery thresholds",
            "Real-time GPS geofencing and equipment location tracking",
            "Automated energy consumption audit reports across departments"
          ]}
          imageSide="right"
        />

        <FaqSection
          title="Frequently Asked Queries"
          description="What campus managers, resort directors, and security supervisors ask before electrifying utility fleets."
          faqs={lsvFaqs}
        />

        <ConversionBand
          headline="It Is Time To Upgrade Outdated Consumer Cords"
          subheadline="Standardize on commercial-grade, sealed Durus chargers to keep your campus utility and shuttle fleet moving reliably."
          primaryCTA={{ label: "Speak to an LSV Expert", href: "/contact" }}
          secondaryCTA={{ label: "Request a Campus Fleet Audit", href: "/contact" }}
          bgImage="/assets/homepage/Engineered for LSEVs.webp"
        />
      </div>
    </>
  );
}
