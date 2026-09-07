"use client"

import { useState } from "react"
import { Image } from "@/components/site-image"
import { useCart } from "@/lib/cart-context"
import { tuinturf } from "@/lib/products"

export function TuinturfBanner() {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  function handleAdd() {
    addItem({
      slug: tuinturf.slug,
      name: tuinturf.name,
      image: tuinturf.image,
      size: tuinturf.unit,
      price: tuinturf.price,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2500)
  }

  return (
    <div className="mt-12 rounded-2xl bg-primary p-8 md:p-10 overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center gap-8">

        {/* Image — mobile top */}
        <div className="flex justify-center md:hidden">
          <Image
            src="/images/tuinturf.jpg"
            alt="Tuinturf substraat"
            width={600}
            height={200}
            className="w-full rounded-xl object-cover shadow-md"
          />
        </div>

        {/* Text */}
        <div className="flex-1">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Aanbevolen accessoire
          </span>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl font-medium text-primary-foreground">
            Vergeet de Tuinturf niet
          </h2>
          <p className="mt-3 text-sm text-primary-foreground/75 leading-relaxed max-w-lg">
            Voor een optimale aanslag raden wij bij elk rhododendron ons speciaal samengesteld substraat aan.
            Zuurminnend, vochtregelend en voedingsstoffen-rijk.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-accent/50 text-primary-foreground text-sm font-medium">
              +€14,95 per zak (40L)
            </span>
            <button
              onClick={handleAdd}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-colors"
            >
              {added ? "Toegevoegd ✓" : "Voeg Tuinturf toe →"}
            </button>
          </div>
        </div>

        {/* Image — desktop right */}
        <div className="hidden md:block shrink-0">
          <Image
            src="/images/tuinturf.jpg"
            alt="Tuinturf substraat"
            width={280}
            height={200}
            className="rounded-xl object-cover shadow-md"
          />
        </div>

      </div>
    </div>
  )
}
