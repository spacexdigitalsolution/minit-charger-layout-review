import { products } from "@/data/products";
import { blogs } from "@/data/blogs";
import { industryCategories } from "@/data/categories";

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://minitcharger.com";

  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/products/altus-ii",
    "/industries",
    "/industries/aviation-gse",
    "/blogs",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const productRoutes = products
    .filter((p) => p.id !== "altus-ii")
    .map((p) => ({
      url: `${baseUrl}/products/${p.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  const industryRoutes = (industryCategories || [])
    .filter((i) => i.id !== "aviation-gse")
    .map((i) => ({
      url: `${baseUrl}/industries/${i.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  const blogRoutes = blogs.map((b) => ({
    url: `${baseUrl}/blogs/${b.slug || b.id}`,
    lastModified: b.publishDate ? new Date(b.publishDate) : new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...industryRoutes, ...blogRoutes];
}

