// Verbatim content from tasks/20.11.2026/MINIT CHARGER (1).md for Durus (/products/durus/)

export const durusSeo = {
  title: "Durus Onboard Charger With Built-In Battery Management | Minit Charger",
  description: "Durus is a compact onboard charger with built-in battery management, GPS and cloud connectivity for golf cars, AGVs, utility and rental equipment.",
  primaryKeyword: "low speed ev (500/mo) and low speed electric vehicle (500/mo)",
  secondaryKeywords: "industrial electric vehicles (500), battery management system for electric vehicles (500, shared with CellTrac), smart ev battery (50), lead acid ev (50), ev charger efficiency (50)"
};

export const durusContent = {
  banner: {
    headline: "Charger, Battery Manager and Tracker Onboard.",
    body: "Durus (our compact onboard charger) rides on the vehicle itself and combines 2.2–3.3 kW charging with built-in battery management, GPS tracking and cloud connectivity for small electric equipment.",
    buttons: [
      { label: "Request a Quote", href: "/contact", primary: true },
      { label: "Download Spec Sheet", href: "/contact", primary: false }
    ]
  },
  specs: {
    heading: "The Numbers Behind Durus",
    subheading: "Small unit, full spec sheet. Here is what it carries.",
    tabs: [
      {
        name: "Power",
        specs: [
          { label: "Charging type", value: "Onboard AC [CLIENT TO CONFIRM AC or AC/DC]" },
          { label: "Power output", value: "2.2–3.3 kW" },
          { label: "Input voltage", value: "90–264 VAC, single-phase" },
          { label: "Output voltage", value: "24–80 VDC" },
          { label: "Max efficiency", value: "Up to 94%" },
          { label: "Port configuration", value: "Single port" }
        ]
      },
      {
        name: "Batteries and Connectors",
        specs: [
          { label: "Battery chemistry", value: "Lead acid, lithium, EV" },
          { label: "Connectors", value: "SB350, Euro, open leads (for direct wiring)" },
          { label: "Battery management", value: "Built-in BMS (battery management system)" }
        ]
      },
      {
        name: "Connectivity and Data",
        specs: [
          { label: "Network", value: "Cellular (4G/LTE), Wi-Fi" },
          { label: "Cloud", value: "Cloud connected, Cumulus (our cloud fleet dashboard) integration" },
          { label: "Updates", value: "Over-the-air (OTA) software updates" },
          { label: "Location", value: "Built-in GPS tracking" },
          { label: "Maintenance", value: "Battery health monitoring, charge history, predictive maintenance alerts" },
          { label: "Scheduling", value: "Off-peak and scheduled charging" }
        ]
      },
      {
        name: "Installation and Environment",
        specs: [
          { label: "Installation", value: "Onboard vehicle [CLIENT TO CONFIRM wall mount option]" },
          { label: "Location", value: "Primarily indoor [CLIENT TO CONFIRM outdoor use]" },
          { label: "Footprint", value: "Compact" },
          { label: "Operating temperature", value: "-25°C to 60°C" },
          { label: "Compliance", value: "UL 1564" }
        ]
      }
    ],
    note: "Note: Durus has its own battery management built in, so it does not need CellTrac."
  },
  salientFeatures: {
    heading: "Four Jobs, One Onboard Unit",
    subheading: "Charging, battery care, tracking and data, without extra boxes.",
    features: [
      {
        num: "01",
        heading: "Charge Wherever It Parks",
        text: "Durus sits on the vehicle and accepts 90–264 VAC single-phase power, so equipment can charge from a wide range of single-phase supplies.",
        checkmarks: [
          "Onboard installation, no separate charging station needed",
          "Accepts a wide 90–264 VAC single-phase input",
          "2.2 to 3.3 kW charging output"
        ]
      },
      {
        num: "02",
        heading: "Battery Management Built In",
        text: "An integrated battery management system watches battery health on every charge, so small fleets get battery insight without adding separate hardware.",
        checkmarks: [
          "Built-in battery management system (BMS) on every unit",
          "Battery health monitoring with every single charge",
          "Predictive maintenance alerts sent to your team"
        ]
      },
      {
        num: "03",
        heading: "Tracked Across the Property",
        text: "Built-in GPS tracking shows where each cart, AGV (automated guided vehicle) or utility vehicle is, across a golf course, campus or industrial site.",
        checkmarks: [
          "Built-in GPS asset tracking on every unit",
          "Remote monitoring over cellular or Wi-Fi",
          "Equipment usage recorded for better fleet planning"
        ]
      },
      {
        num: "04",
        heading: "Small Size, Wide Range",
        text: "One compact unit covers 24 to 80 VDC batteries across lead acid, lithium and EV chemistries, with SB350, Euro or open-lead connections.",
        checkmarks: [
          "Lead acid, lithium and EV chemistries supported",
          "Covers 24 to 80 VDC battery systems",
          "Over-the-air updates keep charger software current"
        ]
      }
    ]
  },
  builtForConditions: {
    heading: "Rated for Course, Campus and Shop",
    subheading: "Built for small equipment that works hard outdoors and in.",
    body: "Durus operates from -25°C to 60°C, covering frosty mornings on a golf course and hot afternoons in an industrial yard. A compact footprint lets it mount directly on the vehicle without stealing payload space, and UL 1564 compliance ensures it meets industrial safety standards.",
    stats: [
      { targetValue: "2.2–3.3 kW", unit: "", label: "Output power" },
      { targetValue: "Up to 94%", unit: "", label: "Peak efficiency" },
      { targetValue: "-25°C to 60°C", unit: "", label: "Operating range" }
    ]
  },
  internals: {
    heading: "Electronics Engineered for Mobility",
    subheading: "Vibration-resistant power conversion with built-in telemetry.",
    body: "Durus packs a 2.2 to 3.3 kW power stage, an integrated battery management system, a cellular radio and a GPS receiver into a single rugged enclosure. Over-the-air updates ensure charging profiles and firmware stay current throughout the equipment's service life.",
    checkmarks: [
      "Integrated BMS and GPS in one enclosure",
      "Over-the-air updates keep firmware current",
      "Listed to UL 1564 for industrial safety"
    ],
    image: "/assets/Products/Durus/Durus Listing.webp",
    imageAlt: "Durus Compact Onboard Charger Architecture"
  },
  pairing: {
    heading: "Direct Connection to Cumulus",
    subheading: "Onboard charger telematics without extra hardware.",
    cards: [
      {
        title: "Cumulus",
        text: "Receives battery health, charge history and GPS location straight from Durus, with no separate telemetry box needed.",
        link: "/products/cumulus"
      }
    ]
  },
  ecosystem: {
    heading: "Meet the Rest of the Family",
    subheading: "When your fleet needs stationary DC fast charging or Level 2.",
    cards: [
      {
        title: "Momentus (our compact 20 kW forklift charger)",
        text: "Stationary DC fast opportunity charging for indoor forklift fleets where floor space counts.",
        link: "/products/momentus",
        image: "/assets/products/momentus/catalog/momentus-mhe-logistics-charger-hardware-card.png"
      },
      {
        title: "Maximus (our 40 kW dual-port industrial charger)",
        text: "Dual-port DC fast charging for high-throughput forklift fleets charging two trucks at once.",
        link: "/products/maximus",
        image: "/assets/products/maximus/catalog/maximus-dual-port-mhe-hardware-card.webp"
      },
      {
        title: "Pharus (our Level 2 AC charger)",
        text: "Commercial Level 2 AC charging for passenger and utility EVs at workplaces and parking areas.",
        link: "/products/pharus",
        image: null
      }
    ]
  },
  faqs: [
    {
      question: "What vehicles is Durus built for?",
      answer: "Durus is built for small electric vehicles: golf cars, AGVs, utility vehicles and rental equipment running on 24 to 80 VDC battery systems."
    },
    {
      question: "Does Durus need a separate charging station?",
      answer: "No. Durus is installed onboard the vehicle and charges from a 90–264 VAC single-phase supply, so no separate station is needed."
    },
    {
      question: "Do I need CellTrac with Durus?",
      answer: "No. Durus has battery management and GPS tracking built in, reporting battery health and location straight to Cumulus."
    },
    {
      question: "Which batteries can Durus charge?",
      answer: "Lead acid, lithium and EV batteries from 24 to 80 VDC, connected with SB350, Euro or open-lead connections."
    },
    {
      question: "How much power does Durus deliver?",
      answer: "Durus delivers 2.2 to 3.3 kW from a single-phase supply at up to 94% efficiency, sized for smaller onboard battery systems."
    }
  ],
  closingCTA: {
    headlineFragments: ["Carts.", "AGVs.", "Utility.", "Rentals."],
    headlineClosing: "One onboard unit handles all.",
    subline: "Tell us your vehicle count and battery types to start.",
    buttonText: "Request a Quote",
    buttonHref: "/contact"
  }
};

