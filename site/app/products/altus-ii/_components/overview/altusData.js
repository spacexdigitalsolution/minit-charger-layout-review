// section: altus-data
export const altusProduct = {
  id: "altus-ii",
  name: "Altus II",
  categoryTag: "Airport GSE",
  categories: ["aviation"],
  industries: ["aviation-gse", "commercial-fleets"],
  heroImage: null,
  cardImage: "/assets/products/altus-ii/overview/altus-ii-main-perspective-angle-render.png",
  gallery: [
    { src: "/assets/products/altus-ii/overview/altus-ii-main-perspective-angle-render.png", alt: "Altus II Hardware Listing", mode: "image" }
  ],
  shortDescription: "Reliable everyday fleet charging.",
  keyUSP: "More charging capability in less space.",
  tagline: "High-Throughput Dual-Port Airport GSE Charger",
  longDescription: "The Altus II is engineered specifically for demanding airport tarmac environments. Featuring dual independent ports, wide 24–1000 VDC output, and an integrated overhead spring-assisted cable management system, it keeps ramp operations safe and on schedule.",
  specs: {
    chargingType: "DC Fast",
    powerOutput: "30–80 kW",
    inputVoltage: "208–480 VAC, 3Ø",
    outputVoltage: "24–1000 VDC",
    portConfiguration: "Dual Port",
    maxEfficiency: "Up to 95%",
    operatingTemp: "-25°C to 50°C",
    ingressProtection: "NEMA 3R / IP54"
  },
  features: [
    "Dual independent charging ports with simultaneous power delivery",
    "Wide 24–1000 VDC output range charging belt loaders to heavy tugs",
    "Overhead retractable cable management preventing tarmac drive-overs",
    "Silicon carbide (SiC) power electronics with thermal auto-derating",
    "Integrated revenue-grade power metering for airline re-billing",
    "Cumulus cloud integration for remote monitoring and diagnostics"
  ],
  productPageUrl: "/products/altus-ii"
};

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

export const altusStats = [
  { targetValue: 95, unit: "%", label: "Max Efficiency" },
  { targetValue: "IP54", unit: "", label: "Outdoor Rated" },
  { targetValue: "-13°F to 122°F", unit: "", label: "Full Operating Range" }
];
