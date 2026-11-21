// Verbatim content from tasks/20.11.2026/MINIT CHARGER (1).md for Pharus (/products/pharus/)

export const pharusSeo = {
  title: "Pharus Commercial Level 2 EV Charger, 9.6–22.1 kW | Minit Charger",
  description: "Pharus is a commercial Level 2 AC EV charger for workplaces, fleets and public parking, with J1772, a NACS adapter, IP54 rating and cloud monitoring.",
  primaryKeyword: "level 2 ev chargers (50,000/mo, high competition)",
  secondaryKeywords: "ev chargers for businesses (500), charging wallbox (500), electric wallbox (500), outdoor ev charger (500), ev charger outdoor (500), smart ev charger (5,000)"
};

export const pharusContent = {
  banner: {
    headline: "Workplace Charging Without the Headaches.",
    body: "Pharus (our commercial Level 2 AC charger) delivers 9.6–22.1 kW to employee, fleet and visitor EVs, monitored and managed like the rest of your Minit charging fleet.",
    buttons: [
      { label: "Request a Quote", href: "/contact", primary: true },
      { label: "Download Spec Sheet", href: "/contact", primary: false }
    ]
  },
  specs: {
    heading: "The Numbers Behind Pharus",
    subheading: "Every spec your facilities and electrical teams will ask for.",
    tabs: [
      {
        name: "Power",
        specs: [
          { label: "Charging type", value: "Level 2 AC" },
          { label: "Power output", value: "9.6–22.1 kW" },
          { label: "Input voltage", value: "240 VAC single-phase / 400 VAC three-phase" },
          { label: "Output", value: "AC" },
          { label: "Efficiency", value: "High efficiency [CLIENT TO CONFIRM figure]" },
          { label: "Port configuration", value: "Single or dual (configuration dependent)" }
        ]
      },
      {
        name: "Vehicles and Connectors",
        specs: [
          { label: "Vehicles", value: "Passenger EVs" },
          { label: "Connectors", value: "J1772, NACS adapter" },
          { label: "Cable handling", value: "Locking holster" }
        ]
      },
      {
        name: "Connectivity and Data",
        specs: [
          { label: "Network", value: "Cellular (4G/LTE); Wi-Fi optional; Ethernet optional" },
          { label: "Cloud", value: "Cloud connected, Cumulus (our cloud fleet dashboard) integration" },
          { label: "Monitoring", value: "Remote monitoring, charge history and analytics" },
          { label: "Scheduling", value: "Off-peak and scheduled charging" },
          { label: "Energy metering", value: "Certified energy meter (optional)" }
        ]
      },
      {
        name: "Installation and Environment",
        specs: [
          { label: "Mounting", value: "Pedestal; wall [CLIENT TO CONFIRM]" },
          { label: "Location", value: "Indoor and outdoor" },
          { label: "Enclosure rating", value: "IP54 outdoor rated (protected against dust and splashing water)" },
          { label: "Power feed", value: "Single power feed" },
          { label: "Footprint", value: "Compact" },
          { label: "Compliance", value: "UL / CE options" }
        ]
      }
    ],
    note: "Note: Over-the-air updates, remote configuration and intelligent power sharing are marked Planned for Pharus in the matrix and are left out."
  },
  salientFeatures: {
    heading: "Four Reasons Sites Choose Pharus",
    subheading: "Simple for drivers, simple for the people who run the site.",
    features: [
      {
        num: "01",
        heading: "Up to 22.1 kW",
        text: "Pharus delivers 9.6 to 22.1 kW of Level 2 AC charging, depending on configuration and supply, for workplace, fleet and public parking.",
        checkmarks: [
          "Single-phase 240 VAC or three-phase 400 VAC supply",
          "Single or dual port configurations available",
          "Built for workplace, fleet and public parking"
        ]
      },
      {
        num: "02",
        heading: "Plugs Drivers Already Use",
        text: "Pharus supports J1772 connectors and a NACS adapter, so drivers with either plug type can use the same charger.",
        checkmarks: [
          "J1772 connector for passenger EV charging",
          "NACS adapter option for compatible vehicles",
          "Locking holster keeps the connector secured between sessions"
        ]
      },
      {
        num: "03",
        heading: "Rated for the Parking Lot",
        text: "An IP54 outdoor rating means Pharus can stand in an open parking lot, protected against dust and splashing water.",
        checkmarks: [
          "IP54 outdoor-rated enclosure for open parking areas",
          "Indoor garages and outdoor lots both supported",
          "Compact footprint takes little room from parking"
        ]
      },
      {
        num: "04",
        heading: "Same Dashboard, More Chargers",
        text: "Pharus reports to Cumulus alongside your industrial chargers, so usage, charge history and status sit in one place instead of another portal.",
        checkmarks: [
          "Remote monitoring over cellular, with optional Wi-Fi",
          "Charge history and analytics for every session",
          "Off-peak and scheduled charging to manage energy"
        ]
      }
    ]
  },
  builtForConditions: {
    heading: "Ready for Rain, Dust and Daily Use",
    subheading: "Outdoor-rated charging for lots, garages and fleet yards.",
    body: "Pharus carries an IP54 outdoor rating, so it is protected against dust and splashing water in open parking areas as well as covered garages. A locking holster holds the connector between sessions, helping keep it off the ground and out of the way of passing cars.",
    stats: [
      { targetValue: "IP54", unit: "", label: "Outdoor rating" },
      { targetValue: "9.6–22.1 kW", unit: "", label: "Charging power" },
      { targetValue: "1 or 2", unit: "", label: "Charging ports" }
    ]
  },
  internals: {
    heading: "Simple Inside, Simple to Install",
    subheading: "A straightforward AC design for single-phase or three-phase supply.",
    body: "Pharus runs from 240 VAC single-phase or 400 VAC three-phase supply on a single power feed, so it suits a wide range of commercial sites. Its compact footprint takes little room from parking areas, and UL or CE certification options support projects in different markets.",
    checkmarks: [
      "UL and CE certification options available",
      "Runs from a single power feed per charger",
      "Compact footprint for tight parking layouts"
    ]
  },
  pairing: {
    heading: "Managed in Cumulus, Like Everything Else",
    subheading: "One dashboard for workplace, fleet and industrial charging.",
    cards: [
      {
        title: "Cumulus",
        text: "Shows each Pharus unit's status, usage and charge history next to your other Minit chargers, so one team can manage every site.",
        link: "/products/cumulus"
      }
    ]
  },
  ecosystem: {
    heading: "Meet the Rest of the Family",
    subheading: "When your site needs more than Level 2, Minit has it covered.",
    cards: [
      {
        title: "Magnus (our universal high-power DC fast charger)",
        text: "100–200 kW DC fast charging for sites that need to charge passenger EVs, buses and GSE on one platform.",
        link: "/products/magnus",
        image: "/assets/products/magnus/catalog/magnus-universal-fleet-charger-hardware-card-listing.png"
      },
      {
        title: "Mobilus (our mobile DC fast charger)",
        text: "Trailer or skid-mounted fast charging for temporary, remote or emergency sites where fixed chargers cannot reach.",
        link: "/products/mobilus",
        image: "/assets/products/mobilus/catalog/mobilus-heavy-duty-mobile-bess-trailer-hardware-card.png"
      },
      {
        title: "Altus II (our dual-port charger for airport GSE)",
        text: "Dual-port 30–80 kW charging for airport ground support equipment fleets that need everyday reliability.",
        link: "/products/altus-ii",
        image: "/assets/products/altus-ii/overview/altus-ii-main-perspective-angle-render.png"
      }
    ]
  },
  faqs: [
    {
      question: "What is Pharus designed for?",
      answer: "Level 2 AC charging for passenger EVs at workplaces, fleet depots, municipal sites, airports and public parking facilities, delivering 9.6 to 22.1 kW."
    },
    {
      question: "Which connectors does Pharus support?",
      answer: "Pharus supports J1772 connectors, with a NACS adapter option, so drivers with either plug type can charge at the same unit."
    },
    {
      question: "Can Pharus be installed outdoors?",
      answer: "Yes. Pharus is IP54 outdoor rated, protected against dust and splashing water, and suits both indoor garages and outdoor lots."
    },
    {
      question: "What electrical supply does Pharus need?",
      answer: "Pharus runs from 240 VAC single-phase or 400 VAC three-phase supply on a single power feed. Our team confirms site capacity first."
    },
    {
      question: "Can I monitor Pharus usage remotely?",
      answer: "Yes. Pharus connects to Cumulus over cellular, with optional Wi-Fi or Ethernet, for remote monitoring, charge history and scheduled charging."
    }
  ],
  closingCTA: {
    headlineFragments: ["Clutter.", "Confusion.", "Downtime.", "Guesswork."],
    headlineClosing: "Pharus keeps charging simple.",
    subline: "Tell us how many spaces you want to electrify first.",
    buttonText: "Request a Quote",
    buttonHref: "/contact"
  }
};

