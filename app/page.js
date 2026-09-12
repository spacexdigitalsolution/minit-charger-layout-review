import HomeHero from "./_components/HomeHero";
import TrustStrip from "./_components/TrustStrip";
import ProblemFraming from "./_components/ProblemFraming";
import EnvironmentGrid from "./_components/EnvironmentGrid";
import EngineeredAdvantages from "./_components/EngineeredAdvantages";
import InteractiveScenes from "./_components/InteractiveScenes";
import ComparisonSplit from "./_components/ComparisonSplit";
import FeaturedProduct from "./_components/FeaturedProduct";
import ImageCardGrid from "./components/ImageCardGrid";
import LogoStrip from "./_components/LogoStrip";
import SpecsTable from "./products/altus-ii/_components/SpecsTable";
import ProcessSteps from "./_components/ProcessSteps";
import FaqSection from "./components/FaqSection";
import CustomerQuotes from "./_components/CustomerQuotes";
import ConversionBand from "./components/ConversionBand";
import SmoothScroll from "./products/altus-ii/_components/SmoothScroll";
import CumulusSpotlight from "./components/CumulusSpotlight";

import { products } from "@/data/products";

const displayProductIds = ["altus-ii", "magnus", "mobilus", "cumulus"];
const pageProducts = products
  .filter(p => displayProductIds.includes(p.id))
  .map(p => ({
    ...p,
    kicker: p.categoryTag,
    image: p.cardImage,
    link: p.productPageUrl,
    description: p.keyUSP
  }));

const faqs = [
  {
    question: "We run a very specific type of fleet. How do you know what we actually need?",
    answer: "We don't sell one charger and adapt your operation to it. Airport GSE runs on tight turnaround windows and lives outdoors, warehouse MHE runs multiple shifts in a fixed footprint, commercial EV fleets have entirely different duty cycles. Every configuration starts with how your fleet actually moves, not a generic spec sheet."
  },
  {
    question: "Will installation disrupt our operation, and what if our facility doesn't fit a standard setup?",
    answer: "Installation is scoped to your site before anything is ordered, not figured out after equipment shows up. Wall-mount, pedestal, or fleet-bay options exist specifically because no two facilities are laid out the same way, and disruption gets planned around your operating hours, not the installer's schedule."
  },
  {
    question: "How do we know the system is actually working correctly before we depend on it?",
    answer: "Every unit is verified and connected to our cloud platform before go-live, so performance is confirmed against your equipment, not assumed. You're not finding out something's wrong the first time your fleet actually needs it."
  },
  {
    question: "When something goes wrong, how fast can we tell what's actually broken, and do we need to wait for someone to fly out and fix it?",
    answer: "On-screen diagnostics tell you immediately whether the problem is the charger or the battery, so you're not guessing while equipment sits idle. Most issues are visible and addressable without waiting on an outside technician, and predictive alerts are designed to catch developing problems before they become a shutdown at all."
  },
  {
    question: "We already have more dashboards than we can use. What makes this data actually useful?",
    answer: "This isn't a separate system to check, it plugs into what you already use, ERP, CMMS, existing fleet workflows, so charging and battery data shows up where your team already makes decisions instead of living in one more tab nobody opens."
  },
  {
    question: "Do you publish pricing online?",
    answer: "No. Charging infrastructure isn't a fixed-price product, it depends on fleet size, chemistry, voltage, and site conditions, so pricing comes from a scoped, tailored quote rather than a public price list."
  }
];

export default function Home() {
  return (
    <>
      <SmoothScroll>
        <div className="relative z-10 bg-white dark:bg-black font-sans">

          {/* 1. Hero */}
          <HomeHero />

          {/* 2. Trust strip */}
          <TrustStrip />

          {/* 3. Why fleets switch */}
          <ProblemFraming />

          {/* 4. Engineered for Every Environment */}
          <EnvironmentGrid />

          {/* 5. Engineered advantages detail list */}
          <EngineeredAdvantages />

          {/* 6. Interactive charging scenes */}
          <InteractiveScenes />

          {/* 7. Indoor vs outdoor comparison */}
          <ComparisonSplit />

          {/* 8. Featured product spotlight */}
          <FeaturedProduct />

          {/* 9. Cutting-edge solutions by use case */}
          <ImageCardGrid
            title="Purpose-Built Platforms"
            description="Hardware and software engineered for the realities of industrial fleet operations."
            linkText="Explore the Ecosystem"
            linkHref="/products"
            items={pageProducts}
          />

          {/* 10. Customer quotes */}
          <CustomerQuotes />

          {/* Cumulus Spotlight Cross-sell */}
          <CumulusSpotlight 
            headline="See your fleet before it strands you"
            supportingCopy="Manage the complete charging operation, not only the charger. Connect your hardware to the Cumulus cloud platform for total visibility."
            imageSide="right"
          />

          {/* 11. Company proof/stat band with logos */}
          <LogoStrip
            title="Trusted by the World's Best"
            description="For over two decades, leading fleets have relied on Minit Charger to keep their operations moving."
            stats={[
              { targetValue: 25, unit: "+", label: "Years Experience" },
              { targetValue: 15000, unit: "+", label: "Global Installs" },
              { targetValue: 99, unit: "%", label: "Uptime SLA" }
            ]}
          />

          {/* 12. Spec comparison table */}
          <div className="bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
            <SpecsTable />
          </div>

          {/* 13. Process steps */}
          <ProcessSteps />

          {/* 14. Guides/resources cross-sell - Reusing ImageCardGrid for resources */}
          <ImageCardGrid
            title="Insights & Resources"
            description="Explore our latest case studies, deployment guides, and whitepapers."
            linkText="View All Resources"
            linkHref="/resources"
            imageMode="cover"
            items={[
              { id: "gse-guide", name: "GSE Electrification Guide", kicker: "Whitepaper", image: "/assets/homepage/Engineered for Airports.webp", link: "/resources" },
              { id: "warehouse-case", name: "Warehouse ROI Analysis", kicker: "Case Study", image: "/assets/homepage/Engineered for Warehouses.webp", link: "/resources" }
            ]}
          />

          {/* 15. FAQ */}
          <FaqSection
            title="Frequently Asked Questions"
            description="Common inquiries about our platform, deployment process, and technical capabilities."
            faqs={faqs}
          />

          {/* 16. Local/regional service note */}
          <section className="py-16 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 text-center">
            <div className="mx-auto max-w-3xl px-4">
              <h3 className="font-display text-xl font-bold uppercase tracking-wide text-zinc-900 dark:text-white mb-4">
                National Coverage, Local Support
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-light">
                Our certified service network provides rapid on-site response and preventative maintenance across North America, ensuring your chargers are always ready when you need them.
              </p>
            </div>
          </section>

          {/* 17. Final CTA band */}
          <ConversionBand
            headline="Every Minute of Downtime Has a Cost. Let's Fix That."
            primaryCTA={{ label: "Contact Sales", href: "/contact" }}
            secondaryCTA={{ label: "Request an Audit", href: "/contact" }}
            bgImage="/assets/Industries/Aviation-GSE/CTA/Banner.webp"
          />

        </div>
      </SmoothScroll>
    </>
  );
}
