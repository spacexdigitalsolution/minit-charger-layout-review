import HeroSection from "./_components/HeroSection";
import ChallengesScroll from "./_components/ChallengesScroll";
import ComparisonTable from "./_components/ComparisonTable";
import PersonaSplit from "./_components/PersonaSplit";
import BenefitModules from "./_components/BenefitModules";
import CumulusSpotlight from "@/components/CumulusSpotlight";
import FaqSection from "@/components/FaqSection";
import ConversionBand from "@/components/ConversionBand";
import { warehouseFaqs } from "./_components/warehouseData";

export const metadata = {
  title: "Warehouse & Material Handling Charging | Minit Charger",
  description: "High-throughput opportunity fast charging for forklifts, AGVs, and multi-shift warehouse distribution centers. Eliminate battery change rooms.",
};

export default function WarehouseIndustryPage() {
  return (
    <>
      <HeroSection />
      <div className="relative z-10 bg-white dark:bg-zinc-950">
        <ChallengesScroll />
        <ComparisonTable />
        <PersonaSplit />
        <BenefitModules />

        <CumulusSpotlight
          headline="Nothing In Your Distribution Center Goes Unseen"
          supportingCopy="Every forklift battery state of charge, charger operating temperature, and energy consumption metric is visible and adjustable remotely in one real-time dashboard."
          featureBullets={[
            "Dynamic peak load shaving to prevent utility demand surcharges",
            "Real-time battery SoC and temperature alerts via CellTrac beacons",
            "Automated shift energy consumption and asset utilization reports"
          ]}
          imageSide="right"
        />

        <FaqSection
          title="Frequently Asked Queries"
          description="What logistics managers, facility directors, and fleet supervisors ask before electrifying warehouse equipment."
          faqs={warehouseFaqs}
        />

        <ConversionBand
          headline="It Is Time To Retire Outdated Battery Rooms"
          subheadline="Adopt modern opportunity fast charging to maximize picking uptime, reclaim floor space, and protect your bottom line."
          primaryCTA={{ label: "Speak to a Warehouse Expert", href: "/contact" }}
          secondaryCTA={{ label: "Request a Facility Assessment", href: "/contact" }}
          bgImage="/assets/homepage/Indoor material handling-01.webp"
        />
      </div>
    </>
  );
}
