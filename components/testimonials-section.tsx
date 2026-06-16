import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Jan de Vries",
    location: "Arnhem",
    rating: 5,
    text: "Prachtige planten, stevig en gezond aangekomen. Direct na het planten al bloemen. Zeker voor herhaling vatbaar!",
  },
  {
    name: "Maria Bakker",
    location: "Utrecht",
    rating: 5,
    text: "Uitstekend advies gekregen over welke soort het beste past bij mijn tuin. De Nova Zembla bloeit geweldig.",
  },
  {
    name: "Peter Smits",
    location: "Nijmegen",
    rating: 5,
    text: "Al meerdere keren besteld. Kwaliteit is altijd top, levering snel en betrouwbaar. Aanrader voor elke tuinliefhebber.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Wat onze klanten zeggen
          </span>
          <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Ervaringen van tuinliefhebbers
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm flex flex-col gap-4"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
              <div className="pt-2 border-t border-border/50">
                <p className="font-medium text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.location}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Bekijk alle beoordelingen op{" "}
          <a
            href="https://www.google.com/maps/search/Top+Rhododendrons+Otterlo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors"
          >
            Google Reviews
          </a>
        </p>
      </div>
    </section>
  )
}
