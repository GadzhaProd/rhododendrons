import Link from "next/link"
import { Mail, MapPin, Phone, Clock, Instagram } from "lucide-react"

const openingHours = [
  { day: "Maandag – vrijdag", time: "08:00 – 17:00" },
  { day: "Zaterdag", time: "09:00 – 13:00" },
  { day: "Zondag", time: "Gesloten" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Brand */}
            <div>
              <Link href="/" className="inline-block py-2">
                <span className="font-serif text-2xl font-semibold text-primary-foreground">
                  Top Rhododendrons
                </span>
              </Link>
              <p className="mt-4 text-primary-foreground/80 leading-relaxed text-sm">
                Specialist in rhododendrons. Direct van eigen kwekerij in Otterlo. Kwekerij in Otterlo sinds 2001.
              </p>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/toprhododendrons"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 py-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Volg ons op Instagram"
              >
                <Instagram className="h-5 w-5" />
                <span className="text-sm">@toprhododendrons</span>
              </a>
              {/* KvK */}
              <p className="mt-4 text-xs text-primary-foreground/50">
                KvK: 82480273
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-primary-foreground mb-4">
                Snelle Links
              </h3>
              <ul className="space-y-0">
                <li>
                  <Link
                    href="/#over-ons"
                    className="py-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Over Ons
                  </Link>
                </li>
                <li>
                  <Link
                    href="/assortiment"
                    className="py-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Assortiment
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="py-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="py-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Privacybeleid
                  </Link>
                </li>
                <li>
                  <Link
                    href="/voorwaarden"
                    className="py-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Algemene Voorwaarden
                  </Link>
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="font-semibold text-primary-foreground mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                Openingstijden
              </h3>
              <ul className="space-y-2">
                {openingHours.map(({ day, time }) => (
                  <li key={day} className="flex justify-between gap-4 text-sm">
                    <span className="text-primary-foreground/70">{day}</span>
                    <span className={`font-medium ${time === "Gesloten" ? "text-primary-foreground/40" : "text-primary-foreground"}`}>
                      {time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-primary-foreground mb-4">
                Contact
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <a
                    href="https://www.google.com/maps/search/Esserbroekweg+2+Otterlo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors leading-relaxed block"
                  >
                    <span className="text-xs text-primary-foreground/50 uppercase tracking-wider">Kwekerij &amp; kantoor</span><br />
                    Esserbroekweg 2<br />
                    6731 DB Otterlo
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  <a
                    href="mailto:info@toprhododendrons.nl"
                    className="py-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    info@toprhododendrons.nl
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <a
                      href="tel:+31620104312"
                      className="py-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      +31 (0)6 20 10 43 12
                    </a>
                    <a
                      href="tel:+31620297849"
                      className="py-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      +31 (0)6 20 29 78 49
                    </a>
                  </div>
                </li>

              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} Top Rhododendrons. Alle rechten voorbehouden.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="py-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/voorwaarden"
                className="py-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
