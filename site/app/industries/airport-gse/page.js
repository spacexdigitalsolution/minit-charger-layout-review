import IndustryDetailLayout from "@/components/IndustryDetailLayout";
import { industries } from "@/data/industries";

export const metadata = {
  title: "Airport Ground Support Equipment (GSE) Fast Charging | Minit Charger",
  description: "Turnkey fast-charging infrastructure for electric ground support equipment (eGSE).",
};

export default function AirportGseAliasPage() {
  const industry = industries.find(i => i.id === "aviation-gse");
  return <IndustryDetailLayout industry={industry} />;
}

