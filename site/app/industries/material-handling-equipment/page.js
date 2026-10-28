import IndustryDetailLayout from "@/components/IndustryDetailLayout";
import { industries } from "@/data/industries";

export const metadata = {
  title: "Material Handling Equipment Fast Charging | Minit Charger",
  description: "High-efficiency opportunity charging solutions for material handling fleets, forklifts, and AGVs.",
};

export default function MaterialHandlingPage() {
  const industry = industries.find(i => i.id === "warehouse");
  return <IndustryDetailLayout industry={industry} />;
}
