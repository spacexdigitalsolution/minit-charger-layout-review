// section: altus-data
import { products as allProducts } from "@/data/products";

export const altusFaqs = [
  {
    question: "Why Is Altus II Right Fit For Us?",
    answer: "It charges ground equipment on lead-acid or lithium batteries through two independent ports, plus a J1772 port for passenger EVs."
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

const relatedProductIds = ["magnus", "momentus", "maximus"];
export const relatedProducts = allProducts
  .filter(p => relatedProductIds.includes(p.id))
  .map(p => ({
    ...p,
    kicker: p.categoryTag,
    image: p.cardImage,
    link: p.productPageUrl,
    description: p.keyUSP
  }));

export const altusStats = [
  { targetValue: 95, unit: "%", label: "Max Efficiency" },
  { targetValue: "IP54", unit: "", label: "Outdoor Rated" },
  { targetValue: "-13°F to 122°F", unit: "", label: "Full Operating Range" }
];
