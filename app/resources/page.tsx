import { articles, articleCategories } from "@/lib/articles"
import ResourcesClient from "@/components/resources-client"

export const metadata = {
  title: "Alternative Finance Resources for South African SMEs | DEM",
  description:
    "Auto-loaded educational guides on invoice discounting, factoring, purchase order finance, trade finance, supply chain finance, and working-capital structures for SMEs.",
  alternates: {
    canonical: "https://demng.co.za/resources",
  },
  openGraph: {
    title: "Alternative Finance Resources for SMEs | DEM",
    description:
      "Practical funding guides built to convert TikTok traffic into structured finance inquiries.",
    url: "https://demng.co.za/resources",
    siteName: "Digital Equity Management",
    type: "website",
  },
}

export default function ResourcesPage() {
  return (
    <ResourcesClient
      articles={articles}
      articleCategories={articleCategories}
    />
  )
}
