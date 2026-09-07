"use client"

import { useState } from "react"
import { Image } from "@/components/site-image"
import { ShoppingCart, Minus, Plus, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { tuinturf } from "@/lib/products"
import type { Product } from "@/lib/products"

export function ProductActions({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const [addTuinturf, setAddTuinturf] = useState(false)

  function handleAddToCart() {
    for (let i = 0; i < quantity; i++) {
      addItem({
        slug: product.slug,
        name: product.name,
        image: product.image,
        size: selectedSize.label,
        price: parseFloat(selectedSize.price.replace(",", ".")),
      })
    }
    if (addTuinturf) {
      addItem({
        slug: tuinturf.slug,
        name: tuinturf.name,
        image: tuinturf.image,
        size: tuinturf.unit,
        price: tuinturf.price,
      })
    }
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="mt-8 space-y-6">
      {/* Size selector */}
      <div>
        <p className="text-sm font-medium text-foreground mb-3">
          Kies uw maat
        </p>
        <div className="grid grid-cols-2 gap-2">
          {product.sizes.map((size) => (
            <button
              key={size.label}
              onClick={() => setSelectedSize(size)}
              className={`flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all duration-200 text-left ${
                selectedSize.label === size.label
                  ? "border-accent bg-accent/5"
                  : "border-border hover:border-accent/50"
              }`}
            >
              <span className="text-sm font-medium text-foreground">{size.label}</span>
              <span className="text-sm font-semibold text-accent">€{size.price}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <p className="text-sm font-medium text-foreground mb-3">Aantal</p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            aria-label="Minder"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="text-lg font-semibold w-8 text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            aria-label="Meer"
          >
            <Plus className="h-4 w-4" />
          </button>
          <span className="text-sm text-muted-foreground ml-2">
            Totaal:{" "}
            <span className="font-semibold text-foreground">
              €{(parseFloat(selectedSize.price.replace(",", ".")) * quantity)
                .toFixed(2)
                .replace(".", ",")}
            </span>
          </span>
        </div>
      </div>

      {/* Tuinturf upsell */}
      <button
        type="button"
        onClick={() => setAddTuinturf(!addTuinturf)}
        className={`relative w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
          addTuinturf
            ? "border-accent bg-accent/5"
            : "border-border bg-secondary/30 hover:border-accent/40"
        }`}
      >
        {addTuinturf && (
          <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-accent flex items-center justify-center">
            <Check className="w-3 h-3 text-white" strokeWidth={3} />
          </span>
        )}
        <span className="text-xs uppercase tracking-wider text-accent font-semibold">Aanbevolen accessoire</span>
        <div className="flex items-start gap-3 mt-2">
          <Image
            src="/images/tuinturf.jpg"
            alt="Tuinturf substraat"
            width={80}
            height={80}
            className="rounded-lg object-cover shrink-0"
          />
          <div className="min-w-0">
            <span className="text-sm font-semibold text-foreground">Vergeet de Tuinturf niet</span>
            <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
              Voor een optimale aanslag raden wij ons speciaal samengesteld substraat aan.
            </p>
            <span className="inline-block mt-1 text-xs font-medium text-accent">+€14,95 per zak (40L)</span>
          </div>
        </div>
      </button>

      {/* CTA buttons */}
      <div className="flex flex-col gap-2">
        <Button
          size="lg"
          onClick={handleAddToCart}
          className="py-6 text-base font-medium bg-accent text-accent-foreground hover:bg-accent/90"
        >
          {added ? (
            <>Toegevoegd ✓</>
          ) : (
            <>
              <ShoppingCart className="mr-2 h-5 w-5" />
              Voeg toe aan winkelwagen
            </>
          )}
        </Button>
        <a
          href="/#contact"
          className="text-center text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
        >
          Heeft u een vraag over deze plant?
        </a>
      </div>
    </div>
  )
}
