import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"
import { escapeHtml } from "@/lib/escape-html"

const ContactSchema = z.object({
  name: z
    .string({ required_error: "Naam is verplicht (minimaal 2 tekens)" })
    .min(2, "Naam is verplicht (minimaal 2 tekens)"),
  email: z
    .string({ required_error: "Geldig e-mailadres is verplicht" })
    .email("Geldig e-mailadres is verplicht"),
  message: z
    .string({ required_error: "Bericht is verplicht (minimaal 10 tekens)" })
    .min(10, "Bericht is verplicht (minimaal 10 tekens)"),
  phone: z.string().optional(),
  type: z.string().optional(),
})

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Ongeldige aanvraag" }, { status: 400 })
  }

  // Honeypot first — silent success, don't reveal to bot we caught them
  if (typeof body === "object" && body !== null && "website" in body) {
    const website = (body as { website?: unknown }).website
    if (typeof website === "string" && website.length > 0) {
      return NextResponse.json({ ok: true })
    }
  }

  const parsed = ContactSchema.safeParse(body)
  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message ?? "Ongeldige invoer"
    return NextResponse.json({ error: firstError }, { status: 400 })
  }

  const { name, phone, email, message } = parsed.data

  // Pre-escape user-controlled fields before HTML insertion
  const safeName = escapeHtml(name)
  const safePhone = phone ? escapeHtml(phone) : "—"
  const safeEmail = escapeHtml(email)
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
      subject: `Nieuw bericht van ${name}`,
      text: `Naam: ${name}\nTelefoon: ${phone ?? "—"}\nE-mail: ${email}\n\n${message}`,
      html: `
        <h2>Nieuw contactformulier bericht</h2>
        <table>
          <tr><td><strong>Naam</strong></td><td>${safeName}</td></tr>
          <tr><td><strong>Telefoon</strong></td><td>${safePhone}</td></tr>
          <tr><td><strong>E-mail</strong></td><td>${safeEmail}</td></tr>
        </table>
        <h3>Bericht</h3>
        <p>${safeMessage}</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Contact form mail send failed:", err)
    return NextResponse.json(
      { error: "Verzenden mislukt. Probeer het opnieuw of bel ons." },
      { status: 500 },
    )
  }
}
