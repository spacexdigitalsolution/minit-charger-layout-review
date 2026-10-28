import ProductDetailLayout from "@/components/ProductDetailLayout";
import { products } from "@/data/products";

export const metadata = {
  title: "Maximus 40 kW Dual-Port Industrial Charger | Minit Charger",
  description: "High-throughput dual-port 40 kW indoor MHE fast charger for high-density warehouse and logistics operations.",
};

export default function MaximusProductPage() {
  const product = products.find(p => p.id === "maximus");
  return <ProductDetailLayout product={product} />;
}
