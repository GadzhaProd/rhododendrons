"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { ArrowRight, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import type { OfferteType } from "@/components/offerte-modal"

const schema = z.object({
  type: z.enum(["particulier", "hovenier"]),
  name: z.string().min(2, "Naam moet minimaal 2 tekens bevatten"),
  bedrijfsnaam: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email("Vul een geldig e-mailadres in"),
  hoeveelheid: z.string().optional(),
  message: z.string().min(10, "Bericht moet minimaal 10 tekens bevatten"),
  // Honeypot — must remain empty. Bots fill it; real users never see it.
  website: z.string().max(0).optional(),
})

type FormData = z.infer<typeof schema>

export function ContactForm() {
  const [clientType, setClientType] = useState<OfferteType>("particulier")

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { type: "particulier" },
  })

  const watchedType = watch("type")

  useEffect(() => {
    const handler = (e: Event) => {
      const type = (e as CustomEvent<{ type: OfferteType }>).detail.type
      setClientType(type)
      setValue("type", type)
    }
    window.addEventListener("offerte-type-selected", handler)
    return () => window.removeEventListener("offerte-type-selected", handler)
  }, [setValue])

  const onSubmit = async (data: FormData) => {
    // Honeypot client-side: silently "succeed" without sending
    if (data.website && data.website.length > 0) {
      return
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      setError("root", { message: "Verzenden mislukt. Probeer het opnieuw of bel ons." })
    }
  }

  const isHovenier = watchedType === "hovenier"

  return (
    <section id="contact" className="py-20 lg:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <div className="lg:sticky lg:top-32">
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-4">
              Contact en Offerte aanvragen
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Vul het formulier in voor advies of ontvang direct een vrijblijvende prijsopgave.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-accent shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href="tel:+31620104312" className="hover:text-foreground transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary">
                  +31 (0)6 20 10 43 12
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-accent shrink-0"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <a href="mailto:info@toprhododendrons.nl" className="hover:text-foreground transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary">
                  info@toprhododendrons.nl
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 shrink-0 text-accent"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <a
                  href="https://wa.me/31620297849"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                >
                  WhatsApp: +31 (0)6 20 29 78 49
                </a>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="rounded-lg p-6 md:p-8 bg-background border border-border">
            {isSubmitSuccessful ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Bedankt voor uw bericht!
                </h3>
                <p className="text-muted-foreground">
                  Wij nemen binnen 1 werkdag contact met u op.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                {/* Type selector — segmented control */}
                <div className="relative flex rounded-xl bg-secondary p-1 gap-1">
                  {/* Sliding indicator */}
                  <div
                    className={`absolute top-1 bottom-1 w-[calc(50%-6px)] rounded-lg shadow-sm transition-all duration-300 ease-in-out ${
                      watchedType === "particulier"
                        ? "left-1 bg-primary"
                        : "left-[calc(50%+2px)] bg-primary"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => { setClientType("particulier"); setValue("type", "particulier") }}
                    className={`relative z-10 flex-1 py-2.5 text-sm font-medium rounded-lg transition-colors duration-300 ${
                      watchedType === "particulier"
                        ? "text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Particulier
                  </button>
                  <button
                    type="button"
                    onClick={() => { setClientType("hovenier"); setValue("type", "hovenier") }}
                    className={`relative z-10 flex-1 py-2.5 text-sm font-medium rounded-lg transition-colors duration-300 ${
                      watchedType === "hovenier"
                        ? "text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Hovenier · Groothandel
                  </button>
                </div>

                {isHovenier ? (
                  <div className="rounded-xl bg-primary/5 border border-primary/20 p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <Briefcase className="h-6 w-6 text-primary" strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
                      Bent u professional of grootverbruiker?
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                      Voor hoveniers, gemeenten en projectontwikkelaars hebben wij een aparte aanvraagpagina met partijprijzen, leveringsplanning en zakelijke voorwaarden.
                    </p>
                    <Link
                      href="/groothandel"
                      className="mt-5 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-6 py-3 text-sm font-medium transition-colors"
                    >
                      Naar de groothandelpagina
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">Naam *</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        placeholder="Uw naam"
                        className="bg-transparent"
                        {...register("name")}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">Telefoonnummer</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+31 6 12345678"
                        className="bg-transparent"
                        {...register("phone")}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">E-mailadres *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="uw@email.nl"
                        className="bg-transparent"
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">Uw bericht *</Label>
                      <Textarea
                        id="message"
                        required
                        placeholder="Waar kunnen wij u mee helpen?"
                        rows={4}
                        className="bg-background resize-none"
                        {...register("message")}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Honeypot — visually hidden, real users never see/tab to it. Bots fill it. */}
                    <div aria-hidden="true" className="sr-only">
                      <Label htmlFor="website">Website (laat dit veld leeg)</Label>
                      <Input
                        id="website"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        {...register("website")}
                      />
                    </div>

                    {errors.root && (
                      <p className="text-sm text-destructive text-center">{errors.root.message}</p>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-6 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      {isSubmitting ? "Verzenden..." : "Verstuur bericht"}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Door dit formulier te verzenden gaat u akkoord met ons{" "}
                      <a href="/privacy" className="underline underline-offset-4 hover:text-foreground transition-colors">
                        privacybeleid
                      </a>
                      .
                    </p>
                  </>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
