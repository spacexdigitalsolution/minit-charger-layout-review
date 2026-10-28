import ProductDetailLayout from "@/components/ProductDetailLayout";
import { products } from "@/data/products";

export const metadata = {
  title: "Mobilus Mobile EV Charger & BESS | Minit Charger",
  description: "Mobile fast charger with integrated Battery Energy Storage System (BESS) and clean AC generator capabilities for flexible ramp operations.",
};

export default function MobilusProductPage() {
  const product = products.find(p => p.id === "mobilus");
  return <ProductDetailLayout product={product} />;
}
