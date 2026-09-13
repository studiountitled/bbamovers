import type { MetadataRoute } from "next";
import { seoLocations, seoServices, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-12");
  const serviceRoutes = seoServices.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  const locationRoutes = seoLocations.map((location) => ({
    url: `${siteUrl}/locations/${location.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/locations`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...serviceRoutes,
    ...locationRoutes,
  ];
}
