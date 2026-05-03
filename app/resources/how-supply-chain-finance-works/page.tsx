import { ArticleLayout } from "@/components/article-layout"

export const metadata = {
  title: "How Supply Chain Finance Works (Complete Guide for SMEs) | DEM",
  description: "A comprehensive guide to understanding supply chain finance, reverse factoring, and how South African SMEs can leverage buyer credit to improve cash flow.",
}

export default function Article() {
  return (
    <ArticleLayout
      title="How Supply Chain Finance Works (Complete Guide for SMEs)"
      category="Supply Chain Finance"
      readTime="9 min read"
    >
      <p className="text-xl text-muted-foreground leading-relaxed">
        You supply to a major retailer or corporate. They pay in 60-90 days. Your suppliers want payment in 30 days. 
        This timing mismatch is killing your cash flow.
      </p>

      <p className="leading-relaxed mt-6">
        Supply chain finance solves this by using the buyer&apos;s credit strength, not yours, 
        to get you paid faster. It&apos;s one of the smartest working capital tools available to SMEs.
      </p>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        What Is Supply Chain Finance?
      </h2>

      <p className="leading-relaxed">
        Supply chain finance (SCF), also called reverse factoring or supplier finance, is a financing arrangement 
        where a financial institution pays the supplier early, then collects from the buyer on the original due date.
      </p>

      <p className="leading-relaxed mt-6">
        The key difference from invoice discounting is that the financing is based on the buyer&apos;s creditworthiness, 
        not the supplier&apos;s. This means you can access cheaper rates because the risk sits with your large, creditworthy buyer.
      </p>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        How Does It Work? Step-by-Step
      </h2>

      <div className="bg-muted/50 rounded-lg p-6 my-8">
        <h3 className="font-semibold text-foreground mb-4">The Supply Chain Finance Process</h3>
        
        <div className="space-y-6">
          <div>
            <p className="font-medium text-foreground">Step 1: Buyer Establishes SCF Programme</p>
            <p className="text-muted-foreground mt-2">
              A large buyer (retailer, corporate, or government entity) sets up an SCF programme with a financier, 
              leveraging their credit rating to secure favourable terms.
            </p>
          </div>

          <div>
            <p className="font-medium text-foreground">Step 2: Supplier Joins the Programme</p>
            <p className="text-muted-foreground mt-2">
              As a supplier to that buyer, you&apos;re invited to join the programme. 
              You complete onboarding and agree to the terms.
            </p>
          </div>

          <div>
            <p className="font-medium text-foreground">Step 3: You Supply and Invoice</p>
            <p className="text-muted-foreground mt-2">
              You deliver goods or services to the buyer and submit your invoice as normal.
            </p>
          </div>

          <div>
            <p className="font-medium text-foreground">Step 4: Buyer Approves Invoice</p>
            <p className="text-muted-foreground mt-2">
              The buyer confirms the invoice is valid and approved for payment. 
              This approval triggers the SCF option.
            </p>
          </div>

          <div>
            <p className="font-medium text-foreground">Step 5: You Request Early Payment</p>
            <p className="text-muted-foreground mt-2">
              Through the SCF platform, you request early payment for some or all of your approved invoices.
            </p>
          </div>

          <div>
            <p className="font-medium text-foreground">Step 6: Financier Pays You</p>
            <p className="text-muted-foreground mt-2">
              The financier pays you the invoice amount minus a discount (typically much lower than standard factoring rates).
            </p>
          </div>

          <div>
            <p className="font-medium text-foreground">Step 7: Buyer Pays Financier</p>
            <p className="text-muted-foreground mt-2">
              On the original due date, the buyer pays the financier. The transaction is complete.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        A Real Example (In Rands)
      </h2>

      <p className="leading-relaxed">
        You supply packaging to a major retailer with 90-day payment terms. 
        They have an SCF programme offering early payment at prime + 1%.
      </p>

      <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 my-8">
        <ul className="space-y-3">
          <li className="flex justify-between">
            <span className="text-muted-foreground">Invoice Value:</span>
            <span className="font-medium text-foreground">R500,000</span>
          </li>
          <li className="flex justify-between">
            <span className="text-muted-foreground">Original Payment Terms:</span>
            <span className="font-medium text-foreground">90 days</span>
          </li>
          <li className="flex justify-between">
            <span className="text-muted-foreground">Early Payment Request:</span>
            <span className="font-medium text-foreground">Day 5 after invoice</span>
          </li>
          <li className="flex justify-between">
            <span className="text-muted-foreground">Days Financed:</span>
            <span className="font-medium text-foreground">85 days</span>
          </li>
          <li className="flex justify-between">
            <span className="text-muted-foreground">SCF Rate (12% p.a.):</span>
            <span className="font-medium text-foreground">R13,973</span>
          </li>
          <li className="flex justify-between border-t border-border pt-3 mt-3">
            <span className="font-medium text-foreground">Amount Received:</span>
            <span className="font-semibold text-accent">R486,027</span>
          </li>
        </ul>
      </div>

      <p className="leading-relaxed">
        You pay approximately 2.8% to get your money 85 days early. Compare this to standard invoice discounting 
        which might cost 4-6% for the same period.
      </p>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        Why Is SCF Cheaper Than Standard Factoring?
      </h2>

      <p className="leading-relaxed">
        The financier&apos;s risk is based on the buyer, not you. When your buyer is a major retailer, corporate, 
        or government entity with a strong credit rating, the risk is much lower than lending against 
        your receivables from smaller, less creditworthy buyers.
      </p>

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-medium text-foreground">Factor</th>
              <th className="text-left py-3 px-4 font-medium text-foreground">Invoice Discounting</th>
              <th className="text-left py-3 px-4 font-medium text-foreground">Supply Chain Finance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="py-3 px-4 text-muted-foreground">Credit Risk Based On</td>
              <td className="py-3 px-4">Your debtors (mixed quality)</td>
              <td className="py-3 px-4">Single, strong buyer</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-muted-foreground">Typical Rate</td>
              <td className="py-3 px-4">Prime + 4-8%</td>
              <td className="py-3 px-4">Prime + 0.5-2%</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-muted-foreground">Advance Rate</td>
              <td className="py-3 px-4">70-85%</td>
              <td className="py-3 px-4">95-100%</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-muted-foreground">Invoice Verification</td>
              <td className="py-3 px-4">Financier verifies</td>
              <td className="py-3 px-4">Buyer pre-approves</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-muted-foreground">Collection Responsibility</td>
              <td className="py-3 px-4">Varies</td>
              <td className="py-3 px-4">Financier collects from buyer</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        Who Offers Supply Chain Finance Programmes?
      </h2>

      <div className="space-y-6 mt-8">
        <div className="bg-muted/50 rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-2">Large Buyers (Anchors)</h3>
          <p className="text-muted-foreground leading-relaxed">
            Major retailers (Shoprite, Pick n Pay, Woolworths), manufacturers, mining companies, 
            and government departments often run SCF programmes for their suppliers.
          </p>
        </div>

        <div className="bg-muted/50 rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-2">Banks</h3>
          <p className="text-muted-foreground leading-relaxed">
            Major banks provide SCF platforms, often partnering with large corporates 
            to offer programmes to their supplier bases.
          </p>
        </div>

        <div className="bg-muted/50 rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-2">Fintech Platforms</h3>
          <p className="text-muted-foreground leading-relaxed">
            Technology platforms connect suppliers with multiple funders, sometimes offering 
            better rates through competition among financiers.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        How to Access Supply Chain Finance
      </h2>

      <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 my-8">
        <div className="space-y-6">
          <div>
            <p className="font-medium text-foreground">Step 1: Identify SCF Programmes</p>
            <p className="text-muted-foreground mt-2">
              Ask your major buyers if they have supplier finance programmes. 
              Many large companies do but don&apos;t actively promote them.
            </p>
          </div>

          <div>
            <p className="font-medium text-foreground">Step 2: Apply to Join</p>
            <p className="text-muted-foreground mt-2">
              Complete the onboarding process. You&apos;ll typically need company registration documents, 
              bank account details, and to sign platform terms.
            </p>
          </div>

          <div>
            <p className="font-medium text-foreground">Step 3: Link Your Invoices</p>
            <p className="text-muted-foreground mt-2">
              Connect your invoicing process to the SCF platform so invoices automatically flow through 
              once approved by the buyer.
            </p>
          </div>

          <div>
            <p className="font-medium text-foreground">Step 4: Use Strategically</p>
            <p className="text-muted-foreground mt-2">
              You don&apos;t have to accelerate every invoice. Use early payment when you need cash flow 
              and wait when you don&apos;t.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        Frequently Asked Questions
      </h2>

      <div className="space-y-8 mt-8">
        <div>
          <h3 className="font-semibold text-foreground mb-2">
            Can I get SCF if my buyer doesn&apos;t have a programme?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Traditional SCF requires buyer participation. However, some fintech platforms offer 
            &quot;buyer-agnostic&quot; solutions where they finance based on the buyer&apos;s credit profile 
            without formal buyer involvement.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-2">
            Does SCF affect my relationship with the buyer?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Generally not. The buyer pays on their normal terms; they&apos;re just paying the financier instead of you. 
            Many buyers actually like SCF because it strengthens their supply chain.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-2">
            Is there a minimum invoice size for SCF?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            This varies by programme. Some platforms work with any size; others have minimums like R10,000 or R50,000 per invoice. 
            Smaller invoices may have proportionally higher fees.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-2">
            What happens if the buyer doesn&apos;t pay?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Because SCF is based on buyer-approved invoices, non-payment is rare. 
            If it occurs, terms vary: some programmes are non-recourse (financier absorbs the loss); 
            others may have recourse provisions.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        The Bottom Line
      </h2>

      <p className="leading-relaxed">
        Supply chain finance is often the cheapest working capital available to SME suppliers. 
        By leveraging your buyer&apos;s credit strength, you access rates you could never get on your own balance sheet.
      </p>

      <p className="leading-relaxed mt-6">
        If you supply to large, creditworthy buyers, ask about their SCF programmes. 
        This could transform your working capital position.
      </p>

      <div className="bg-foreground text-background rounded-lg p-8 my-12">
        <h3 className="text-xl font-serif font-medium mb-4">
          Want to Access Supply Chain Finance?
        </h3>
        <p className="text-background/80 mb-6 leading-relaxed">
          Tell us who you supply to. We&apos;ll help you identify SCF programmes available through your buyers 
          and connect you with the right solutions.
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
