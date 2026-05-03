import { ArticleLayout } from "@/components/article-layout"

export const metadata = {
  title: "How Pre-Shipment Finance Works (Complete Guide for SMEs) | DEM",
  description: "A comprehensive guide to understanding pre-shipment finance, export funding, and how South African SMEs can fund production before goods are shipped internationally.",
}

export default function Article() {
  return (
    <ArticleLayout
      title="How Pre-Shipment Finance Works (Complete Guide for SMEs)"
      category="Pre-Shipment Finance"
      readTime="9 min read"
    >
      <p className="text-xl text-muted-foreground leading-relaxed">
        You&apos;ve landed an export order. The buyer is overseas, the margins are excellent, 
        and the Letter of Credit is confirmed. But you need R2 million to manufacture the goods before you can ship them.
      </p>

      <p className="leading-relaxed mt-6">
        This is the export funding gap. You can&apos;t get paid until you ship. You can&apos;t ship until you manufacture. 
        You can&apos;t manufacture without capital.
      </p>

      <p className="leading-relaxed mt-6">
        Pre-shipment finance exists to bridge this gap. It&apos;s funding specifically designed for exporters 
        who need capital to fulfil confirmed international orders.
      </p>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        What Is Pre-Shipment Finance?
      </h2>

      <p className="leading-relaxed">
        Pre-shipment finance (also called packing credit or export working capital) is short-term funding provided 
        to exporters to help them manufacture, purchase, or pack goods before shipping to an overseas buyer.
      </p>

      <p className="leading-relaxed mt-6">
        The financing is typically secured against a confirmed export order, usually backed by a Letter of Credit (LC) 
        or a confirmed purchase order from a creditworthy international buyer.
      </p>

      <p className="leading-relaxed mt-6">
        Once you ship the goods and present the required documents, the financing is repaid from the export proceeds.
      </p>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        How Does It Work? Step-by-Step
      </h2>

      <div className="bg-muted/50 rounded-lg p-6 my-8">
        <h3 className="font-semibold text-foreground mb-4">The Pre-Shipment Finance Process</h3>
        
        <div className="space-y-6">
          <div>
            <p className="font-medium text-foreground">Step 1: Receive Confirmed Export Order</p>
            <p className="text-muted-foreground mt-2">
              Your overseas buyer issues a Letter of Credit through their bank, or you receive a confirmed purchase order 
              from a creditworthy international company.
            </p>
          </div>

          <div>
            <p className="font-medium text-foreground">Step 2: Apply for Pre-Shipment Finance</p>
            <p className="text-muted-foreground mt-2">
              You submit the LC or export order to a bank or trade finance provider. 
              They assess the buyer, the issuing bank, and the transaction structure.
            </p>
          </div>

          <div>
            <p className="font-medium text-foreground">Step 3: Receive Funding</p>
            <p className="text-muted-foreground mt-2">
              Once approved, you receive funds (typically 70-90% of the order value) to purchase raw materials, 
              pay for manufacturing, and prepare goods for export.
            </p>
          </div>

          <div>
            <p className="font-medium text-foreground">Step 4: Manufacture and Ship</p>
            <p className="text-muted-foreground mt-2">
              You produce the goods, complete quality control, and ship according to the LC terms. 
              You obtain the required shipping documents (bill of lading, commercial invoice, packing list, etc.).
            </p>
          </div>

          <div>
            <p className="font-medium text-foreground">Step 5: Present Documents</p>
            <p className="text-muted-foreground mt-2">
              You present the shipping documents to your bank. They forward them to the buyer&apos;s bank for payment.
            </p>
          </div>

          <div>
            <p className="font-medium text-foreground">Step 6: Receive Payment and Settle</p>
            <p className="text-muted-foreground mt-2">
              When the buyer&apos;s bank pays under the LC, your bank deducts the pre-shipment finance plus interest, 
              and credits the balance to your account.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        A Real Example (In Rands)
      </h2>

      <p className="leading-relaxed">
        Let&apos;s say you manufacture agricultural equipment and receive an export order from a buyer in Kenya, 
        backed by a confirmed LC for USD 150,000 (approximately R2.7 million at R18/USD).
      </p>

      <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 my-8">
        <ul className="space-y-3">
          <li className="flex justify-between">
            <span className="text-muted-foreground">LC Value:</span>
            <span className="font-medium text-foreground">R2,700,000</span>
          </li>
          <li className="flex justify-between">
            <span className="text-muted-foreground">Your Production Cost:</span>
            <span className="font-medium text-foreground">R1,800,000</span>
          </li>
          <li className="flex justify-between">
            <span className="text-muted-foreground">Pre-Shipment Finance (80%):</span>
            <span className="font-medium text-foreground">R2,160,000</span>
          </li>
          <li className="flex justify-between">
            <span className="text-muted-foreground">Interest (90 days at 12% p.a.):</span>
            <span className="font-medium text-foreground">R64,800</span>
          </li>
          <li className="flex justify-between border-t border-border pt-3 mt-3">
            <span className="font-medium text-foreground">Your Profit After Finance:</span>
            <span className="font-semibold text-accent">R835,200</span>
          </li>
        </ul>
      </div>

      <p className="leading-relaxed">
        Without pre-shipment finance, you couldn&apos;t have fulfilled this R2.7 million export order. 
        With it, you made over R800,000 in profit.
      </p>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        Types of Pre-Shipment Finance
      </h2>

      <div className="space-y-6 mt-8">
        <div className="bg-muted/50 rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-2">Packing Credit</h3>
          <p className="text-muted-foreground leading-relaxed">
            A loan provided against a confirmed export order or LC to finance the purchase of raw materials 
            and manufacturing costs. The most common form of pre-shipment finance.
          </p>
        </div>

        <div className="bg-muted/50 rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-2">Advance Against LC</h3>
          <p className="text-muted-foreground leading-relaxed">
            Your bank provides an advance against an irrevocable LC before shipment. 
            The LC serves as primary security for the advance.
          </p>
        </div>

        <div className="bg-muted/50 rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-2">Green Clause LC</h3>
          <p className="text-muted-foreground leading-relaxed">
            A special type of LC that authorises the advising bank to make advances to the exporter 
            before goods are shipped. The advance is built into the LC terms.
          </p>
        </div>

        <div className="bg-muted/50 rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-2">Red Clause LC</h3>
          <p className="text-muted-foreground leading-relaxed">
            Similar to green clause, but allows advances without requiring warehouse receipts. 
            Less common due to higher risk for the issuing bank.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        What Do Financiers Look At?
      </h2>

      <ul className="list-disc pl-6 space-y-3 mt-6">
        <li>
          <strong>LC Quality:</strong> Is the LC irrevocable? Is it confirmed by a reputable bank? 
          What are the payment terms?
        </li>
        <li>
          <strong>Issuing Bank:</strong> The creditworthiness of the buyer&apos;s bank matters. 
          A major international bank provides more security than an unknown regional bank.
        </li>
        <li>
          <strong>Your Export Track Record:</strong> Have you successfully completed export orders before? 
          Experience matters.
        </li>
        <li>
          <strong>Production Capability:</strong> Can you actually manufacture and ship the goods on time? 
          They&apos;ll want to see your capacity.
        </li>
        <li>
          <strong>Country Risk:</strong> Some destination countries carry higher political or currency risk. 
          This affects terms and pricing.
        </li>
      </ul>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        Pre-Shipment vs. Post-Shipment Finance
      </h2>

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-medium text-foreground">Aspect</th>
              <th className="text-left py-3 px-4 font-medium text-foreground">Pre-Shipment</th>
              <th className="text-left py-3 px-4 font-medium text-foreground">Post-Shipment</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="py-3 px-4 text-muted-foreground">Timing</td>
              <td className="py-3 px-4">Before goods are shipped</td>
              <td className="py-3 px-4">After goods are shipped</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-muted-foreground">Purpose</td>
              <td className="py-3 px-4">Fund production/procurement</td>
              <td className="py-3 px-4">Bridge until payment received</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-muted-foreground">Security</td>
              <td className="py-3 px-4">LC or confirmed order</td>
              <td className="py-3 px-4">Shipping documents</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-muted-foreground">Risk Level</td>
              <td className="py-3 px-4">Higher (goods not yet shipped)</td>
              <td className="py-3 px-4">Lower (goods already in transit)</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-muted-foreground">Typical Rate</td>
              <td className="py-3 px-4">Higher</td>
              <td className="py-3 px-4">Lower</td>
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
            Do I need a Letter of Credit for pre-shipment finance?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            An LC is preferred because it provides strong security. However, some financiers will consider 
            confirmed purchase orders from creditworthy international buyers, especially if you have a track record.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-2">
            What percentage of the order value can I get?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Typically 70-90% of the order value, depending on the LC terms, your track record, 
            and the financier&apos;s assessment of the transaction.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-2">
            How long does approval take?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            If you have an existing facility, funding can be released within 24-48 hours of presenting the LC. 
            Setting up a new facility can take 2-4 weeks.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-2">
            What happens if my buyer doesn&apos;t pay?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            If you have a confirmed irrevocable LC, the confirming bank is obligated to pay regardless of the buyer&apos;s situation. 
            This is why LC quality matters so much.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-2">
            Can I use pre-shipment finance for domestic orders?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Pre-shipment finance is specifically for export transactions. For domestic orders, 
            you would look at purchase order financing or invoice discounting.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-6">
        The Bottom Line
      </h2>

      <p className="leading-relaxed">
        Pre-shipment finance unlocks export opportunities that would otherwise be impossible. 
        If you have a confirmed international order but lack the capital to produce and ship, 
        this is the solution.
      </p>

      <p className="leading-relaxed mt-6">
        The key is having strong export documentation: a quality LC from a reputable bank, 
        clear production capability, and ideally some export track record.
      </p>

      <div className="bg-foreground text-background rounded-lg p-8 my-12">
        <h3 className="text-xl font-serif font-medium mb-4">
          Have an Export Order You Need to Fund?
        </h3>
        <p className="text-background/80 mb-6 leading-relaxed">
          Send us your LC or export order details. We&apos;ll assess the transaction and connect you 
          with the right trade finance partner within 24-48 hours.
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
