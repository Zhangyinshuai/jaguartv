import type { MetadataRoute } from "next";

const routes = ["", "/tutorials", "/materials", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://partners.jaguartv.com.br${route}`,
    lastModified: new Date()
  }));
}
