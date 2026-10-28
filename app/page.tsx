import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { ContactForm } from "@/components/contact-form"
import { BloomSection } from "@/components/bloom-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { OfferteModal } from "@/components/offerte-modal"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <BloomSection />
        <FaqSection />
        <ContactForm />
      </main>
      <Footer />
      <OfferteModal />
    </>
  )
}
