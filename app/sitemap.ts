import type { MetadataRoute } from "next";
import { services, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/layanan", "/korporat", "/lokasi", ...services.map((s) => `/layanan/${s.slug}`)];
  return pages.map((p) => ({ url: `${site.url}${p}` }));
}
