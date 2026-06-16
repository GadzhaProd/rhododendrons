import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OfferteModal } from "@/components/offerte-modal"

export const metadata = {
  title: "Algemene Voorwaarden | Top Rhododendrons",
  description: "Onze algemene verkoop- en leveringsvoorwaarden.",
}

export default function VoorwaardenPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24 pb-16 lg:pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-5xl font-semibold text-foreground mb-8">Algemene Voorwaarden</h1>
        <div className="space-y-8">
          <p className="text-muted-foreground">Laatste update: 2025</p>

          <h2 className="font-serif text-2xl font-medium text-foreground">Artikel 1. Definities</h2>
          <p className="text-muted-foreground">
            Top Rhododendrons, KvK 82480273, gevestigd te Otterlo.
            &ldquo;Klant&rdquo;: iedere natuurlijke of rechtspersoon die een bestelling plaatst.
          </p>

          <h2 className="font-serif text-2xl font-medium text-foreground">Artikel 2. Offertes en prijzen</h2>
          <p className="text-muted-foreground">
            Alle offertes zijn vrijblijvend en geldig gedurende 30 dagen.
            Prijzen zijn inclusief BTW tenzij anders vermeld.
          </p>

          <h2 className="font-serif text-2xl font-medium text-foreground">Artikel 3. Levering</h2>
          <p className="text-muted-foreground">
            Levering geschiedt met eigen transport. Levertijden zijn indicatief.
            Top Rhododendrons is niet aansprakelijk voor vertraging door overmacht.
          </p>

          <h2 className="font-serif text-2xl font-medium text-foreground">Artikel 4. Aangroeigarantie</h2>
          <p className="text-muted-foreground">
            Top Rhododendrons biedt aangroeigarantie onder normale teeltomstandigheden.
            De garantie vervalt bij onjuiste verzorging of buitengewone weersomstandigheden.
          </p>

          <h2 className="font-serif text-2xl font-medium text-foreground">Artikel 5. Toepasselijk recht</h2>
          <p className="text-muted-foreground">
            Op alle overeenkomsten is Nederlands recht van toepassing.
            Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement Gelderland.
          </p>

          <p className="text-sm text-muted-foreground">
            Voor vragen: info@toprhododendrons.nl of +31 (0)6 20 10 43 12
          </p>
        </div>
        <Link href="/" className="mt-12 inline-block text-accent hover:text-accent/80 transition-colors">
          ← Terug naar home
        </Link>
      </div>
    </main>
    <Footer />
    <OfferteModal />
    </>
  )
}
