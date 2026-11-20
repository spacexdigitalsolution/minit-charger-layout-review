import ProductDetailLayout from "@/components/product/ProductDetailLayout";
import UnderDevelopment from "@/components/ui/UnderDevelopment";
import { products } from "@/data/products";
import { magnusContent, magnusSeo } from "../magnus/_components/magnusData";
import { momentusContent, momentusSeo } from "../momentus/_components/momentusData";
import { maximusContent, maximusSeo } from "../maximus/_components/maximusData";
import { mobilusContent, mobilusSeo } from "../mobilus/_components/mobilusData";
import { pharusContent, pharusSeo } from "../pharus/_components/pharusData";
import { celltracContent, celltracSeo } from "../celltrac/_components/celltracData";
import { cumulusContent, cumulusSeo } from "../cumulus/_components/cumulusData";
import { durusContent, durusSeo } from "../durus/_components/durusData";

const productContentMap = {
  magnus: { content: magnusContent, seo: magnusSeo },
  momentus: { content: momentusContent, seo: momentusSeo },
  maximus: { content: maximusContent, seo: maximusSeo },
  mobilus: { content: mobilusContent, seo: mobilusSeo },
  pharus: { content: pharusContent, seo: pharusSeo },
  celltrac: { content: celltracContent, seo: celltracSeo },
  cumulus: { content: cumulusContent, seo: cumulusSeo },
  durus: { content: durusContent, seo: durusSeo },
};

export function generateStaticParams() {
  return products.map(p => ({ slug: p.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find(p => p.id === slug);
  if (!product) return { title: "Product | Minit Charger" };
  const entry = productContentMap[slug];
  return {
    title: entry?.seo?.title || `${product.name} | Minit Charger`,
    description: entry?.seo?.description || product.shortDescription || product.keyUSP,
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

  const entry = productContentMap[slug];
  return <ProductDetailLayout product={product} content={entry?.content} />;
}
