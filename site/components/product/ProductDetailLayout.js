import ProductHero from "./ProductHero";
import ProductSpecs from "./ProductSpecs";
import ProductBenefits from "./ProductBenefits";
import ProductFeatureSplit from "./ProductFeatureSplit";
import ProductSectionSplit from "./ProductSectionSplit";
import ProductPairing from "./ProductPairing";
import StatModule from "@/components/ui/StatModule";
import ImageCardGrid from "@/components/media/ImageCardGrid";
import FaqSection from "@/components/ui/FaqSection";
import ConversionBand from "@/components/ui/ConversionBand";
import { products } from "@/data/products";

export default function ProductDetailLayout({ product, content }) {
  if (!product) return null;

  const relatedProducts = products
    .filter(p => p.id !== product.id)
    .slice(0, 3)
    .map(p => ({
      name: p.name,
      description: p.shortDescription || p.keyUSP,
      image: p.cardImage || null,
      link: p.productPageUrl,
      tag: p.categoryTag
    }));

  const productStats = [
    { targetValue: 95, unit: "%", label: "Peak Electrical Efficiency" },
    { targetValue: 3, unit: " hrs", label: "Typical Full Battery Recovery" },
    { targetValue: 100, unit: "%", label: "Lead-Acid & Lithium Compatible" },
    { targetValue: 24, unit: "/7", label: "Continuous Multi-Shift Uptime" },
  ];

  const defaultFaqs = [
    {
      question: `What battery chemistries does ${product.name} support?`,
      answer: `${product.name} features patented adaptive charging algorithms supporting lithium-ion, flooded lead-acid, and AGM batteries without requiring physical modifications.`
    },
    {
      question: `Can ${product.name} be monitored and adjusted remotely?`,
      answer: `Yes. All ${product.name} units link directly to Cumulus Cloud, offering real-time power metering, remote charge-curve updates, and preventative maintenance alarms.`
    },
    {
      question: `What mounting options are available for ${product.name}?`,
      answer: `${product.name} is engineered for flexible deployment, supporting compact wall mounting, heavy-duty floor pedestals, or integrated rack configurations.`
    },
    {
      question: `What is the warranty and service support coverage?`,
      answer: "Minit Charger provides comprehensive industrial warranties with nationwide certified field service support, preventative maintenance plans, and rapid spare-part availability."
    }
  ];

  return (
    <>
      <ProductHero product={product} banner={content?.banner} />

      <div className="relative z-10 bg-white dark:bg-zinc-950">
        <ProductSpecs product={product} specs={content?.specs} />
        <ProductBenefits product={product} salientFeatures={content?.salientFeatures} />

        {content?.billingData && (
          <ProductSectionSplit
            kicker="Billing & Data"
            heading={content.billingData.heading}
            subheading={content.billingData.subheading}
            body={content.billingData.body}
            checkmarks={content.billingData.checkmarks}
            image={content.billingData.image || product.cardImage}
            imageAlt={content.billingData.imageAlt}
            imageMode={content.billingData.imageMode || "placeholder"}
            theme="light"
            reverse={false}
            sectionId="billing-data"
          />
        )}

        {content?.powerSharing && (
          <ProductSectionSplit
            kicker="Power Sharing"
            heading={content.powerSharing.heading}
            subheading={content.powerSharing.subheading}
            body={content.powerSharing.body}
            checkmarks={content.powerSharing.checkmarks}
            image={content.powerSharing.image || product.heroImage || product.cardImage}
            imageAlt={content.powerSharing.imageAlt}
            imageMode={content.powerSharing.imageMode || "placeholder"}
            theme="dark"
            reverse={true}
            sectionId="power-sharing"
          />
        )}

        {content?.builtForConditions ? (
          <StatModule
            title={content.builtForConditions.heading}
            description={content.builtForConditions.body}
            stats={content.builtForConditions.stats}
            theme="dark"
          />
        ) : (
          <StatModule
            title={`Extreme Conditions,\nBuilt-In Protection`}
            description={`From high-ambient warehouse environments to freezing flightline aprons, ${product.name} delivers dependable charging performance. Next-generation electronics handle thermal stress better, auto-derating safely instead of tripping offline.`}
            stats={productStats}
          />
        )}

        {content?.internals ? (
          <ProductSectionSplit
            kicker="Engineering Internals"
            heading={content.internals.heading}
            subheading={content.internals.subheading}
            body={content.internals.body}
            checkmarks={content.internals.checkmarks}
            image={content.internals.image || null}
            imageAlt={content.internals.imageAlt}
            imageMode="placeholder"
            theme="light"
            reverse={false}
            sectionId="internals"
          />
        ) : (
          <ProductFeatureSplit product={product} />
        )}

        <ProductPairing product={product} pairing={content?.pairing} />

        <ImageCardGrid
          title={content?.ecosystem?.heading || "Minit Charger for Every Bottleneck You Run Into"}
          description={content?.ecosystem?.subheading || "The problem does not stop at one fleet. Airports, warehouses, transit, every operation has its own. Explore what solves yours."}
          linkText="View All Products"
          linkHref="/products"
          items={content?.ecosystem?.items || (content?.ecosystem?.cards ? content.ecosystem.cards.map((c, i) => ({
            id: `card-${i}`,
            name: c.title,
            shortDescription: c.text,
            cardImage: c.image,
            productPageUrl: c.link || "/products"
          })) : relatedProducts)}
        />

        <FaqSection
          title={content?.faqs?.heading || "Some Questions You May Have"}
          description={content?.faqs?.subheading || `Here is generally what fleet managers and facility directors ask before deploying ${product.name}.`}
          faqs={Array.isArray(content?.faqs) ? content.faqs : (content?.faqs?.questions || defaultFaqs)}
        />

        <ConversionBand
          headline={content?.closingCTA?.headline || (content?.closingCTA?.headlineFragments ? `${content.closingCTA.headlineFragments.join(" ")} ${content.closingCTA.headlineClosing}` : `Space. Power. Damage. Downtime. ${product.name} Solves It All.`)}
          subheadline={content?.closingCTA?.subheadline || content?.closingCTA?.subline || "Consult with a Minit Charger infrastructure specialist to calculate charge turnaround times and electrical service sizing."}
          primaryCTA={{
            label: content?.closingCTA?.primaryCtaText || content?.closingCTA?.buttonText || "Speak to an Expert",
            href: content?.closingCTA?.primaryCtaHref || content?.closingCTA?.buttonHref || "/contact"
          }}
          secondaryCTA={{
            label: content?.closingCTA?.secondaryCtaText || "Request a Quote",
            href: content?.closingCTA?.secondaryCtaHref || "/contact"
          }}
          bgImage={null}
        />
      </div>
    </>
  );
}
