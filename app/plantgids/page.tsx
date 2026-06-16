import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OfferteModal } from "@/components/offerte-modal"
import {
  PlantgidsComparisonTable,
  type ComparisonRow,
} from "@/components/plantgids-comparison-table"

export const metadata = {
  title: "Plantgids | Top Rhododendrons",
  description: "Vergelijk variëteiten op kleur, hoogte en bloeitijd. Plus zeven lessen uit de kwekerij om uw rhododendron gezond te houden.",
}

const compareData: ComparisonRow[] = [
  {
    slug: "nova-zembla",
    name: "Nova Zembla",
    color: "Helderrood",
    colorHex: "#d14343",
    bloei: "Mei–juni",
    bloeiStart: 5,
    height: "tot 3 m",
    heightMax: 3,
    width: "tot 2,5 m",
    widthMax: 2.5,
    growth: "15–20 cm",
    growthMax: 20,
    sun: "Halfschaduw / meer zontoleranter",
    hardiness: 5,
  },
  {
    slug: "cunninghams-white",
    name: "Cunningham's White",
    color: "Wit / lichtroze",
    colorHex: "#f5ede3",
    bloei: "April–mei",
    bloeiStart: 4,
    height: "tot 2 m",
    heightMax: 2,
    width: "tot 2 m",
    widthMax: 2,
    growth: "8–12 cm",
    growthMax: 12,
    sun: "Halfschaduw",
    hardiness: 4,
  },
  {
    slug: "roseum-elegans",
    name: "Roseum Elegans",
    color: "Warm roze / lavendel",
    colorHex: "#e07aa6",
    bloei: "Mei–juni",
    bloeiStart: 5,
    height: "tot 2,5 m",
    heightMax: 2.5,
    width: "tot 2,5 m",
    widthMax: 2.5,
    growth: "20–25 cm",
    growthMax: 25,
    sun: "Halfschaduw / verdraagt zon",
    hardiness: 5,
  },
  {
    slug: "catawbiense-boursault",
    name: "Catawbiense Boursault",
    color: "Paars-lavendel",
    colorHex: "#b888d8",
    bloei: "Mei–juni",
    bloeiStart: 5,
    height: "tot 2,5 m",
    heightMax: 2.5,
    width: "tot 2,5 m",
    widthMax: 2.5,
    growth: "15–20 cm",
    growthMax: 20,
    sun: "Halfschaduw / verdraagt zon",
    hardiness: 5,
  },
  {
    slug: "catawbiense-grandiflorum",
    name: "Catawbiense Grandiflorum",
    color: "Lila-roze / lavendel",
    colorHex: "#c090d0",
    bloei: "Mei–juni",
    bloeiStart: 5,
    height: "tot 3 m",
    heightMax: 3,
    width: "tot 3 m",
    widthMax: 3,
    growth: "20–25 cm",
    growthMax: 25,
    sun: "Halfschaduw / verdraagt zon",
    hardiness: 5,
  },
  {
    slug: "ponticum-roseum",
    name: "Ponticum Roseum",
    color: "Roze / lichtpaars",
    colorHex: "#e8a0c0",
    bloei: "Mei–juni",
    bloeiStart: 5,
    height: "tot 4 m",
    heightMax: 4,
    width: "tot 3,5 m",
    widthMax: 3.5,
    growth: "25–35 cm",
    growthMax: 35,
    sun: "Halfschaduw / schaduw",
    hardiness: 5,
  },
  {
    slug: "ponticum",
    name: "Ponticum",
    color: "Violet-paars",
    colorHex: "#7b5ea7",
    bloei: "Mei–juni",
    bloeiStart: 5,
    height: "tot 4 m",
    heightMax: 4,
    width: "tot 4 m",
    widthMax: 4,
    growth: "25–35 cm",
    growthMax: 35,
    sun: "Halfschaduw / schaduw",
    hardiness: 5,
  },
]

const tips = [
  {
    title: "Plant niet te diep",
    body: "Rhododendrons hebben oppervlakkige wortels. Plant de kluit 2–3 cm bóven het maaiveld, niet eronder. Te diep planten verstikt de wortels en doodt de plant binnen één tot twee seizoenen.",
  },
  {
    title: "Vermijd de „mulch-vulkaan”",
    body: "Mulch tegen de stam ophopen lijkt logisch, maar het houdt de stam te vochtig en veroorzaakt rot. Laat altijd 5 cm rondom de stam vrij van mulch.",
  },
  {
    title: "Bemest alleen als het écht nodig is",
    body: "Een gezonde rhododendron heeft géén bemesting nodig. Overbemesting verbrandt de wortels. Alleen bij gele bladeren bijvoeding gebruiken, en alléén ericaceous-meststof.",
  },
  {
    title: "Vermijd ochtendzon in de winter",
    body: "Bevroren bladeren die plotseling in de ochtendzon ontdooien, barsten open. Plant uw rhododendron aan de noord- of westzijde, nooit aan de oostzijde van een muur of hek.",
  },
  {
    title: "Gebruik regenwater, geen kraanwater",
    body: "Nederlands kraanwater is te kalkrijk voor rhododendrons. Een regenton bij de schuur is de goedkoopste investering die u in uw planten kunt doen.",
  },
  {
    title: "Klei is dodelijk, zonder drainage",
    body: "Op kleigrond moet u een drainagebed van bladcompost aanleggen. Anders sterft 80% van de rhododendrons in het eerste jaar door wortelrot.",
  },
  {
    title: "Verwijder uitgebloeide trossen met de hand",
    body: "Knip nooit met een schaar, u beschadigt de bloemknoppen voor volgend jaar die er al onder zitten. Breek de uitgebloeide tros voorzichtig af met uw vingers.",
  },
]

export default function PlantgidsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24">

        {/* Hero */}
        <section className="py-16 lg:py-24 bg-secondary/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Plantgids
            </span>
            <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Adviezen uit eigen kwekerij
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl text-pretty">
              Vergelijk variëteiten op kenmerken die ertoe doen. En zeven lessen die wij elke klant willen meegeven.
            </p>
          </div>
        </section>

        {/* Sortimentsvergelijking */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Vergelijken
              </span>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                Vergelijk alle variëteiten op kenmerken die ertoe doen.
              </h2>
            </div>

            <PlantgidsComparisonTable data={compareData} />

            <p className="mt-6 text-xs text-muted-foreground italic">
              * Gegevens zijn indicatief. Exacte maten kunnen variëren per standplaats en klimaat.
            </p>
          </div>
        </section>

        {/* 7 Fouten */}
        <section className="py-20 lg:py-28 bg-secondary/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                De geheimen van de kweker
              </span>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl text-balance">
                Wat wij elke klant willen meegeven
              </h2>
              <p className="mt-4 text-muted-foreground">
                Omdat een gezonde plant geen toeval is.
              </p>
            </div>

            <div className="divide-y divide-border/50">
              {tips.map((tip, i) => (
                <div key={i} className="grid grid-cols-[64px_1fr] gap-8 py-8">
                  <div
                    className="font-serif text-4xl font-light leading-none pt-1 shrink-0 text-primary"
                    style={{ fontVariantNumeric: "lining-nums tabular-nums" }}
                  >
                    {i + 1}.
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground">{tip.title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{tip.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <OfferteModal />
    </>
  )
}
