// Verbatim content from tasks/20.11.2026/CONTENT_UPDATE.md for Momentus (/products/momentus/)

export const momentusSeo = {
  title: "Momentus 20 kW Compact DC Fast Charger for Forklifts | Minit Charger",
  description: "Momentus is a compact 20 kW wall or pedestal DC fast charger for opportunity charging forklifts and industrial fleets at 94% efficiency.",
  primaryKeyword: "industrial charging (500/mo, low competition)",
  secondaryKeywords: "ev charging equipment (500), ev fast charger (5,000), fleet charger (500), warehouse ev charging (50), charging wallbox (500), ev charger outdoor (500)"
};

export const momentusContent = {
  banner: {
    headline: "Fast Forklift Charging, Not Floor Space.",
    body: "Momentus (our compact 20 kW DC fast charger) mounts on a wall or pedestal and opportunity charges forklifts during breaks, so equipment gets back to moving pallets sooner.",
    image: "/assets/products/momentus/hero/momentus-20-kw-single-port-opportunity-charger-hero-banner.png",
    imageAlt: "Momentus 20 kW DC Fast Charger Banner",
    imageMode: "image",
    buttons: [
      { label: "Request a Quote", href: "/contact", primary: true },
      { label: "Download Spec Sheet", href: "/contact", primary: false }
    ]
  },
  specs: {
    heading: "The Numbers Behind Momentus",
    subheading: "Compact charger, complete specs. Here is everything that matters.",
    gallery: [
      {
        src: "/assets/products/momentus/catalog/momentus-mhe-logistics-charger-hardware-card.png",
        alt: "Momentus 20 kW DC Fast Charger Hardware Unit",
        desc: "Momentus 20 kW DC Fast Charger - Main Unit",
        mode: "image"
      },
      {
        src: "/assets/products/momentus/gallery/momentus-perspective-profile-angle.png",
        alt: "Momentus DC Fast Charger - Perspective View",
        desc: "Momentus Perspective Profile",
        mode: "image"
      }
    ],
    tabs: [
      {
        name: "Power",
        specs: [
          { label: "Charging type", value: "DC fast" },
          { label: "Power output", value: "20 kW" },
          { label: "Output voltage", value: "24–100 VDC" },
          { label: "Input voltage", value: "208–480 VAC, three-phase" },
          { label: "Max efficiency", value: "94%" },
          { label: "Port configuration", value: "Single port" },
          { label: "Power electronics", value: "Silicon Carbide (SiC)" }
        ]
      },
      {
        name: "Batteries and Connectors",
        specs: [
          { label: "Battery chemistry", value: "Lead acid, AGM (sealed absorbed glass mat lead acid), lithium, EV" },
          { label: "Connectors", value: "SB350, Euro, REMA" },
          { label: "Cable", value: "Interchangeable charge cable and connector" }
        ]
      },
      {
        name: "Connectivity and Data",
        specs: [
          { label: "Network", value: "Cellular (4G/LTE), Wi-Fi" },
          { label: "Cloud", value: "Cloud connected, Cumulus (our cloud fleet dashboard) integration" },
          { label: "Updates", value: "Over-the-air (OTA) software updates" },
          { label: "Battery data", value: "CellTrac (our battery monitoring and telematics system) compatible; battery health monitoring" },
          { label: "Maintenance", value: "Remote monitoring, charge history, predictive maintenance alerts" },
          { label: "Scheduling", value: "Off-peak and scheduled charging" },
          { label: "Energy metering", value: "Certified energy meter (optional)" }
        ]
      },
      {
        name: "Installation and Environment",
        specs: [
          { label: "Mounting", value: "Wall or pedestal" },
          { label: "Location", value: "Primarily indoor [CLIENT TO CONFIRM outdoor rating]" },
          { label: "Power feed", value: "Single power feed" },
          { label: "Footprint", value: "Compact" },
          { label: "Cable handling", value: "Cable management system (optional)" },
          { label: "Operating temperature", value: "-25°C to 50°C" },
          { label: "Compliance", value: "UL 1564" }
        ]
      }
    ],
    note: "Note: GB/T connector is not listed: the positioning document asks to add it, but the matrix does not include it yet."
  },
  salientFeatures: {
    heading: "Four Ways Momentus Earns Its Spot",
    subheading: "Built for crowded aisles, short breaks and long shifts.",
    features: [
      {
        num: "01",
        heading: "Off the Floor",
        text: "Mount Momentus on a wall and give the floor back to racking, pallets and forklift traffic instead of a charger cabinet.",
        checkmarks: [
          "Wall or pedestal mounting to suit your layout",
          "Compact footprint frees space near docks and aisles",
          "Runs from a single power feed per charger"
        ]
      },
      {
        num: "02",
        heading: "Top Up on Every Break",
        text: "20 kW of DC fast charging lets operators opportunity charge during breaks and shift changes, so trucks spend less time parked.",
        checkmarks: [
          "20 kW output from one compact charger",
          "Suited to opportunity charging between tasks and breaks",
          "Off-peak and scheduled charging when shifts allow"
        ]
      },
      {
        num: "03",
        heading: "Any Battery on the Floor",
        text: "Charges lead acid, AGM and lithium batteries from 24 to 100 VDC, so a mixed forklift fleet does not need mixed chargers.",
        checkmarks: [
          "Lead acid, AGM, lithium and EV chemistries supported",
          "Covers 24 to 100 VDC battery systems",
          "SB350, Euro and REMA connector options available"
        ]
      },
      {
        num: "04",
        heading: "Swap Cables, Keep Chargers",
        text: "An interchangeable charge cable and connector means a worn or run-over cable can be replaced without replacing the charger itself.",
        checkmarks: [
          "Removable charge cable and connector design",
          "Change connector type as your fleet changes",
          "Predictive maintenance alerts reach your team early"
        ]
      }
    ]
  },
  // Section 4 (Billing and Data): skipped per CONTENT_UPDATE.md
  // Section 5 (Power Sharing): skipped per CONTENT_UPDATE.md
  builtForConditions: {
    heading: "Made for the Warehouse Floor",
    subheading: "Rated for cold docks, warm mezzanines and long shifts.",
    body: "Momentus operates from -25°C to 50°C, so a cold loading dock or a hot summer mezzanine stays within its working range. It is built for indoor installation first, with wall or pedestal mounting, and connects over cellular or Wi-Fi so it reports to Cumulus without new network cabling.",
    stats: [
      { targetValue: "20 kW", unit: "", label: "Output power" },
      { targetValue: 94, unit: "%", label: "Peak efficiency" },
      { targetValue: "-25°C to 50°C", unit: "", label: "Operating range" }
    ]
  },
  internals: {
    heading: "Silicon Carbide at the Core",
    subheading: "Modern power electronics that shrink the box, not the output.",
    body: "Momentus uses Silicon Carbide (SiC) power electronics, a newer semiconductor material that switches power with lower losses than traditional designs. That is how it reaches 94% efficiency from a compact wall or pedestal enclosure. Less wasted energy also means less heat building up inside the charger during long shifts.",
    checkmarks: [
      "SiC power electronics in a compact enclosure",
      "Listed to UL 1564 for industrial battery chargers",
      "Over-the-air updates keep charger software current"
    ],
    image: "/assets/Products/Momentus/Angle 1 transparent.png",
    imageAlt: "Momentus Silicon Carbide Internal Architecture & Enclosure"
  },
  pairing: {
    heading: "Pairs With CellTrac and Cumulus",
    subheading: "Turn every charge into battery and fleet data you can use.",
    cards: [
      {
        title: "CellTrac (our battery monitoring and telematics system)",
        text: "Monitors each forklift battery's health and communicates its profile to Momentus, so charging stays accurate and battery problems surface early.",
        link: "/products/celltrac"
      },
      {
        title: "Cumulus",
        text: "Shows every charger's status, alarms and charge history in one dashboard, so you know which trucks are ready without walking the floor.",
        link: "/products/cumulus"
      }
    ]
  },
  ecosystem: {
    heading: "Meet the Rest of the Family",
    subheading: "When your floor needs more, another Minit charger is ready.",
    cards: [
      {
        title: "Maximus (our 40 kW dual-port industrial charger)",
        text: "Twice the output and two ports in a compact enclosure, for multi-shift sites where one port is no longer enough.",
        link: "/products/maximus",
        image: "/assets/products/maximus/catalog/maximus-dual-port-mhe-hardware-card.webp"
      },
      {
        title: "Magnus (our universal high-power DC fast charger)",
        text: "100–200 kW across 24–1000 VDC for sites charging forklifts, GSE, buses and passenger EVs on one platform.",
        link: "/products/magnus",
        image: "/assets/products/magnus/catalog/magnus-universal-fleet-charger-hardware-card-listing.png"
      },
      {
        title: "Altus II (our dual-port charger for airport GSE)",
        text: "Dual-port 30–80 kW charging for airport GSE fleets that need a proven, compact pedestal charger.",
        link: "/products/altus-ii",
        image: "/assets/products/altus-ii/overview/altus-ii-main-perspective-angle-render.png"
      },
      {
        title: "Mobilus (our mobile DC fast charger)",
        text: "Trailer or skid-mounted fast charging for temporary or remote sites where fixed charging cannot reach.",
        link: "/products/mobilus",
        image: "/assets/products/mobilus/catalog/mobilus-heavy-duty-mobile-bess-trailer-hardware-card.png"
      }
    ]
  },
  faqs: [
    {
      question: "How fast does Momentus charge a forklift?",
      answer: "Momentus delivers 20 kW of DC power. Actual charge time depends on battery size, chemistry and starting charge, so we size it to your fleet."
    },
    {
      question: "Can Momentus be mounted on a wall?",
      answer: "Yes. Momentus mounts on a wall or a pedestal, keeping a compact footprint that fits crowded docks, aisles and charging areas."
    },
    {
      question: "Which batteries and connectors does Momentus support?",
      answer: "Momentus charges lead acid, AGM, lithium and EV batteries from 24 to 100 VDC, using SB350, Euro or REMA connectors."
    },
    {
      question: "When should I choose Maximus over Momentus?",
      answer: "Choose Maximus when one port is no longer enough. Maximus charges two vehicles at once with up to 40 kW, versus Momentus at 20 kW."
    },
    {
      question: "Does Momentus connect to fleet monitoring?",
      answer: "Yes. Momentus connects over cellular or Wi-Fi to Cumulus for remote monitoring, charge history and predictive maintenance alerts."
    }
  ],
  closingCTA: {
    headlineFragments: ["Queues.", "Clutter.", "Cables.", "Downtime."],
    headlineClosing: "Momentus keeps the floor moving.",
    subline: "Send us your forklift count and we will plan the layout.",
    buttonText: "Request a Quote",
    buttonHref: "/contact"
  }
};

