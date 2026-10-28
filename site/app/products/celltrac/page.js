import ProductDetailLayout from "@/components/ProductDetailLayout";
import { products } from "@/data/products";

export const metadata = {
  title: "CellTrac Smart Battery Management System | Minit Charger",
  description: "Advanced onboard battery monitoring and telematics. Extends battery life by up to 2 years with real-time SoC and anomaly alerts.",
};

export default function CelltracProductPage() {
  const product = products.find(p => p.id === "celltrac");
  return <ProductDetailLayout product={product} />;
}
