// Verbatim content from tasks/20.11.2026/MINIT CHARGER (1).md for Cumulus (/products/cumulus/)

export const cumulusSeo = {
  title: "Cumulus Cloud Fleet and Charger Management Platform | Minit Charger",
  description: "Cumulus connects Minit chargers, batteries and vehicles in one cloud dashboard: charger status, battery health, energy use, alarms and fleet utilization.",
  primaryKeyword: "ev charging application (5,000/mo, low competition)",
  secondaryKeywords: "ev charger application (5,000), ev monitoring (500), ev fleet management (50), ev fleet management system (50), ev charging management (50), ev charging management solutions (50), charger management system (50), ev data analytics (50)"
};

export const cumulusContent = {
  banner: {
    headline: "Every Charger. Every Battery. One Screen.",
    body: "Cumulus (our cloud fleet dashboard) connects your chargers, batteries and vehicles in one place, showing status, battery health, energy use and alarms across one site or many.",
    buttons: [
      { label: "Talk to Our Team", href: "/contact", primary: true },
      { label: "See Connected Products", href: "/products", primary: false }
    ]
  },
  specs: {
    heading: "What Cumulus Shows You",
    subheading: "Platform capabilities confirmed across the Minit charger family.",
    tabs: [
      {
        name: "Visibility",
        specs: [
          { label: "Charger status", value: "Live status for every connected charger" },
          { label: "Battery health", value: "Across the fleet, with CellTrac (our battery monitoring and telematics system)" },
          { label: "Energy", value: "Energy consumption by charger and site" },
          { label: "Maintenance", value: "Alarms and maintenance information" },
          { label: "Utilization", value: "Fleet utilization data" },
          { label: "Locations", value: "One site or multiple sites" }
        ]
      },
      {
        name: "Data and Alerts",
        specs: [
          { label: "History", value: "Charge history and analytics" },
          { label: "Alerts", value: "Predictive maintenance alerts (all DC fast chargers)" },
          { label: "Scheduling", value: "Off-peak and scheduled charging" },
          { label: "Remote configuration", value: "Available on Magnus" },
          { label: "Energy reporting", value: "By vehicle, with the certified meter on Magnus" }
        ]
      },
      {
        name: "Connected Products",
        specs: [
          { label: "Chargers", value: "Altus II (airport GSE charger), Magnus (universal high-power charger), Momentus (compact forklift charger), Maximus (dual-port forklift charger), Mobilus (mobile charger), Pharus (Level 2 AC charger)" },
          { label: "Batteries", value: "CellTrac" },
          { label: "Charger connectivity", value: "Cellular (4G/LTE) on every charger; Wi-Fi and Ethernet where fitted" },
          { label: "Systems integration", value: "SCADA / ERP via Magnus and Mobilus; airport systems via Altus II" }
        ]
      },
      {
        name: "Platform Access",
        specs: [
          { label: "Web and mobile access", value: "[CLIENT TO CONFIRM]" },
          { label: "User roles", value: "[CLIENT TO CONFIRM]" },
          { label: "Data export / API", value: "[CLIENT TO CONFIRM]" }
        ]
      }
    ],
    note: "Note: Older documents call this platform AssetPro or AssetPro 360. The page uses Cumulus only."
  },
  salientFeatures: {
    heading: "Four Questions Cumulus Answers",
    subheading: "The questions your team asks every shift, answered in one dashboard.",
    features: [
      {
        num: "01",
        heading: "Which Chargers Are Down?",
        text: "Live charger status and alarms for every connected unit, so your team knows what is offline without walking the ramp or the floor.",
        checkmarks: [
          "Charger status for every connected Minit unit",
          "Alarms and faults visible in one place",
          "One site or many in the same view"
        ]
      },
      {
        num: "02",
        heading: "Which Batteries Are Weak?",
        text: "With CellTrac connected, Cumulus shows battery health across the fleet and sends predictive maintenance alerts before small issues become downtime.",
        checkmarks: [
          "Battery health monitoring across the whole fleet",
          "Predictive maintenance alerts for your maintenance team",
          "Charge history to spot abnormal battery behavior"
        ]
      },
      {
        num: "03",
        heading: "Where Is the Energy Going?",
        text: "Energy consumption and charge history by charger help you plan scheduled and off-peak charging and back up sustainability reporting.",
        checkmarks: [
          "Energy consumption tracked across chargers and sites",
          "Off-peak and scheduled charging across connected chargers",
          "Data to support sustainability and operations reporting"
        ]
      },
      {
        num: "04",
        heading: "Which Vehicles Work Hardest?",
        text: "Fleet utilization data shows which assets are used heavily, lightly or not at all, so you plan charger counts and fleet size on evidence.",
        checkmarks: [
          "Fleet utilization data for every connected asset",
          "GPS asset location with CellTrac-enabled chargers",
          "Evidence for adding chargers or rebalancing the fleet"
        ]
      }
    ]
  },
  billingData: {
    heading: "Shared Chargers, Clear Accounts",
    subheading: "Energy reporting that shows who used what on shared sites.",
    body: "At airports and other shared sites, several operators often depend on the same chargers. Paired with the certified energy meter on Magnus, Cumulus records energy use and charge history by vehicle, giving you trusted numbers to allocate costs between users.",
    checkmarks: [
      "Energy use recorded by vehicle on Magnus",
      "Charge history to back up billing calculations",
      "Fair cost allocation for shared charging sites"
    ],
    image: "/assets/homepage/Cumulus Software-01.webp",
    imageAlt: "Cumulus Shared Charger Energy Reporting and Cost Allocation"
  },
  builtForConditions: {
    heading: "Across Sites and Fleets",
    subheading: "One platform for airports, warehouses and mixed-fleet depots.",
    body: "Cumulus scales from a single warehouse dock up to multiple airports, ports and depots, bringing together chargers of different power ratings and connector types in one view. Whether your fleet uses DC fast charging, Level 2 AC or both, Cumulus provides the operational picture to keep vehicles moving.",
    stats: [
      { targetValue: "6", unit: "", label: "Connected charger families" },
      { targetValue: "4G/LTE", unit: "", label: "Cellular connectivity on every charger" },
      { targetValue: "1", unit: "", label: "Dashboard for all sites" }
    ]
  },
  internals: {
    heading: "The Architecture Behind Cumulus",
    subheading: "Cellular links, cloud analytics and integrations that fit your workflow.",
    body: "Every connected Minit charger connects over cellular (4G/LTE), with Wi-Fi and Ethernet options, sending telemetry to Cumulus without new network infrastructure on site. For enterprise operations, SCADA and ERP integration on Magnus and Mobilus connects charging data to your broader operational systems.",
    checkmarks: [
      "Cellular (4G/LTE) connectivity on every charger",
      "SCADA and ERP integration on supported units",
      "Predictive maintenance alerts sent to your team"
    ],
    image: "/assets/Products/Cumulus/Cumulus Software Lisitng.webp",
    imageAlt: "Cumulus Cloud Architecture and Telemetry Platform"
  },
  pairing: {
    heading: "Better With CellTrac",
    subheading: "Add battery health and GPS tracking to your charger dashboard.",
    cards: [
      {
        title: "CellTrac",
        text: "Adds vehicle-level battery health and GPS asset tracking to Cumulus, completing the picture between chargers and vehicles.",
        link: "/products/celltrac"
      },
      {
        title: "Magnus",
        text: "Adds certified energy metering to Cumulus, enabling vehicle-level energy reporting and cost allocation.",
        link: "/products/magnus"
      }
    ]
  },
  ecosystem: {
    heading: "Connected Minit Chargers",
    subheading: "Every modern Minit charger reports to Cumulus out of the box.",
    cards: [
      {
        title: "Altus II (our dual-port charger for airport GSE)",
        text: "Airport GSE charging with live status, charge history and alarms in Cumulus.",
        link: "/products/altus-ii",
        image: "/assets/homepage/Altus II.webp"
      },
      {
        title: "Momentus (our compact 20 kW forklift charger)",
        text: "Forklift opportunity charging monitored over cellular or Wi-Fi in Cumulus.",
        link: "/products/momentus",
        image: "/assets/Home Page/Warehouse & Manufacturing/MOMENTUs Hardware-01.webp"
      },
      {
        title: "Maximus (our 40 kW dual-port industrial charger)",
        text: "Dual-port warehouse charging with predictive maintenance alerts in Cumulus.",
        link: "/products/maximus",
        image: "/assets/Products/Maximus/Maximus Hardware Listing.webp"
      },
      {
        title: "Magnus (our universal high-power DC fast charger)",
        text: "100–200 kW fast charging with remote configuration and certified metering in Cumulus.",
        link: "/products/magnus",
        image: "/assets/Products/Magnus/Magnus Hardware Listing.webp"
      }
    ]
  },
  faqs: [
    {
      question: "What is Cumulus?",
      answer: "Cumulus is our cloud fleet and charger management platform, showing charger status, battery health, energy use, alarms and utilization in one dashboard."
    },
    {
      question: "Which chargers connect to Cumulus?",
      answer: "Altus II, Magnus, Momentus, Maximus, Mobilus and Pharus all connect to Cumulus, using cellular, Wi-Fi or Ethernet."
    },
    {
      question: "Do I need CellTrac to use Cumulus?",
      answer: "No. Chargers report status, charge history and energy data on their own. CellTrac adds battery health and GPS location from each vehicle."
    },
    {
      question: "Can Cumulus help allocate shared energy costs?",
      answer: "Yes, with Magnus. Its certified energy meter plus Cumulus energy reporting gives a record of energy use by vehicle for cost allocation."
    },
    {
      question: "Who is Cumulus built for?",
      answer: "Any operation managing more than a handful of chargers, from a single warehouse to multiple airports, depots and industrial sites."
    }
  ],
  closingCTA: {
    headlineFragments: ["Spreadsheets.", "Guesswork.", "Walkarounds.", "Surprises."],
    headlineClosing: "Cumulus puts it on screen.",
    subline: "Ask for a walkthrough of Cumulus using your own sites.",
    buttonText: "Talk to Our Team",
    buttonHref: "/contact"
  }
};
