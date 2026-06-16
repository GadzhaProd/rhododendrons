/** @type {import('next').NextConfig} */

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
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig
