// Single source of truth for site-level SEO + business info.
// Mirrors what's visible in components/footer.tsx, app/privacy/page.tsx,
// app/voorwaarden/page.tsx. Used by app/robots.ts, app/sitemap.ts, and the
// JSON-LD scripts in app/layout.tsx + app/assortiment/[slug]/page.tsx +
// components/faq-section.tsx.

export const siteConfig = {
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://toprhododendrons.nl",

  name: "Top Rhododendrons",
  tagline: "Kwekerij in Otterlo, sinds 2001",
  description:
    "Top Rhododendrons. Uw specialist in rhododendrons, direct van eigen kwekerij in Otterlo. Kwaliteit en vakmanschap sinds 2001.",

  ogImage: {
    url: "/images/owner.jpg",
    width: 5504,
    height: 3072,
    alt: "Gert Top, oprichter van Top Rhododendrons, op de kwekerij in Otterlo",
  },

  business: {
    legalName: "Top Rhododendrons",
    foundingDate: "2001",
    kvk: "82480273",
    email: "info@toprhododendrons.nl",
    phones: ["+31620104312", "+31620297849"],
    instagram: "https://www.instagram.com/toprhododendrons",
    address: {
      streetAddress: "Esserbroekweg 2",
      postalCode: "6731 DB",
      addressLocality: "Otterlo",
      addressRegion: "Gelderland",
      addressCountry: "NL",
    },
    // Approximate coordinates for Otterlo on the Veluwe.
    // Google geocodes the address anyway; this is for explicit declaration.
    geo: {
      latitude: 52.108,
      longitude: 5.776,
    },
    openingHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      { days: ["Saturday"], opens: "09:00", closes: "13:00" },
    ],
  },
} as const
