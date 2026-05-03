import { ArticleLayout } from "@/components/article-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How Factoring Works (Complete Guide for SMEs) | DEM",
  description: "A complete guide to factoring in South Africa. Learn how to sell your invoices, manage collections, and unlock immediate cash flow for your business.",
}

export default function HowFactoringWorksPage() {
  return (
    <ArticleLayout
      title="How Factoring Works (Complete Guide for SMEs)"
      category="Factoring"
      readTime="8 min read"
    >
      <p className="text-xl text-muted-foreground leading-relaxed">
        Factoring is one of the oldest forms of trade finance, yet many South African SMEs don&apos;t fully understand how it works or how it differs from invoice discounting. This guide gives you everything you need to know.
      </p>

      <h2>What is Factoring?</h2>
      <p>
        Factoring is the sale of your accounts receivable (invoices) to a third-party financier called a factor. In exchange, you receive immediate cash—typically 70-85% of the invoice value—while the factor takes over collection from your customer.
      </p>
      <p>
        Unlike invoice discounting where you maintain control of collections, with factoring the factor becomes responsible for chasing payment. Your customer pays the factor directly, not you.
      </p>
      <p>
        Once the customer pays, you receive the remaining balance minus the factor&apos;s fee.
      </p>

      <h2>Step-by-Step: How a Factoring Transaction Works</h2>

      <h3>Step 1: You Deliver and Invoice</h3>
      <p>
        You complete your work or deliver goods to your customer. You issue an invoice as normal, but the invoice instructs payment to the factor&apos;s designated account (not yours).
      </p>

      <h3>Step 2: Submit to the Factor</h3>
      <p>
        You submit the invoice to your factoring company along with proof of delivery, purchase orders, or contracts that verify the transaction is legitimate.
      </p>

      <h3>Step 3: Receive Your Advance</h3>
      <p>
        Within 24-48 hours, the factor advances you 70-85% of the invoice value. This is immediate cash you can use for any business purpose.
      </p>

      <h3>Step 4: Factor Manages Collection</h3>
      <p>
        The factor now manages the collection process. They send payment reminders, follow up with your customer, and handle any queries about the invoice.
      </p>

      <h3>Step 5: Customer Pays the Factor</h3>
      <p>
        When your customer pays, they pay directly to the factor. This is a key difference from invoice discounting.
      </p>

      <h3>Step 6: You Receive the Balance</h3>
      <p>
        Once payment is received, the factor releases the remaining balance to you, minus their fee (typically 1.5-3.5% of the invoice value).
      </p>

      <h2>Real-World Example with Numbers</h2>
      <p>Let&apos;s say you run a cleaning services company in Cape Town:</p>
      <ul>
        <li><strong>Invoice amount:</strong> R200,000</li>
        <li><strong>Payment terms:</strong> 45 days</li>
        <li><strong>Advance rate:</strong> 80%</li>
        <li><strong>Factoring fee:</strong> 2.5%</li>
      </ul>

      <p><strong>Day 1:</strong> You submit the invoice and receive R160,000 (80% of R200,000)</p>
      <p><strong>Day 45:</strong> Your customer pays R200,000 to the factor</p>
      <p><strong>Settlement:</strong> Factor releases R40,000 minus fee of R5,000 (2.5% × R200,000) = R35,000</p>
      <p><strong>Total received:</strong> R195,000</p>
      <p><strong>Cost of finance:</strong> R5,000 (2.5% of invoice value)</p>

      <h2>Timeline Comparison</h2>
      <div className="bg-muted/50 p-6 rounded-lg my-6">
        <p className="font-medium mb-4">Without Factoring:</p>
        <p className="text-muted-foreground">Day 0 → Complete service → Wait 45 days → Receive R200,000 (if customer pays on time)</p>
        
        <p className="font-medium mb-4 mt-6">With Factoring:</p>
        <p className="text-muted-foreground">Day 0 → Complete service → Day 2: Receive R160,000 → Day 45: Receive R35,000</p>
      </div>

      <h2>Who Qualifies for Factoring?</h2>
      <p>Factoring works well for businesses that:</p>
      <ul>
        <li>Sell B2B (business-to-business) on credit terms</li>
        <li>Have customers who are creditworthy (corporates, government, established businesses)</li>
        <li>Issue clear invoices with documented proof of delivery</li>
        <li>Want to outsource credit control and collections</li>
        <li>Are comfortable with customers knowing about the financing arrangement</li>
      </ul>

      <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg my-6">
        <p className="font-medium text-foreground">Pro Tip:</p>
        <p className="text-muted-foreground mt-2">
          Factoring is often easier to qualify for than invoice discounting because the factor takes control of collections. This reduced risk for the financier can mean better approval rates for newer businesses or those with less sophisticated credit control processes.
        </p>
      </div>

      <h2>Factoring vs Invoice Discounting: Key Differences</h2>
      
      <h3>Collections</h3>
      <p>
        <strong>Factoring:</strong> The factor handles collections. Your customer pays them directly.<br />
        <strong>Invoice Discounting:</strong> You handle collections. The customer pays you.
      </p>

      <h3>Confidentiality</h3>
      <p>
        <strong>Factoring:</strong> Your customer knows you&apos;re using finance (they pay the factor).<br />
        <strong>Invoice Discounting:</strong> Can be confidential—your customer may not know.
      </p>

      <h3>Administration</h3>
      <p>
        <strong>Factoring:</strong> Less admin for you—the factor handles chasing payments.<br />
        <strong>Invoice Discounting:</strong> More admin—you remain responsible for collections.
      </p>

      <h3>Cost</h3>
      <p>
        <strong>Factoring:</strong> Often slightly higher fees due to collection services included.<br />
        <strong>Invoice Discounting:</strong> Sometimes lower fees, but you bear collection costs.
      </p>

      <h2>Common Mistakes SMEs Make with Factoring</h2>

      <h3>1. Not Understanding Recourse Terms</h3>
      <p>
        Most factoring in South Africa is &quot;with recourse,&quot; meaning if your customer doesn&apos;t pay, you&apos;re responsible. Make sure you understand what happens with bad debts before signing.
      </p>

      <h3>2. Worrying Too Much About Customer Perception</h3>
      <p>
        Yes, your customer will know you&apos;re factoring. But in 2024, this is normal business practice. Major companies factor. It&apos;s not a sign of weakness—it&apos;s a sign of professional cash flow management.
      </p>

      <h3>3. Factoring Problem Invoices</h3>
      <p>
        Don&apos;t submit invoices that are disputed, incomplete, or for customers who won&apos;t pay. Factors will discover this, and it damages your relationship and credibility.
      </p>

      <h3>4. Ignoring the Fine Print</h3>
      <p>
        Understand minimum volume commitments, notice periods, and what happens if you want to exit the arrangement. Some contracts are more flexible than others.
      </p>

      <h2>Frequently Asked Questions</h2>

      <h3>Will factoring damage my customer relationships?</h3>
      <p>
        Professional factors handle collections courteously. They represent an extension of your business. However, if your customer strongly objects to third-party involvement, invoice discounting might be a better fit.
      </p>

      <h3>Can I factor some invoices but not others?</h3>
      <p>
        This depends on your agreement. Some factors require &quot;whole ledger&quot; factoring (all invoices). Others allow selective factoring. Discuss your needs upfront.
      </p>

      <h3>What if my customer pays late?</h3>
      <p>
        The factor continues collection efforts. You may incur additional fees for extended periods, but the factor&apos;s job is to get the money in. They&apos;re usually more persistent (and professional) than overstretched internal teams.
      </p>

      <h3>Is factoring regulated in South Africa?</h3>
      <p>
        Factoring companies in South Africa are not as heavily regulated as banks. This means you need to choose reputable providers carefully. Look for members of industry associations and check references.
      </p>

      <h3>How quickly can I start factoring?</h3>
      <p>
        Initial setup typically takes 5-10 business days with proper documentation. Once established, individual invoices can be funded within 24-48 hours.
      </p>

      <h2>Is Factoring Right for Your Business?</h2>
      <p>
        Factoring is ideal if you:
      </p>
      <ul>
        <li>Need immediate cash flow from receivables</li>
        <li>Want to outsource credit control and collections</li>
        <li>Don&apos;t have strong internal collections processes</li>
        <li>Are comfortable with your customers knowing about the arrangement</li>
        <li>Sell to creditworthy B2B customers</li>
      </ul>
      <p>
        If you prefer confidentiality and have strong internal collections, invoice discounting might suit you better. Many businesses use both depending on the customer and situation.
      </p>
      <p>
        The key question is: what&apos;s the cost of waiting for payment versus the cost of factoring? If slow payment is constraining your growth, factoring could be the unlock you need.
      </p>
    </ArticleLayout>
  )
}
