"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { X, Home, Briefcase, ArrowRight, Check } from "lucide-react"

export type OfferteType = "particulier" | "hovenier"

export function OfferteModal() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener("open-offerte-modal", handler)
    return () => window.removeEventListener("open-offerte-modal", handler)
  }, [])

  function selectType(type: OfferteType) {
    setOpen(false)
    if (type === "hovenier") {
      router.push("/groothandel")
      return
    }
    window.dispatchEvent(new CustomEvent("offerte-type-selected", { detail: { type } }))
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div className="relative bg-card rounded-2xl shadow-2xl w-full max-w-xl p-8 animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Sluiten"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl font-semibold text-foreground">
            Offerte aanvragen
          </h2>
          <p className="mt-2 text-muted-foreground">
            Kies uw situatie voor het beste aanbod
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => selectType("particulier")}
            className="group text-left p-6 rounded-xl border-2 border-border hover:border-primary hover:shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-200">
              <Home className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-200" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Particulier
            </h3>
            <ul className="mt-3 space-y-1.5">
              {["Persoonlijk advies op maat", "Directe levering aan huis", "Aangroeigarantie inbegrepen"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-1 text-primary text-sm font-medium">
              Offerte aanvragen <ArrowRight className="w-4 h-4" />
            </div>
          </button>

          <button
            onClick={() => selectType("hovenier")}
            className="group text-left p-6 rounded-xl border-2 border-border hover:border-primary hover:shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-200">
              <Briefcase className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-200" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Hovenier · Groothandel
            </h3>
            <ul className="mt-3 space-y-1.5">
              {["Scherpe partijprijzen", "Voorrangslevering voor vaste afnemers", "Breed assortiment op bestelling"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-1 text-primary text-sm font-medium">
              Vraag handelsprijs op <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
