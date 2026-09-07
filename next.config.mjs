/** @type {import('next').NextConfig} */

// Static-export mode (used by the GitHub Pages preview build in
// .github/workflows/deploy-pages.yml). The normal dev/production build is
// unaffected: without STATIC_EXPORT the config below is identical to before.
//
// In export mode there is no Node server, so:
//   - app/api/* route handlers are removed by the workflow before building
//   - forms run in demo mode (see lib/demo-mode.ts)
//   - headers() cannot be applied (a static host sends its own headers)
const isStaticExport = process.env.STATIC_EXPORT === 'true'

// Project Pages are served from https://<user>.github.io/<repo>, so every URL
// needs that prefix. next/link and next/image add it automatically; raw
// <img>/<video> paths use the same value via lib/base-path.ts.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

// Security headers applied to every route.
// CSP is intentionally NOT included yet — it needs careful testing against:
//   - the hero video <source src="/videos/hero.mp4">
//   - inline JSON-LD <script type="application/ld+json"> in app/layout.tsx + product pages + faq-section
//   - next/font Google Fonts injection (Cormorant Garamond, DM Sans)
//   - @vercel/analytics script
//   - any future external scripts (analytics, Tag Manager, social pixels)
// TODO: add Content-Security-Policy header with strict allow-list once we add the first external script.
const securityHeaders = [
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
]

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  ...(isStaticExport
    ? {
        output: 'export',
        basePath,
        // Emit out/<route>/index.html so plain static hosts resolve every
        // route without rewrite rules.
        trailingSlash: true,
      }
    : {
        async headers() {
          return [
            {
              source: '/:path*',
              headers: securityHeaders,
            },
          ]
        },
      }),
}

export default nextConfig
