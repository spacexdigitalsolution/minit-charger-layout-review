// Verbatim content from tasks/20.11.2026/MINIT CHARGER (1).md for CellTrac (/products/celltrac/)

export const celltracSeo = {
  title: "CellTrac Battery Monitoring and Telematics for Fleets | Minit Charger",
  description: "CellTrac monitors battery health, shares battery profiles with Minit chargers and records fleet data, so lead acid fleets catch battery problems early.",
  primaryKeyword: "battery management system for electric vehicle (500/mo, low competition)",
  secondaryKeywords: "battery management system for electric vehicles (500), ev reliability (500), smart ev battery (50), lead acid battery ev (50), lead acid battery for ev (50), ev fleet maintenance (50)"
};

export const celltracContent = {
  banner: {
    headline: "See Battery Trouble Before It Strands You.",
    body: "CellTrac (our battery monitoring and telematics system) watches battery health on every vehicle, shares each battery's profile with your Minit charger and records fleet data, so failing batteries surface early.",
    buttons: [
      { label: "Talk to Our Team", href: "/contact", primary: true },
      { label: "See Compatible Chargers", href: "/products", primary: false }
    ]
  },
  specs: {
    heading: "What CellTrac Tracks",
    subheading: "Capabilities confirmed today, with hardware specs to follow.",
    tabs: [
      {
        name: "Monitoring",
        specs: [
          { label: "Battery health", value: "Continuous monitoring on each vehicle" },
          { label: "Battery profiles", value: "Communicated to the Minit charger" },
          { label: "Fleet data", value: "Operating data recorded for every vehicle" },
          { label: "Maintenance", value: "Enables predictive maintenance alerts" },
          { label: "Location", value: "GPS asset tracking when paired with Altus II, Magnus, Momentus or Maximus" }
        ]
      },
      {
        name: "Compatibility",
        specs: [
          { label: "Chargers", value: "Altus II, Magnus, Momentus, Maximus, Mobilus, Pharus" },
          { label: "Batteries", value: "Built for lead acid fleets [CLIENT TO CONFIRM lithium support]" },
          { label: "Cloud", value: "Cumulus (our cloud fleet dashboard)" }
        ]
      },
      {
        name: "Hardware",
        specs: [
          { label: "Mounting", value: "[CLIENT TO CONFIRM]" },
          { label: "Communication method", value: "[CLIENT TO CONFIRM]" },
          { label: "Battery voltage range", value: "[CLIENT TO CONFIRM]" },
          { label: "Operating temperature", value: "[CLIENT TO CONFIRM]" },
          { label: "Certifications", value: "[CLIENT TO CONFIRM]" }
        ]
      }
    ],
    note: "Note: The source documents describe what CellTrac does but give no hardware specifications. The Hardware tab needs a CellTrac datasheet."
  },
  salientFeatures: {
    heading: "Four Ways CellTrac Protects Uptime",
    subheading: "From guessing at battery health to knowing it, every shift.",
    features: [
      {
        num: "01",
        heading: "Health, Always On",
        text: "CellTrac continuously monitors battery health on each vehicle, so a weakening battery shows up in the data before it shows up on the floor.",
        checkmarks: [
          "Continuous battery health monitoring on every vehicle",
          "Supports predictive maintenance instead of reactive repairs",
          "Battery data visible to your fleet managers"
        ]
      },
      {
        num: "02",
        heading: "Smarter Charging Profiles",
        text: "CellTrac communicates each battery's profile to the charger, helping it deliver the right charge and improving charging accuracy.",
        checkmarks: [
          "Battery profiles shared directly with Minit chargers",
          "Improves charging accuracy across a mixed fleet",
          "Works with six Minit charger families today"
        ]
      },
      {
        num: "03",
        heading: "Charger or Battery?",
        text: "When charging looks wrong, CellTrac's battery data helps your team tell a battery problem from a charger problem instead of guessing.",
        checkmarks: [
          "Battery data alongside charger data in Cumulus",
          "Less trial-and-error troubleshooting for maintenance teams",
          "Fleet operating data recorded for every vehicle"
        ]
      },
      {
        num: "04",
        heading: "Know Where Assets Are",
        text: "Paired with Altus II, Magnus, Momentus or Maximus, CellTrac adds GPS asset tracking, so you can see where each vehicle sits.",
        checkmarks: [
          "GPS asset tracking with supported Minit chargers",
          "Location and battery data in one view",
          "Helps find idle or misplaced equipment faster"
        ]
      }
    ]
  },
  builtForConditions: {
    heading: "Built Around Lead Acid Fleets",
    subheading: "Made for the fleets that run on lead acid every day.",
    body: "CellTrac is built for anyone operating lead acid fleets, especially airports, industrial sites and rental fleets, where battery condition is easy to lose track of between shifts. It turns charging from a reactive routine into a data-driven maintenance process, giving your team the information to help extend battery life across the fleet.",
    stats: [
      { targetValue: "6", unit: "", label: "Compatible charger families" },
      { targetValue: "24/7", unit: "", label: "Continuous battery monitoring" },
      { targetValue: "1", unit: "", label: "Dashboard for all data" }
    ]
  },
  internals: {
    heading: "Data at the Battery",
    subheading: "Onboard telematics that turn batteries into connected assets.",
    body: "CellTrac installs on the vehicle and communicates directly with the charger and Cumulus, turning an analog battery into a monitored node in your fleet. Recording operating data for every vehicle helps maintenance teams spot underperforming units and build accurate maintenance history.",
    checkmarks: [
      "Installed on the vehicle for direct monitoring",
      "Battery profile shared directly with chargers",
      "Operating history stored for every connected vehicle"
    ],
    image: "/assets/homepage/Cumulus Software-01.webp",
    imageAlt: "CellTrac Onboard Telematics and Battery Monitoring System"
  },
  pairing: {
    heading: "Pairs With Chargers and Cumulus",
    subheading: "The link between physical batteries and your cloud dashboard.",
    cards: [
      {
        title: "Minit Chargers (six families)",
        text: "Altus II, Magnus, Momentus, Maximus, Mobilus and Pharus all accept CellTrac battery profiles.",
        link: "/products"
      },
      {
        title: "Cumulus",
        text: "Brings battery health and charger status together on one screen for fleet managers.",
        link: "/products/cumulus"
      }
    ]
  },
  ecosystem: {
    heading: "Compatible Minit Chargers",
    subheading: "CellTrac connects to the chargers your fleet runs today.",
    cards: [
      {
        title: "Altus II (our dual-port charger for airport GSE)",
        text: "30–80 kW dual-port charging for airport GSE fleets, with CellTrac battery profiles and GPS tracking.",
        link: "/products/altus-ii",
        image: "/assets/products/altus-ii/overview/altus-ii-main-perspective-angle-render.png"
      },
      {
        title: "Momentus (our compact 20 kW forklift charger)",
        text: "Compact wall or pedestal charging for forklift fleets, with CellTrac data sent straight to Cumulus.",
        link: "/products/momentus",
        image: "/assets/products/momentus/catalog/momentus-mhe-logistics-charger-hardware-card.png"
      },
      {
        title: "Maximus (our 40 kW dual-port industrial charger)",
        text: "Charges two forklifts at once, using CellTrac battery profiles to keep opportunity charging accurate.",
        link: "/products/maximus",
        image: "/assets/products/maximus/catalog/maximus-dual-port-mhe-hardware-card.webp"
      },
      {
        title: "Magnus (our universal high-power DC fast charger)",
        text: "100–200 kW charging across 24–1000 VDC for mixed fleets, with CellTrac telematics on every port.",
        link: "/products/magnus",
        image: "/assets/products/magnus/catalog/magnus-universal-fleet-charger-hardware-card-listing.png"
      }
    ]
  },
  faqs: [
    {
      question: "What does CellTrac do?",
      answer: "CellTrac monitors battery health on each vehicle, shares battery profiles with Minit chargers and records fleet data for maintenance teams."
    },
    {
      question: "Who is CellTrac designed for?",
      answer: "CellTrac is designed for anyone operating lead acid fleets, especially airports, industrial fleets, rental fleets and fleet managers."
    },
    {
      question: "Which Minit chargers work with CellTrac?",
      answer: "Altus II, Magnus, Momentus, Maximus, Mobilus and Pharus are all CellTrac compatible, with battery data shown in Cumulus."
    },
    {
      question: "How does CellTrac help battery life?",
      answer: "By improving charging accuracy and enabling predictive maintenance, CellTrac helps your team act on battery problems early, which helps extend battery life."
    },
    {
      question: "Where do I see CellTrac data?",
      answer: "In Cumulus, our cloud fleet dashboard, alongside charger status, alarms and charge history for every connected site."
    }
  ],
  closingCTA: {
    headlineFragments: ["Guesswork.", "Breakdowns.", "Strandings.", "Surprises."],
    headlineClosing: "CellTrac shows them coming.",
    subline: "Tell us your fleet size and battery mix to start.",
    buttonText: "Talk to Our Team",
    buttonHref: "/contact"
  }
};
