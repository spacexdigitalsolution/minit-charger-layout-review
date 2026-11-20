// section: aviation-challenges-data

export const categories = [
  {
    id: "durability",
    label: "Ramp Durability",
    badge: "4 Challenges",
    items: [
      {
        num: "01",
        challenge: "Cables always on the ground, at risk of damage?",
        solution: "A retractor pulls the cables up after every charge, keeping them off the ground and away from wheels."
      },
      {
        num: "02",
        challenge: "Too little time to charge between flights?",
        solution: "Dual 20 kW ports charge two vehicles at once, so even short stops between flights become charging time."
      },
      {
        num: "03",
        challenge: "Can one small fault stop the whole charger?",
        solution: "The dual charging ports work independently. If one has a fault, the other keeps charging as normal."
      },
      {
        num: "04",
        challenge: "Could a charger repair take many days?",
        solution: "The screen shows the exact fault, and the power modules slide out like drawers for quick replacement."
      }
    ]
  },
  {
    id: "compatibility",
    label: "Fleet & Power Grid",
    badge: "4 Challenges",
    items: [
      {
        num: "05",
        challenge: "Will your power supply handle more chargers?",
        solution: "The charger can run on spare power from your passenger bridges, so adding chargers need not mean adding supply."
      },
      {
        num: "06",
        challenge: "Different vehicles, each needing a different charger?",
        solution: "A single charger for all your vehicles (48 to 1000 volts), charging buses, trucks, passenger EVs, high-voltage ground equipment, and forklifts."
      },
      {
        num: "07",
        challenge: "Different battery types, at risk of wrong charging?",
        solution: "CellTrac (a small tracker on each battery) tells the charger the battery type, so lead-acid and lithium each charge correctly."
      },
      {
        num: "08",
        challenge: "Batteries at risk of wearing out early?",
        solution: "Every charge adjusts to the battery's temperature, and CellTrac (a small tracker on each battery) records its health over time."
      }
    ]
  },
  {
    id: "telemetry",
    label: "Telemetry & Billing",
    badge: "4 Challenges",
    items: [
      {
        num: "09",
        challenge: "Never sure which vehicle is fully charged?",
        solution: "Cumulus (our live dashboard) shows every vehicle's charge level, with a ready-to-use list for your team."
      },
      {
        num: "10",
        challenge: "Finding out about a fault too late?",
        solution: "Cumulus (our live dashboard) sends an alert the moment a fault appears, naming the charger and the problem."
      },
      {
        num: "11",
        challenge: "Never sure where each vehicle is?",
        solution: "CellTrac (a small tracker on each battery) follows every vehicle by GPS and shows them all on one live map."
      },
      {
        num: "12",
        challenge: "Shared chargers, but who pays how much?",
        solution: "Cumulus (our live dashboard) records each company's charging time and energy used, then prepares the bill automatically."
      }
    ]
  },
  {
    id: "mobile",
    label: "Remote Deployment",
    badge: "1 Capability",
    items: [
      {
        num: "13",
        challenge: "Vehicles parked far from any power point?",
        solution: "Mobilus (a battery charger on wheels) goes to where vehicles are parked, with six ports and no power point needed there."
      }
    ]
  }
];
