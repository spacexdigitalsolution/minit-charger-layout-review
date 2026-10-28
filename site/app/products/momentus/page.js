import ProductDetailLayout from "@/components/ProductDetailLayout";
import { products } from "@/data/products";

export const metadata = {
  title: "Momentus 20 kW MHE Opportunity Charger | Minit Charger",
  description: "Compact 20 kW single-port industrial opportunity charger for warehouse forklifts and material handling equipment.",
};

export default function MomentusProductPage() {
  const product = products.find(p => p.id === "momentus");
  return <ProductDetailLayout product={product} />;
}
