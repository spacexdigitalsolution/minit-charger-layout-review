# Batch 05 Answers: Type-Specific Scoping & Dynamic Routing

- **Website Archetype:** Corporate / Industrial B2B Fleet EV Infrastructure.
- **Hardware Catalog Routing:**
  - Product models mapped to electrical and physical parameters in `data/products.js`:
    - Power outputs: 15kW to 360kW DC fast charging
    - Input voltages: 480VAC 3-phase, 208/240VAC
    - Enclosure rating: NEMA 3R / IP54 outdoor rated
    - Protocol support: CCS1, CHAdeMO, J1772, SAE J3068
- **Software & Fleet Services Integration:**
  - Cumulus Cloud IoT Fleet Monitoring
  - CellTrac real-time battery telemetry and health analytics
  - Dynamic power management and peak shaving modules
- **Form Endpoints:**
  - Depot Consultation & Quote Request form (`app/contact/_components/DynamicForm.js`)
  - Submits hardware model preference, fleet size, site power capacity, and contact info.

