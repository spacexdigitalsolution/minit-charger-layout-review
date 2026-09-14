import HeroSection from "./_components/HeroSection";
import BenefitsGrid from "./_components/BenefitsGrid";
import HardwareDetail from "./_components/HardwareDetail";
import StatModule from "@/app/components/StatModule";
import SpecsTable from "./_components/SpecsTable";
import UseCases from "./_components/UseCases";
import ImageCardGrid from "@/app/components/ImageCardGrid";
import FaqSection from "@/app/components/FaqSection";
import VideoModule from "./_components/VideoModule";
import ConversionBand from "@/app/components/ConversionBand";
import CumulusSpotlight from "@/app/components/CumulusSpotlight";
import SmartImage from "@/app/components/SmartImage";

const faqs = [
  {
    question: "What battery chemistries does the Altus II support?",
    answer: "The Altus II is universally compatible and chemistry-agnostic. It seamlessly supports Lead Acid, Lithium-ion, and standard EV battery architectures."
  },
  {
    question: "Can it charge both heavy GSE and passenger EVs?",
    answer: "Yes. By utilizing the optional 3rd port for Level 2 (J1772) charging, the Altus II can simultaneously support your heavy-duty fleet and light passenger EVs."
  },
  {
    question: "Does the charger require significant infrastructure upgrades?",
    answer: "No. Our intelligent power sharing technology sequences charging across connected vehicles, ensuring maximum utilization of your available power without overdrawing the grid or requiring costly peak load upgrades."
  },
  {
    question: "Is it rated for outdoor environments?",
    answer: "Absolutely. The Altus II is built for the harshest ramp conditions with an IP54 outdoor-rated enclosure and an operating minimum temperature of -13°F."
  },
  {
    question: "How does the automated billing work?",
    answer: "The Altus II integrates a certified energy meter that precisely tracks power usage. This data is synced to the AssetPro cloud platform, allowing for automated compliance reporting and streamlined billing."
  }
];

import { products as allProducts } from "@/data/products";

const relatedProductIds = ["magnus", "momentus", "maximus"];
const relatedProducts = allProducts
  .filter(p => relatedProductIds.includes(p.id))
  .map(p => ({
    ...p,
    kicker: p.categoryTag,
    image: p.cardImage,
    link: p.productPageUrl,
    description: p.keyUSP
  }));

export default function AltusIIProductPage() {
  return (
    <>
      <HeroSection />
      <div className="relative z-10 bg-white dark:bg-zinc-950">
          <SpecsTable />
          <BenefitsGrid />
          <HardwareDetail />

          <StatModule
            title="Engineered\nfor Extremes"
            description="Built to withstand the toughest outdoor ramp conditions while delivering exceptional efficiency."
            stats={[
              { targetValue: 95, unit: "%", label: "Max Efficiency" },
              { targetValue: "IP54", unit: "", label: "Outdoor Rated" },
              { targetValue: -13, unit: "°F", label: "Operating Minimum" }
            ]}
          />

          <VideoModule />

          <CumulusSpotlight
            headline="Pair Altus II with Cumulus"
            supportingCopy="Monitor every Altus II unit across your footprint. The Cumulus platform gives you real-time access to session data, battery health, and peak demand."
            imageSide="left"
            // AI-generated placeholder — replace with real photography, approved 2026-09-12
            dashboardImage="/assets/ai_placeholders/cumulus_billing_dashboard_1789225361318.jpg"
          />

          {/*  <UseCases /> */}

          <ImageCardGrid
            title="Explore the Ecosystem"
            description="Purpose-built charging platforms for every fleet application."
            linkText="View All Products"
            linkHref="/products"
            items={relatedProducts}
          />

          <FaqSection
            title="Common Questions"
            description="Find answers to the most common inquiries regarding the Altus II deployment, hardware capabilities, and ecosystem integrations."
            faqs={faqs}
          />

          <ConversionBand
            headline="Ready to deploy the Altus II in your fleet?"
            primaryCTA={{ label: "Speak to an Expert", href: "/contact" }}
            secondaryCTA={{ label: "Request a Quote", href: "/contact" }}
            bgImage={null}
          />
        </div>
    </>
  );
}
