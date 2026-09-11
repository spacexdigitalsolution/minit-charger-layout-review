import HeroSection from "./_components/HeroSection";
import SignatureSolution from "./_components/SignatureSolution";
import PersonaSplit from "./_components/PersonaSplit";
import BenefitModules from "./_components/BenefitModules";
import ImageCardGrid from "@/app/components/ImageCardGrid";
import FaqSection from "@/app/components/FaqSection";
import ConversionBand from "@/app/components/ConversionBand";
import SmoothScroll from "@/app/products/altus-ii/_components/SmoothScroll";

export const metadata = {
  title: "Aviation GSE Fast Charging | Minit Charger",
  description: "Keep the ramp moving with intelligent, high-power fast charging for ground support equipment. Maximize uptime and consolidate mixed fleets on one platform.",
};

const faqs = [
  {
    question: "Do I need separate chargers for low-voltage baggage tractors and high-voltage EVs?",
    answer: "No. With our Magnus platform, you can support 24-1000 VDC on a single charger. This eliminates the need for separate charging architectures as you transition your fleet to higher voltage equipment."
  },
  {
    question: "How do we deploy chargers if our airport has limited electrical capacity?",
    answer: "Minit Charger utilizes intelligent power sharing to sequence charging across connected vehicles, maximizing the utilization of your available power without overdrawing the grid. Additionally, our Mobilus platform offers mobile energy storage and charging to bypass grid constraints entirely."
  },
  {
    question: "Can these chargers survive the harsh conditions on the ramp?",
    answer: "Yes. Our outdoor-rated enclosures are designed specifically to withstand harsh weather, jet blast, and extreme temperatures, ensuring maximum uptime."
  },
  {
    question: "How do we handle energy billing for different ground handlers?",
    answer: "Our chargers can integrate certified energy metering that precisely tracks power usage. This data syncs to the AssetPro cloud platform, allowing for automated compliance reporting and streamlined billing by vehicle or tenant."
  },
  {
    question: "Does Minit support lead-acid batteries or only lithium-ion?",
    answer: "Our charging ecosystem is chemistry-agnostic. We support Lead Acid, Lithium-ion, AGM, and standard EV battery architectures, ensuring compatibility across mixed legacy and modern fleets."
  }
];

const products = [
  {
    id: "altus-ii",
    name: "Altus II",
    kicker: "Airport GSE",
    image: "/assets/gse/ALTUS_II_GSE_BACKGROUND.png",
    link: "/products/altus-ii"
  },
  {
    id: "magnus",
    name: "Magnus",
    kicker: "Universal Mixed Fleet",
    image: "/assets/gse/MGNS_GSE_1.png",
    link: "/products/magnus"
  },
  {
    id: "mobilus",
    name: "Mobilus",
    kicker: "Mobile Charging",
    image: "/assets/gse/MOB_GSE_2.png",
    link: "/products/mobilus"
  },
  {
    id: "cumulus",
    name: "Cumulus",
    kicker: "Enterprise Software",
    image: "/assets/Products/Cumulus Software Lisitng-1200.webp",
    link: "/products/cumulus"
  }
];

export default function AviationGSEPage() {
  return (
    <>
      <HeroSection />
      <SmoothScroll>
        <div className="relative z-10 bg-white dark:bg-zinc-950">
          <SignatureSolution />
          <PersonaSplit />
          <BenefitModules />
          
          <ImageCardGrid 
            title="One Connected Ecosystem"
            description="Purpose-built platforms for aviation ground support operations."
            linkText="View All Products"
            linkHref="/products"
            items={products}
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
