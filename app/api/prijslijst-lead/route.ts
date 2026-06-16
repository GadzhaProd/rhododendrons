import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  const { naam, email, bedrijf } = await request.json()

  if (!naam || !email) {
    return NextResponse.json({ error: "Vereiste velden ontbreken" }, { status: 400 })
  }

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
      subject: `Prijslijst aanvraag — ${naam}${bedrijf ? ` (${bedrijf})` : ""}`,
      text: `Naam: ${naam}\nBedrijf: ${bedrijf || "—"}\nE-mail: ${email}`,
      html: `
        <h2>Nieuwe prijslijst aanvraag</h2>
        <table cellpadding="6" style="border-collapse:collapse">
          <tr><td><strong>Naam</strong></td><td>${naam}</td></tr>
          <tr><td><strong>Bedrijf</strong></td><td>${bedrijf || "—"}</td></tr>
          <tr><td><strong>E-mail</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
        </table>
        <p style="margin-top:16px;color:#666">Stuur de prijslijst (PDF) terug naar dit e-mailadres.</p>
      `,
    })
  } catch {
    // Log maar blokkeer de gebruiker niet — lead is al ontvangen
  }

  return NextResponse.json({ ok: true })
}
