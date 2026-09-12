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
  title: "Aviation GSE Fast Charging | Minit Charger",
  title: "Aviation & Airport GSE Charging | Minit Charger",
  description: "High-throughput, ruggedized fast charging for airport ground support equipment. Keep the ramp moving.",
};

const faqs = [
  {
    question: "Can these chargers withstand extreme apron weather conditions?",
    answer: "Yes. Our systems are IP54/NEMA 3R rated or higher, designed specifically to operate reliably in the harsh, exposed environments of active airport ramps."
  },
  {
    question: "Do we need a massive grid upgrade to install these?",
    answer: "Often, no. Our chargers feature intelligent power sharing capabilities, sequencing charging across connected GSE to stay under your existing peak load limits."
  },
  {
    question: "Can we monitor fleet charging remotely?",
    answer: "Absolutely. Full integration with AssetPro cloud software gives your operations center real-time visibility into charger status, session data, and remote diagnostics."
  },
  {
    question: "Are these compatible with different GSE voltages?",
    answer: "Yes. Models like the Altus II and Magnus are universally compatible, supporting a wide voltage range for mixed fleets of baggage tractors, belt loaders, and pushbacks."
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
      <SmoothScroll>
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
            headline="Total Fleet Visibility"
            supportingCopy="Keep the ramp moving. Monitor every charger across the apron in real-time, regardless of the GSE it's powering."
            imageSide="right"
          />

          <FaqSection
            title="Aviation GSE FAQ"
            description="Answers to the most common questions from ground handlers, airlines, and airport authorities regarding fleet electrification."
            faqs={faqs}
          />

          <ConversionBand
            headline="Ready to electrify the ramp?"
            primaryCTA={{ label: "Speak to a GSE Expert", href: "/contact" }}
            secondaryCTA={{ label: "Request an Assessment", href: "/contact" }}
            bgImage="/assets/gse/MOB_GSE_2.png"
          />
        </div>
      </SmoothScroll>
    </>
  );
}
