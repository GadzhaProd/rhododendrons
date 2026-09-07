"use client"

import { Image } from "@/components/site-image"
import Link from "next/link"
import { Minus, Plus, ShoppingCart, Trash2, ArrowRight, PackageX } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"

export function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalItems, totalPrice } =
    useCart()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
        {/* Header */}
        <SheetHeader className="px-6 py-5 border-b border-border">
          <SheetTitle className="flex items-center gap-2 text-xl font-serif font-semibold">
            <ShoppingCart className="h-5 w-5 text-accent" />
            Winkelwagen
            {totalItems > 0 && (
              <span className="ml-1 text-sm font-normal text-muted-foreground">
                ({totalItems} {totalItems === 1 ? "artikel" : "artikelen"})
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-16">
              <PackageX className="h-12 w-12 text-muted-foreground/40" />
              <p className="text-muted-foreground font-medium">Uw winkelwagen is leeg</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsOpen(false)}
                asChild
              >
                <Link href="/assortiment" onClick={() => setIsOpen(false)}>Bekijk assortiment</Link>
              </Button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={`${item.slug}-${item.size}`}
                  className="flex gap-4 py-4 border-b border-border/50 last:border-0"
                >
                  {/* Image */}
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-secondary">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-sans font-semibold text-foreground text-sm leading-tight">
                      {item.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.size}</p>
                    <p className="text-sm font-semibold text-foreground mt-1">
                      €{(item.price * item.quantity).toLocaleString("nl-NL", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.slug, item.size, item.quantity - 1)
                        }
                        className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                        aria-label="Minder"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-sm font-medium w-5 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.slug, item.size, item.quantity + 1)
                        }
                        className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                        aria-label="Meer"
                      >
                        <Plus className="h-3 w-3" />
                      </button>

                      <button
                        onClick={() => removeItem(item.slug, item.size)}
                        className="ml-auto flex items-center justify-center h-11 w-11 rounded-md text-muted-foreground hover:text-destructive hover:bg-secondary transition-colors"
                        aria-label="Verwijderen"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-6 py-5 space-y-4">
            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Subtotaal</span>
              <span className="font-semibold text-foreground text-lg">
                €{totalPrice.toLocaleString("nl-NL", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              Verzendkosten worden berekend bij afrekenen
            </p>

            {/* Checkout button */}
            <Button
              className="w-full py-6 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90"
              disabled
            >
              Afrekenen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              Online betalen komt binnenkort beschikbaar
            </p>

            {/* Hovenier CTA */}
            <div className="pt-2 border-t border-border/50">
              <p className="text-xs text-muted-foreground mb-2">
                Hovenier of groothandel? Vraag een partijprijs aan.
              </p>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setIsOpen(false)}
                asChild
              >
                <Link href="/#contact">
                  Offerte aanvragen
                </Link>
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
