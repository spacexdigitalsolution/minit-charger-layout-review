// section: aviation-data
import { products as allProducts } from "@/data/products";

export const aviationFaqs = [
  {
    question: "Is Minit Charger used at other airports?",
    answer: "Yes. Minit Charger is deployed at airports across the U.S., Spain, and Taiwan, backed by over a decade of charging technology experience."
  },
  {
    question: "Can chargers be diagnosed without a vehicle?",
    answer: "Yes. A portable diagnostic tool validates pilot connection, communication, and power output on-site, without needing an actual vehicle present."
  },
  {
    question: "What safety certifications do the chargers carry?",
    answer: "Altus II is UL1564 certified with an IP54-rated enclosure, meeting safety standards for demanding outdoor airport environments."
  },
  {
    question: "Does ground crew need special training?",
    answer: "No extensive training required. The 7-inch touch panel and automatic cable retraction keep day-to-day operation simple for any ground crew."
  }
];

export const aviationProducts = allProducts
  .filter(p => p.industries.includes("aviation-gse"))
  .map(p => ({
    ...p,
    kicker: p.categoryTag,
    image: p.cardImage,
    link: p.productPageUrl,
    description: p.keyUSP
  }));

export const aviationStats = [
  { value: "95%", label: "Max Efficiency", description: "Optimized power electronics deliver peak charging without requiring massive grid upgrades." },
  { value: "2-3", label: "Ports Per Unit", description: "Simultaneous multi-vehicle charging maximizes ramp footprint." },
  { value: "24/7", label: "Remote Oversight", description: "Cloud-connected diagnostics track every session globally." },
];
