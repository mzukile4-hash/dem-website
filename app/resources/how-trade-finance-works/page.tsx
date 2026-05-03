import { ArticleLayout } from "@/components/article-layout"

export const metadata = {
  title: "How Trade Finance Works (Complete Guide for SMEs) | DEM",
  description: "A comprehensive guide to understanding trade finance, Letters of Credit, bank guarantees, and how South African SMEs can facilitate international and domestic trade.",
}

export default function Article() {
  return (
    <ArticleLayout
      title="How Trade Finance Works (Complete Guide for SMEs)"
      category="Trade Finance"
      readTime="10 min read"
    >
      <p className="text-xl text-muted-foreground leading-relaxed">
        Trade finance is the engine that powers global commerce. Without it, international trade would grind to a halt. 
        Buyers wouldn&apos;t trust sellers they&apos;ve never met, and sellers wouldn&apos;t ship to buyers who haven&apos;t paid.
      </p>

      <p className="leading-relaxed mt-6">
        At its core, trade finance solves a simple problem: how do you get a buyer and seller 
        who don&apos;t know each other to complete a transaction safely?
      </p>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        What Is Trade Finance?
      </h2>

      <p className="leading-relaxed">
        Trade finance is a broad term covering the financial instruments and products that facilitate trade, 
        particularly international trade. It includes:
      </p>

      <ul className="list-disc pl-6 space-y-3 mt-6">
        <li>Letters of Credit (LCs)</li>
        <li>Bank Guarantees</li>
        <li>Documentary Collections</li>
        <li>Trade Loans and Advances</li>
        <li>Export/Import Financing</li>
      </ul>

      <p className="leading-relaxed mt-6">
        These instruments create trust between parties, provide payment security, and unlock working capital 
        that would otherwise be tied up in the trade cycle.
      </p>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        The Core Trade Finance Instruments
      </h2>

      <div className="space-y-8 mt-8">
        <div className="bg-muted/50 rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-3">Letter of Credit (LC)</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A bank&apos;s written commitment to pay the seller a specified amount, provided the seller presents 
            documents that comply exactly with the LC terms.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong>How it helps:</strong> The seller knows they&apos;ll get paid if they ship correctly. 
            The buyer knows they won&apos;t pay until goods are shipped as agreed.
          </p>
        </div>

        <div className="bg-muted/50 rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-3">Bank Guarantee</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A promise by a bank to cover a payment or obligation if the party responsible fails to do so. 
            Used for performance bonds, bid bonds, and advance payment guarantees.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong>How it helps:</strong> Allows SMEs to participate in large contracts by providing 
            security that their counterparty demands.
          </p>
        </div>

        <div className="bg-muted/50 rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-3">Documentary Collection</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The seller&apos;s bank sends shipping documents to the buyer&apos;s bank, which only releases them 
            to the buyer upon payment (or acceptance of a bill of exchange).
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong>How it helps:</strong> Cheaper than an LC but still provides some protection. 
            The buyer can&apos;t take delivery without paying or accepting the draft.
          </p>
        </div>

        <div className="bg-muted/50 rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-3">Trade Loan</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Short-term financing specifically for trade transactions, secured against the underlying 
            trade documents, goods, or receivables.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong>How it helps:</strong> Provides working capital to fund purchases or production 
            before receiving payment from the sale.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        How a Letter of Credit Works: Step-by-Step
      </h2>

      <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 my-8">
        <div className="space-y-6">
          <div>
            <p className="font-medium text-foreground">Step 1: Contract Agreement</p>
            <p className="text-muted-foreground mt-2">
              Buyer and seller agree on a sales contract specifying goods, price, delivery terms, 
              and that payment will be by Letter of Credit.
            </p>
          </div>

          <div>
            <p className="font-medium text-foreground">Step 2: LC Application</p>
            <p className="text-muted-foreground mt-2">
              The buyer applies to their bank (issuing bank) to open an LC in favour of the seller, 
              specifying the exact terms and required documents.
            </p>
          </div>

          <div>
            <p className="font-medium text-foreground">Step 3: LC Issuance</p>
            <p className="text-muted-foreground mt-2">
              The issuing bank creates the LC and sends it to the seller&apos;s bank (advising bank), 
              which forwards it to the seller.
            </p>
          </div>

          <div>
            <p className="font-medium text-foreground">Step 4: Shipment</p>
            <p className="text-muted-foreground mt-2">
              The seller ships the goods and obtains the required documents: bill of lading, 
              commercial invoice, packing list, certificate of origin, inspection certificates, etc.
            </p>
          </div>

          <div>
            <p className="font-medium text-foreground">Step 5: Document Presentation</p>
            <p className="text-muted-foreground mt-2">
              The seller presents the documents to their bank, which checks them against the LC terms 
              and forwards them to the issuing bank.
            </p>
          </div>

          <div>
            <p className="font-medium text-foreground">Step 6: Payment</p>
            <p className="text-muted-foreground mt-2">
              If documents comply, the issuing bank pays the advising bank, which credits the seller. 
              The buyer receives the documents to clear the goods.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        Types of Letters of Credit
      </h2>

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-medium text-foreground">Type</th>
              <th className="text-left py-3 px-4 font-medium text-foreground">Description</th>
              <th className="text-left py-3 px-4 font-medium text-foreground">Best For</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="py-3 px-4 font-medium">Sight LC</td>
              <td className="py-3 px-4 text-muted-foreground">Payment upon document presentation</td>
              <td className="py-3 px-4 text-muted-foreground">Sellers wanting immediate payment</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium">Usance LC</td>
              <td className="py-3 px-4 text-muted-foreground">Payment at a future date (30/60/90 days)</td>
              <td className="py-3 px-4 text-muted-foreground">Buyers needing payment terms</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium">Confirmed LC</td>
              <td className="py-3 px-4 text-muted-foreground">Advising bank adds its guarantee</td>
              <td className="py-3 px-4 text-muted-foreground">High-risk issuing bank/country</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium">Revolving LC</td>
              <td className="py-3 px-4 text-muted-foreground">Automatically reinstates after each use</td>
              <td className="py-3 px-4 text-muted-foreground">Repeat orders with same buyer</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium">Transferable LC</td>
              <td className="py-3 px-4 text-muted-foreground">Can be transferred to another beneficiary</td>
              <td className="py-3 px-4 text-muted-foreground">Middlemen/trading companies</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        A Real Example (In Rands)
      </h2>

      <p className="leading-relaxed">
        A South African wine producer receives an order from a UK importer for R4.2 million worth of wine. 
        The buyer opens a confirmed LC through their UK bank.
      </p>

      <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 my-8">
        <ul className="space-y-3">
          <li className="flex justify-between">
            <span className="text-muted-foreground">LC Value:</span>
            <span className="font-medium text-foreground">R4,200,000</span>
          </li>
          <li className="flex justify-between">
            <span className="text-muted-foreground">Production Cost:</span>
            <span className="font-medium text-foreground">R2,800,000</span>
          </li>
          <li className="flex justify-between">
            <span className="text-muted-foreground">Pre-Shipment Finance (80% for 60 days):</span>
            <span className="font-medium text-foreground">R2,240,000</span>
          </li>
          <li className="flex justify-between">
            <span className="text-muted-foreground">Interest Cost:</span>
            <span className="font-medium text-foreground">R44,800</span>
          </li>
          <li className="flex justify-between">
            <span className="text-muted-foreground">LC Confirmation Fee (0.5%):</span>
            <span className="font-medium text-foreground">R21,000</span>
          </li>
          <li className="flex justify-between border-t border-border pt-3 mt-3">
            <span className="font-medium text-foreground">Net Profit:</span>
            <span className="font-semibold text-accent">R1,334,200</span>
          </li>
        </ul>
      </div>

      <p className="leading-relaxed">
        The LC gave the producer confidence to ship internationally, allowed them to access pre-shipment finance, 
        and guaranteed payment upon compliant document presentation.
      </p>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        Bank Guarantees Explained
      </h2>

      <p className="leading-relaxed">
        Bank guarantees are essential for SMEs competing for contracts. Common types include:
      </p>

      <div className="space-y-6 mt-8">
        <div className="bg-muted/50 rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-2">Bid Bond / Tender Guarantee</h3>
          <p className="text-muted-foreground leading-relaxed">
            Guarantees you&apos;ll honour your bid if selected. Typically 2-5% of contract value. 
            Essential for government tenders and corporate contracts.
          </p>
        </div>

        <div className="bg-muted/50 rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-2">Performance Bond</h3>
          <p className="text-muted-foreground leading-relaxed">
            Guarantees you&apos;ll complete the contract as agreed. Typically 10-15% of contract value. 
            Required for construction, supply contracts, and long-term agreements.
          </p>
        </div>

        <div className="bg-muted/50 rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-2">Advance Payment Guarantee</h3>
          <p className="text-muted-foreground leading-relaxed">
            Protects the buyer if you receive an advance but don&apos;t deliver. 
            Allows you to receive upfront payment to fund production.
          </p>
        </div>

        <div className="bg-muted/50 rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-2">Retention Guarantee</h3>
          <p className="text-muted-foreground leading-relaxed">
            Allows early release of retention money. Instead of the buyer holding 10% for defects, 
            you provide a guarantee and receive full payment immediately.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        Trade Finance vs. Traditional Loans
      </h2>

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-medium text-foreground">Aspect</th>
              <th className="text-left py-3 px-4 font-medium text-foreground">Trade Finance</th>
              <th className="text-left py-3 px-4 font-medium text-foreground">Bank Loan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="py-3 px-4 text-muted-foreground">Purpose</td>
              <td className="py-3 px-4">Specific trade transaction</td>
              <td className="py-3 px-4">General business purposes</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-muted-foreground">Security</td>
              <td className="py-3 px-4">The transaction itself</td>
              <td className="py-3 px-4">Collateral required</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-muted-foreground">Term</td>
              <td className="py-3 px-4">Short (30-180 days)</td>
              <td className="py-3 px-4">Medium to long term</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-muted-foreground">Repayment</td>
              <td className="py-3 px-4">From trade proceeds</td>
              <td className="py-3 px-4">From general cash flow</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-muted-foreground">Scalability</td>
              <td className="py-3 px-4">Grows with trade volume</td>
              <td className="py-3 px-4">Fixed amount</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        Frequently Asked Questions
      </h2>

      <div className="space-y-8 mt-8">
        <div>
          <h3 className="font-semibold text-foreground mb-2">
            How much does a Letter of Credit cost?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            LC fees vary but typically include: issuance fee (0.1-0.5% of LC value), 
            advising fee (fixed or percentage), confirmation fee if applicable (0.3-2%), 
            and amendment fees if terms change.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-2">
            What happens if my documents have discrepancies?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Discrepant documents give the issuing bank grounds to refuse payment. 
            You may need to correct documents, request a waiver from the buyer, 
            or accept reduced payment. Discrepancy rates in trade are high; careful document preparation is critical.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-2">
            Can I use trade finance for domestic transactions?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Yes. While trade finance is most common in international trade, domestic LCs and guarantees 
            are used for large local contracts, particularly in construction and government tenders.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-2">
            How do I get a bank guarantee if I don&apos;t have collateral?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Some specialist providers issue guarantees against cash deposits, 
            contract assignments, or with partial collateral. Alternative guarantee providers 
            can also issue bonds backed by insurance rather than traditional collateral.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        The Bottom Line
      </h2>

      <p className="leading-relaxed">
        Trade finance is the infrastructure of commerce. Understanding LCs, guarantees, and documentary collections 
        opens doors to international markets and larger contracts.
      </p>

      <p className="leading-relaxed mt-6">
        For SMEs, trade finance provides security, access to working capital, and the credibility 
        to compete with larger players.
      </p>

      <div className="bg-foreground text-background rounded-lg p-8 my-12">
        <h3 className="text-xl font-serif font-medium mb-4">
          Need Help With Trade Finance?
        </h3>
        <p className="text-background/80 mb-6 leading-relaxed">
          Whether you need to understand an LC, arrange a bank guarantee, or structure trade financing, 
          we can help. Send us your trade documents and we&apos;ll guide you through the process.
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
