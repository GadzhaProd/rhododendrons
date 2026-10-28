import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Image } from "@/components/site-image"
import { HeroFacts } from "@/components/hero-facts"

const facts = ["Aangroeigarantie", "Eigen transport", "10.000+ planten", "Persoonlijk advies"]

export function HeroSection() {
  return (
    <section className="surface-dark relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-foreground text-primary-foreground">
      <Image
        src="/images/B2BHERO.jpg"
        alt="Rijen bloeiende witte rhododendrons op de kwekerij in Otterlo"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_65%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/60 to-foreground/85"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-10 pt-40 sm:px-6 lg:px-8 lg:pb-14">
        <h1 className="max-w-4xl text-balance font-serif text-6xl font-semibold tracking-tight text-primary-foreground sm:text-7xl md:text-8xl lg:text-9xl">
          Rhododendrons <span className="block">uit eigen kwekerij</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-primary-foreground/90 sm:text-xl">
          Gekweekt in Otterlo sinds 2001.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Link
            href="/assortiment"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary-foreground px-6 text-base font-medium text-foreground transition-colors duration-200 ease-out hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
          >
            Bekijk assortiment
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/groothandel"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-primary-foreground/40 px-6 text-base font-medium text-primary-foreground transition-colors duration-200 ease-out hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
          >
            Voor hoveniers
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <HeroFacts items={facts} className="mt-12" />
      </div>
    </section>
  )
}
