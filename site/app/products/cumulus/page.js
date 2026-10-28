import ProductDetailLayout from "@/components/ProductDetailLayout";
import { products } from "@/data/products";

export const metadata = {
  title: "Cumulus Fleet Telematics & Cloud Platform | Minit Charger",
  description: "Enterprise cloud intelligence connecting chargers, batteries, and vehicles. Real-time KPI dashboards, automated power billing, and predictive maintenance.",
};

export default function CumulusProductPage() {
  const product = products.find(p => p.id === "cumulus");
  return <ProductDetailLayout product={product} />;
}
