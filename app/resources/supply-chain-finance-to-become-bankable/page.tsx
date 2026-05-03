import { ArticleLayout } from "@/components/article-layout"

export const metadata = {
  title: "How Supply Chain Finance Helps You Become a Better-Funded Supplier | DEM",
  description: "Learn how using supply chain finance programmes strategically leads to better banking relationships and lower overall financing costs.",
}

export default function Article() {
  return (
    <ArticleLayout
      title="How Supply Chain Finance Helps You Become a Better-Funded Supplier"
      category="Supply Chain Finance"
      readTime="8 min read"
    >
      <p className="text-xl text-muted-foreground leading-relaxed">
        Supply chain finance does more than just improve cash flow. 
        Used strategically, it strengthens your entire financial position and makes you more attractive to banks.
      </p>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        How SCF Improves Your Banking Position
      </h2>

      <p className="leading-relaxed">
        Banks evaluate you based on your financial statements, cash flow, and business relationships. 
        SCF positively affects all three:
      </p>

      <div className="space-y-6 mt-8">
        <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-2">
            1. Stronger Cash Flow Statements
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Faster collection means better operating cash flow. Banks love seeing positive, consistent cash generation. 
            SCF transforms your 90-day collection into 5-day collection without increasing debt.
          </p>
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-2">
            2. Lower Debtors Days
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Your debtors days ratio improves dramatically. Instead of showing 90 days, 
            you might show 10-15 days. This signals efficient working capital management.
          </p>
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-2">
            3. Demonstrated Quality Customer Base
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Being part of a major buyer&apos;s SCF programme signals that you&apos;re a valued supplier 
            to creditworthy companies. Banks see this as evidence of business stability.
          </p>
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-2">
            4. Reduced Financing Dependency
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            With cheaper SCF handling your major receivables, you need less from your bank overdraft. 
            This makes you a lower-risk client with less facility utilisation.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        Building a Mixed Financing Strategy
      </h2>

      <p className="leading-relaxed">
        Smart suppliers use SCF as part of a broader financing strategy:
      </p>

      <div className="bg-muted/50 rounded-lg p-6 my-8">
        <h3 className="font-semibold text-foreground mb-4">The Optimal Financing Mix</h3>
        <ul className="space-y-4 text-muted-foreground">
          <li>
            <strong className="text-foreground">Tier 1 - SCF Programmes:</strong> Use for major, creditworthy buyers. 
            Lowest cost, highest advance rates.
          </li>
          <li>
            <strong className="text-foreground">Tier 2 - Invoice Discounting:</strong> Use for medium-sized customers 
            not in SCF programmes. Moderate cost.
          </li>
          <li>
            <strong className="text-foreground">Tier 3 - Bank Overdraft:</strong> Use for general working capital, 
            small receivables, and bridging.
          </li>
        </ul>
      </div>

      <p className="leading-relaxed">
        This tiered approach ensures you always use the cheapest available financing for each situation.
      </p>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        From SCF User to Bank-Preferred Client
      </h2>

      <p className="leading-relaxed">
        Here&apos;s a typical progression for suppliers using SCF strategically:
      </p>

      <div className="bg-muted/50 rounded-lg p-6 my-8">
        <h3 className="font-semibold text-foreground mb-4">Year 1: Establish SCF Usage</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li>Join available SCF programmes</li>
          <li>Use SCF for 40-60% of receivables</li>
          <li>Reduce overdraft dependency</li>
          <li>Improve cash flow patterns</li>
        </ul>
      </div>

      <div className="bg-muted/50 rounded-lg p-6 my-8">
        <h3 className="font-semibold text-foreground mb-4">Year 2: Demonstrate Performance</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li>Show improved financial ratios</li>
          <li>Build stronger supplier relationships</li>
          <li>Reduce overall financing costs</li>
          <li>Improve credit profile</li>
        </ul>
      </div>

      <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 my-8">
        <h3 className="font-semibold text-foreground mb-4">Year 3: Better Bank Terms</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li>Approach bank with strong financials</li>
          <li>Negotiate improved overdraft terms</li>
          <li>Access additional products (trade finance, term loans)</li>
          <li>Benefit from relationship pricing</li>
        </ul>
      </div>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        The Financial Statement Impact
      </h2>

      <p className="leading-relaxed">
        Let&apos;s see how SCF usage transforms key financial metrics banks evaluate:
      </p>

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-medium text-foreground">Metric</th>
              <th className="text-left py-3 px-4 font-medium text-foreground">Before SCF</th>
              <th className="text-left py-3 px-4 font-medium text-foreground">With SCF</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="py-3 px-4 text-muted-foreground">Debtors Days</td>
              <td className="py-3 px-4">85 days</td>
              <td className="py-3 px-4">15 days</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-muted-foreground">Operating Cash Flow</td>
              <td className="py-3 px-4">Negative (growing receivables)</td>
              <td className="py-3 px-4">Positive (faster collection)</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-muted-foreground">Interest Coverage Ratio</td>
              <td className="py-3 px-4">3.2x</td>
              <td className="py-3 px-4">5.8x</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-muted-foreground">Working Capital Requirement</td>
              <td className="py-3 px-4">High</td>
              <td className="py-3 px-4">Low</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="leading-relaxed">
        These improvements directly translate to better credit assessments and lower risk premiums from banks.
      </p>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        Frequently Asked Questions
      </h2>

      <div className="space-y-8 mt-8">
        <div>
          <h3 className="font-semibold text-foreground mb-2">
            Does SCF make me less dependent on my bank?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            It can reduce overdraft dependency for receivables financing. However, maintaining a good bank relationship 
            is valuable for other products and as backup. Use SCF to complement, not replace, bank relationships.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-2">
            Should I tell my bank I&apos;m using SCF?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Yes. Banks generally view SCF positively because it improves your cash flow and financial metrics. 
            Be transparent about your financing structure.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-2">
            Can SCF help me grow without more bank debt?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Absolutely. Because SCF scales with your sales to major buyers, you can grow without 
            increasing bank facilities proportionally. It&apos;s self-financing growth.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        The Bottom Line
      </h2>

      <p className="leading-relaxed">
        Supply chain finance isn&apos;t just about cheaper financing today. It&apos;s about building a stronger financial position 
        that opens doors to better banking relationships, lower costs, and sustainable growth.
      </p>

      <p className="leading-relaxed mt-6">
        Use SCF strategically as part of your overall working capital strategy, 
        and watch your financial profile improve over time.
      </p>

      <div className="bg-foreground text-background rounded-lg p-8 my-12">
        <h3 className="text-xl font-serif font-medium mb-4">
          Ready to Optimise Your Working Capital?
        </h3>
        <p className="text-background/80 mb-6 leading-relaxed">
          Let us help you build a financing strategy that combines SCF with other tools 
          for optimal cost and flexibility.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.me/27794425113?text=DEM"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-medium hover:bg-accent/90 transition-colors"
          >
            WhatsApp Us Now
          </a>
          <a
            href="mailto:lizo@demng.co.za?subject=DEM%20Inquiry"
            className="inline-flex items-center justify-center gap-2 border border-background/30 px-6 py-3 rounded-md font-medium hover:bg-background/10 transition-colors"
          >
            Email: lizo@demng.co.za
          </a>
        </div>
      </div>
    </ArticleLayout>
  )
}
