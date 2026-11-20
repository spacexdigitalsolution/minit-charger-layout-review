// Verbatim content from tasks/20.11.2026/CONTENT_UPDATE.md for Maximus (/products/maximus/)

export const maximusSeo = {
  title: "Maximus 40 kW Dual-Port DC Fast Charger for Forklifts | Minit Charger",
  description: "Maximus charges two forklifts at once with up to 40 kW from a compact wall or pedestal enclosure, built for multi-shift warehouses.",
  primaryKeyword: "dual ev charger (500/mo) and ev dual charger (500/mo)",
  secondaryKeywords: "industrial charging (500), fleet charger (500), ev charging equipment (500), high power charger (500), ev fast charger (5,000), warehouse ev charging (50)"
};

export const maximusContent = {
  banner: {
    headline: "Two Forklifts. One Compact Charger.",
    body: "Maximus (our 40 kW dual-port DC fast charger) charges two industrial vehicles at the same time from one wall or pedestal unit, built for busy multi-shift warehouses.",
    buttons: [
      { label: "Request a Quote", href: "/contact", primary: true },
      { label: "Download Spec Sheet", href: "/contact", primary: false }
    ]
  },
  specs: {
    heading: "The Numbers Behind Maximus",
    subheading: "Dual-port throughput, compact enclosure, every spec laid out.",
    tabs: [
      {
        name: "Power",
        specs: [
          { label: "Charging type", value: "DC fast" },
          { label: "Power output", value: "40 kW [CLIENT TO CONFIRM per-port split]" },
          { label: "Output voltage", value: "24–100 VDC" },
          { label: "Input voltage", value: "208–480 VAC, three-phase" },
          { label: "Max efficiency", value: "94%" },
          { label: "Port configuration", value: "Dual port" },
          { label: "Power electronics", value: "Silicon Carbide (SiC)" }
        ]
      },
      {
        name: "Batteries and Connectors",
        specs: [
          { label: "Battery chemistry", value: "Lead acid, AGM (sealed absorbed glass mat lead acid), lithium, EV" },
          { label: "Battery communication", value: "CAN and/or Bluetooth" },
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
          { label: "Location", value: "Indoor; optional outdoor with pedestal configuration" },
          { label: "Power feed", value: "Single power feed" },
          { label: "Footprint", value: "Compact" },
          { label: "Cable handling", value: "Cable management system (optional)" },
          { label: "Operating temperature", value: "-25°C to 50°C" },
          { label: "Compliance", value: "UL 1564" }
        ]
      }
    ],
    note: "Note: Dimensions (22 x 20 x 12 in) and weight (60 lb) are held back until confirmed as enclosure-only values, as the matrix itself instructs. GB/T is not listed pending confirmation."
  },
  salientFeatures: {
    heading: "Four Reasons to Go Dual-Port",
    subheading: "More throughput per charger, less floor space per vehicle.",
    features: [
      {
        num: "01",
        heading: "Two Ports, One Footprint",
        text: "Two vehicles charge at once from a single enclosure, so a charging spot that served one forklift can now serve two.",
        checkmarks: [
          "Dual ports charge two vehicles at the same time",
          "Up to 40 kW from a single charger",
          "Fewer chargers needed across your whole facility"
        ]
      },
      {
        num: "02",
        heading: "Built for Multi-Shift Work",
        text: "When trucks come back at shift change together, a second port lowers the risk of a line forming at the charging wall.",
        checkmarks: [
          "Designed for demanding multi-shift warehouse operations",
          "Opportunity charge between tasks, breaks and shifts",
          "Scheduled and off-peak charging on every unit"
        ]
      },
      {
        num: "03",
        heading: "Talks to Your Batteries",
        text: "Maximus communicates with batteries over CAN (a standard vehicle data link) or Bluetooth, across lead acid, AGM, lithium and EV chemistries.",
        checkmarks: [
          "Covers 24 to 100 VDC battery systems",
          "SB350, Euro and REMA connector options available",
          "Works with CellTrac for battery health data"
        ]
      },
      {
        num: "04",
        heading: "Wall Inside, Pedestal Outside",
        text: "Mount Maximus on a wall indoors, or choose the pedestal configuration where your yard or dock needs outdoor charging.",
        checkmarks: [
          "Wall or pedestal mounting to suit your layout",
          "Optional pedestal configuration for outdoor installation",
          "Interchangeable charge cable and connector design"
        ]
      }
    ]
  },
  // Section 4 (Billing and Data): skipped per CONTENT_UPDATE.md
  // Section 5 (Power Sharing): skipped per CONTENT_UPDATE.md
  builtForConditions: {
    heading: "Ready for Long Shifts",
    subheading: "Rated for cold docks and warm aisles, shift after shift.",
    body: "Maximus runs from -25°C to 50°C, covering cold loading docks and warm warehouse aisles alike. Choose a wall mount to keep floors clear indoors, or the optional pedestal configuration where you need charging outdoors. Cellular and Wi-Fi connectivity keep it reporting to Cumulus from the day it is installed.",
    stats: [
      { targetValue: "40 kW", unit: "", label: "Total output" },
      { targetValue: 2, unit: "", label: "Charging ports" },
      { targetValue: 94, unit: "%", label: "Peak efficiency" }
    ]
  },
  internals: {
    heading: "More Power per Square Foot",
    subheading: "Silicon Carbide electronics put 40 kW in a compact enclosure.",
    body: "Maximus is built on Silicon Carbide (SiC) power electronics, a newer semiconductor material that loses less energy as heat when it switches power. That lets Maximus deliver 40 kW at 94% efficiency from a compact wall or pedestal enclosure, instead of a large floor-standing cabinet taking up working space.",
    checkmarks: [
      "SiC power electronics for compact, efficient charging",
      "Listed to UL 1564 for industrial battery chargers",
      "Over-the-air updates keep charger software current"
    ],
    image: "/assets/products/maximus/catalog/maximus-dual-port-mhe-hardware-card.webp",
    imageAlt: "Maximus 40 kW Dual-Port Electronics Enclosure"
  },
  pairing: {
    heading: "Pairs With CellTrac and Cumulus",
    subheading: "Two ports of charging data, one clear view of your fleet.",
    cards: [
      {
        title: "CellTrac",
        text: "Monitors battery health on every truck and communicates battery profiles to Maximus, so charging stays accurate across a mixed fleet.",
        link: "/products/celltrac"
      },
      {
        title: "Cumulus",
        text: "Shows both ports' status, alarms and charge history across every site, so you spot heavy and idle trucks without guesswork.",
        link: "/products/cumulus"
      }
    ]
  },
  ecosystem: {
    heading: "Meet the Rest of the Family",
    subheading: "From single-port forklifts to high-voltage EVs, one charging ecosystem.",
    cards: [
      {
        title: "Momentus (our compact 20 kW forklift charger)",
        text: "Single-port 20 kW opportunity charging in a compact enclosure, for smaller fleets and tighter corners of the floor.",
        link: "/products/momentus",
        image: "/assets/products/momentus/catalog/momentus-mhe-logistics-charger-hardware-card.png"
      },
      {
        title: "Magnus (our universal high-power DC fast charger)",
        text: "100–200 kW across 24–1000 VDC, for sites adding buses, trucks or passenger EVs alongside forklifts.",
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
        text: "Trailer or skid-mounted fast charging for temporary, remote or emergency sites beyond fixed charging.",
        link: "/products/mobilus",
        image: "/assets/products/mobilus/catalog/mobilus-heavy-duty-mobile-bess-trailer-hardware-card.png"
      }
    ]
  },
  faqs: [
    {
      question: "Can Maximus charge two forklifts at once?",
      answer: "Yes. Maximus has two ports and charges two industrial vehicles simultaneously, with up to 40 kW available from one charger."
    },
    {
      question: "Can Maximus be installed outdoors?",
      answer: "Yes, with the optional pedestal configuration. Maximus is primarily an indoor charger and operates from -25°C to 50°C."
    },
    {
      question: "Which batteries does Maximus work with?",
      answer: "Lead acid, AGM, lithium and EV batteries from 24 to 100 VDC, using SB350, Euro or REMA connectors and CAN or Bluetooth communication."
    },
    {
      question: "How is Maximus different from Momentus?",
      answer: "Maximus doubles both output and ports: 40 kW across two ports, versus Momentus at 20 kW on a single port."
    },
    {
      question: "What power supply does Maximus need?",
      answer: "Maximus runs from a 208–480 VAC three-phase supply on a single power feed. Our team confirms site capacity during planning."
    }
  ],
  closingCTA: {
    headlineFragments: ["Queues.", "Clutter.", "Bottlenecks.", "Downtime."],
    headlineClosing: "Two ports shorten the line.",
    subline: "Share your shift pattern and we will size your charging.",
    buttonText: "Request a Quote",
    buttonHref: "/contact"
  }
};
