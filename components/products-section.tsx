import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"

type Card = {
  slug: string
  name: string
  image: string
  href: string
}

const displayOrder = [
  "nova-zembla",
  "cunninghams-white",
  "ponticum-roseum",
  "catawbiense-boursault",
  "roseum-elegans",
  "catawbiense-grandiflorum",
]

const cards: Card[] = displayOrder.flatMap((slug) => {
  const p = products.find((x) => x.slug === slug)
  if (!p) return []
  return [{
    slug: p.slug,
    name: p.name,
    image: p.image,
    href: `/assortiment/${p.slug}`,
  }]
})

export function ProductsSection() {
  return (
    <section id="assortiment" className="py-16 lg:py-24 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Direct uit Otterlo
          </span>
          <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Populaire Rhododendrons
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            Direct van eigen kwekerij in Otterlo
          </p>
        </div>

        {/* Products Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card) => (
            <Link
              key={card.slug}
              href={card.href}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Image
                src={card.image || "/placeholder.svg"}
                alt={card.name}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-0 flex items-center gap-2 rounded-full bg-primary pl-4 pr-2 py-2 text-sm font-medium text-primary-foreground -translate-x-full group-hover:translate-x-4 transition-transform duration-500 ease-out motion-reduce:transition-none">
                <span>{card.name}</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-foreground">
                  <ChevronRight className="h-4 w-4 text-primary" strokeWidth={2.5} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            asChild
            variant="outline"
            className="hover:bg-foreground/5 hover:text-foreground"
          >
            <Link href="/assortiment" className="flex items-center gap-2">
              Bekijk alle rhododendrons
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
