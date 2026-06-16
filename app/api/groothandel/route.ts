import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"
import { escapeHtml } from "@/lib/escape-html"

const GroothandelSchema = z.object({
  name: z
    .string({ required_error: "Contactpersoon is verplicht (minimaal 2 tekens)" })
    .min(2, "Contactpersoon is verplicht (minimaal 2 tekens)"),
  bedrijfsnaam: z
    .string({ required_error: "Bedrijfsnaam is verplicht (minimaal 2 tekens)" })
    .min(2, "Bedrijfsnaam is verplicht (minimaal 2 tekens)"),
  email: z
    .string({ required_error: "Geldig e-mailadres is verplicht" })
    .email("Geldig e-mailadres is verplicht"),
  message: z
    .string({ required_error: "Projectomschrijving is verplicht (minimaal 10 tekens)" })
    .min(10, "Projectomschrijving is verplicht (minimaal 10 tekens)"),
  kvk: z.string().optional(),
  phone: z.string().optional(),
  projecttype: z.string().optional(),
  aantal: z.string().optional(),
  leverdatum: z.string().optional(),
})

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Ongeldige aanvraag" }, { status: 400 })
  }

  // Honeypot first — silent success
  if (typeof body === "object" && body !== null && "website" in body) {
    const website = (body as { website?: unknown }).website
    if (typeof website === "string" && website.length > 0) {
      return NextResponse.json({ ok: true })
    }
  }

  const parsed = GroothandelSchema.safeParse(body)
  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message ?? "Ongeldige invoer"
    return NextResponse.json({ error: firstError }, { status: 400 })
  }

  const {
    name,
    bedrijfsnaam,
    kvk,
    phone,
    email,
    projecttype,
    aantal,
    leverdatum,
    message,
  } = parsed.data

  // Pre-escape every user-controlled field before HTML insertion
  const safeName = escapeHtml(name)
  const safeBedrijfsnaam = escapeHtml(bedrijfsnaam)
  const safeKvk = kvk ? escapeHtml(kvk) : "—"
  const safePhone = phone ? escapeHtml(phone) : "—"
  const safeEmail = escapeHtml(email)
  const safeProjecttype = projecttype ? escapeHtml(projecttype) : "—"
  const safeAantal = aantal ? escapeHtml(aantal) : "—"
  const safeLeverdatum = leverdatum ? escapeHtml(leverdatum) : "—"
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>")

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Top Rhododendrons Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL ?? "info@toprhododendrons.nl",
      replyTo: email,
      subject: `B2B Projectofferte aanvraag — ${bedrijfsnaam}`,
      text: `Bedrijfsnaam: ${bedrijfsnaam}
KVK: ${kvk ?? "—"}
Contactpersoon: ${name}
Telefoon: ${phone ?? "—"}
E-mail: ${email}
Projecttype: ${projecttype ?? "—"}
Gewenst aantal: ${aantal ?? "—"}
Gewenste leverdatum: ${leverdatum ?? "—"}

Projectomschrijving:
${message}`,
      html: `
        <h2>B2B Projectofferte aanvraag</h2>
        <table cellpadding="6" style="border-collapse:collapse">
          <tr><td><strong>Bedrijfsnaam</strong></td><td>${safeBedrijfsnaam}</td></tr>
          <tr><td><strong>KVK</strong></td><td>${safeKvk}</td></tr>
          <tr><td><strong>Contactpersoon</strong></td><td>${safeName}</td></tr>
          <tr><td><strong>Telefoon</strong></td><td>${safePhone}</td></tr>
          <tr><td><strong>E-mail</strong></td><td>${safeEmail}</td></tr>
          <tr><td><strong>Projecttype</strong></td><td>${safeProjecttype}</td></tr>
          <tr><td><strong>Aantal</strong></td><td>${safeAantal}</td></tr>
          <tr><td><strong>Leverdatum</strong></td><td>${safeLeverdatum}</td></tr>
        </table>
        <h3>Projectomschrijving</h3>
        <p>${safeMessage}</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Groothandel form mail send failed:", err)
    return NextResponse.json(
      { error: "Verzenden mislukt. Probeer het opnieuw of bel ons." },
      { status: 500 },
    )
  }
}
