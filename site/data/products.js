export const products = [
  {
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
  },
  {
    id: "magnus",
    name: "Magnus",
    categoryTag: "Universal Mixed Fleet",
    categories: ["aviation", "ev"],
    industries: ["aviation-gse", "warehouse", "commercial-fleets"],
    heroImage: "/assets/products/magnus/hero/magnus-universal-100-200-kw-fleet-airport-fast-charger-hero.png",
    heroImageMode: "image",
    cardImage: "/assets/products/magnus/catalog/magnus-universal-fleet-charger-hardware-card-listing.png",
    cardImageMode: "image",
    gallery: [
      { src: "/assets/products/magnus/catalog/magnus-universal-fleet-charger-hardware-card-listing.png", alt: "Magnus Hardware Listing", mode: "image" },
      { src: "/assets/products/magnus/gallery/magnus-gallery-perspective-view-01.png", alt: "Magnus Hardware Render (Angle 1)", mode: "image" },
      { src: "/assets/products/magnus/gallery/magnus-gallery-perspective-view-02.png", alt: "Magnus Hardware Render (Angle 2)", mode: "image" },
      { src: "/assets/products/magnus/gallery/magnus-gallery-perspective-view-03.png", alt: "Magnus Hardware Render (Front)", mode: "image" },
      { src: "/assets/products/magnus/gallery/magnus-gallery-perspective-view-04.png", alt: "Magnus Hardware Render (Rear)", mode: "image" }
    ],
    shortDescription: "One charger for virtually any fleet.",
    keyUSP: "One platform can support both traditional GSE and high-voltage EV applications.",
    tagline: "Universal 100–200 kW Fleet & Airport Fast Charger",
    longDescription: "Magnus is a future-proof EV charger designed for airports, fleets, and commercial depots. Supporting eGSE, buses, trucks, and commercial EVs, it unifies charging infrastructure, lowers capital expenditure, and ensures long-term scalability across any voltage architecture.",
    specs: {
      chargingType: "DC Fast",
      powerOutput: "100–200 kW",
      inputVoltage: "323–530 VAC, 3Ø",
      outputVoltage: "24–1000 VDC",
      portConfiguration: "Dual Port",
      maxEfficiency: "95%",
      operatingTemp: "-30°C to 55°C",
      ingressProtection: "NEMA 4 / IP65"
    },
    features: [
      "One charging platform for entire depot: eGSE, transit buses, delivery trucks, and EVs",
      "Wide 24–1000 VDC output to charge low-voltage industrial batteries or 800V EV architectures",
      "Universal connector compatibility: CCS1, CCS2, NACS, J1772, GB/T, and Euro",
      "Integrated cable management arm reducing ground clutter and cord wear",
      "Chemistry agnostic: safely charges lead-acid, lithium-ion, and sodium-ion chemistries",
      "Certified utility metering with automated tenant billing protocols",
      "Dynamic power sharing, SoC-based ramp, and off-peak load optimization",
      "Real-time telemetry and SCADA integration via Cumulus Cloud"
    ],
    productPageUrl: "/products/magnus"
  },
  {
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
  },
  {
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
  },
  {
    id: "maximus",
    name: "Maximus",
    categoryTag: "High-Throughput Industrial",
    categories: ["mhe"],
    industries: ["aviation-gse", "warehouse", "commercial-fleets"],
    heroImage: "/assets/products/maximus/hero/mid-morning-warehouse-forklifts-and-maximus-charger.png",
    heroImageMode: "image",
    cardImage: "/assets/products/maximus/catalog/maximus-dual-port-mhe-hardware-card.webp",
    cardImageMode: "image",
    gallery: [
      { src: "/assets/products/maximus/catalog/maximus-dual-port-mhe-hardware-card.webp", alt: "Maximus Hardware Listing", mode: "image" }
    ],
    shortDescription: "High-throughput dual-port charging.",
    keyUSP: "Modern SiC power electronics. Compact by design.",
    tagline: "40 kW Dual-Port Industrial MHE Charger",
    longDescription: "Featuring dual 20 kW charging ports, Maximus is the premier indoor MHE charging solution for high-throughput distribution centers. It powers two industrial vehicles simultaneously, slashing queue times and maximizing fleet utilization.",
    specs: {
      chargingType: "Dual DC Fast / Opportunity",
      powerOutput: "40 kW Total (Dual 20 kW Ports)",
      inputVoltage: "208–480 VAC, 3Ø, 50/60 Hz",
      outputVoltage: "24–100 VDC",
      portConfiguration: "Dual Independent Ports",
      maxEfficiency: "94%",
      operatingTemp: "-10°C to 45°C",
      ingressProtection: "IP21 Heavy Industrial Enclosure"
    },
    features: [
      "Dual independent 20 kW charging ports powering two forklifts simultaneously",
      "Charges two fully depleted battery packs in approximately three hours",
      "Universal AC Input (208 to 480 VAC, 3-Phase) for rapid deployment",
      "Wall mount or heavy-duty floor pedestal configuration",
      "Supports lithium-ion, lead-acid, and AGM chemistries seamlessly",
      "Silicon carbide power modules delivering lower thermal loss and higher efficiency",
      "Comprehensive diagnostic LCD panel with quick error code reporting",
      "Direct link to Cumulus for enterprise energy usage reporting"
    ],
    productPageUrl: "/products/maximus"
  },
  {
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
  },
  {
    id: "celltrac",
    name: "CellTrac",
    categoryTag: "Battery Management & Telematics",
    categories: ["bms"],
    industries: ["warehouse", "aviation-gse", "lsv"],
    heroImage: null,
    heroImageMode: "placeholder",
    cardImage: null,
    cardImageMode: "placeholder",
    shortDescription: "Battery monitoring and telematics for fleets.",
    keyUSP: "See battery trouble before it strands you.",
    tagline: "Battery Monitoring & Telematics System",
    longDescription: "CellTrac watches battery health on every vehicle, shares each battery's profile with your Minit charger and records fleet data, so failing batteries surface early.",
    specs: {
      chargingType: "Telematics & BMS",
      powerOutput: "Ultra-Low Power Draw (< 1W)",
      inputVoltage: "12–120 VDC Operating Range",
      outputVoltage: "Cellular / BLE Telemetry",
      portConfiguration: "Integrated Shunt & Sensor Loom",
      maxEfficiency: "Real-Time Sampling",
      operatingTemp: "-30°C to 65°C",
      ingressProtection: "IP67 Submersible Enclosure"
    },
    features: [
      "Extends battery service lifespan by up to two years through anomaly alerts",
      "Universal battery compatibility: flooded lead-acid, gel, AGM, and lithium packs",
      "Continuous State-of-Charge (SoC), temperature, and low-water alarm logging",
      "Integrated GPS transceiver for equipment geofencing and real-time locating",
      "Automated hour-meter capture enabling condition-based preventative maintenance",
      "Direct cellular bridge to Cumulus Cloud with real-time push notification alarms",
      "Zero-maintenance solid-state design with IP67 ruggedized sealing"
    ],
    productPageUrl: "/products/celltrac"
  },
  {
    id: "cumulus",
    name: "Cumulus",
    categoryTag: "Enterprise Software",
    categories: ["software"],
    industries: ["aviation-gse", "warehouse", "commercial-fleets"],
    heroImage: null,
    heroImageMode: "placeholder",
    cardImage: "/assets/products/cumulus/catalog/cumulus-cloud-software-platform-dashboard-card.png",
    cardImageMode: "image",
    gallery: [
      { src: "/assets/products/cumulus/catalog/cumulus-cloud-software-platform-dashboard-card.png", alt: "Cumulus Cloud Software Platform Dashboard Card", mode: "image" }
    ],
    shortDescription: "Cloud fleet and charger management platform.",
    keyUSP: "Every charger. Every battery. One screen.",
    tagline: "Cloud Fleet & Charger Management Platform",
    longDescription: "Cumulus connects your chargers, batteries and vehicles in one place, showing status, battery health, energy use and alarms across one site or many.",
    specs: {
      chargingType: "Cloud Platform (SaaS)",
      powerOutput: "N/A (Cloud Hosted)",
      inputVoltage: "REST API / OCPP 1.6J / 2.0.1",
      outputVoltage: "SOC 2 Type II Certified",
      portConfiguration: "Enterprise Multi-Tenant",
      maxEfficiency: "99.9% Cloud Availability",
      operatingTemp: "Global CDN",
      ingressProtection: "Encrypted In-Transit & At-Rest"
    },
    features: [
      "Centralized real-time dashboard tracking all chargers, batteries, and vehicles",
      "Automated tenant & airline power billing calculation with certified audit logs",
      "Smart load balancing and peak shaving to avoid utility demand surcharges",
      "Instant push alerts for hardware exceptions, disconnected cables, and low SoC",
      "Over-the-air (OTA) firmware deployment and remote charger configuration",
      "Open API and SCADA integration for enterprise ERP and airport management systems",
      "Predictive analytics forecasting battery replacement timelines and maintenance needs"
    ],
    productPageUrl: "/products/cumulus"
  },
  {
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
  }
];
