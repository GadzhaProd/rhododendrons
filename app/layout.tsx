import React from "react"
import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from '@/lib/cart-context'
import { CartDrawer } from '@/components/cart-drawer'
import { siteConfig } from '@/lib/site-config'
import { asset } from '@/lib/base-path'
import { isDemoMode } from '@/lib/demo-mode'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const defaultTitle = 'Top Rhododendrons | Kwekerij in Otterlo, sinds 2001'
const defaultDescription =
  'Top Rhododendrons. Uw specialist in rhododendrons, direct van eigen kwekerij in Otterlo. Kwaliteit en vakmanschap sinds 2001.'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: defaultTitle,
  description: defaultDescription,
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    siteName: siteConfig.name,
    title: defaultTitle,
    description: defaultDescription,
    url: siteConfig.baseUrl,
    images: [
      {
        url: asset(siteConfig.ogImage.url),
        width: siteConfig.ogImage.width,
        height: siteConfig.ogImage.height,
        alt: siteConfig.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [asset(siteConfig.ogImage.url)],
  },
  icons: {
    icon: [
      {
        url: asset('/icon-light-32x32.png'),
        media: '(prefers-color-scheme: light)',
      },
      {
        url: asset('/icon-dark-32x32.png'),
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: asset('/icon.svg'),
        type: 'image/svg+xml',
      },
    ],
    apple: asset('/apple-icon.png'),
  },
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "GardenStore",
  "@id": `${siteConfig.baseUrl}#organization`,
  name: siteConfig.name,
  url: siteConfig.baseUrl,
  image: `${siteConfig.baseUrl}/images/owner.jpg`,
  logo: `${siteConfig.baseUrl}/icon.svg`,
  email: siteConfig.business.email,
  telephone: siteConfig.business.phones[0],
  foundingDate: siteConfig.business.foundingDate,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.business.address.streetAddress,
    postalCode: siteConfig.business.address.postalCode,
    addressLocality: siteConfig.business.address.addressLocality,
    addressRegion: siteConfig.business.address.addressRegion,
    addressCountry: siteConfig.business.address.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.business.geo.latitude,
    longitude: siteConfig.business.geo.longitude,
  },
  openingHoursSpecification: siteConfig.business.openingHours.map(
    ({ days, opens, closes }) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: days,
      opens,
      closes,
    }),
  ),
  identifier: {
    "@type": "PropertyValue",
    propertyID: "KvK",
    value: siteConfig.business.kvk,
  },
  sameAs: [siteConfig.business.instagram],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body className={`font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
        {/* No Vercel endpoint on the static preview host — it would only 404. */}
        {!isDemoMode && <Analytics />}
      </body>
    </html>
  )
}
