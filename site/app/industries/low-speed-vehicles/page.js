import IndustryDetailLayout from "@/components/IndustryDetailLayout";
import { industries } from "@/data/industries";

export const metadata = {
  title: "Low Speed Vehicle (LSV) Charging Solutions | Minit Charger",
  description: "Durable onboard and standalone charging solutions for low-speed electric vehicles, campus shuttles, resort carts, and utility fleets.",
};

export default function LowSpeedVehiclesPage() {
  const industry = industries.find(i => i.id === "lsv");
  return <IndustryDetailLayout industry={industry} />;
}
