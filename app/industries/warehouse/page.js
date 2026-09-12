import HeroSection from "./_components/HeroSection";
import SignatureSolution from "./_components/SignatureSolution";
import PersonaSplit from "./_components/PersonaSplit";
import BenefitModules from "./_components/BenefitModules";
import ImageCardGrid from "@/app/components/ImageCardGrid";
import FaqSection from "@/app/components/FaqSection";
import ConversionBand from "@/app/components/ConversionBand";
import SmoothScroll from "@/app/products/altus-ii/_components/SmoothScroll";
import StatsBlock from "@/app/components/StatsBlock";
import CumulusSpotlight from "@/app/components/CumulusSpotlight";

export const metadata = {
  title: "Warehouse & Material Handling Charging | Minit Charger",
  description: "High-uptime, space-saving fast charging for indoor and outdoor material handling equipment. Maximize throughput and recover floor space.",
};

const faqs = [
  {
    question: "Do we need separate chargers for our reach trucks and pallet jacks?",
    answer: "No. Our chargers are universally compatible and support varied voltages across your entire material handling fleet from a single unit."
  },
  {
    question: "How much warehouse floor space do these chargers take up?",
    answer: "Our platforms are designed to be extremely space-efficient. By consolidating chargers and supporting wall-mounted installations, we help you reclaim valuable square footage for revenue-generating activities."
  },
  {
    question: "What happens if a charger goes down during peak shift?",
    answer: "Our chargers boast a 99% uptime SLA. Built-in redundancy and cloud-connected diagnostics mean issues are flagged and often resolved remotely before they impact your shift throughput."
  },
  {
    question: "Does Minit support lead-acid batteries or only lithium-ion?",
    answer: "Our charging ecosystem is chemistry-agnostic. We support Lead Acid, Lithium-ion, AGM, and standard EV battery architectures, ensuring compatibility across mixed legacy and modern fleets."
  }
];

import { products as allProducts } from "@/data/products";

const products = allProducts
  .filter(p => p.industries.includes("warehouse"))
  .map(p => ({
    ...p,
    kicker: p.categoryTag,
    image: p.cardImage,
    link: p.productPageUrl,
    description: p.keyUSP
  }));

const stats = [
  { value: "99%", label: "Uptime SLA", description: "Cloud-connected redundancy eliminates charging bottlenecks." },
  { value: "30%", label: "Space Reclaimed", description: "Multi-port configurations free up valuable warehouse floor footprint." },
  { value: "100%", label: "Chemistry Agnostic", description: "Simultaneous support for Lithium-ion, Lead-Acid, and AGM." },
];

export default function WarehousePage() {
  return (
    <>
      <HeroSection />
      <SmoothScroll>
        <div className="relative z-10 bg-white dark:bg-zinc-950">
          <StatsBlock stats={stats} />
          <SignatureSolution />
          <PersonaSplit />
          <BenefitModules />
          {/*  <ImageCardGrid 
            title="One Connected Ecosystem"
            description="Purpose-built platforms for material handling operations."
            linkText="View All Products"
            linkHref="/products"
            items={products}
          /> */}

          <CumulusSpotlight
            headline="Total Fleet Visibility"
            supportingCopy="Manage the complete charging operation, not only the charger. Connect your warehouse fleet hardware to the Cumulus cloud platform."
            imageSide="right"
          />

          <FaqSection
            title="Material Handling FAQ"
            description="Answers to the most common questions from facility managers and supply chain directors regarding fleet electrification."
            faqs={faqs}
          />

          <ConversionBand
            headline="Ready to optimize your facility?"
            primaryCTA={{ label: "Speak to an Expert", href: "/contact" }}
            secondaryCTA={{ label: "Request an Assessment", href: "/contact" }}
            bgImage={null}
          />
        </div>
      </SmoothScroll>
    </>
  );
}
