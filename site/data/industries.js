export const industries = [
  {
    id: "aviation-gse",
    slug: "aviation-gse",
    label: "Aviation GSE",
    title: "Aviation & Airport Ground Support Equipment",
    headline: "Fast Charging Engineered for the Demands of the Flightline",
    shortDescription: "Turnkey fast-charging infrastructure for electric ground support equipment (eGSE). Minimize turnaround times, withstand tarmac environments, and achieve NetZero targets.",
    heroImage: "/assets/homepage/Outdoor eGSE & yards-01.webp",
    stats: [
      { targetValue: 95, unit: "%", label: "Peak Electrical Efficiency" },
      { targetValue: 1000, unit: "V", label: "Max DC Output Capability" },
      { targetValue: 15, unit: " min", label: "Rapid Turnaround Charge Window" },
      { targetValue: 24, unit: "/7", label: "Continuous Ramp Uptime" },
    ],
    challenges: [
      {
        title: "Extreme Weather & Heat",
        description: "Tarmac temperatures routinely exceed 120°F in summer and plunge below freezing in winter, causing conventional chargers to trip or throttle."
      },
      {
        title: "Diverse Voltage Fleets",
        description: "Ramps operate mixed equipment from 80V belt loaders to 800V electric pushback tugs requiring universal compatibility."
      },
      {
        title: "Cable Drive-Over Hazards",
        description: "Heavy ramp vehicle traffic damages trailing cables, creating severe safety risks and maintenance downtime."
      }
    ],
    solutions: [
      "Ruggedized NEMA 3R / 4X outdoor weatherproofing with silicon carbide power electronics.",
      "Dual independent 24–1000 VDC ports powering high-voltage tugs and low-voltage belt loaders simultaneously.",
      "Patented overhead spring-assisted retractable cable management keeping tarmac drive paths clear.",
      "Automated airline & tenant power metering for seamless utility re-billing."
    ],
    recommendedProductIds: ["altus-ii", "magnus", "mobilus", "cumulus"],
    faqs: [
      {
        question: "Can Altus II charge both 80V and 800V eGSE?",
        answer: "Yes. Altus II features a wide 24–1000 VDC output range, automatically adjusting voltage and current to match the connected vehicle's BMS."
      },
      {
        question: "How does Minit Charger handle cable drive-overs on the ramp?",
        answer: "Altus II features an integrated overhead retractable cable management arm with quick-breakaway connectors to keep cords off the asphalt."
      }
    ]
  },
  {
    id: "warehouse",
    slug: "warehouse",
    label: "Warehouse / Manufacturing",
    title: "Warehouse & Material Handling Equipment",
    headline: "Turbocharging Warehouse Productivity and Forklift Uptime",
    shortDescription: "Eliminate battery change rooms and optimize multi-shift material handling operations with high-efficiency opportunity charging for forklifts, AGVs, and reach trucks.",
    heroImage: "/assets/homepage/Indoor material handling-01.webp",
    stats: [
      { targetValue: 100, unit: "%", label: "Battery Room Space Elimination" },
      { targetValue: 3, unit: " hrs", label: "Full Shift Depletion Recovery" },
      { targetValue: 94, unit: "%", label: "Silicon Carbide Efficiency" },
      { targetValue: 2, unit: " yrs", label: "Extended Battery Life via CellTrac" },
    ],
    challenges: [
      {
        title: "Dangerous Battery Swapping",
        description: "Traditional lead-acid battery extraction rooms consume thousands of square feet of valuable storage and pose severe acid spill risks."
      },
      {
        title: "Peak Demand Electric Penalties",
        description: "Uncoordinated multi-truck charging spikes warehouse utility peak demand charges, inflating monthly electricity bills."
      },
      {
        title: "Unmonitored Battery Degradation",
        description: "Without granular cell-level telemetry, overcharging and under-watering lead to premature battery failure and surprise forklift downtime."
      }
    ],
    solutions: [
      "Opportunity charging during scheduled operator 15-minute breaks and shift changes directly at the work aisle.",
      "Universal AC Input (208 to 480 VAC, 3-Phase) for rapid wall or pedestal installation without costly electrical rewiring.",
      "Dual-port Maximus chargers powering two 20kW ports simultaneously from a single compact drop.",
      "CellTrac telemetry integration offering real-time state-of-charge, low water alarms, and automated exception reporting via Cumulus."
    ],
    recommendedProductIds: ["maximus", "momentus", "durus", "celltrac"],
    faqs: [
      {
        question: "How does opportunity charging eliminate battery change rooms?",
        answer: "With opportunity charging, operators plug in forklifts during 15-minute breaks and shift transitions. Batteries stay in the vehicle, freeing up square footage previously dedicated to hoists and battery wash stations."
      },
      {
        question: "Can Maximus and Momentus chargers handle both lead-acid and lithium batteries?",
        answer: "Yes. Minit Charger systems are chemistry-agnostic, supporting lithium-ion, AGM, and flooded lead-acid batteries with patented adaptive charging algorithms that adjust to each chemistry automatically."
      },
      {
        question: "What mounting options are available for indoor facilities?",
        answer: "Both Momentus and Maximus support compact wall mounting, floor pedestal mounting, or rack integration to preserve warehouse floor space."
      }
    ]
  },
  {
    id: "lsv",
    slug: "lsv",
    label: "Low-Speed Vehicles (LSV)",
    title: "Low-Speed Electric Vehicle (LSV) Fleet Infrastructure",
    headline: "Reliable, Compact Charging Solutions for Campus & Utility Fleets",
    shortDescription: "Keep utility carts, resort shuttles, airport runabouts, and security vehicles operational with durable, high-efficiency onboard and standalone chargers.",
    heroImage: "/assets/homepage/Engineered for LSEVs.webp",
    stats: [
      { targetValue: 2.2, unit: " kW", label: "Compact Onboard Output" },
      { targetValue: 94, unit: "%", label: "High Energy Efficiency" },
      { targetValue: 50, unit: "%", label: "Reduced Charging Footprint" },
      { targetValue: 100, unit: "%", label: "Multi-Chemistry Compatibility" },
    ],
    challenges: [
      {
        title: "Disparate Fleet Charging Hardware",
        description: "Mixed LSV fleets from various manufacturers often require proprietary chargers, resulting in chaotic cords, mismatched plugs, and disorganized parking bays."
      },
      {
        title: "Harsh Outdoor Campus Environments",
        description: "Resort and industrial LSVs operate in rain, salt air, and dust where fragile consumer chargers frequently short out or fail."
      },
      {
        title: "Lack of Fleet Visibility",
        description: "Campus managers lack centralized insights into vehicle battery levels, resulting in vehicles stranded mid-shift across sprawling facilities."
      }
    ],
    solutions: [
      "Durus onboard and standalone chargers providing rugged IP-sealed power delivery in compact footprints.",
      "Chemistry-agnostic charging algorithms extending battery service life across lead-acid and lithium packs.",
      "Integrated CellTrac GPS and battery health beacons delivering live fleet map tracking and state-of-charge alerts.",
      "Overnight trickle and daytime opportunity charge optimization for constant fleet readiness."
    ],
    recommendedProductIds: ["durus", "momentus", "celltrac", "cumulus"],
    faqs: [
      {
        question: "Can the Durus charger be mounted directly onboard a vehicle?",
        answer: "Yes. Durus is specifically engineered for onboard mounting or standalone bench/wall use, offering vibration resistance and sealed ingress protection."
      },
      {
        question: "What types of low-speed vehicles are supported?",
        answer: "Minit Charger solutions support electric golf carts, campus utility vehicles, security patrols, resort shuttles, burden carriers, and municipal maintenance trucks."
      },
      {
        question: "How does CellTrac prevent stranded LSVs on large campuses?",
        answer: "CellTrac monitors real-time battery state of charge (SoC) and transmits GPS coordinates to Cumulus, alerting supervisors before a vehicle battery drops below critical levels."
      }
    ]
  }
];
