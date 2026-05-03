import Link from "next/link"
import { ArrowRight, BookOpen, FileText, TrendingUp } from "lucide-react"
import { articles, articleCategories } from "@/lib/articles"

const categoryIcons = [FileText, TrendingUp, BookOpen]

export const metadata = {
  title: "Alternative Finance Resources for South African SMEs | DEM",
  description: "Auto-loaded educational guides on invoice discounting, factoring, purchase order finance, trade finance, supply chain finance, and working-capital structures for SMEs.",
  alternates: { canonical: "https://demng.co.za/resources" },
  openGraph: {
    title: "Alternative Finance Resources for SMEs | DEM",
    description: "Practical funding guides built to convert TikTok traffic into structured finance inquiries.",
    url: "https://demng.co.za/resources",
    siteName: "Digital Equity Management",
    type: "website",
  },
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm tracking-widest text-accent uppercase mb-4">Resources</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">Alternative Finance Guides for SMEs</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">Auto-loaded funding guides designed for search visibility and TikTok-to-inquiry conversion. Add a new article once in the article data source and it appears here, in SEO metadata, and in the sitemap.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {articleCategories.map((category) => <span key={category} className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground">{category}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-b border-border bg-background">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-border p-6"><h2 className="text-lg font-semibold mb-2">Auto-loading articles</h2><p className="text-sm leading-relaxed text-muted-foreground">Articles now load from one central content source instead of hardcoded cards on this page.</p></div>
            <div className="rounded-lg border border-border p-6"><h2 className="text-lg font-semibold mb-2">SEO scaling</h2><p className="text-sm leading-relaxed text-muted-foreground">The site includes stronger metadata, canonical URLs, robots instructions, and an automatic sitemap.</p></div>
            <div className="rounded-lg border border-border p-6"><h2 className="text-lg font-semibold mb-2">TikTok conversion</h2><p className="text-sm leading-relaxed text-muted-foreground">Every resource pushes visitors toward WhatsApp or a structured inquiry with DEM context.</p></div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => {
              const Icon = categoryIcons[index % categoryIcons.length]
              return (
                <Link key={article.slug} href={`/resources/${article.slug}?utm_source=tiktok&utm_medium=social&utm_campaign=dem_resources`} className="group bg-card border border-border rounded-lg p-6 hover:border-accent/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center"><Icon className="w-5 h-5 text-accent" /></div><span className="text-xs tracking-wider text-accent uppercase font-medium">{article.category}</span></div>
                  <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">{article.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{article.description}</p>
                  <div className="flex items-center justify-between"><span className="text-xs text-muted-foreground">{article.readTime}</span><ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" /></div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">From TikTok to Fundable Deal</h2>
          <p className="text-background/70 max-w-2xl mx-auto mb-8">Send us your invoice, PO, trade, or funding need. We will help you understand whether it can be structured.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"><a href="https://wa.me/27794425113?text=DEM%20-%20I%20came%20from%20the%20website%20and%20need%20funding%20assistance" className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-medium hover:bg-accent/90 transition-colors">WhatsApp DEM</a><a href="/#contact" className="inline-flex items-center justify-center gap-2 border border-background/30 px-6 py-3 rounded-md font-medium hover:bg-background/10 transition-colors">Send an Inquiry</a></div>
        </div>
      </section>
    </div>
  )
}
