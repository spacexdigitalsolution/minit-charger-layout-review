import HeroSection from "./_components/HeroSection";
import SpecsTable from "./_components/SpecsTable";
import BenefitsGrid from "./_components/BenefitsGrid";
import PowerUsageBilling from "./_components/PowerUsageBilling";
import GatePowerManager from "./_components/GatePowerManager";
import StatModule from "@/app/components/StatModule";
import VideoModule from "./_components/VideoModule";
import PairAltusII from "./_components/PairAltusII";
import ImageCardGrid from "@/app/components/ImageCardGrid";
import FaqSection from "@/app/components/FaqSection";
import ConversionBand from "@/app/components/ConversionBand";
import { products as allProducts } from "@/data/products";

const faqs = [
  {
    question: "Why Is Altus II Right Fit For Us?",
    answer: "It charges ground equipment on lead-acid or lithium batteries through two independent ports, plus a J1772 port for passenger EVs."
  },
  {
    question: "What Makes It Different From Other Chargers?",
    answer: "Cables retract automatically instead of sitting exposed on the ramp, a 7-inch touchscreen shows live status, and cloud dashboards give visibility most chargers don't offer."
  },
  {
    question: "What Charging Connectors Does Altus II Support?",
    answer: "Altus II supports Anderson, Euro 320, REMA 320, and BIW connectors as standard, with an optional J1772 connector added for Level 2 passenger EV charging."
  },
  {
    question: "Is Altus II Certified For Safety Standards?",
    answer: "Yes. Altus II is UL1564 certified, the safety standard built specifically for electric industrial vehicle chargers, including the equipment used across airport ground operations."
  },
  {
    question: "Has Altus II Been Deployed Before?",
    answer: "Yes, deployed at airports worldwide. It's pedestal-mounted for flexible ramp placement, no wall space or structural changes required to install it."
  }
];

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
      {/* 1. Banner Section */}
      <HeroSection />

      <div className="relative z-10 bg-white dark:bg-zinc-950">
        {/* 2. Technical Specifications */}
        <SpecsTable />

        {/* 3. Salient Features */}
        <BenefitsGrid />

        {/* 4. Power Usage Billing */}
        <PowerUsageBilling />

        {/* 5. End the Power Struggle */}
        <GatePowerManager />

        {/* 6. Engineered for Extremes */}
        <StatModule
          title={"Extreme Conditions,\nBuilt-In Protection"}
          description="From desert heat to freezing ramps, Altus II keeps working. Its silicon carbide electronics handle heat better, and if temperatures climb too high, it lowers its own power to protect itself instead of shutting down."
          stats={[
            { targetValue: 95, unit: "%", label: "Max Efficiency" },
            { targetValue: "IP54", unit: "", label: "Outdoor Rated" },
            { targetValue: "-13°F to 122°F", unit: "", label: "Full Operating Range" }
          ]}
        />

        {/* 7. Beyond the Hardware */}
        <VideoModule />

        {/* 8. Pair Altus II */}
        <PairAltusII />

        {/* 9. Explore the Ecosystem */}
        <ImageCardGrid
          title="Minit Charger for Every Bottleneck You Run Into"
          description="The problem doesn't stop at one fleet. Airports, warehouses, transit, every operation has its own. Explore what solves yours."
          linkText="View All Products"
          linkHref="/products"
          items={relatedProducts}
        />

        {/* 10. FAQs */}
        <FaqSection
          title="Some Questions You May Have"
          description="Here's generally what most people ask frequently before deploying Altus II."
          faqs={faqs}
        />

        {/* 11. CTA */}
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
