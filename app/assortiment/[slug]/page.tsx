import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ShieldCheck, Truck, Check, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OfferteModal } from "@/components/offerte-modal"
import { WhatsappSticky } from "@/components/whatsapp-sticky"
import { ProductGallery } from "@/components/product-gallery"
import { getProductBySlug, products } from "@/lib/products"
import { siteConfig } from "@/lib/site-config"
import { ProductActions } from "./product-actions"

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}

  const title = `${product.name} kopen | Top Rhododendrons`
  const description = product.description
  const productUrl = `${siteConfig.baseUrl}/assortiment/${product.slug}`
  const ogTitle = `Rhododendron ${product.name}`
  const productImageAlt = `Rhododendron ${product.name}, ${product.color.toLowerCase()}`

  return {
    title,
    description,
    openGraph: {
      type: 'website',
      locale: 'nl_NL',
      siteName: siteConfig.name,
      title: ogTitle,
      description,
      url: productUrl,
      images: [
        {
          url: product.image,
          width: 1024,
          height: 1024,
          alt: productImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: [product.image],
    },
  } as const
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) notFound()

  const productUrl = `${siteConfig.baseUrl}/assortiment/${product.slug}`
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Rhododendron ${product.name}`,
    description: product.longDescription,
    image: `${siteConfig.baseUrl}${product.image}`,
    sku: product.slug,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers: product.sizes.map((size) => ({
      "@type": "Offer",
      name: `${product.name} ${size.label}`,
      price: parseFloat(size.price.replace(",", ".")).toFixed(2),
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: productUrl,
      seller: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-background pt-24">

        {/* Breadcrumb */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/assortiment" className="hover:text-foreground transition-colors">Assortiment</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>

        {/* Product */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Image */}
            <ProductGallery
              images={[product.image, product.image2].filter(Boolean) as string[]}
              alt={product.name}
            />


            {/* Info */}
            <div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                {product.color}
              </span>
              <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {product.longDescription}
              </p>

              {/* Size selector + cart — client component */}
              <ProductActions product={product} />

              {/* Trust badges */}
              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 text-primary shrink-0" strokeWidth={1.5} />
                  Aangroeigarantie op al onze planten
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Truck className="h-4 w-4 text-primary shrink-0" strokeWidth={1.5} />
                  Eigen transport door heel Nederland
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary shrink-0" strokeWidth={2.5} />
                  Dagvers gerooid bij uw bestelling
                </div>
              </div>
            </div>
          </div>

          {/* Kenmerken table */}
          <div className="mt-16">
            <h2 className="font-serif text-3xl font-medium text-foreground mb-6">Kenmerken</h2>
            <div
              className="rounded-3xl overflow-hidden"
              style={{
                backgroundColor: "#faf6f0",
                border: "1px solid rgba(120, 100, 80, 0.15)",
                boxShadow: "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(120, 100, 80, 0.08)",
              }}
            >
              {product.kenmerken.map((k, i) => (
                <div
                  key={k.label}
                  className="flex items-center px-6 py-4 transition-colors duration-200 hover:bg-[rgba(120,100,80,0.04)]"
                  style={{
                    backgroundColor: i % 2 === 1 ? "rgba(120, 100, 80, 0.025)" : "transparent",
                    borderBottom: i === product.kenmerken.length - 1 ? "none" : "1px solid rgba(120, 100, 80, 0.08)",
                  }}
                >
                  <span className="w-40 text-sm font-semibold shrink-0" style={{ color: "#2d2418" }}>{k.label}</span>
                  <span className="text-sm" style={{ color: "#8b7355" }}>{k.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* B2B section */}
          <div id="groothandel" className="mt-16 rounded-3xl px-8 py-8" style={{ backgroundColor: "#faf6f0", border: "1px solid rgba(120, 100, 80, 0.15)", boxShadow: "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(120, 100, 80, 0.08)" }}>
            <h2 className="font-serif text-2xl font-medium text-foreground">Voor hoveniers en grootverbruikers</h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-xl">
              Vanaf 25 stuks bieden wij scherpe partijprijzen, eigen transport en plantservice.
            </p>
            <a
              href="/#contact"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
            >
              Bekijk groothandel-condities →
            </a>
          </div>

          {/* Back link */}
          <div className="mt-12">
            <Link
              href="/assortiment"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Terug naar assortiment
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <OfferteModal />
      <WhatsappSticky />
    </>
  )
}
