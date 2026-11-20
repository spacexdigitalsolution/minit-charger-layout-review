// Verbatim content from tasks/20.11.2026/CONTENT_UPDATE.md for Magnus (/products/magnus/)

export const magnusSeo = {
  title: "Magnus Universal DC Fast Charger, 100–200 kW | Minit Charger",
  description: "Magnus charges airport GSE, forklifts, buses and passenger EVs from one 100–200 kW DC fast charging platform covering 24–1000 VDC.",
  primaryKeyword: "ev fast charger (5,000/mo, low competition)",
  secondaryKeywords: "fleet charger (500), dual ev charger (500), high power charger (500), ev charging equipment (500), ev chargers for businesses (500), ev fleet charging solutions (50), ev charger compatibility (50)"
};

export const magnusContent = {
  banner: {

    headline: "One Charger. Every Fleet You Run.",
    body: "Magnus (our universal high-power DC fast charger) delivers 100–200 kW across 24–1000 VDC, so tugs, forklifts, buses and passenger EVs can share one platform instead of separate chargers.",
    buttons: [
      { label: "Request a Quote", href: "/contact", primary: true },
      { label: "Download Spec Sheet", href: "/contact", primary: false }
    ]
  },
  specs: {
    heading: "The Numbers Behind Magnus",
    subheading: "Every spec your engineers will ask for, in one place.",
    tabs: [
      {
        name: "Power",
        specs: [
          { label: "Charging type", value: "DC fast" },
          { label: "Power output", value: "100–200 kW" },
          { label: "Output voltage", value: "24–1000 VDC" },
          { label: "Input voltage", value: "323–530 VAC, three-phase" },
          { label: "Max efficiency", value: "95%" },
          { label: "Port configuration", value: "Dual port (expandable configurations) [CLIENT TO CONFIRM meaning]" }
        ]
      },
      {
        name: "Batteries and Connectors",
        specs: [
          { label: "Battery chemistry", value: "Lead acid, lithium, EV" },
          { label: "EV connectors", value: "CCS1, CCS2, NACS, GB/T" },
          { label: "Industrial connectors", value: "Anderson, Euro, REMA" }
        ]
      },
      {
        name: "Connectivity and Data",
        specs: [
          { label: "Network", value: "Cellular (4G/LTE), Wi-Fi, Ethernet" },
          { label: "Cloud", value: "Cloud connected, Cumulus (our cloud fleet dashboard) integration" },
          { label: "Remote control", value: "Remote monitoring and remote configuration" },
          { label: "Systems integration", value: "SCADA / ERP" },
          { label: "Battery data", value: "CellTrac (our battery monitoring and telematics system) compatible; battery health monitoring" },
          { label: "Energy metering", value: "Certified energy meter" },
          { label: "Power management", value: "Intelligent power sharing; off-peak and scheduled charging" },
          { label: "Maintenance", value: "Charge history, analytics, predictive maintenance alerts" }
        ]
      },
      {
        name: "Installation and Environment",
        specs: [
          { label: "Mounting", value: "Pedestal" },
          { label: "Location", value: "Indoor and outdoor" },
          { label: "Power feed", value: "Single power feed" },
          { label: "Cable handling", value: "Built-in cable management system" },
          { label: "Operating temperature", value: "-25°C to 60°C" },
          { label: "Compliance", value: "UL 2202, UL 2231-1/-2" }
        ]
      }
    ],
    note: "Note: Over-the-air updates are not listed for Magnus: the matrix marks them as Planned."
  },
  salientFeatures: {
    heading: "Four Reasons Fleets Pick Magnus",
    subheading: "What changes on your ramp, depot or yard from day one.",
    features: [
      {
        num: "01",
        heading: "Low Voltage to High Voltage",
        text: "One platform spans 24–1000 VDC, from low-voltage tugs and forklifts up to high-voltage buses, trucks and passenger EVs.",
        checkmarks: [
          "Covers ground support equipment (GSE) and on-road EVs",
          "Charges lead acid, lithium and EV batteries",
          "One platform replaces multiple dedicated charger types"
        ]
      },
      {
        num: "02",
        heading: "Seven Connectors, One Charger",
        text: "Choose CCS1, CCS2, NACS, GB/T, Anderson, Euro or REMA connectors to match the vehicles already parked in your fleet.",
        checkmarks: [
          "EV connectors: CCS1, CCS2, NACS and GB/T",
          "Industrial connectors: Anderson, Euro and REMA options",
          "Dual ports serve two vehicles from one pedestal"
        ]
      },
      {
        num: "03",
        heading: "Power Shared, Not Wasted",
        text: "Intelligent power sharing lets Magnus direct available power to the vehicles that need it, so existing electrical capacity works harder.",
        checkmarks: [
          "Directs available power to vehicles that need it",
          "Off-peak and scheduled charging on every unit",
          "Runs from a single power feed per charger"
        ]
      },
      {
        num: "04",
        heading: "Configured From Anywhere",
        text: "Remote configuration and monitoring over cellular, Wi-Fi or Ethernet mean fewer trips to the charger to adjust settings or check status.",
        checkmarks: [
          "Change charger settings remotely, without a site visit",
          "Predictive maintenance alerts sent straight to your team",
          "SCADA and ERP integration with your existing systems"
        ]
      }
    ]
  },
  billingData: {
    heading: "Every Kilowatt-Hour, Accounted For",
    subheading: "Certified metering for shared chargers and multi-operator sites.",
    body: "When airlines, handlers or departments share a charger, someone always asks who used what. Magnus carries a certified energy meter, and Cumulus (our cloud fleet dashboard) records charge history and energy use by vehicle, giving you trusted numbers to allocate costs between users.",
    checkmarks: [
      "Certified energy meter built into every Magnus unit",
      "Charge history and analytics stored in Cumulus",
      "Energy reporting by vehicle for fair cost allocation"
    ],
    image: "/assets/homepage/Cumulus Software-01.webp",
    imageAlt: "Magnus Certified Energy Metering and Cumulus Cost Allocation"
  },
  powerSharing: {
    heading: "Use the Power You Already Have",
    subheading: "Intelligent power sharing that works with your existing feed.",
    body: "Electrical upgrades can turn a simple charger order into a major capital project. Magnus includes intelligent power sharing, which directs available capacity to the vehicles that need it. Add off-peak and scheduled charging, and you can plan charging around your site's demand before you plan new electrical service.",
    checkmarks: [
      "Directs available capacity to the vehicles that need it",
      "Scheduled charging moves sessions into off-peak hours",
      "Helps you get more from existing electrical capacity"
    ],
    image: "/assets/Industries/Aviation-GSE/Features/No infrastructure upgrade required.webp",
    imageAlt: "Magnus Intelligent Power Sharing and Load Management"
  },
  builtForConditions: {
    heading: "Built for Ramp, Yard and Depot",
    subheading: "Rated for hot aprons, cold mornings and everything between.",
    body: "Magnus is rated for indoor and outdoor pedestal installation and operates from -25°C to 60°C, so a frozen winter ramp or a summer apron stays inside its working range. A built-in cable management system is designed to keep the cable organized between sessions instead of left lying in vehicle paths.",
    stats: [
      { targetValue: "-25°C to 60°C", unit: "", label: "Operating temperature" },
      { targetValue: 95, unit: "%", label: "Peak efficiency" },
      { targetValue: "24–1000 VDC", unit: "", label: "Output range" }
    ]
  },
  internals: {
    heading: "What Sits Inside the Pedestal",
    subheading: "Engineering choices that keep Magnus efficient, safe and serviceable.",
    body: "Magnus converts power at 95% efficiency, so less energy is lost as heat inside the cabinet. It meets UL 2202 for EV charging system equipment and UL 2231-1/-2 for personnel protection. A wide 323–530 VAC three-phase input range and a single power feed simplify the work at your electrical panel.",
    checkmarks: [
      "Meets UL 2202 and UL 2231-1/-2 requirements",
      "Accepts 323–530 VAC three-phase input power",
      "Single power feed keeps site installation simple"
    ],
    image: "/assets/Products/Magnus/Magnus Hardware Listing.webp",
    imageAlt: "Magnus Internal Power Electronics and Pedestal Architecture"
  },
  pairing: {
    heading: "Better With CellTrac and Cumulus",
    subheading: "Connect batteries, chargers and fleet data on one cloud platform.",
    cards: [
      {
        title: "CellTrac (our battery monitoring and telematics system)",
        text: "Monitors battery health on each vehicle and communicates battery profiles to Magnus, improving charging accuracy and adding GPS asset tracking.",
        link: "/products/celltrac"
      },
      {
        title: "Cumulus",
        text: "Shows charger status, battery health, energy use and alarms for every site on one dashboard, so your team sees issues without walking the site.",
        link: "/products/cumulus"
      }
    ]
  },
  ecosystem: {
    heading: "Meet the Rest of the Family",
    subheading: "Match the right Minit charger to every corner of your operation.",
    cards: [
      {
        title: "Altus II (our dual-port charger for airport GSE)",
        text: "Dual-port 30–80 kW charging for standard airport GSE fleets that need a proven, compact charger for everyday work.",
        link: "/products/altus-ii",
        image: "/assets/homepage/Altus II.webp"
      },
      {
        title: "Maximus (our 40 kW dual-port industrial charger)",
        text: "Charges two forklifts at once for multi-shift warehouses that have outgrown a single-port charger.",
        link: "/products/maximus",
        image: "/assets/Products/Maximus/Maximus Hardware Listing.webp"
      },
      {
        title: "Momentus (our compact 20 kW forklift charger)",
        text: "Wall or pedestal opportunity charging for indoor forklift fleets where every square foot of floor counts.",
        link: "/products/momentus",
        image: "/assets/Products/Momentus/MOMENTUs Hardware Listing.webp"
      },
      {
        title: "Mobilus (our mobile DC fast charger)",
        text: "Trailer or skid-mounted fast charging for temporary, remote or emergency sites beyond the reach of fixed charging.",
        link: "/products/mobilus",
        image: "/assets/Products/Mobilus/MOBILUS Hardware Listing.webp"
      },
      {
        title: "Pharus (our Level 2 AC charger)",
        text: "Workplace and public Level 2 charging for passenger EVs, monitored in the same Cumulus dashboard as your fleet.",
        link: "/products/pharus",
        image: "/assets/homepage/Meet MOMENTUs-02.webp"
      }
    ]
  },
  faqs: [
    {
      question: "What vehicles can Magnus charge?",
      answer: "Virtually any vehicle in a mixed fleet. Magnus covers 24–1000 VDC, supporting airport GSE, forklifts, buses, trucks and passenger EVs."
    },
    {
      question: "How much power does Magnus deliver?",
      answer: "Magnus delivers 100 to 200 kW of DC fast charging from a 323–530 VAC three-phase supply, sized to your fleet's needs."
    },
    {
      question: "Which connectors does Magnus support?",
      answer: "Seven types: CCS1, CCS2, NACS and GB/T for EVs, plus Anderson, Euro and REMA for industrial and GSE equipment."
    },
    {
      question: "Can Magnus be installed outdoors on a ramp?",
      answer: "Yes. Magnus is rated for indoor and outdoor pedestal installation and operates in temperatures from -25°C to 60°C."
    },
    {
      question: "Can shared users be billed for energy?",
      answer: "Magnus provides the data for it: a certified energy meter, plus charge history and energy reporting in Cumulus for allocating costs between users."
    }
  ],
  closingCTA: {
    headlineFragments: ["Tugs.", "Buses.", "Trucks.", "EVs."],
    headlineClosing: "One charger runs them all.",
    subline: "Tell us your fleet mix and we will size Magnus.",
    buttonText: "Request a Quote",
    buttonHref: "/contact"
  }
};
