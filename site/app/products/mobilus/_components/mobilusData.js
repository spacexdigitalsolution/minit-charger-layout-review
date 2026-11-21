// Verbatim content from tasks/20.11.2026/CONTENT_UPDATE.md for Mobilus (/products/mobilus/)

export const mobilusSeo = {
  title: "Mobilus Mobile DC Fast Charger on Trailer or Skid | Minit Charger",
  description: "Mobilus brings 30–80 kW DC fast charging to temporary, remote and emergency sites on a trailer or skid, with GPS tracking and cloud monitoring.",
  primaryKeyword: "ev mobile charger (500/mo)",
  secondaryKeywords: "mobile charger for ev (50), mobile charger ev (50), ev charger mobile (50), remote ev charging (50), ev fleet charging solutions (50), outdoor ev charger (500)"
};

export const mobilusContent = {
  banner: {
    headline: "Fast Charging That Goes to Work.",
    body: "Mobilus (our mobile DC fast charger) rides on a trailer or skid, bringing 30–80 kW to temporary gates, remote worksites and emergency calls where fixed charging does not reach.",
    buttons: [
      { label: "Request a Quote", href: "/contact", primary: true },
      { label: "Talk to an Engineer", href: "/contact", primary: false }
    ]
  },
  specs: {
    heading: "The Numbers Behind Mobilus",
    subheading: "Mobile platform, fixed-charger capability. Every spec in one place.",
    tabs: [
      {
        name: "Power",
        specs: [
          { label: "Charging type", value: "Mobile DC fast" },
          { label: "Power output", value: "30–80 kW [CLIENT TO CONFIRM asterisk]" },
          { label: "Output voltage", value: "24–1000 VDC [CLIENT TO CONFIRM asterisk]" },
          { label: "Input voltage", value: "208–480 VAC, three-phase" },
          { label: "Max efficiency", value: "Up to 95% [CLIENT TO CONFIRM asterisk]" },
          { label: "Outputs", value: "Multiple output configurations" },
          { label: "Energy storage", value: "[CLIENT TO CONFIRM capacity and off-grid capability]" }
        ]
      },
      {
        name: "Batteries and Connectors",
        specs: [
          { label: "Battery chemistry", value: "Lead acid, lithium, EV" },
          { label: "Connectors", value: "Configurable, multiple connector options" },
          { label: "Cable", value: "Interchangeable charge cable and connector" }
        ]
      },
      {
        name: "Connectivity and Data",
        specs: [
          { label: "Network", value: "Cellular (4G/LTE), Wi-Fi, Ethernet" },
          { label: "Cloud", value: "Cloud connected, Cumulus (our cloud fleet dashboard) integration" },
          { label: "Updates", value: "Over-the-air (OTA) software updates" },
          { label: "Systems integration", value: "SCADA / ERP" },
          { label: "Location", value: "GPS and asset tracking" },
          { label: "Battery data", value: "CellTrac (our battery monitoring and telematics system) compatible; battery health monitoring" },
          { label: "Power management", value: "Intelligent power sharing; off-peak and scheduled charging" },
          { label: "Energy metering", value: "Certified energy meter (optional)" }
        ]
      },
      {
        name: "Installation and Environment",
        specs: [
          { label: "Platform", value: "Mobile trailer or skid" },
          { label: "Location", value: "Outdoor rated" },
          { label: "Cable handling", value: "Integrated cable storage" },
          { label: "Compliance", value: "UL / CE options" }
        ]
      }
    ],
    note: "Note: Mobilus has no section in the Product Positioning document; all specs come from the Comparison Matrix. Asterisked matrix values are flagged."
  },
  salientFeatures: {
    heading: "Four Ways Mobilus Moves You",
    subheading: "Charging that follows the work instead of waiting for construction.",
    features: [
      {
        num: "01",
        heading: "Charging on Wheels",
        text: "Trailer or skid mounting lets you place fast charging where vehicles work, instead of towing equipment back to a fixed charger.",
        checkmarks: [
          "Mobile trailer or skid-mounted charging platform",
          "Deploy at temporary, remote or emergency sites",
          "Moves between sites as your projects change"
        ]
      },
      {
        num: "02",
        heading: "Low and High Voltage",
        text: "An output range of 24–1000 VDC covers low-voltage ground support equipment (GSE) and industrial equipment as well as higher-voltage electric vehicles.",
        checkmarks: [
          "Lead acid, lithium and EV batteries supported",
          "Multiple output configurations to match your vehicles",
          "Interchangeable charge cable and connector design"
        ]
      },
      {
        num: "03",
        heading: "Power Shared Across Outputs",
        text: "Intelligent power sharing directs available power to the vehicles that need it, helping one Mobilus unit serve more equipment.",
        checkmarks: [
          "Intelligent power sharing built into the platform",
          "Off-peak and scheduled charging on every unit",
          "Optional certified energy meter for usage records"
        ]
      },
      {
        num: "04",
        heading: "Always Know Where It Is",
        text: "GPS and asset tracking, plus remote monitoring over cellular, Wi-Fi or Ethernet, show where Mobilus is and how it is performing.",
        checkmarks: [
          "GPS and asset tracking on every unit",
          "Remote monitoring plus over-the-air software updates",
          "SCADA and ERP integration with your existing systems"
        ]
      }
    ]
  },
  // Section 4 (Billing and Data): skipped per CONTENT_UPDATE.md
  powerSharing: {
    heading: "Stretch the Power You Bring",
    subheading: "Intelligent power sharing for sites with limited electrical capacity.",
    body: "A temporary site rarely has spare electrical capacity waiting for you. Mobilus includes intelligent power sharing, which directs available power to the vehicles that need it, plus scheduled charging that moves sessions into off-peak hours. Together they help one mobile unit cover more equipment from the supply you have on site.",
    checkmarks: [
      "Directs available power to the vehicles that need it",
      "Scheduled charging moves sessions into off-peak hours",
      "Helps one unit cover more vehicles on site"
    ],
    image: null,
    imageAlt: "Mobilus Temporary Site Intelligent Power Sharing"
  },
  builtForConditions: {
    heading: "Built for Wherever the Work Is",
    subheading: "Outdoor-rated hardware for ramps, worksites and emergency staging areas.",
    body: "Mobilus is outdoor rated and built to travel, with integrated cable storage so cables move with the unit instead of riding loose. Between deployments it reports location, status and charge history to Cumulus, so your team always knows where each unit is parked and whether it is ready for the next job.",
    stats: [
      { targetValue: "30–80 kW", unit: "", label: "Output power" },
      { targetValue: "24–1000 VDC", unit: "", label: "Output range" },
      { targetValue: "Up to 95%", unit: "", label: "Peak efficiency" }
    ]
  },
  internals: {
    heading: "Engineered to Travel Well",
    subheading: "Mobile hardware with the same connected brain as our fixed chargers.",
    body: "Mobilus accepts 208–480 VAC three-phase input and converts it at up to 95% efficiency. Integrated cable storage and an interchangeable charge cable keep connectors protected and replaceable on the move. Ethernet, cellular and Wi-Fi connectivity, plus over-the-air updates, keep every unit current wherever it is parked.",
    checkmarks: [
      "UL and CE certification options available",
      "Integrated storage keeps cables protected in transit",
      "Over-the-air updates wherever the unit is parked"
    ],
    image: "/assets/Products/Mobilus/MOBILUS Hardware Listing.webp",
    imageAlt: "Mobilus Ruggedized Trailer Architecture"
  },
  pairing: {
    heading: "Pairs With CellTrac and Cumulus",
    subheading: "Mobile charging, fixed visibility: one dashboard for every unit.",
    cards: [
      {
        title: "CellTrac",
        text: "Monitors battery health on the vehicles Mobilus charges and communicates battery profiles, so charging stays accurate on any site.",
        link: "/products/celltrac"
      },
      {
        title: "Cumulus",
        text: "Shows each Mobilus unit's location, status, alarms and charge history next to your fixed chargers, on one dashboard.",
        link: "/products/cumulus"
      }
    ]
  },
  ecosystem: {
    heading: "Meet the Rest of the Family",
    subheading: "Mobile for the edges, fixed chargers for the core of your operation.",
    cards: [
      {
        title: "Magnus (our universal high-power DC fast charger)",
        text: "100–200 kW fixed charging across 24–1000 VDC for depots running GSE, buses, trucks and passenger EVs.",
        link: "/products/magnus",
        image: "/assets/products/magnus/catalog/magnus-universal-fleet-charger-hardware-card-listing.png"
      },
      {
        title: "Altus II (our dual-port charger for airport GSE)",
        text: "Dual-port 30–80 kW pedestal charging for airport GSE fleets that need proven, everyday reliability.",
        link: "/products/altus-ii",
        image: "/assets/products/altus-ii/overview/altus-ii-main-perspective-angle-render.png"
      },
      {
        title: "Maximus (our 40 kW dual-port industrial charger)",
        text: "Charges two forklifts at once from a compact wall or pedestal unit for multi-shift warehouses.",
        link: "/products/maximus",
        image: "/assets/products/maximus/catalog/maximus-dual-port-mhe-hardware-card.webp"
      },
      {
        title: "Momentus (our compact 20 kW forklift charger)",
        text: "Compact single-port opportunity charging for indoor forklift fleets where floor space is tight.",
        link: "/products/momentus",
        image: "/assets/products/momentus/catalog/momentus-mhe-logistics-charger-hardware-card.png"
      }
    ]
  },
  faqs: [
    {
      question: "Where is Mobilus typically used?",
      answer: "Wherever fixed charging is not practical: airports, utilities, construction sites and emergency response, for temporary, remote or emergency charging."
    },
    {
      question: "How much power does Mobilus deliver?",
      answer: "Mobilus delivers 30 to 80 kW of DC fast charging, with an output range of 24 to 1000 VDC."
    },
    {
      question: "Does Mobilus need a power connection on site?",
      answer: "Mobilus is specified with a 208–480 VAC three-phase input. Our team confirms the power arrangement for each deployment during planning."
    },
    {
      question: "Can Mobilus charge both GSE and EVs?",
      answer: "Yes. Mobilus supports lead acid, lithium and EV batteries across 24 to 1000 VDC, with configurable outputs and connectors."
    },
    {
      question: "How do I track a Mobilus unit?",
      answer: "Through Cumulus. Mobilus reports GPS location, charger status, battery health and charge history over cellular, Wi-Fi or Ethernet."
    }
  ],
  closingCTA: {
    headlineFragments: ["Remote.", "Temporary.", "Emergency.", "Offsite."],
    headlineClosing: "Mobilus brings the charger there.",
    subline: "Tell us where your vehicles work and we will plan coverage.",
    buttonText: "Request a Quote",
    buttonHref: "/contact"
  }
};

