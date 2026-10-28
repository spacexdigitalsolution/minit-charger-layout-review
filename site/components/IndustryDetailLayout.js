import IndustryHero from "./industry/IndustryHero";
import IndustryChallenges from "./industry/IndustryChallenges";
import IndustryComparison from "./industry/IndustryComparison";
import StatModule from "@/components/StatModule";
import CumulusSpotlight from "@/components/CumulusSpotlight";
import ImageCardGrid from "@/components/ImageCardGrid";
import FaqSection from "@/components/FaqSection";
import ConversionBand from "@/components/ConversionBand";
import { products } from "@/data/products";

export default function IndustryDetailLayout({ industry }) {
  if (!industry) return null;

  const recommendedProducts = (industry.recommendedProductIds || [])
    .map(id => products.find(p => p.id === id))
    .filter(Boolean)
    .map(p => ({
      name: p.name,
      description: p.shortDescription || p.keyUSP,
      image: p.cardImage || "/assets/homepage/Altus II.webp",
      link: p.productPageUrl,
      tag: p.categoryTag
    }));

  const defaultStats = [
    { targetValue: 95, unit: "%", label: "Peak Electrical Efficiency" },
    { targetValue: 100, unit: "%", label: "Multi-Chemistry Compatibility" },
    { targetValue: 3, unit: " hrs", label: "Full Shift Depletion Recovery" },
    { targetValue: 24, unit: "/7", label: "Operational Uptime" },
  ];

  return (
    <>
      <IndustryHero industry={industry} />

      <div className="relative z-10 bg-white dark:bg-zinc-950">
        <IndustryChallenges industry={industry} />
        <IndustryComparison industry={industry} />

        <StatModule
          title={`Proven Reliability for\n${industry.label}`}
          description={`Tested under real-world shifts, harsh temperatures, and continuous industrial run-cycles. Discover how Minit Charger unlocks peak availability for ${industry.label}.`}
          stats={industry.stats || defaultStats}
        />

        <CumulusSpotlight
          headline="Nothing In Your Fleet Goes Unseen"
          supportingCopy={`Every battery state of charge, charger location, and operating status is monitored and adjusted remotely across ${industry.label} facilities.`}
          featureBullets={[
            "Instant remote charge-curve updates with zero technician truck rolls",
            "Deep insights into equipment dwell time, battery SoC, and geofenced locations",
            "Automated energy consumption audit reports ready for utility compliance"
          ]}
          imageSide="right"
        />

        {recommendedProducts.length > 0 && (
          <ImageCardGrid
            title={`Recommended Hardware for ${industry.label}`}
            description={`Chargers and telemetry systems engineered specifically for the operational run-cycles of ${industry.label}.`}
            linkText="View Complete Hardware Lineup"
            linkHref="/products"
            items={recommendedProducts}
          />
        )}

        <FaqSection
          title={`${industry.label} Electrification FAQ`}
          description={`Key questions fleet managers and facility directors ask before electrifying ${industry.label} operations.`}
          faqs={industry.faqs || []}
        />

        <ConversionBand
          headline={`It is Time to Retire The Outdated Chargers in ${industry.label}`}
          subheadline="Adopt the modern silicon carbide ecosystem to maximize uptime, efficiency, and your bottom line."
          primaryCTA={{ label: "Speak to an Expert", href: "/contact" }}
          secondaryCTA={{ label: "Request an Assessment", href: "/contact" }}
          bgImage="/assets/gse/MOB_GSE_2.png"
        />
      </div>
    </>
  );
}
