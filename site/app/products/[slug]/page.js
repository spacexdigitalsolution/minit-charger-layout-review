import ProductDetailLayout from "@/components/ProductDetailLayout";
import UnderDevelopment from "@/components/UnderDevelopment";
import { products } from "@/data/products";

export function generateStaticParams() {
  return products.map(p => ({ slug: p.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find(p => p.id === slug);
  if (!product) return { title: "Product | Minit Charger" };
  return {
    title: `${product.name} | Minit Charger`,
    description: product.shortDescription || product.keyUSP,
  };
}

export default async function DynamicProductPage({ params }) {
  const { slug } = await params;
  const product = products.find(p => p.id === slug);

  if (!product) {
    return (
      <div className="pt-32 pb-20">
        <UnderDevelopment title="Product Not Found" returnUrl="/products" />
      </div>
    );
  }

  return <ProductDetailLayout product={product} />;
}
