"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, BookOpen, FileText, TrendingUp } from "lucide-react"
import type { Article } from "@/lib/articles"

const categoryIcons = [FileText, TrendingUp, BookOpen]

interface ResourcesClientProps {
  articles: Article[]
  articleCategories: string[]
}

export default function ResourcesClient({
  articles,
  articleCategories,
}: ResourcesClientProps) {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", ...articleCategories]

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter(
          (article) => article.category === activeCategory
        )

  return (
    <>
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm tracking-widest text-accent uppercase mb-4">
              Resources
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Alternative Finance Guides for SMEs
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Auto-loaded funding guides designed for search visibility and
              TikTok-to-inquiry conversion.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category)
                    document.getElementById("article-grid")?.scrollIntoView({
                      behavior: "smooth",
                    })
}}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    activeCategory === category
                      ? "border-accent bg-accent text-background"
                      : "border-border bg-background text-muted-foreground hover:border-accent hover:text-accent"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

       <section id="article-grid" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => {
              const Icon =
                categoryIcons[index % categoryIcons.length]

              return (
                <Link
                  key={article.slug}
                  href={`/resources/${article.slug}?utm_source=tiktok&utm_medium=social&utm_campaign=dem_resources`}
                  className="group bg-card border border-border rounded-lg p-6 hover:border-accent transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                  </div>

                  <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {article.title}
                  </h2>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {article.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {article.readTime}
                    </span>

                    <ArrowRight className="w-4 h-4 text-accent opacity-70 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            From TikTok to Fundable Deal
          </h2>

          <p className="text-background/70 max-w-2xl mx-auto mb-8">
            Send us your invoice, PO, trade, or funding need. We will help you
            understand whether it can be structured.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/27794425113?text=DEM%20-%20I%20came%20from%20the%20website%20and%20need%20funding%20assistance"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              WhatsApp DEM
            </a>

            <a
              href="mailto:lizo@demng.co.za"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
