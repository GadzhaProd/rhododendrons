import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const promises = [
  {
    title: "Aangroeigarantie op elke plant",
    description: "Niet aangeslagen in het eerste seizoen? Wij vervangen kosteloos.",
  },
  {
    title: "Vers gerooid, flexibel geleverd",
    description: "Uw planten staan niet onnodig te wachten. We rooien ze vers voor uw geplande bezorging of het moment dat u ze komt afhalen.",
  },
  {
    title: "Direct contact. Direct voordeel.",
    description: "Voor uw tuin. Voor uw bedrijf. Voor het resultaat.",
  },
  {
    title: "Levering wanneer het u uitkomt",
    description: "Wij stemmen de levering af op uw planning of zetten uw bestelling klaar voor afhaal.",
  },
]

export function AboutSection() {
  return (
    <section id="over-ons" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

          {/* Mobile-only heading — shows above photo */}
          <div className="block lg:hidden order-1">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              OTTERLO • SINDS 2001
            </span>
            <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-foreground text-balance">
              Wij kweken rhododendrons.<br /> Niet meer, niet minder.
            </h2>
          </div>

          {/* Text Content */}
          <div className="order-3 lg:order-1">
            <span className="hidden lg:block text-accent font-medium text-sm uppercase tracking-wider">
              OTTERLO • SINDS 2001
            </span>
            <h2 className="hidden lg:block mt-4 font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Wij kweken rhododendrons.<br /> Niet meer, niet minder.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Familiebedrijf in Otterlo. 10.000 planten op voorraad. Direct van het veld naar uw tuin.
            </p>

            <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">
              Dankzij onze veenrijke bodem en een uitgebalanceerde watergift ontwikkelen onze planten een sterk wortelstelsel. Daardoor passen ze zich moeiteloos aan in uw tuin, met aangroeigarantie.
            </p>

            <dl className="mt-8 border-t border-border">
              {promises.map((item) => (
                <div key={item.title} className="py-5 border-b border-border">
                  <dt className="font-serif text-xl text-foreground">{item.title}</dt>
                  <dd className="mt-1 text-muted-foreground leading-relaxed">{item.description}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
              >
                <a href="#contact">Neem contact op</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto hover:bg-foreground/5 hover:text-foreground"
              >
                <a href="/groothandel" className="flex items-center gap-2">
                  Groothandel
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-2 lg:order-2 flex flex-col justify-end">
            {/* Outer wrapper: relative without overflow-hidden so card can hang outside */}
            <div className="relative px-4 lg:px-6 lg:pb-10">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/owner.jpg"
                  alt="Gert Top, oprichter van Top Rhododendrons"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Quote card — overlaps bottom-right corner */}
              <div className="relative mt-4 max-w-full rounded-xl p-4 z-10 md:absolute md:-bottom-6 md:right-4 md:mt-0 md:max-w-[320px]" style={{ background: "oklch(0.15 0.025 155 / 0.92)", border: "1px solid rgba(255, 255, 255, 0.16)" }}>
                <p className="font-serif font-normal text-white text-xl leading-relaxed">
                  Een gezonde plant is geen toeval.<br />
                  Dat is onze standaard.
                </p>
                <p className="mt-3 text-xs text-white/75">
                  Gert Top<br />
                  Eigenaar Top Rhododendrons
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
