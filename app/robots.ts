import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site-config"
import { isDemoMode } from "@/lib/demo-mode"

// Generated once at build time; required so this route can be emitted as a
// file by `output: "export"` (the GitHub Pages preview build).
export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  // The static preview is a copy of the real site; keep it out of search so it
  // never competes with toprhododendrons.nl for the same content.
  if (isDemoMode) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    }
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${siteConfig.baseUrl}/sitemap.xml`,
    host: siteConfig.baseUrl,
  }
}
