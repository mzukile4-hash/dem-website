import { ArticleLayout } from "@/components/article-layout"

export const metadata = {
  title: "How Early Payment Programmes Work | Digital Equity Management",
  description: "Learn how early payment programmes help South African SMEs get paid faster by their corporate buyers. A practical guide with real Rand examples.",
}

export default function HowEarlyPaymentProgrammesWorkPage() {
  return (
    <ArticleLayout
      title="How Early Payment Programmes Work"
      subtitle="A Simple Guide for South African SMEs"
      category="Early Payment Programmes"
      readTime="7 min read"
    >
      <p className="text-xl text-muted-foreground leading-relaxed mb-8">
        If you supply goods or services to large corporates, you know the pain of waiting 60, 90, or even 120 days to get paid.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        Early payment programmes flip this script. They let you get paid in days instead of months, without taking on debt or giving up equity.
      </p>

      <p className="text-lg leading-relaxed mb-8">
        This guide explains exactly how these programmes work, what they cost, and whether they make sense for your business.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-6">What Is an Early Payment Programme?</h2>

      <p className="text-lg leading-relaxed mb-6">
        An early payment programme is a financing arrangement where your corporate buyer partners with a funder to pay you earlier than your normal payment terms.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        Instead of waiting 90 days, you can choose to get paid in 10-14 days. The funder pays you upfront, then collects from your buyer on the original due date.
      </p>

      <p className="text-lg leading-relaxed mb-8">
        The key difference from other financing: these programmes are driven by the buyer, not the supplier. The buyer&apos;s credit rating determines the pricing, which often means much lower costs for you.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-6">How the Process Works</h2>

      <div className="bg-muted/30 p-8 rounded-lg mb-8">
        <h3 className="font-semibold text-lg mb-4">Step-by-Step:</h3>
        
        <div className="space-y-4">
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">1</span>
            <p className="text-lg">You deliver goods or services to your corporate buyer</p>
          </div>

          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">2</span>
            <p className="text-lg">Your buyer approves your invoice on their system</p>
          </div>

          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">3</span>
            <p className="text-lg">The approved invoice appears on the early payment platform</p>
          </div>

          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">4</span>
            <p className="text-lg">You choose which invoices to accelerate</p>
          </div>

          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">5</span>
            <p className="text-lg">The funder pays you within days (minus a small fee)</p>
          </div>

          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">6</span>
            <p className="text-lg">Your buyer pays the funder on the original due date</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-12 mb-6">A Real Example in Rands</h2>

      <div className="bg-accent/20 p-8 rounded-lg mb-8">
        <p className="text-lg leading-relaxed mb-4">
          <strong>Scenario:</strong> You supply cleaning products to a major retail chain with 90-day payment terms.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          <strong>Invoice amount:</strong> R500,000
        </p>

        <p className="text-lg leading-relaxed mb-4">
          <strong>Days until payment:</strong> 85 days remaining
        </p>

        <p className="text-lg leading-relaxed mb-4">
          <strong>Early payment discount rate:</strong> 0.9% per month (based on the retailer&apos;s credit rating)
        </p>

        <p className="text-lg leading-relaxed mb-4">
          <strong>Cost to accelerate:</strong> R500,000 × 0.9% × (85/30) = R12,750
        </p>

        <p className="text-lg leading-relaxed mb-4">
          <strong>You receive:</strong> R487,250 in 3 days instead of R500,000 in 85 days
        </p>

        <p className="text-lg leading-relaxed">
          <strong>Effective cost:</strong> Lower than most other financing options because pricing is based on your buyer&apos;s credit, not yours
        </p>
      </div>

      <h2 className="text-2xl font-semibold mt-12 mb-6">Why Pricing Is Often Lower</h2>

      <p className="text-lg leading-relaxed mb-6">
        Traditional invoice financing prices based on your credit risk as the supplier. If you&apos;re a small business, that means higher rates.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        Early payment programmes work differently. The funder looks at your buyer&apos;s credit risk, and if your buyer is Pick n Pay, Shoprite, or a mining house, that risk is very low.
      </p>

      <p className="text-lg leading-relaxed mb-8">
        Low risk equals low pricing. You benefit from your customer&apos;s financial strength.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-6">The Flexibility Factor</h2>

      <p className="text-lg leading-relaxed mb-6">
        One of the biggest advantages is choice. You decide which invoices to accelerate and when.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        Cash flow tight this month? Accelerate everything. Flush with cash? Wait for normal payment.
      </p>

      <p className="text-lg leading-relaxed mb-8">
        There&apos;s no commitment, no minimum volume, and no penalty for not using the facility.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-6">What You Need to Qualify</h2>

      <ul className="space-y-4 mb-8">
        <li className="flex items-start gap-3">
          <span className="text-primary mt-1">•</span>
          <p className="text-lg">Supply to a corporate buyer that has an early payment programme</p>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary mt-1">•</span>
          <p className="text-lg">Approved invoices on your buyer&apos;s system</p>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary mt-1">•</span>
          <p className="text-lg">A bank account to receive payment</p>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary mt-1">•</span>
          <p className="text-lg">Basic KYC documentation (company registration, ID documents)</p>
        </li>
      </ul>

      <p className="text-lg leading-relaxed mb-8">
        Notice what&apos;s not on the list: financials, tax clearance, collateral, or trading history. The buyer&apos;s approval of your invoice is the main requirement.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-6">Common Questions</h2>

      <div className="space-y-6 mb-8">
        <div>
          <h3 className="font-semibold text-lg mb-2">Does my buyer need to know I&apos;m using this?</h3>
          <p className="text-lg text-muted-foreground">Yes, but they&apos;ve already set up the programme specifically to help suppliers like you. Using it is encouraged, not frowned upon.</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">What if my buyer doesn&apos;t have a programme?</h3>
          <p className="text-lg text-muted-foreground">We can help you explore other options like invoice discounting, or in some cases, help your buyer set up a programme.</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Is there a minimum invoice size?</h3>
          <p className="text-lg text-muted-foreground">This varies by programme. Some have minimums of R50,000, others go as low as R10,000.</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">How quickly can I get set up?</h3>
          <p className="text-lg text-muted-foreground">If your buyer has an existing programme, onboarding typically takes 3-5 business days.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-12 mb-6">Is This Right for Your Business?</h2>

      <p className="text-lg leading-relaxed mb-6">
        Early payment programmes work well if you supply to large corporates with extended payment terms and want predictable, low-cost access to cash flow.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        They&apos;re particularly powerful for businesses that have grown their corporate customer base but find themselves squeezed by long payment cycles.
      </p>

      <p className="text-lg leading-relaxed mb-8">
        The combination of buyer-backed pricing and flexible usage makes this one of the most supplier-friendly financing options available.
      </p>

      <div className="bg-primary/5 border border-primary/20 p-8 rounded-lg mt-12">
        <h3 className="text-xl font-semibold mb-4">Ready to Explore Early Payment Programmes?</h3>
        
        <p className="text-lg mb-6">
          At Digital Equity Management, we help South African SMEs connect with early payment programmes that match their corporate customer base. Let&apos;s discuss whether this solution fits your business.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.me/27794425113?text=DEM"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            WhatsApp Us
          </a>
          <a
            href="mailto:lizo@demng.co.za?subject=DEM%20Inquiry"
            className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-md font-medium hover:bg-primary/5 transition-colors"
          >
            Send Inquiry
          </a>
        </div>
      </div>
    </ArticleLayout>
  )
}
