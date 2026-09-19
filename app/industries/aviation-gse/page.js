import HeroSection from "./_components/HeroSection";
import SignatureSolution from "./_components/SignatureSolution";
import PersonaSplit from "./_components/PersonaSplit";
import BenefitModules from "./_components/BenefitModules";
import ImageCardGrid from "@/app/components/ImageCardGrid";
import FaqSection from "@/app/components/FaqSection";
import ConversionBand from "@/app/components/ConversionBand";
import StatsBlock from "@/app/components/StatsBlock";
import CumulusSpotlight from "@/app/components/CumulusSpotlight";

export const metadata = {
  title: "Aviation GSE Fast Charging | Minit Charger",
  title: "Aviation & Airport GSE Charging | Minit Charger",
  description: "High-throughput, ruggedized fast charging for airport ground support equipment. Keep the ramp moving.",
};

const faqs = [
  {
    question: "Is Minit Charger used at other airports?",
    answer: "Yes. Minit Charger is deployed at airports across the U.S., Spain, and Taiwan, backed by over a decade of charging technology experience."
  },
  {
    question: "Can chargers be diagnosed without a vehicle?",
    answer: "Yes. A portable diagnostic tool validates pilot connection, communication, and power output on-site, without needing an actual vehicle present."
  },
  {
    question: "What safety certifications do the chargers carry?",
    answer: "Altus II is UL1564 certified with an IP54-rated enclosure, meeting safety standards for demanding outdoor airport environments."
  },
  {
    question: "Does ground crew need special training?",
    answer: "No extensive training required. The 7-inch touch panel and automatic cable retraction keep day-to-day operation simple for any ground crew."
  }
];

import { products as allProducts } from "@/data/products";

const products = allProducts
  .filter(p => p.industries.includes("aviation-gse"))
  .map(p => ({
    ...p,
    kicker: p.categoryTag,
    image: p.cardImage,
    link: p.productPageUrl,
    description: p.keyUSP
  }));

const stats = [
  { value: "95%", label: "Max Efficiency", description: "Optimized power electronics deliver peak charging without requiring massive grid upgrades." },
  { value: "2-3", label: "Ports Per Unit", description: "Simultaneous multi-vehicle charging maximizes ramp footprint." },
  { value: "24/7", label: "Remote Oversight", description: "Cloud-connected diagnostics track every session globally." },
];

export default function AviationGSEPage() {
  return (
    <>
      <HeroSection />
        <div className="relative z-10 bg-white dark:bg-zinc-950">
          <SignatureSolution />
          {/*  <StatsBlock stats={stats} /> */}
          <PersonaSplit />
          <BenefitModules />

          {/*  <ImageCardGrid
            title="One Connected Ecosystem"
            description="Purpose-built platforms for aviation ground support operations."
            linkText="View All Products"
            linkHref="/products"
            items={products}
          /> */}

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
            title="Aviation GSE FAQ"
            description="What ground crews, airlines, and airport planners want to know before electrifying their fleets."
            faqs={faqs}
          />

          <ConversionBand
            headline="It's Time To Retire Outdated Charging"
            primaryCTA={{ label: "Speak to a GSE Expert", href: "/contact" }}
            secondaryCTA={{ label: "Request an Assessment", href: "/contact" }}
            bgImage="/assets/gse/MOB_GSE_2.png"
          />
        </div>
    </>
  );
}
