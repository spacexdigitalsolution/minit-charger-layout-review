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
  title: "Commercial Fleet Fast Charging | Minit Charger",
  description: "Scalable fast charging solutions for commercial delivery, transit, and logistics fleets. Maximize route availability and minimize depot footprint.",
};

const faqs = [
  {
    question: "How do we charge our mixed fleet of light and medium-duty vehicles?",
    answer: "Our platforms offer dual-port and multi-voltage capabilities, allowing you to charge different vehicle classes from the same footprint, reducing the need for separate charging zones."
  },
  {
    question: "Our depot power is limited. Do we need a costly grid upgrade?",
    answer: "Not necessarily. We integrate intelligent load balancing to sequence charging based on departure schedules, ensuring your vehicles are ready without exceeding your facility's peak power limits."
  },
  {
    question: "Can we track the energy cost per route?",
    answer: "Yes, our Cumulus software provides detailed energy metering and reporting, allowing you to allocate charging costs to specific vehicles or routes for precise TCO analysis."
  }
];

import { products as allProducts } from "@/data/products";

const products = allProducts
  .filter(p => p.industries.includes("commercial-fleets"))
  .map(p => ({
    ...p,
    kicker: p.categoryTag,
    image: p.cardImage,
    link: p.productPageUrl,
    description: p.keyUSP
  }));

const stats = [
  { value: "40 - 200 kW", label: "Power Output", description: "Scalable power models to support everything from delivery vans to heavy-duty trucks." },
  { value: "99%", label: "Uptime SLA", description: "Depot reliability you can bank on, backed by 24/7 cloud diagnostics." },
  { value: "100%", label: "Integration Ready", description: "Seamless pairing with AssetPro cloud and energy management software." },
];

export default function CommercialFleetsPage() {
  return (
    <>
      <HeroSection />
      <SmoothScroll>
        <div className="relative z-10 bg-white dark:bg-zinc-950">
          <StatsBlock stats={stats} />
          <SignatureSolution />
          <PersonaSplit />
          <BenefitModules />
          
          <ImageCardGrid 
            title="Explore the Ecosystem"
            description="Purpose-built charging platforms for commercial fleets."
            linkText="View All Products"
            linkHref="/products"
            items={products}
          />

          <CumulusSpotlight 
            headline="Total Fleet Visibility"
            supportingCopy="Manage the complete charging operation, not only the charger. Connect your commercial fleet hardware to the Cumulus cloud platform."
            imageSide="left"
          />
          
          <FaqSection 
            title="Commercial Fleets FAQ"
            description="Answers to the most common questions from fleet managers and logistics directors regarding fleet electrification."
            faqs={faqs}
          />
          
          <ConversionBand 
            headline="Ready to electrify your depot?"
            primaryCTA={{ label: "Speak to an Expert", href: "/contact" }}
            secondaryCTA={{ label: "Request an Assessment", href: "/contact" }}
            bgImage={null}
          />
        </div>
      </SmoothScroll>
    </>
  );
}
