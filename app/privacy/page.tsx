import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OfferteModal } from "@/components/offerte-modal"

export const metadata = {
  title: "Privacybeleid | Top Rhododendrons",
  description: "Hoe wij omgaan met uw persoonsgegevens.",
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24 pb-16 lg:pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-5xl font-semibold text-foreground mb-8">Privacybeleid</h1>
        <div className="space-y-8">
          <p className="text-muted-foreground">Laatste update: 2025</p>

          <h2 className="font-serif text-2xl font-medium text-foreground">1. Wie zijn wij?</h2>
          <p className="text-muted-foreground">
            Top Rhododendrons, gevestigd aan Esserbroekweg 2, 6731 DB Otterlo, Nederland.<br />
            KvK: 82480273<br />
            E-mail: info@toprhododendrons.nl
          </p>

          <h2 className="font-serif text-2xl font-medium text-foreground">2. Welke gegevens verzamelen wij?</h2>
          <p className="text-muted-foreground">Via ons contactformulier verzamelen wij:</p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Naam</li>
            <li>E-mailadres</li>
            <li>Telefoonnummer (optioneel)</li>
            <li>Inhoud van uw bericht</li>
          </ul>

          <h2 className="font-serif text-2xl font-medium text-foreground">3. Waarvoor gebruiken wij uw gegevens?</h2>
          <p className="text-muted-foreground">
            Uitsluitend voor het beantwoorden van uw contactverzoek of offerte-aanvraag.
            Wij verkopen uw gegevens nooit aan derden.
          </p>

          <h2 className="font-serif text-2xl font-medium text-foreground">4. Bewaartermijn</h2>
          <p className="text-muted-foreground">
            Wij bewaren uw gegevens maximaal 2 jaar na het laatste contact, tenzij wettelijk anders vereist.
          </p>

          <h2 className="font-serif text-2xl font-medium text-foreground">5. Uw rechten (AVG)</h2>
          <p className="text-muted-foreground">
            U heeft het recht op inzage, correctie en verwijdering van uw gegevens.
            Stuur een verzoek naar info@toprhododendrons.nl.
          </p>

          <h2 className="font-serif text-2xl font-medium text-foreground">6. Cookies</h2>
          <p className="text-muted-foreground">
            Deze website gebruikt geen tracking-cookies van derden.
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
