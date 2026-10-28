import ProductHero from "./product/ProductHero";
import ProductSpecs from "./product/ProductSpecs";
import ProductBenefits from "./product/ProductBenefits";
import ProductFeatureSplit from "./product/ProductFeatureSplit";
import ProductPairing from "./product/ProductPairing";
import StatModule from "@/components/StatModule";
import ImageCardGrid from "@/components/ImageCardGrid";
import FaqSection from "@/components/FaqSection";
import ConversionBand from "@/components/ConversionBand";
import { products } from "@/data/products";

export default function ProductDetailLayout({ product }) {
  if (!product) return null;

  const relatedProducts = products
    .filter(p => p.id !== product.id)
    .slice(0, 3)
    .map(p => ({
      name: p.name,
      description: p.shortDescription || p.keyUSP,
      image: p.cardImage || "/assets/homepage/Altus II.webp",
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
      <ProductHero product={product} />

      <div className="relative z-10 bg-white dark:bg-zinc-950">
        <ProductSpecs product={product} />
        <ProductBenefits product={product} />
        <ProductFeatureSplit product={product} />

        <StatModule
          title={`Extreme Conditions,\nBuilt-In Protection`}
          description={`From high-ambient warehouse environments to freezing flightline aprons, ${product.name} delivers dependable charging performance. Next-generation electronics handle thermal stress better, auto-derating safely instead of tripping offline.`}
          stats={productStats}
        />

        <ProductPairing product={product} />

        <ImageCardGrid
          title="Minit Charger for Every Bottleneck You Run Into"
          description="The problem does not stop at one fleet. Airports, warehouses, transit, every operation has its own. Explore what solves yours."
          linkText="View All Products"
          linkHref="/products"
          items={relatedProducts}
        />

        <FaqSection
          title="Some Questions You May Have"
          description={`Here is generally what fleet managers and facility directors ask before deploying ${product.name}.`}
          faqs={defaultFaqs}
        />

        <ConversionBand
          headline={`Space. Power. Damage. Downtime. ${product.name} Solves It All.`}
          subheadline="Consult with a Minit Charger infrastructure specialist to calculate charge turnaround times and electrical service sizing."
          primaryCTA={{ label: "Speak to an Expert", href: "/contact" }}
          secondaryCTA={{ label: "Request a Quote", href: "/contact" }}
          bgImage={null}
        />
      </div>
    </>
  );
}
