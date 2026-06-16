import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OfferteModal } from "@/components/offerte-modal"
import { CatalogGrid } from "@/components/catalog-grid"
import { products, tuinturf } from "@/lib/products"

export const metadata = {
  title: "Assortiment | Top Rhododendrons",
  description: "Bekijk ons assortiment rhododendrons. Dagvers gerooid uit eigen kwekerij in Otterlo, sinds 2001.",
}

export default function AssortimentPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24">
        {/* Header */}
        <div className="bg-secondary/50 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Otterlo • Sinds 2001
            </span>
            <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Alle Rhododendrons
            </h1>
            <p className="mt-6 text-muted-foreground max-w-2xl">
              {products.length} variëteiten op voorraad. Dagvers gerooid bij uw bestelling,
              rechtstreeks vanaf onze kwekerij in Otterlo.
            </p>
          </div>
        </div>

        <CatalogGrid products={products} toebehoren={tuinturf} />
      </main>
      <Footer />
      <OfferteModal />
    </>
  )
}
