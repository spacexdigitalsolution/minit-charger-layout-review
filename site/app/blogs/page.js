import BlogCatalogClient from "./_components/BlogCatalogClient";
import ConversionBand from "@/components/ConversionBand";
import { blogs } from "@/data/blogs";

export const metadata = {
  title: "Insights & Resources | Minit Charger",
  description: "Explore the latest airport GSE electrification whitepapers, fleet case studies, and fast-charging field reports.",
};

export default function BlogsPage() {
  return (
    <>
      <BlogCatalogClient blogs={blogs} />
      <ConversionBand
        headline="Ready to power your fleet?"
        primaryCTA={{ label: "Contact Sales", href: "/contact" }}
        secondaryCTA={{ label: "Explore Products", href: "/products" }}
      />
    </>
  );
}
