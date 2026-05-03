import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { AlternativeFinanceSection } from "@/components/alternative-finance-section"
import { TokenizationSection } from "@/components/tokenization-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <AboutSection />
      <AlternativeFinanceSection />
      <TokenizationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