export const momentusProduct = {
  id: "momentus",
  name: "Momentus",
  categoryTag: "Industrial / Forklift",
  categories: ["mhe", "lsv"],
  industries: ["aviation-gse", "warehouse", "commercial-fleets"],
  heroImage: "/assets/products/momentus/hero/momentus-20-kw-single-port-opportunity-charger-hero-banner.png",
  heroImageMode: "image",
  cardImage: "/assets/products/momentus/catalog/momentus-mhe-logistics-charger-hardware-card.png",
  cardImageMode: "image",
  gallery: [
    { src: "/assets/products/momentus/catalog/momentus-mhe-logistics-charger-hardware-card.png", alt: "Momentus Hardware Listing", mode: "image" },
    { src: "/assets/products/momentus/gallery/momentus-perspective-profile-angle.png", alt: "Momentus Hardware Render", mode: "image" }
  ],
  shortDescription: "Compact opportunity charging.",
  keyUSP: "More charging capability in less space.",
  tagline: "20 kW Single-Port Opportunity Charger for MHE & Logistics",
  longDescription: "The Momentus is a robust and reliable mid-level material handling equipment (MHE) charger designed for intensive warehouse shifts. With a single high-efficiency port and adaptive charge algorithms, it provides rapid turnaround during operator rest breaks.",
  specs: {
    chargingType: "DC Fast / Opportunity",
    powerOutput: "20 kW",
    inputVoltage: "208–480 VAC, 3Ø, 50/60 Hz",
    outputVoltage: "24–100 VDC",
    portConfiguration: "Single Port",
    maxEfficiency: "94%",
    operatingTemp: "-10°C to 45°C",
    ingressProtection: "IP21 Industrial Enclosure"
  },
  features: [
    "Optimized for indoor warehouse opportunity charging at workstations",
    "Universal AC Input (208 to 480 VAC, 3-Phase) with minimal wiring reconfiguration",
    "Charges a fully depleted battery pack in approximately three hours",
    "Chemistry agnostic: charges lithium-ion, lead-acid, and AGM batteries",
    "Flexible mounting: compact wall mount or freestanding pedestal",
    "On-screen diagnostic readout for rapid shift troubleshooting",
    "Patented adaptive charging algorithms extend battery service life",
    "Seamless integration with CellTrac battery monitors and Cumulus Cloud"
  ],
  productPageUrl: "/products/momentus"
};
