import { ArticleLayout } from "@/components/article-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How Invoice Discounting Works (Complete Guide for SMEs) | DEM",
  description: "A comprehensive guide to understanding invoice discounting in South Africa. Learn step-by-step how SMEs can unlock working capital from unpaid invoices.",
}

export default function HowInvoiceDiscountingWorksPage() {
  return (
    <ArticleLayout
      title="How Invoice Discounting Works (Complete Guide for SMEs)"
      category="Invoice Discounting"
      readTime="8 min read"
    >
      <p className="text-xl text-muted-foreground leading-relaxed">
        Invoice discounting is one of the most powerful tools available to South African SMEs for unlocking working capital. Yet most business owners either don&apos;t know it exists or don&apos;t understand how it actually works. This guide changes that.
      </p>

      <h2>What is Invoice Discounting?</h2>
      <p>
        Invoice discounting is a form of short-term financing where a business uses its unpaid invoices as collateral to access immediate cash. Instead of waiting 30, 60, or 90 days for your customer to pay, you receive up to 80-90% of the invoice value within 24-48 hours.
      </p>
      <p>
        Unlike factoring (where the financier takes over collections), with invoice discounting you remain in control of your customer relationships. Your customers don&apos;t even need to know you&apos;re using this facility.
      </p>

      <h2>Step-by-Step: How a Transaction Works</h2>
      <p>Here&apos;s exactly how an invoice discounting transaction flows:</p>
      
      <h3>Step 1: You Deliver Goods or Services</h3>
      <p>
        You complete a job or deliver goods to your customer and issue an invoice with standard payment terms (e.g., 30 days).
      </p>

      <h3>Step 2: Submit the Invoice</h3>
      <p>
        You submit the invoice to the financier along with proof of delivery (POD), contracts, or purchase orders that verify the transaction.
      </p>

      <h3>Step 3: Receive Advance Payment</h3>
      <p>
        Within 24-48 hours, you receive 80-90% of the invoice value directly into your account. This is your advance.
      </p>

      <h3>Step 4: Customer Pays at Maturity</h3>
      <p>
        When your customer pays the invoice (to you or a designated account), the financier releases the remaining balance minus their fee.
      </p>

      <h2>Real-World Example with Numbers</h2>
      <p>Let&apos;s say you run a logistics company in Johannesburg:</p>
      <ul>
        <li><strong>Invoice amount:</strong> R500,000</li>
        <li><strong>Payment terms:</strong> 60 days</li>
        <li><strong>Advance rate:</strong> 85%</li>
        <li><strong>Discount fee:</strong> 2.5% per month</li>
      </ul>
      
      <p><strong>Day 1:</strong> You submit the invoice and receive R425,000 (85% of R500,000)</p>
      <p><strong>Day 60:</strong> Your customer pays R500,000</p>
      <p><strong>Settlement:</strong> You receive R75,000 minus the fee of R25,000 (2.5% × 2 months × R500,000) = R50,000</p>
      <p><strong>Total received:</strong> R475,000</p>
      <p><strong>Cost of finance:</strong> R25,000 (5% of invoice value)</p>

      <h2>Timeline of Cash Flow</h2>
      <div className="bg-muted/50 p-6 rounded-lg my-6">
        <p className="font-medium mb-4">Without Invoice Discounting:</p>
        <p className="text-muted-foreground">Day 0 → Deliver goods → Wait 60 days → Receive R500,000</p>
        
        <p className="font-medium mb-4 mt-6">With Invoice Discounting:</p>
        <p className="text-muted-foreground">Day 0 → Deliver goods → Day 2: Receive R425,000 → Day 60: Receive R50,000</p>
      </div>
      <p>
        The difference? You have R425,000 in your account on Day 2 instead of waiting two months. That cash can fund your next deal, pay suppliers, or meet payroll.
      </p>

      <h2>Who Qualifies for Invoice Discounting?</h2>
      <p>Invoice discounting works best for businesses that:</p>
      <ul>
        <li>Sell to creditworthy customers (corporates, government, established businesses)</li>
        <li>Have clear proof of delivery or service completion</li>
        <li>Issue invoices with payment terms of 30-120 days</li>
        <li>Generate at least R500,000 in monthly revenue</li>
        <li>Have been trading for 12+ months (though exceptions exist)</li>
      </ul>

      <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg my-6">
        <p className="font-medium text-foreground">Pro Tip:</p>
        <p className="text-muted-foreground mt-2">
          The quality of your customer matters more than your own credit history. If you supply Pick n Pay, Shoprite, or a major mining company, you&apos;re likely fundable even if your business is young.
        </p>
      </div>

      <h2>Common Mistakes SMEs Make</h2>
      
      <h3>1. Waiting Until They&apos;re Desperate</h3>
      <p>
        The worst time to seek finance is when you&apos;re already in trouble. Financiers can see stress in your numbers. The best time to set up a facility is when business is good.
      </p>

      <h3>2. Not Understanding the True Cost</h3>
      <p>
        Some SMEs compare invoice discounting rates to bank loan rates. This is wrong. Invoice discounting is short-term working capital, not a loan. Compare it to the cost of lost opportunities or supplier early payment discounts you&apos;re missing.
      </p>

      <h3>3. Poor Documentation</h3>
      <p>
        Financiers need to verify that the invoice is real and the goods were delivered. If you can&apos;t produce PODs, contracts, or purchase orders, you won&apos;t get funded. Keep your paperwork tight.
      </p>

      <h3>4. Choosing the Wrong Financier</h3>
      <p>
        Not all invoice discounting providers are the same. Some are rigid, some are expensive, and some don&apos;t understand your industry. Work with a structuring partner who can match you with the right financier for your specific situation.
      </p>

      <h2>Frequently Asked Questions</h2>
      
      <h3>Will my customers know I&apos;m using invoice discounting?</h3>
      <p>
        Not necessarily. With confidential invoice discounting, your customers continue paying you directly. The financier works behind the scenes.
      </p>

      <h3>What if my customer pays late?</h3>
      <p>
        Late payment affects your cost (fees may continue accruing) but doesn&apos;t create a crisis. Most facilities have built-in buffers for payment delays.
      </p>

      <h3>Can I discount all my invoices or just some?</h3>
      <p>
        This depends on the facility structure. Some require whole-ledger discounting; others allow selective discounting of specific invoices.
      </p>

      <h3>How is this different from factoring?</h3>
      <p>
        With factoring, the financier typically takes over collections and your customer pays them directly. With invoice discounting, you maintain control of collections. Discounting is usually more confidential but requires stronger internal processes.
      </p>

      <h3>What happens if my customer doesn&apos;t pay at all?</h3>
      <p>
        This depends on whether you have recourse or non-recourse financing. Most facilities in South Africa are with recourse, meaning you&apos;re ultimately responsible if the customer defaults.
      </p>

      <h2>Is Invoice Discounting Right for You?</h2>
      <p>
        Invoice discounting is ideal if you have strong customers, growing sales, and need working capital to take on more business. It&apos;s not a solution for businesses with fundamental problems—it&apos;s a growth accelerator for businesses with solid foundations.
      </p>
      <p>
        If you&apos;re sitting on R1 million in receivables while struggling to fund your next order, invoice discounting could unlock your growth. The question isn&apos;t whether you can afford it—it&apos;s whether you can afford to keep waiting for your customers to pay.
      </p>
    </ArticleLayout>
  )
}
