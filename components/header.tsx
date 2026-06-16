"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { OfferteButton } from "@/components/offerte-button"
import { useCart } from "@/lib/cart-context"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { totalItems, setIsOpen: openCart } = useCart()
  const pathname = usePathname()
  const isHeroPage = pathname === "/" || pathname === "/groothandel"
  const isGroothandel = pathname === "/groothandel"

  function scrollToOfferteForm() {
    document.getElementById("offerte-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className={`absolute top-0 left-0 right-0 z-[110] ${isHeroPage ? "bg-transparent" : "bg-primary"}`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          <Link href="/" className="flex items-center gap-2">
            <span
              className="font-serif text-2xl font-semibold text-primary-foreground drop-shadow-md"
              style={undefined}
            >
              Top Rhododendrons
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/assortiment"
              className="text-sm font-medium text-primary-foreground/90 transition-colors hover:text-primary-foreground"
            >
              Assortiment
            </Link>
            <Link
              href="/groothandel"
              className="text-sm font-medium text-primary-foreground/90 transition-colors hover:text-primary-foreground"
            >
              Groothandel
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium text-primary-foreground/90 transition-colors hover:text-primary-foreground"
            >
              Contact
            </Link>
            <a
              href="https://wa.me/31620297849"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-primary-foreground/90 transition-colors hover:text-primary-foreground"
              aria-label="WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            {isGroothandel ? (
              <Button
                onClick={scrollToOfferteForm}
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Offerte aanvragen
              </Button>
            ) : (
              <OfferteButton className="bg-accent text-accent-foreground hover:bg-accent/90">
                Offerte aanvragen
              </OfferteButton>
            )}

            {/* Cart button */}
            <button
              onClick={() => openCart(true)}
              className="relative text-primary-foreground hover:text-primary-foreground/80 transition-colors"
              aria-label="Winkelwagen"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-accent text-accent-foreground text-[10px] font-bold flex items-center justify-center">
                  {totalItems > 9 ? "9+" : totalItems}
                </span>
              )}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            {isGroothandel ? (
              <Button
                onClick={scrollToOfferteForm}
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-xs px-4 h-11 rounded-lg"
              >
                Offerte
              </Button>
            ) : (
              <OfferteButton className="bg-accent text-accent-foreground hover:bg-accent/90 text-xs px-4 h-11 rounded-lg">
                Offerte
              </OfferteButton>
            )}
            {/* Mobile cart */}
            <button
              onClick={() => openCart(true)}
              className="flex items-center justify-center h-11 w-11 text-primary-foreground"
              aria-label="Winkelwagen"
            >
              <span className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-accent text-accent-foreground text-[10px] font-bold flex items-center justify-center">
                    {totalItems > 9 ? "9+" : totalItems}
                  </span>
                )}
              </span>
            </button>
            <button
              className="flex items-center justify-center h-11 w-11 text-primary-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Sluit menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="flex flex-col gap-4 bg-primary/95 backdrop-blur-sm p-6 rounded-lg md:hidden animate-in slide-in-from-top-2 duration-200">
            <Link
              href="/assortiment"
              className="block py-3 text-sm font-medium text-primary-foreground"
              onClick={() => setIsOpen(false)}
            >
              Assortiment
            </Link>
            <Link
              href="/groothandel"
              className="block py-3 text-sm font-medium text-primary-foreground"
              onClick={() => setIsOpen(false)}
            >
              Groothandel
            </Link>
            <Link
              href="/#contact"
              className="block py-3 text-sm font-medium text-primary-foreground"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <a
              href="https://wa.me/31620297849"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 py-3 text-sm font-medium text-primary-foreground"
              onClick={() => setIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            {isGroothandel ? (
              <Button
                onClick={() => {
                  setIsOpen(false)
                  scrollToOfferteForm()
                }}
                className="bg-accent text-accent-foreground hover:bg-accent/90 w-full h-11"
              >
                Offerte aanvragen
              </Button>
            ) : (
              <OfferteButton
                className="bg-accent text-accent-foreground hover:bg-accent/90 w-full h-11"
                onClick={() => setIsOpen(false)}
              >
                Offerte aanvragen
              </OfferteButton>
            )}
          </nav>
        )}
      </div>
    </header>
  )
}
