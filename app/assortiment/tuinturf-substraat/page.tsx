import Link from "next/link"
import { ArrowLeft, ChevronRight, Leaf, Droplets, FlaskConical } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OfferteModal } from "@/components/offerte-modal"
import { WhatsappSticky } from "@/components/whatsapp-sticky"
import { ProductGallery } from "@/components/product-gallery"
import { tuinturf } from "@/lib/products"
import { TuinturfActions } from "./tuinturf-actions"

export const metadata = {
  title: "Tuinturf Substraat | Top Rhododendrons",
  description:
    "Speciaal samengesteld substraat voor optimale groei en aanslag van rhododendrons. Direct van eigen kwekerij in Otterlo.",
}

const kenmerken = [
  { label: "Inhoud", value: "40 liter" },
  { label: "pH-waarde", value: "4,5 – 5,5" },
  { label: "Samenstelling", value: "Veenmos, perliet, organische bark" },
  { label: "Geschikt voor", value: "Rhododendrons, azalea's, hortensia's" },
  { label: "Toepassing", value: "Plantgat vulling & bijmestsubstraat" },
  { label: "Herkomst", value: "Nederland" },
]

export default function TuinturfPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/assortiment" className="hover:text-foreground transition-colors">Assortiment</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">Tuinturf Substraat</span>
          </nav>
        </div>

        {/* Product */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image */}
            <ProductGallery images={[tuinturf.image]} alt={tuinturf.name} />

            {/* Info */}
            <div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Accessoire
              </span>
              <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Tuinturf Substraat
              </h1>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {tuinturf.description}
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                De ideale bodemvoorbereiding voor uw rhododendron. Speciaal
                samengesteld om de zuurgraad en waterhuishouding optimaal te
                houden — precies wat rhododendrons nodig hebben voor een gezonde
                aanslag en een lang leven in uw tuin.
              </p>

              <TuinturfActions />

              {/* Trust badges */}
              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Leaf className="h-4 w-4 text-primary shrink-0" strokeWidth={1.5} />
                  Speciaal samengesteld voor rhododendrons
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Droplets className="h-4 w-4 text-primary shrink-0" strokeWidth={1.5} />
                  Optimale waterhuishouding en pH-waarde
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FlaskConical className="h-4 w-4 text-primary shrink-0" strokeWidth={1.5} />
                  Bevordert een sterk wortelstelsel
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
              {kenmerken.map((k, i) => (
                <div
                  key={k.label}
                  className="flex items-center px-6 py-4 transition-colors duration-200 hover:bg-[rgba(120,100,80,0.04)]"
                  style={{
                    backgroundColor: i % 2 === 1 ? "rgba(120, 100, 80, 0.025)" : "transparent",
                    borderBottom:
                      i === kenmerken.length - 1
                        ? "none"
                        : "1px solid rgba(120, 100, 80, 0.08)",
                  }}
                >
                  <span
                    className="w-40 text-sm font-semibold shrink-0"
                    style={{ color: "#2d2418" }}
                  >
                    {k.label}
                  </span>
                  <span className="text-sm" style={{ color: "#8b7355" }}>
                    {k.value}
                  </span>
                </div>
              ))}
            </div>
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
