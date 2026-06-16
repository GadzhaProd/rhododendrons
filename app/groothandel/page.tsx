import Image from "next/image"
import { ArrowRight, ChevronDown, Phone } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsappSticky } from "@/components/whatsapp-sticky"
import { GroothandelForm } from "./groothandel-form"
import { PrijslijstButton } from "@/components/prijslijst-button"

const groothandelTitle = "Groothandel rhododendrons · Direct van de kweker · Top Rhododendrons"
const groothandelDescription =
  "10.000+ rhododendrons op stam. Voor hoveniers, gemeenten en projectontwikkelaars. Aangroeigarantie, eigen transport, scherpe partijprijzen vanaf 25 stuks."

export const metadata = {
  title: groothandelTitle,
  description: groothandelDescription,
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Top Rhododendrons",
    title: groothandelTitle,
    description: groothandelDescription,
    url: "/groothandel",
    images: [
      {
        url: "/images/B2BHERO.jpg",
        width: 2048,
        height: 1143,
        alt: "Rhododendrons op stam, direct van de kwekerij in Otterlo. 10.000+ planten op voorraad voor hoveniers en projectontwikkelaars.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: groothandelTitle,
    description: groothandelDescription,
    images: ["/images/B2BHERO.jpg"],
  },
}

const audiences = [
  {
    title: "Hoveniers en tuinarchitecten",
    description: "Voor tuin- en landschapsprojecten",
    stats: [
      { label: "Volume per project", value: "30 – 150 stuks" },
      { label: "Levering", value: "Op afgesproken datum" },
      { label: "Voorwaarden", value: "Factuur 30 dagen" },
    ],
  },
  {
    title: "Openbaar groen en gemeenten",
    description: "Voor parken, plantsoenen en wijken",
    stats: [
      { label: "Volume per project", value: "100 – 500 stuks" },
      { label: "Levering", value: "Gefaseerd mogelijk" },
      { label: "Voorwaarden", value: "Plantpaspoort + fytosanitair" },
    ],
  },
  {
    title: "Vastgoed en wooncomplexen",
    description: "Voor binnentuinen en gemeenschappelijke tuinen",
    stats: [
      { label: "Volume per project", value: "150 – 1000 stuks" },
      { label: "Levering", value: "Afgestemd op oplevering" },
      { label: "Voorwaarden", value: "BTW verlegd mogelijk" },
    ],
  },
]

const benefits = [
  {
    title: "Plantservice op locatie",
    description: "Optioneel laten planten door ons team, inclusief grondverbetering met tuinturf-substraat.",
  },
  {
    title: "Vaste contactpersoon",
    description: "U spreekt rechtstreeks met de kweker. Eén aanspreekpunt van offerte tot oplevering.",
  },
  {
    title: "Factuur op 30 dagen, BTW verlegd",
    description: "Voor geregistreerde bedrijven leveren wij op factuur (30 dagen). BTW verlegd voor zakelijke afnemers.",
  },
]

const sizes = [
  { maat: "40–60 cm", voorraad: "Ruim op voorraad", geschikt: "Haag · groepsbeplanting" },
  { maat: "60–80 cm", voorraad: "Ruim op voorraad", geschikt: "Haag · solitair" },
  { maat: "80–100 cm", voorraad: "Op voorraad", geschikt: "Solitair · accent" },
  { maat: "100–120 cm", voorraad: "Op voorraad", geschikt: "Solitair · openbaar groen" },
  { maat: "120 cm +", voorraad: "Op aanvraag", geschikt: "Statussoorten · grootformaat" },
]

const steps = [
  {
    nr: "1.",
    title: "U vraagt aan",
    description: "Via het formulier of telefonisch. U geeft soorten, maten, aantallen en gewenste leverdatum door.",
  },
  {
    nr: "2.",
    title: "Wij maken offerte",
    description: "Binnen 24 uur ontvangt u een gespecificeerde offerte met partijprijzen, levering en planning.",
  },
  {
    nr: "3.",
    title: "U bevestigt",
    description: "Akkoord op de offerte? Wij reserveren de planten op stam en blokken uw leverdatum in onze planning.",
  },
  {
    nr: "4.",
    title: "Wij leveren",
    description: "Op de afgesproken datum rooien wij vers en bezorgen met eigen transport. Plantservice optioneel.",
  },
]

const cases = [
  {
    type: "Wooncomplex",
    location: "Wooncomplex in de Randstad",
    detail: "280 planten: Catawbiense & Roseum Elegans",
    period: "Voorjaar 2025",
  },
  {
    type: "Hoveniersproject",
    location: "Particuliere tuin via hovenier in Gelderland",
    detail: "65 planten: gemengd solitair, maten 80–120 cm",
    period: "Najaar 2024",
  },
  {
    type: "Openbaar groen",
    location: "Gemeentelijk park in Oost-Nederland",
    detail: "150 planten: Nova Zembla & Cunningham's White",
    period: "Voorjaar 2024",
  },
]

const tiers = [
  {
    range: "25 – 49 planten",
    discount: "–12%",
    label: "Partijprijs",
    description: "Vanaf 25 stuks scherpe partijprijzen. Eigen transport en plantservice optioneel.",
  },
  {
    range: "50 – 149 planten",
    discount: "–22%",
    label: "Projectprijs",
    description: "Voor grotere projecten. Vaste contactpersoon en voorranglevering inbegrepen.",
  },
  {
    range: "150 + planten",
    discount: "–30%",
    label: "Grootverbruik",
    description: "Maatwerkprijs voor gemeenten en grote projecten. Inclusief plantpaspoort en fyto.",
  },
]

const faq = [
  {
    q: "Geldt de aangroeigarantie ook bij grote partijen?",
    a: "Ja. De aangroeigarantie geldt op elke plant, ook bij projectorders van 100 of 1.000 stuks. Slaat een plant niet aan in het eerste seizoen? Wij vervangen kosteloos.",
  },
  {
    q: "Verzorgen jullie ook de aanplant op locatie?",
    a: "Ja, plantservice is optioneel beschikbaar. Wij komen met eigen team, inclusief grondverbetering met tuinturf-substraat indien gewenst. Vraag in de offerte naar het tarief per plant.",
  },
  {
    q: "Kunnen wij de leverdatum zelf bepalen?",
    a: "Ja. Wij rooien op uw leverdatum, niet eerder. Dit voorkomt droogtestress en zorgt voor maximale aanslagkans. U geeft uw planning door, wij houden de planten op stam.",
  },
  {
    q: "Hoe werkt de facturatie?",
    a: "Voor geregistreerde bedrijven leveren wij op factuur met 30 dagen betaaltermijn. BTW wordt verlegd bij zakelijke afnemers met geldig BTW-nummer.",
  },
  {
    q: "Leveren jullie plantpaspoort en fytosanitaire documenten?",
    a: "Ja. Wij zijn aangesloten bij de NAK Tuinbouw en leveren bij elke partij het verplichte plantpaspoort. Fytosanitaire certificaten voor export verzorgen wij op aanvraag.",
  },
  {
    q: "Wat als ik specifieke soorten of maten nodig heb die niet in de standaardlijst staan?",
    a: "Naast onze hoofdsoorten kweken wij regelmatig op aanvraag. Voor specifieke kleuren, maten of grootformaten: neem contact op, dan kijken we wat we voor u kunnen reserveren.",
  },
]

export default function GroothandelPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">

        {/* 1. HERO */}
        <section className="relative overflow-hidden bg-[#0a1a12] text-primary-foreground pb-20 lg:pb-28">
          {/* Photo layer (z-0) */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <Image
              src="/images/B2BHERO.jpg"
              alt="Top Rhododendrons kwekerij in Otterlo"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center md:object-[center_40%]"
              style={{ filter: "saturate(0.95) contrast(1.02) brightness(1.0)" }}
            />
          </div>

          {/* Layer 1 — brand-tint dark overlay (desktop: horizontal) */}
          <div
            aria-hidden="true"
            className="absolute inset-0 z-10 pointer-events-none hidden md:block"
            style={{
              background:
                "linear-gradient(to right, rgba(8, 22, 15, 0.65) 0%, rgba(12, 30, 22, 0.52) 35%, rgba(15, 38, 28, 0.32) 70%, rgba(18, 42, 30, 0.15) 100%)",
            }}
          />
          {/* Layer 1 — mobile vertical variant */}
          <div
            aria-hidden="true"
            className="absolute inset-0 z-10 pointer-events-none md:hidden"
            style={{
              background:
                "linear-gradient(to bottom, rgba(8, 22, 15, 0.65) 0%, rgba(12, 30, 22, 0.55) 60%, rgba(15, 38, 28, 0.70) 100%)",
            }}
          />

          {/* Layer 2 — vertical bottom darken */}
          <div
            aria-hidden="true"
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(0, 0, 0, 0.25) 100%)",
            }}
          />

          {/* Layer 2b — top header guard: hard dark cap so header never bleeds into H1 */}
          <div
            aria-hidden="true"
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(8, 22, 15, 0.80) 0%, rgba(8, 22, 15, 0.50) 12%, transparent 30%)",
            }}
          />

          {/* Layer 3 — magenta glow top-right */}
          <div
            aria-hidden="true"
            className="absolute z-30 pointer-events-none w-[400px] h-[400px] md:w-[600px] md:h-[600px]"
            style={{
              top: "-120px",
              right: "-80px",
              background:
                "radial-gradient(circle, rgba(215, 50, 142, 0.20) 0%, transparent 60%)",
            }}
          />

          {/* Layer 4 — green glow bottom-left */}
          <div
            aria-hidden="true"
            className="absolute z-30 pointer-events-none w-[350px] h-[350px] md:w-[500px] md:h-[500px]"
            style={{
              bottom: "-100px",
              left: "-100px",
              background:
                "radial-gradient(circle, rgba(60, 180, 100, 0.12) 0%, transparent 60%)",
            }}
          />

          {/* Layer 5 — center vignette */}
          <div
            aria-hidden="true"
            className="absolute inset-0 z-40 pointer-events-none opacity-70 md:opacity-100"
            style={{
              background:
                "radial-gradient(ellipse at 50% 40%, transparent 35%, rgba(0, 0, 0, 0.12) 100%)",
            }}
          />

          {/* Layer 6 — noise texture */}
          <div
            aria-hidden="true"
            className="absolute inset-0 z-50 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              backgroundSize: "200px 200px",
            }}
          />

          {/* Layer 7 — top edge highlight line */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 right-0 z-[60] h-px pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 30%, rgba(215,50,142,0.20) 50%, rgba(255,255,255,0.08) 70%, transparent)",
            }}
          />

          <div className="relative z-[100] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 lg:pt-36">
            <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider">
              GROOTHANDEL · DIRECT VAN DE KWEKER
            </span>
            <h1 className="mt-4 font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-balance max-w-4xl">
              Rhododendrons op stam. Rechtstreeks van onze kwekerij in Otterlo.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
              Vers gerooid op uw leverdatum. Levering afgestemd op uw project.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <a
                href="#offerte-form"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground hover:bg-accent/90 rounded-md px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1a12]"
              >
                Vraag offerte aan
                <ArrowRight className="h-4 w-4" />
              </a>
              <PrijslijstButton />
              <a
                href="tel:+31620104312"
                className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 hover:bg-primary-foreground/10 rounded-md px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1a12]"
              >
                <Phone className="h-4 w-4" />
                +31 (0)6 20 10 43 12
              </a>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-0 gap-x-0">
              <div className="px-4 sm:px-6 md:border-r md:border-primary-foreground/10">
                <p className="font-serif font-semibold text-5xl text-primary-foreground leading-none" style={{ fontVariantNumeric: 'lining-nums tabular-nums' }}>25+</p>
                <p className="mt-2 font-sans font-medium text-sm text-primary-foreground">Jaar specialist</p>
                <p className="mt-1 font-sans text-xs text-primary-foreground/70 leading-relaxed">In rhododendrons sinds 2001</p>
              </div>
              <div className="px-4 sm:px-6 md:border-r md:border-primary-foreground/10">
                <p className="font-serif font-semibold text-5xl text-primary-foreground leading-none" style={{ fontVariantNumeric: 'lining-nums tabular-nums' }}>10.000+</p>
                <p className="mt-2 font-sans font-medium text-sm text-primary-foreground">Planten op stam</p>
                <p className="mt-1 font-sans text-xs text-primary-foreground/70 leading-relaxed">Vers gerooid uit Otterlo</p>
              </div>
              <div className="px-4 sm:px-6">
                <p className="font-serif font-semibold text-5xl text-primary-foreground leading-none" style={{ fontVariantNumeric: 'lining-nums tabular-nums' }}>100%</p>
                <p className="mt-2 font-sans font-medium text-sm text-primary-foreground">Aangroeigarantie</p>
                <p className="mt-1 font-sans text-xs text-primary-foreground/70 leading-relaxed">Bij correcte aanplant</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WIE WIJ BELEVEREN */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-accent font-medium text-xs uppercase tracking-wider">VOOR PROFESSIONALS</span>
              <h2 className="mt-3 font-serif text-4xl lg:text-5xl font-medium text-foreground">
                Wie wij beleveren
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Wij leveren rechtstreeks aan professionals die met grote aantallen werken.
              </p>
            </div>

            <div className="mt-10 overflow-x-auto">
              <table className="w-full border-collapse text-left" style={{ fontVariantNumeric: 'lining-nums tabular-nums' }}>
                <thead>
                  <tr className="border-b border-border">
                    <th className="sticky left-0 z-10 bg-background py-4 pr-4 align-bottom"></th>
                    {audiences.map((a) => (
                      <th key={a.title} className="py-4 px-4 align-bottom min-w-[14rem]">
                        <span className="block font-serif text-xl font-medium text-foreground">
                          {a.title}
                        </span>
                        <span className="mt-1 block text-sm text-muted-foreground font-normal leading-relaxed">
                          {a.description}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {audiences[0].stats.map((row, rowIdx) => (
                    <tr key={row.label} className="border-b border-border last:border-b-0">
                      <th scope="row" className="sticky left-0 z-10 bg-background py-4 pr-4 text-sm font-medium text-muted-foreground align-top">
                        {row.label}
                      </th>
                      {audiences.map((a) => (
                        <td key={a.title} className="py-4 px-4 text-sm text-foreground align-top">
                          {a.stats[rowIdx].value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted-foreground italic text-center sm:hidden">
              ← swipe voor meer →
            </p>
          </div>
        </section>

        {/* 3. HOE WIJ VOOR U WERKEN */}
        <section id="hoe-wij-werken" className="scroll-mt-24 py-12 lg:py-20 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-accent font-medium text-xs uppercase tracking-wider">ONZE VOORDELEN</span>
              <h2 className="mt-3 font-serif text-4xl lg:text-5xl font-medium text-foreground">
                Hoe wij voor u werken
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Familiebedrijf sinds 2001. Eén gewas; daardoor weten wij wat u nodig heeft.
              </p>
            </div>

            <dl className="mt-10 border-t border-border">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="grid grid-cols-1 md:grid-cols-[16rem_1fr] gap-1 md:gap-12 py-7 md:py-8 border-b border-border"
                >
                  <dt className="font-serif text-xl font-medium text-foreground">{b.title}</dt>
                  <dd className="text-muted-foreground leading-relaxed max-w-prose">{b.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* 4. BESCHIKBARE AANTALLEN */}
        <section id="aantallen" className="scroll-mt-24 py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-accent font-medium text-xs uppercase tracking-wider">DIRECT BESCHIKBAAR</span>
              <h2 className="mt-3 font-serif text-4xl lg:text-5xl font-medium text-foreground">
                Beschikbare aantallen
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Standaard op voorraad in alle gangbare maten. Specifieke soorten en grootformaten op aanvraag.
              </p>
            </div>

            <div className="mt-10 overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-4 pr-6 text-xs font-semibold uppercase tracking-wider text-foreground">Maat</th>
                    <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-foreground">Voorraad</th>
                    <th className="py-4 pl-6 text-xs font-semibold uppercase tracking-wider text-foreground">Geschikt voor</th>
                  </tr>
                </thead>
                <tbody>
                  {sizes.map((s) => (
                    <tr key={s.maat} className="border-b border-border last:border-b-0">
                      <td className="py-4 pr-6 text-foreground font-medium">{s.maat}</td>
                      <td className="py-4 px-6 text-muted-foreground">{s.voorraad}</td>
                      <td className="py-4 pl-6 text-muted-foreground">{s.geschikt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              Hoofdsoorten: Nova Zembla, Cunningham's White, Roseum Elegans, Catawbiense Boursault, Catawbiense Grandiflorum, Ponticum Roseum, Ponticum. Andere soorten op aanvraag.
            </p>
          </div>
        </section>

        {/* 5. HOE WERKT EEN PROJECTORDER */}
        <section className="py-20 lg:py-28 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-accent font-medium text-xs uppercase tracking-wider">HET PROCES</span>
              <h2 className="mt-3 font-serif text-4xl lg:text-5xl font-medium text-foreground">
                Hoe werkt een projectorder
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Vier stappen, van aanvraag tot levering.
              </p>
            </div>

            <ol className="mt-10 border-t border-border">
              {steps.map((s) => (
                <li
                  key={s.nr}
                  className="grid grid-cols-[3.5rem_1fr] md:grid-cols-[5rem_18rem_1fr] gap-x-6 gap-y-2 py-7 md:py-8 border-b border-border"
                >
                  <span className="font-serif text-3xl md:text-4xl text-primary leading-none pt-1" style={{ fontVariantNumeric: 'lining-nums tabular-nums' }}>{s.nr}</span>
                  <h3 className="col-start-2 md:col-start-2 font-serif text-xl md:text-2xl font-medium text-foreground">{s.title}</h3>
                  <p className="col-start-2 md:col-start-3 md:row-start-1 text-muted-foreground leading-relaxed max-w-prose">{s.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 6. UITGELICHTE PROJECTEN */}
        <section className="py-12 lg:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-accent font-medium text-xs uppercase tracking-wider">PROJECTEN</span>
              <h2 className="mt-3 font-serif text-4xl lg:text-5xl font-medium text-foreground">
                Uitgelichte projecten
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Een greep uit recente leveringen. Klantgegevens delen wij niet; uw project blijft vertrouwelijk.
              </p>
            </div>

            <ul className="mt-10 border-t border-border">
              {cases.map((c, i) => (
                <li
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-[14rem_1fr_auto] gap-x-8 gap-y-2 py-7 md:py-8 border-b border-border"
                >
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium pt-1">{c.type}</span>
                  <div className="md:col-start-2">
                    <h3 className="font-serif text-xl font-medium text-foreground">{c.location}</h3>
                    <p className="mt-1.5 text-muted-foreground leading-relaxed">{c.detail}</p>
                  </div>
                  <span className="md:col-start-3 text-xs uppercase tracking-wider text-muted-foreground/80 pt-1 md:text-right">{c.period}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 8. ZAKELIJKE TARIEVEN */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-accent font-medium text-xs uppercase tracking-wider">TARIEVEN</span>
              <h2 className="mt-3 font-serif text-4xl lg:text-5xl font-medium text-foreground">
                Zakelijke tarieven
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Drie staffels op basis van projectomvang. Definitieve prijs in de offerte.
              </p>
            </div>

            <ul className="mt-10 border-t border-border">
              {tiers.map((t) => (
                <li
                  key={t.range}
                  className="grid grid-cols-[1fr_auto] md:grid-cols-[16rem_1fr_auto] gap-x-6 md:gap-x-10 gap-y-2 py-7 md:py-8 border-b border-border items-baseline"
                >
                  <div className="md:col-span-1">
                    <span className="text-xs uppercase tracking-wider font-medium text-muted-foreground">{t.label}</span>
                    <p className="mt-1 font-serif text-2xl text-foreground" style={{ fontVariantNumeric: 'lining-nums tabular-nums' }}>{t.range}</p>
                  </div>
                  <p className="md:col-start-2 col-start-1 row-start-2 md:row-start-1 text-muted-foreground leading-relaxed max-w-prose">
                    {t.description}
                  </p>
                  <p className="col-start-2 md:col-start-3 row-start-1 font-serif text-4xl md:text-5xl text-primary md:text-right whitespace-nowrap" style={{ fontVariantNumeric: 'lining-nums tabular-nums' }}>
                    {t.discount}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted-foreground">Indicatief; definitieve prijs in de offerte.</p>
          </div>
        </section>

        {/* 9. B2B FAQ */}
        <section id="faq" className="scroll-mt-24 py-16 lg:py-24 bg-secondary/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-accent font-medium text-xs uppercase tracking-wider">VEELGESTELDE VRAGEN</span>
              <h2 className="mt-3 font-serif text-4xl lg:text-5xl font-medium text-foreground">
                Veelgestelde vragen
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Praktische antwoorden voor zakelijke afnemers.
              </p>
            </div>

            <div className="mt-10 border-t border-border">
              {faq.map((item, i) => (
                <details key={i} className="group border-b border-border">
                  <summary className="flex items-center justify-between cursor-pointer py-5 list-none gap-4">
                    <span className="font-serif text-xl text-foreground">{item.q}</span>
                    <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="pb-6 text-muted-foreground leading-relaxed max-w-prose">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 10. AANVRAAGFORMULIER */}
        <section id="offerte-form" className="scroll-mt-24 py-20 lg:py-28 bg-primary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-accent font-medium text-xs uppercase tracking-wider">PROJECTOFFERTE</span>
              <h2 className="mt-3 font-serif text-4xl lg:text-5xl font-medium text-primary-foreground">
                Projectofferte aanvragen
              </h2>
              <p className="mt-4 text-primary-foreground/80 leading-relaxed">
                Vul het formulier in voor een gespecificeerde offerte. Reactie binnen 24 uur, rechtstreeks van de kweker.
              </p>
            </div>

            <div className="mt-10 rounded-2xl bg-background p-6 md:p-8">
              <GroothandelForm />
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsappSticky />
    </>
  )
}
