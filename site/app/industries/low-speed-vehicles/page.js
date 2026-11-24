import IndustryDetailLayout from "@/components/industry/IndustryDetailLayout";
import { industries } from "@/data/industries";

export const metadata = {
  title: "Onboard Chargers for Low Speed Electric Vehicles | Minit Charger",
  description: "Onboard charging with built-in battery management and GPS for low speed electric vehicles, plus DC fast charging and live fleet data across every site.",
};

export default function LowSpeedVehiclesPage() {
  const industry = industries.find(i => i.id === "lsv");
  return <IndustryDetailLayout industry={industry} />;
}