export const mobilusProduct = {
  id: "mobilus",
  name: "Mobilus",
  categoryTag: "Mobile Charging",
  categories: ["aviation"],
  industries: ["aviation-gse", "warehouse", "commercial-fleets"],
  heroImage: null,
  heroImageMode: "placeholder",
  cardImage: "/assets/products/mobilus/catalog/mobilus-heavy-duty-mobile-bess-trailer-hardware-card.png",
  cardImageMode: "image",
  gallery: [
    { src: "/assets/products/mobilus/catalog/mobilus-heavy-duty-mobile-bess-trailer-hardware-card.png", alt: "Mobilus Hardware Listing", mode: "image" }
  ],
  shortDescription: "Charge anywhere power is needed.",
  keyUSP: "Use existing infrastructure more intelligently.",
  tagline: "Mobile BESS Fast Charger & Clean Generator in One",
  longDescription: "Mobilus combines high-power DC fast charging with an onboard Battery Energy Storage System (BESS) and AC generator capabilities. Built for flightline aprons, remote staging areas, and temporary depot surges where grid connections are constrained.",
  specs: {
    chargingType: "Mobile DC Fast & BESS",
    powerOutput: "Up to 180 kW Total (Dual 90 kW DC)",
    inputVoltage: "208–480 VAC, 3Ø (Fast Recharge)",
    outputVoltage: "24–1000 VDC & 400/480 VAC 3Ø",
    portConfiguration: "Dual DC + AC Outlets (Up to 4 GSE Units)",
    maxEfficiency: "Up to 95%",
    operatingTemp: "-20°C to 50°C",
    ingressProtection: "Weatherproof Heavy-Duty Trailer"
  },
  features: [
    "Charger and clean generator combined for total deployment flexibility",
    "High-density Battery Energy Storage System (BESS) for grid-independent charging",
    "Powers up to 4 GSE units simultaneously across DC and AC outlets",
    "Dual DC fast ports delivering 90 kW each (CCS1 or CCS2 compatible)",
    "400/480V 3-phase outlets delivering up to 128 amps auxiliary power",
    "Built-in GPS cellular tracking for live asset location and security geofencing",
    "OCPP 1.6J+ compliant for seamless network interoperability",
    "Cloud telemetry tracking energy storage depletion, throughput, and recharge cycles"
  ],
  productPageUrl: "/products/mobilus"
};
