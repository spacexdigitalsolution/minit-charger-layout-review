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
    question: "Why Is Altus II Right Fit For Us?",
    answer: "It charges GSE and small EVs across Lead Acid, Lithium, or EV batteries, with dual ports plus an optional 3rd port for passenger EVs."
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
            title="Extreme Conditions,\nZero Compromises"
            description="From desert heat to freezing ramps, Altus II keeps charging at full efficiency."
            stats={[
              { targetValue: 95, unit: "%", label: "Max Efficiency" },
              { targetValue: "IP54", unit: "", label: "Outdoor Rated" },
              { targetValue: "-13", unit: "°F to 122°F", label: "Full Operating Range" }
            ]}
          />

          <VideoModule />

          <CumulusSpotlight
            headline="Charge It. Track It. See It All."
            supportingCopy="Altus II handles the charging. CellTrac, installed on the vehicle, checks the battery, its temperature, charge level, and health, then tells Altus II exactly how much power to send. Cumulus is the dashboard where you see it all, your chargers and your batteries at one place without switching screens."
            featureBullets={[
              "Tracks run time to schedule maintenance before problems start",
              "GPS and geofencing, know where every vehicle is",
              "Alerts the moment a battery misses equalization"
            ]}
            imageSide="left"
            // AI-generated placeholder — replace with real photography, approved 2026-09-12
            dashboardImage="/assets/ai_placeholders/cumulus_billing_dashboard_1789225361318.jpg"
          />

          {/*  <UseCases /> */}

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
            faqs={faqs}
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
