import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface ArticleLayoutProps {
  title: string
  category: string
  readTime: string
  children: React.ReactNode
}

export function ArticleLayout({ title, category, readTime, children }: ArticleLayoutProps) {
  return (
    <article className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Resources
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs tracking-wider text-accent uppercase font-medium">
              {category}
            </span>
            <span className="text-xs text-muted-foreground">{readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight max-w-4xl">
            {title}
          </h1>
        </div>
      </header>

      {/* Content */}
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <main className="py-16 md:py-24">
            <div className="max-w-3xl mx-auto px-6">
              <article className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-8 prose-p:mb-6">
                {children}
              </article>
            </div>
          </main>
        </div>
      </div>

      {/* TikTok CTA */}
      <section className="py-12 bg-accent/5 border-y border-accent/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              From TikTok or Google? Convert the Learning into a Deal Check
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              If you found this through TikTok, Google, or a shared link, the next step is simple: send the actual invoice, purchase order, trade, or funding requirement so DEM can help you understand the structure.
            </p>
            <p className="text-foreground font-medium mb-6">
              Send us your deal, invoice, or PO and we&apos;ll structure it for you. We&apos;ll tell you within 24 hours if it&apos;s fundable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/27794425113?text=DEM%20-%20I%20read%20one%20of%20your%20funding%20guides%20and%20need%20assistance"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-medium hover:bg-accent/90 transition-colors"
              >
                WhatsApp Us Now
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 rounded-md font-medium hover:bg-muted transition-colors"
              >
                Send an Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles CTA */}
      <section className="py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground mb-4">Want to learn more about alternative finance?</p>
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
          >
            View All Resources
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </section>
    </article>
  )
}
