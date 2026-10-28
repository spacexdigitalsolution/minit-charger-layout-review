import ProductDetailLayout from "@/components/ProductDetailLayout";
import { products } from "@/data/products";

export const metadata = {
  title: "Durus Compact Onboard & Standalone Charger | Minit Charger",
  description: "Versatile 2.2–3.3 kW charger for low-speed electric vehicles (LSV), utility carts, and small industrial equipment.",
};

export default function DurusProductPage() {
  const product = products.find(p => p.id === "durus");
  return <ProductDetailLayout product={product} />;
}
