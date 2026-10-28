import HeroSection from "./_components/HeroSection";
import ChallengesScroll from "./_components/ChallengesScroll";
import ComparisonTable from "./_components/ComparisonTable";
import BenefitModules from "./_components/BenefitModules";
import FaqSection from "@/components/FaqSection";
import ConversionBand from "@/components/ConversionBand";
import CumulusSpotlight from "@/components/CumulusSpotlight";
import { aviationFaqs } from "./_components/aviationData";

export const metadata = {
  title: "Aviation & Airport GSE Charging | Minit Charger",
  description: "High-throughput, ruggedized fast charging for airport ground support equipment. Keep the ramp moving.",
};

export default function AviationGSEPage() {
  return (
    <>
      <HeroSection />
      <div className="relative z-10 bg-white dark:bg-zinc-950">
        <ChallengesScroll />
        <ComparisonTable />
        <BenefitModules />

        <CumulusSpotlight
          headline="Nothing On The Ramp Goes Unseen"
          supportingCopy="Every battery's charge profile, location, and live status are visible and adjustable remotely, combining charger and battery health data in one dashboard."
          featureBullets={[
            "Remote, instant charge-profile updates, no technician needed",
            "Deep insights into asset location, geofencing, and movement",
            "Automatic billing and compliance reports, ready without extra work"
          ]}
          imageSide="right"
        />

        <FaqSection
          title="Frequently Asked Queries"
          description="What ground crews, airlines, and airport planners want to know before electrifying their fleets."
          faqs={aviationFaqs}
        />

        <ConversionBand
          headline="It's Time To Retire The Outdated Ones"
          subheadline="Adapt the modern ecosystem to maximize uptime, efficiency, and your bottom line"
          primaryCTA={{ label: "Speak to a GSE Expert", href: "/contact" }}
          secondaryCTA={{ label: "Request an Assessment", href: "/contact" }}
          bgImage="/assets/gse/MOB_GSE_2.png"
        />
      </div>
    </>
  );
}
