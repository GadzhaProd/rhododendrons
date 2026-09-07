"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { isDemoMode } from "@/lib/demo-mode"

const schema = z.object({
  name: z.string().min(2, "Naam moet minimaal 2 tekens bevatten"),
  bedrijfsnaam: z.string().min(2, "Vul uw bedrijfsnaam in"),
  kvk: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email("Vul een geldig e-mailadres in"),
  projecttype: z.string().optional(),
  aantal: z.string().optional(),
  leverdatum: z.string().optional(),
  message: z.string().min(10, "Beschrijf uw project in minimaal 10 tekens"),
  // Honeypot — must remain empty. Bots fill it; real users never see it.
  website: z.string().max(0).optional(),
})

type FormData = z.infer<typeof schema>

export function GroothandelForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    // Honeypot client-side: silently "succeed" without sending
    if (data.website && data.website.length > 0) {
      return
    }

    // Static preview build: no server to POST to, so confirm without sending.
    if (isDemoMode) {
      return
    }

    const res = await fetch("/api/groothandel", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      setError("root", { message: "Verzenden mislukt. Probeer het opnieuw of bel ons." })
    }
  }

  if (isSubmitSuccessful) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="h-8 w-8 text-primary" strokeWidth={2.5} />
        </div>
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
          Bedankt voor uw aanvraag!
        </h3>
        <p className="text-muted-foreground">
          Wij nemen binnen 24 uur contact met u op met een projectofferte op maat.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="bedrijfsnaam" className="text-foreground">Bedrijfsnaam *</Label>
          <Input id="bedrijfsnaam" type="text" required placeholder="Uw bedrijf" className="bg-white" {...register("bedrijfsnaam")} />
          {errors.bedrijfsnaam && <p className="text-sm text-destructive">{errors.bedrijfsnaam.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="kvk" className="text-foreground">KVK-nummer</Label>
          <Input id="kvk" type="text" placeholder="bijv. 12345678" className="bg-white" {...register("kvk")} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground">Contactpersoon *</Label>
          <Input id="name" type="text" required placeholder="Uw naam" className="bg-white" {...register("name")} />
          {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-foreground">Telefoonnummer</Label>
          <Input id="phone" type="tel" placeholder="+31 6 12345678" className="bg-white" {...register("phone")} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-foreground">E-mailadres *</Label>
        <Input id="email" type="email" required placeholder="uw@bedrijf.nl" className="bg-white" {...register("email")} />
        {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="space-y-2">
          <Label htmlFor="projecttype" className="text-foreground">Projecttype</Label>
          <select
            id="projecttype"
            className="w-full h-11 rounded-md border border-input bg-white px-3 py-2 text-base"
            {...register("projecttype")}
          >
            <option value="">Kies een type</option>
            <option value="Hovenier">Hoveniersproject</option>
            <option value="Openbaar groen">Openbaar groen / gemeente</option>
            <option value="Wooncomplex">Wooncomplex / vastgoed</option>
            <option value="Landschapsarchitect">Landschapsarchitect</option>
            <option value="Anders">Anders</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="aantal" className="text-foreground">Gewenst aantal</Label>
          <Input id="aantal" type="text" placeholder="bijv. 75 stuks" className="bg-white" {...register("aantal")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="leverdatum" className="text-foreground">Gewenste leverdatum</Label>
          <Input id="leverdatum" type="text" placeholder="bijv. maart 2026" className="bg-white" {...register("leverdatum")} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-foreground">Projectomschrijving *</Label>
        <Textarea
          id="message"
          required
          placeholder="Beschrijf uw project: gewenste soorten, maten, locatie, en eventuele vragen."
          rows={5}
          className="bg-white resize-none"
          {...register("message")}
        />
        {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
      </div>

      {/* Honeypot — visually hidden, real users never see/tab to it. Bots fill it. */}
      <div aria-hidden="true" className="sr-only">
        <Label htmlFor="website-b2b">Website (laat dit veld leeg)</Label>
        <Input
          id="website-b2b"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      {errors.root && (
        <p className="text-sm text-destructive text-center">{errors.root.message}</p>
      )}
      {isDemoMode && (
        <p className="text-sm text-muted-foreground text-center">Demo-versie: dit formulier wordt niet daadwerkelijk verzonden.</p>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-6 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90"
      >
        {isSubmitting ? "Verzenden..." : "Projectofferte aanvragen"}
      </Button>

      <p className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
        <Check className="h-4 w-4 text-primary shrink-0" strokeWidth={2.5} />
        Reactie binnen 24 uur, direct van de kweker
      </p>

      <p className="text-xs text-muted-foreground text-center">
        Door dit formulier te verzenden gaat u akkoord met ons{" "}
        <a href="/privacy" className="underline underline-offset-4 hover:text-foreground transition-colors">
          privacybeleid
        </a>
        .
      </p>
    </form>
  )
}
