import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.atharvstradingcompany.in",
      lastModified: new Date(),
    },
    {
      url: "https://www.atharvstradingcompany.in/products",
      lastModified: new Date(),
    },
    {
      url: "https://www.atharvstradingcompany.in/about",
      lastModified: new Date(),
    },
    {
      url: "https://www.atharvstradingcompany.in/contact",
      lastModified: new Date(),
    },
  ];
}