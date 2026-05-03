import { ArticleLayout } from "@/components/article-layout"

export const metadata = {
  title: "How Purchase Order Financing Works (Complete Guide for SMEs) | DEM",
  description: "A comprehensive guide to understanding purchase order financing, step-by-step transaction flows, and how South African SMEs can fulfil large orders without upfront capital.",
}

export default function Article() {
  return (
    <ArticleLayout
      title="How Purchase Order Financing Works (Complete Guide for SMEs)"
      category="Purchase Order Financing"
      readTime="9 min read"
    >
      <p className="text-xl text-muted-foreground leading-relaxed">
        You&apos;ve just landed the biggest purchase order of your business life. The buyer is ready. The margin is solid. 
        But there&apos;s one problem: you don&apos;t have the cash to buy the stock or manufacture the goods.
      </p>

      <p className="leading-relaxed mt-6">
        This is where most SMEs get stuck. They have the opportunity but not the capital. 
        Banks won&apos;t help because there&apos;s no collateral. Family and friends can&apos;t fund a R500,000 order.
      </p>

      <p className="leading-relaxed mt-6">
        Purchase order financing exists precisely for this moment. It&apos;s not a loan. 
        It&apos;s a way to get your supplier paid so you can deliver the goods and collect your payment.
      </p>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        What Is Purchase Order Financing?
      </h2>

      <p className="leading-relaxed">
        Purchase order financing (PO financing) is a short-term funding solution where a financier pays your supplier directly 
        so you can fulfil a confirmed customer order. Once you deliver the goods and your customer pays, the financier takes 
        their fee and you keep the profit.
      </p>

      <p className="leading-relaxed mt-6">
        Think of it this way: you have a confirmed order worth R1,000,000. Your supplier needs R600,000 to produce the goods. 
        The PO financier pays your supplier the R600,000. You deliver to your customer. Your customer pays R1,000,000. 
        The financier takes back their R600,000 plus a fee (say R60,000). You keep R340,000.
      </p>

      <p className="leading-relaxed mt-6">
        Without PO financing, you would have had to turn down the deal entirely.
      </p>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        How Does It Work? Step-by-Step
      </h2>

      <div className="bg-muted/50 rounded-lg p-6 my-8">
        <h3 className="font-semibold text-foreground mb-4">The PO Financing Process</h3>
        
        <div className="space-y-6">
          <div>
            <p className="font-medium text-foreground">Step 1: You Receive a Purchase Order</p>
            <p className="text-muted-foreground mt-2">
              A creditworthy buyer (retailer, wholesaler, or corporate) issues you a confirmed purchase order. 
              The order must be for finished goods, not services.
            </p>
          </div>

          <div>
            <p className="font-medium text-foreground">Step 2: Submit the Deal</p>
            <p className="text-muted-foreground mt-2">
              You submit the purchase order, supplier quote, and buyer information to the PO financier. 
              They assess the buyer&apos;s creditworthiness and the deal structure.
            </p>
          </div>

          <div>
            <p className="font-medium text-foreground">Step 3: Financier Pays Your Supplier</p>
            <p className="text-muted-foreground mt-2">
              Once approved, the financier pays your supplier directly. This could be 70-100% of the supplier cost, 
              depending on the deal.
            </p>
          </div>

          <div>
            <p className="font-medium text-foreground">Step 4: Goods Are Delivered</p>
            <p className="text-muted-foreground mt-2">
              Your supplier manufactures or ships the goods. You handle quality control and delivery to your customer.
            </p>
          </div>

          <div>
            <p className="font-medium text-foreground">Step 5: Customer Pays</p>
            <p className="text-muted-foreground mt-2">
              Your customer pays the invoice (usually 30-60 days after delivery). The payment goes to the financier first.
            </p>
          </div>

          <div>
            <p className="font-medium text-foreground">Step 6: You Receive Your Profit</p>
            <p className="text-muted-foreground mt-2">
              The financier deducts their fee and returns the remaining balance to you. Deal complete.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        A Real Example (In Rands)
      </h2>

      <p className="leading-relaxed">
        Let&apos;s say you run a clothing distribution business and Woolworths places an order for R800,000 worth of stock.
      </p>

      <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 my-8">
        <ul className="space-y-3">
          <li className="flex justify-between">
            <span className="text-muted-foreground">Purchase Order Value:</span>
            <span className="font-medium text-foreground">R800,000</span>
          </li>
          <li className="flex justify-between">
            <span className="text-muted-foreground">Your Supplier Cost:</span>
            <span className="font-medium text-foreground">R520,000</span>
          </li>
          <li className="flex justify-between">
            <span className="text-muted-foreground">PO Financier Pays Supplier:</span>
            <span className="font-medium text-foreground">R520,000</span>
          </li>
          <li className="flex justify-between">
            <span className="text-muted-foreground">Financier Fee (8%):</span>
            <span className="font-medium text-foreground">R41,600</span>
          </li>
          <li className="flex justify-between border-t border-border pt-3 mt-3">
            <span className="font-medium text-foreground">Your Profit:</span>
            <span className="font-semibold text-accent">R238,400</span>
          </li>
        </ul>
      </div>

      <p className="leading-relaxed">
        Without PO financing, you would have had zero profit because you couldn&apos;t fulfil the order. 
        With PO financing, you made R238,400 on a deal you couldn&apos;t otherwise do.
      </p>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        What Do Financiers Look At?
      </h2>

      <p className="leading-relaxed">
        PO financiers don&apos;t focus on your balance sheet or credit score. They focus on the deal itself:
      </p>

      <ul className="list-disc pl-6 space-y-3 mt-6">
        <li>
          <strong>Buyer Creditworthiness:</strong> Is your customer a reliable payer? Large retailers, corporates, 
          and government departments are ideal.
        </li>
        <li>
          <strong>Supplier Reliability:</strong> Can your supplier deliver on time and to specification?
        </li>
        <li>
          <strong>Margin:</strong> Is there enough profit in the deal to cover the financing cost and still leave you with a return?
        </li>
        <li>
          <strong>Product Type:</strong> Finished goods are preferred. Services and custom manufacturing are harder to finance.
        </li>
        <li>
          <strong>Transaction Simplicity:</strong> Fewer middlemen and simpler logistics make deals easier to approve.
        </li>
      </ul>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        PO Financing vs. Traditional Loans
      </h2>

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-medium text-foreground">Criteria</th>
              <th className="text-left py-3 px-4 font-medium text-foreground">PO Financing</th>
              <th className="text-left py-3 px-4 font-medium text-foreground">Bank Loan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="py-3 px-4 text-muted-foreground">Collateral Required</td>
              <td className="py-3 px-4">No (PO is the security)</td>
              <td className="py-3 px-4">Yes (property, assets)</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-muted-foreground">Approval Speed</td>
              <td className="py-3 px-4">24-72 hours</td>
              <td className="py-3 px-4">2-8 weeks</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-muted-foreground">Focus</td>
              <td className="py-3 px-4">Deal quality, buyer credit</td>
              <td className="py-3 px-4">Your credit history</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-muted-foreground">Debt on Balance Sheet</td>
              <td className="py-3 px-4">No</td>
              <td className="py-3 px-4">Yes</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-muted-foreground">Cost</td>
              <td className="py-3 px-4">Higher (5-15% per deal)</td>
              <td className="py-3 px-4">Lower (prime + 2-5%)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        When Should You Use PO Financing?
      </h2>

      <ul className="list-disc pl-6 space-y-3 mt-6">
        <li>You have a confirmed order but no capital to fulfil it</li>
        <li>Your buyer is creditworthy (corporate, retailer, government)</li>
        <li>Your margins are healthy enough to absorb the financing cost</li>
        <li>You can&apos;t access traditional bank funding</li>
        <li>You need to scale quickly without taking on debt</li>
      </ul>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        Common Mistakes to Avoid
      </h2>

      <ul className="list-disc pl-6 space-y-3 mt-6">
        <li>
          <strong>Thin margins:</strong> If your profit margin is only 10%, PO financing may eat most of it. 
          Know your numbers before applying.
        </li>
        <li>
          <strong>Unreliable suppliers:</strong> If your supplier can&apos;t deliver on time, the whole deal collapses.
        </li>
        <li>
          <strong>Weak buyer credit:</strong> If your customer has a history of late payments or disputes, 
          the financier won&apos;t approve the deal.
        </li>
        <li>
          <strong>Complex transactions:</strong> Multiple suppliers, multiple deliveries, and cross-border deals 
          add complexity and risk.
        </li>
      </ul>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        Frequently Asked Questions
      </h2>

      <div className="space-y-8 mt-8">
        <div>
          <h3 className="font-semibold text-foreground mb-2">
            Do I need collateral for PO financing?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            No. The purchase order itself serves as security. The financier is essentially betting on your buyer paying, 
            not on your personal assets.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-2">
            How much does PO financing cost?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Typically 5-15% of the supplier payment, depending on the deal size, buyer creditworthiness, and transaction duration. 
            Longer payment terms mean higher fees.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-2">
            Can I use PO financing for services?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Generally no. PO financing works best for finished goods that can be inspected and delivered. 
            Services are harder to verify and therefore harder to finance.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-2">
            What if my customer doesn&apos;t pay?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            This depends on the agreement. Some PO financing is non-recourse (the financier absorbs the loss), 
            while others are recourse (you&apos;re responsible). Clarify this before signing.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-2">
            How quickly can I get approved?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Most PO financiers can give you a decision within 24-72 hours, provided you submit complete documentation.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        The Bottom Line
      </h2>

      <p className="leading-relaxed">
        Purchase order financing lets you say yes to deals you couldn&apos;t otherwise fulfil. 
        It&apos;s not about borrowing money; it&apos;s about unlocking opportunity.
      </p>

      <p className="leading-relaxed mt-6">
        If you have a solid purchase order from a creditworthy buyer and a reliable supplier, 
        PO financing can be the bridge between where you are and where you want to be.
      </p>

      <div className="bg-foreground text-background rounded-lg p-8 my-12">
        <h3 className="text-xl font-serif font-medium mb-4">
          Have a Purchase Order You Need to Fund?
        </h3>
        <p className="text-background/80 mb-6 leading-relaxed">
          Send us your PO and supplier quote. We&apos;ll tell you within 24 hours if it&apos;s fundable and connect you 
          with the right financier.
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
