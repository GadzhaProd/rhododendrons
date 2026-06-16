"use client"

import { useState } from "react"
import { Download, CheckCircle, Loader2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PrijslijstModal({ open, onOpenChange }: Props) {
  const [naam, setNaam] = useState("")
  const [email, setEmail] = useState("")
  const [bedrijf, setBedrijf] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      await fetch("/api/prijslijst-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ naam, email, bedrijf }),
      })
    } catch {
      // fire-and-forget — doorgaan ook als API niet bereikbaar is
    }

    setLoading(false)
    setSuccess(true)
  }

  const handleOpenChange = (val: boolean) => {
    if (!val) {
      // reset na sluiten
      setTimeout(() => {
        setSuccess(false)
        setNaam("")
        setEmail("")
        setBedrijf("")
        setError("")
      }, 300)
    }
    onOpenChange(val)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md bg-[#0a1912] border border-white/10 text-primary-foreground">
        {!success ? (
          <>
            <DialogHeader>
              <div className="flex items-center gap-2 mb-1">
                <Download className="h-5 w-5 text-accent" />
                <DialogTitle className="font-serif text-xl text-primary-foreground">
                  Ontvang de prijslijst
                </DialogTitle>
              </div>
              <DialogDescription className="text-primary-foreground/60 text-sm leading-relaxed">
                Vul uw gegevens in, de prijslijst wordt direct per e-mail toegestuurd. Geen spam, geen verplichtingen.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium uppercase tracking-wider text-primary-foreground/50">
                  Naam <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={naam}
                  onChange={(e) => setNaam(e.target.value)}
                  placeholder="Jan de Vries"
                  className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/40 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium uppercase tracking-wider text-primary-foreground/50">
                  E-mailadres <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jan@bedrijf.nl"
                  className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/40 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium uppercase tracking-wider text-primary-foreground/50">
                  Bedrijfsnaam <span className="text-primary-foreground/30 normal-case font-normal">(optioneel)</span>
                </label>
                <input
                  type="text"
                  value={bedrijf}
                  onChange={(e) => setBedrijf(e.target.value)}
                  placeholder="Hoveniersbedrijf BV"
                  className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/40 transition-colors"
                />
              </div>

              {error && (
                <p className="text-sm text-red-400">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-accent/90 disabled:opacity-60 transition-colors"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Download className="h-4 w-4" />
                )}
                {loading ? "Verzenden…" : "Prijslijst ontvangen"}
              </button>

              <p className="text-center text-xs text-primary-foreground/30">
                Uw gegevens worden niet gedeeld met derden.
              </p>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            <CheckCircle className="h-12 w-12 text-accent" />
            <div>
              <h3 className="font-serif text-xl font-semibold text-primary-foreground">Aanvraag ontvangen</h3>
              <p className="mt-2 text-sm text-primary-foreground/60 leading-relaxed">
                De prijslijst wordt binnen 24 uur naar <span className="text-primary-foreground">{email}</span> gestuurd.
                Heeft u vragen? Bel ons direct: <a href="tel:+31620104312" className="text-accent hover:underline">+31 (0)6 20 10 43 12</a>
              </p>
            </div>
            <button
              onClick={() => handleOpenChange(false)}
              className="mt-2 rounded-md border border-white/15 px-5 py-2 text-sm text-primary-foreground/70 hover:text-primary-foreground hover:border-white/30 transition-colors"
            >
              Sluiten
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
