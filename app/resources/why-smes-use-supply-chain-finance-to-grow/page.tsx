import { ArticleLayout } from "@/components/article-layout"

export const metadata = {
  title: "Why SMEs Use Supply Chain Finance to Grow Revenue | DEM",
  description: "Discover how South African suppliers leverage supply chain finance programmes to improve cash flow, reduce costs, and scale their business.",
}

export default function Article() {
  return (
    <ArticleLayout
      title="Why SMEs Use Supply Chain Finance to Grow Revenue"
      category="Supply Chain Finance"
      readTime="7 min read"
    >
      <p className="text-xl text-muted-foreground leading-relaxed">
        If you supply to large corporates or retailers, you already have access to one of the best financing tools available. 
        You just might not know it yet.
      </p>

      <p className="leading-relaxed mt-6">
        Supply chain finance lets you borrow against your buyer&apos;s credit rating, not yours. 
        This means better rates, faster access, and more working capital to grow.
      </p>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        The Strategic Advantage of SCF
      </h2>

      <p className="leading-relaxed">
        Most SME financing requires you to pledge something: property, equipment, debtors, personal guarantees. 
        SCF is different. The buyer&apos;s creditworthiness is the security.
      </p>

      <p className="leading-relaxed mt-6">
        This creates several strategic advantages:
      </p>

      <div className="space-y-6 mt-8">
        <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-2">Lower Financing Costs</h3>
          <p className="text-muted-foreground leading-relaxed">
            Because the risk is based on a large, stable buyer, rates can be 3-5% lower than standard invoice financing. 
            On significant volumes, this saves hundreds of thousands annually.
          </p>
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-2">No Impact on Your Facilities</h3>
          <p className="text-muted-foreground leading-relaxed">
            SCF doesn&apos;t use your bank facilities or credit limits. 
            It&apos;s additional liquidity that doesn&apos;t compete with your existing funding.
          </p>
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-2">Certainty of Payment</h3>
          <p className="text-muted-foreground leading-relaxed">
            Once the buyer approves an invoice, payment is effectively guaranteed. 
            You&apos;re not worried about collection; you know when you&apos;ll get paid.
          </p>
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-2">Flexibility</h3>
          <p className="text-muted-foreground leading-relaxed">
            You choose which invoices to accelerate and when. 
            Need cash this month? Accelerate. Don&apos;t need it? Wait and save the fee.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        Case Study: Turning Long Payment Terms Into Growth Capital
      </h2>

      <p className="leading-relaxed">
        A food ingredients supplier to major food manufacturers was struggling with 90-day payment terms 
        while needing to pay their suppliers in 30 days.
      </p>

      <div className="bg-muted/50 rounded-lg p-6 my-8">
        <h3 className="font-semibold text-foreground mb-4">Before SCF</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li>Monthly sales: R3,200,000</li>
          <li>Cash locked in receivables: R9,600,000 (3 months)</li>
          <li>Overdraft facility maxed at R4,000,000</li>
          <li>Turning down orders due to working capital constraints</li>
          <li>Invoice discounting cost: 5.2% effective rate</li>
        </ul>
      </div>

      <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 my-8">
        <h3 className="font-semibold text-foreground mb-4">After Joining Buyer&apos;s SCF Programme</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li>Payment acceleration from day 5 instead of day 90</li>
          <li>SCF rate: 2.4% effective</li>
          <li>Cash unlocked: R8,800,000</li>
          <li>Annual financing cost savings: R268,800</li>
          <li>Able to accept previously declined orders</li>
        </ul>
      </div>

      <p className="leading-relaxed">
        The SCF programme not only saved them R268,800 annually but also unlocked capacity to grow sales by 40% 
        by accepting orders they previously couldn&apos;t fund.
      </p>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        The Growth Math: SCF vs. Standard Financing
      </h2>

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-medium text-foreground">Metric</th>
              <th className="text-left py-3 px-4 font-medium text-foreground">Standard Factoring</th>
              <th className="text-left py-3 px-4 font-medium text-foreground">Supply Chain Finance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="py-3 px-4 text-muted-foreground">Annual Receivables</td>
              <td className="py-3 px-4">R24,000,000</td>
              <td className="py-3 px-4">R24,000,000</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-muted-foreground">Average Financing Period</td>
              <td className="py-3 px-4">60 days</td>
              <td className="py-3 px-4">60 days</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-muted-foreground">Effective Rate</td>
              <td className="py-3 px-4">18% p.a.</td>
              <td className="py-3 px-4">12% p.a.</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-muted-foreground">Annual Finance Cost</td>
              <td className="py-3 px-4">R720,000</td>
              <td className="py-3 px-4">R480,000</td>
            </tr>
            <tr className="bg-accent/5">
              <td className="py-3 px-4 font-medium text-foreground">Annual Savings</td>
              <td className="py-3 px-4" colSpan={2}>
                <span className="font-semibold text-accent">R240,000</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        How to Maximise SCF Benefits
      </h2>

      <div className="space-y-8 mt-8">
        <div>
          <h3 className="font-semibold text-foreground mb-3">
            1. Ask All Your Major Buyers
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Many buyers have SCF programmes but don&apos;t actively market them. 
            Reach out to procurement or finance contacts and ask specifically about supplier finance options.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-3">
            2. Use SCF for Large Invoices, Regular Financing for Small Ones
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            If SCF has minimum invoice sizes, use it for larger invoices and standard facilities for smaller ones. 
            Optimise your financing mix.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-3">
            3. Accelerate Strategically
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Don&apos;t automatically accelerate everything. Analyse your cash needs. 
            Sometimes waiting 30 days for free is better than paying 1% to get cash now.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-3">
            4. Negotiate Better Terms with Growing Volume
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            As your SCF volume grows, you may be able to negotiate better rates. 
            Track your usage and revisit terms annually.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        Frequently Asked Questions
      </h2>

      <div className="space-y-8 mt-8">
        <div>
          <h3 className="font-semibold text-foreground mb-2">
            What if my buyer&apos;s credit deteriorates?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            SCF rates are linked to buyer credit. If a buyer&apos;s rating drops, rates may increase or the programme may be suspended. 
            However, this same buyer would also become a collection risk under any other financing model.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-2">
            Can I use SCF and invoice discounting together?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Yes. Use SCF for buyers with programmes and invoice discounting for other customers. 
            Just be careful not to finance the same invoice twice.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-2">
            Does SCF appear as debt on my balance sheet?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Typically no. SCF is treated as a sale of receivables, not a loan. 
            This keeps your balance sheet clean and doesn&apos;t affect debt ratios.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        The Bottom Line
      </h2>

      <p className="leading-relaxed">
        If you supply to large, creditworthy buyers, supply chain finance is likely the cheapest working capital 
        available to you. Don&apos;t leave this money on the table.
      </p>

      <p className="leading-relaxed mt-6">
        Start by asking your major buyers about their supplier finance programmes. 
        You might be surprised at what&apos;s already available.
      </p>

      <div className="bg-foreground text-background rounded-lg p-8 my-12">
        <h3 className="text-xl font-serif font-medium mb-4">
          Ready to Explore Supply Chain Finance?
        </h3>
        <p className="text-background/80 mb-6 leading-relaxed">
          Tell us who you supply to and we&apos;ll help you identify SCF opportunities 
          and navigate the onboarding process.
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
