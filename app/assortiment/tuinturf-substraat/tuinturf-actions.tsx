"use client"

import { useState } from "react"
import { ShoppingCart, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { tuinturf } from "@/lib/products"

export function TuinturfActions() {
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  function handleAddToCart() {
    for (let i = 0; i < quantity; i++) {
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
      <div>
        <p className="text-2xl font-bold text-foreground">
          €14,95{" "}
          <span className="text-base font-normal text-muted-foreground">/ 40L zak</span>
        </p>
      </div>

      <div>
        <p className="text-sm font-medium text-foreground mb-3">Aantal</p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            aria-label="Minder"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="text-lg font-semibold w-8 text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            aria-label="Meer"
          >
            <Plus className="h-4 w-4" />
          </button>
          <span className="text-sm text-muted-foreground ml-2">
            Totaal:{" "}
            <span className="font-semibold text-foreground">
              €{(14.95 * quantity).toFixed(2).replace(".", ",")}
            </span>
          </span>
        </div>
      </div>

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
          Heeft u een vraag over dit product?
        </a>
      </div>
    </div>
  )
}
