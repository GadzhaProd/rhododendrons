import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrustBar } from "@/components/trust-bar"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { ContactForm } from "@/components/contact-form"
import { BloomSection } from "@/components/bloom-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { OfferteModal } from "@/components/offerte-modal"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrustBar />
      <ProductsSection />
      <AboutSection />
      <BloomSection />
      <FaqSection />
      <ContactForm />
      <Footer />
      <OfferteModal />
    </main>
  )
}