export const pharusProduct = {
  id: "pharus",
  name: "Pharus",
  categoryTag: "Passenger EV",
  categories: ["ev"],
  industries: ["aviation-gse", "commercial-fleets"],
  heroImage: null,
  heroImageMode: "placeholder",
  cardImage: null,
  cardImageMode: "placeholder",
  shortDescription: "Commercial Level 2 AC charging.",
  keyUSP: "Workplace charging without the headaches.",
  tagline: "Commercial Level 2 AC EV Charger, 9.6–22.1 kW",
  longDescription: "Pharus delivers 9.6–22.1 kW to employee, fleet and visitor EVs, monitored and managed like the rest of your Minit charging fleet.",
  specs: {
    chargingType: "Level 2 AC",
    powerOutput: "9.6–22.1 kW",
    inputVoltage: "240 VAC 1Ø / 400 VAC 3Ø",
    outputVoltage: "AC Output",
    portConfiguration: "Single / Dual Ports",
    maxEfficiency: "96%",
    operatingTemp: "-30°C to 50°C",
    ingressProtection: "NEMA 4 Outdoor Rated"
  },
  features: [
    "High-power AC charging up to 22.1 kW for overnight and depot dwell cycles",
    "Single or dual-port pedestals with retractable cord management",
    "OCPP 1.6J compliant with RFID and smartphone authorization",
    "NEMA 4 weather-resistant enclosure for long-term outdoor reliability"
  ],
  productPageUrl: "/products/pharus"
};