export const durusProduct = {
  id: "durus",
  name: "Durus",
  categoryTag: "Small Electric Equipment",
  categories: ["mhe", "lsv"],
  industries: ["aviation-gse", "warehouse", "commercial-fleets"],
  heroImage: null,
  cardImage: "/assets/products/durus/catalog/durus-small-electric-equipment-charger-hardware-card.png",
  gallery: [
    { src: "/assets/products/durus/catalog/durus-small-electric-equipment-charger-hardware-card.png", alt: "Durus Hardware Listing", mode: "image" }
  ],
  shortDescription: "Compact onboard charger with built-in battery management.",
  keyUSP: "Charger, battery manager and tracker onboard.",
  tagline: "Onboard Charger With Built-In Battery Management",
  longDescription: "Durus rides on the vehicle itself and combines 2.2–3.3 kW charging with built-in battery management, GPS tracking and cloud connectivity for small electric equipment.",
  specs: {
    chargingType: "Onboard AC/DC or Standalone",
    powerOutput: "2.2–3.3 kW",
    inputVoltage: "90–264 VAC, 1Ø, 50/60 Hz",
    outputVoltage: "24–80 VDC",
    portConfiguration: "Single Port",
    maxEfficiency: "Up to 94%",
    operatingTemp: "-25°C to 55°C",
    ingressProtection: "IP66 Sealed Rugged Enclosure"
  },
  features: [
    "Dual functionality: vehicle onboard mounting or standalone bench/wall unit",
    "Ultra-compact and lightweight design built with vibration-resistant materials",
    "Universal 90–264 VAC single-phase input connects to standard wall receptacles",
    "IP66 sealed enclosure withstands washdowns, dust, and rain",
    "Engineered for low-speed electric vehicles, golf carts, pallet jacks, and sweepers",
    "Patented charging curve minimizes water loss in lead-acid and balances lithium cells",
    "Smart thermal management with automatic derating under extreme heat"
  ],
  productPageUrl: "/products/durus"
};
