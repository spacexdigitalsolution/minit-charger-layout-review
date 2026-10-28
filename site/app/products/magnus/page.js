import ProductDetailLayout from "@/components/ProductDetailLayout";
import { products } from "@/data/products";

export const metadata = {
  title: "Magnus 100–200 kW Fast Charger | Minit Charger",
  description: "Universal multi-voltage EV and GSE charger. Supports eGSE, electric buses, delivery trucks, and high-voltage fleet EVs.",
};

export default function MagnusProductPage() {
  const product = products.find(p => p.id === "magnus");
  return <ProductDetailLayout product={product} />;
}
