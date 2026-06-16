import type { MetadataRoute } from "next"
import { products, tuinturf } from "@/lib/products"
import { siteConfig } from "@/lib/site-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const { baseUrl } = siteConfig

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/assortiment`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/groothandel`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/plantgids`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/voorwaarden`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${baseUrl}/assortiment/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const accessoryPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/assortiment/${tuinturf.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ]

  return [...staticPages, ...productPages, ...accessoryPages]
}
