import type { MetadataRoute } from "next";
import { insights, services } from "./data";
import { absoluteUrl } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/services"), changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/sectors"), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/about"), changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/insights"), changeFrequency: "weekly", priority: 0.8 },
    { url: absoluteUrl("/contact"), changeFrequency: "monthly", priority: 0.8 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    changeFrequency: "monthly",
    priority: 0.8,
    images: [absoluteUrl(service.image)],
  }));

  const insightPages: MetadataRoute.Sitemap = insights.map((insight) => ({
    url: absoluteUrl(`/insights/${insight.slug}`),
    lastModified: new Date(insight.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
    images: [absoluteUrl(insight.image)],
  }));

  return [...staticPages, ...servicePages, ...insightPages];
}
