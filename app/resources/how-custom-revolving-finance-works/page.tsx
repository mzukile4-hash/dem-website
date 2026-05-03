import { ArticleLayout } from "@/components/article-layout"

export const metadata = {
  title: "How Custom Revolving Finance Works | Digital Equity Management",
  description: "Learn how custom revolving finance structures provide South African SMEs with flexible, tailored working capital solutions that grow with your business.",
}

export default function HowCustomRevolvingFinanceWorksPage() {
  return (
    <ArticleLayout
      title="How Custom Revolving Finance Works"
      subtitle="Flexible Working Capital Tailored to Your Business"
      category="Custom Revolving Finance"
      readTime="8 min read"
    >
      <p className="text-xl text-muted-foreground leading-relaxed mb-8">
        Standard financing products don&apos;t always fit. Your business has unique cycles, specific customer bases, and particular working capital patterns.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        Custom revolving finance structures are designed around your business, not the other way around.
      </p>

      <p className="text-lg leading-relaxed mb-8">
        This guide explains what revolving facilities are, how they can be customized, and when they make sense for your business.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-6">What Is Revolving Finance?</h2>

      <p className="text-lg leading-relaxed mb-6">
        Revolving finance is a credit facility that you can draw from, repay, and draw from again. Think of it like a credit card for your business, but with structures designed for commercial use.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        Unlike a term loan where you receive a lump sum and pay it back over time, revolving facilities flex with your needs. You only pay interest on what you use.
      </p>

      <p className="text-lg leading-relaxed mb-8">
        The &quot;custom&quot; part means the facility is structured specifically for your business. The limit, pricing, security, and repayment triggers are all designed around how your business actually operates.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-6">How It Differs from Standard Overdrafts</h2>

      <div className="bg-muted/30 p-8 rounded-lg mb-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Standard Bank Overdraft</h3>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-lg">Generic terms for all businesses</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-lg">Usually requires property security</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-lg">Annual review and potential reduction</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <p className="text-lg">Limited flexibility on limit increases</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Custom Revolving Facility</h3>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <p className="text-lg">Structured around your specific business</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <p className="text-lg">Security based on business assets</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <p className="text-lg">Dynamic limits based on trading</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <p className="text-lg">Grows as your business grows</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-12 mb-6">How Customization Works</h2>

      <p className="text-lg leading-relaxed mb-6">
        The customization process starts with understanding your business. We look at your sales cycles, customer payment patterns, seasonal variations, and growth plans.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        From there, we structure a facility that matches your reality.
      </p>

      <div className="space-y-6 mb-8">
        <div>
          <h3 className="font-semibold text-lg mb-2">Limit Structure</h3>
          <p className="text-lg text-muted-foreground">Your facility limit can be fixed, or it can fluctuate based on your receivables, inventory, or confirmed orders. A dynamic limit means more funding when you need it most.</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Security Package</h3>
          <p className="text-lg text-muted-foreground">We work with what you have. This might be receivables, inventory, equipment, contracts, or a combination. The goal is to unlock value from assets already in your business.</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Pricing Model</h3>
          <p className="text-lg text-muted-foreground">Pricing can be tied to utilization, prime rate, or fixed for predictability. We structure this based on your cash flow patterns and risk tolerance.</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Repayment Triggers</h3>
          <p className="text-lg text-muted-foreground">Instead of fixed monthly payments, repayment can be triggered by collections, sales, or other business events that naturally generate cash.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-12 mb-6">A Practical Example</h2>

      <div className="bg-accent/20 p-8 rounded-lg mb-8">
        <p className="text-lg leading-relaxed mb-4">
          <strong>Business:</strong> Furniture manufacturer supplying retailers
        </p>

        <p className="text-lg leading-relaxed mb-4">
          <strong>Challenge:</strong> Raw material purchases happen monthly, but customer payments vary. Bank overdraft of R500,000 wasn&apos;t enough during peak production months.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          <strong>Custom solution:</strong>
        </p>

        <ul className="space-y-2 mb-4 ml-4">
          <li className="text-lg">• Base facility: R1 million</li>
          <li className="text-lg">• Dynamic component: Up to 70% of confirmed orders</li>
          <li className="text-lg">• Security: General notarial bond over inventory and cession of receivables</li>
          <li className="text-lg">• Repayment: Automatic sweep when customer payments arrive</li>
        </ul>

        <p className="text-lg leading-relaxed mb-4">
          <strong>In practice:</strong> When the business received a R2 million order from a retailer, the facility automatically increased to accommodate production costs. When the retailer paid, the facility reduced accordingly.
        </p>

        <p className="text-lg leading-relaxed">
          <strong>Result:</strong> The business could take on larger orders without worrying about working capital constraints.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mt-12 mb-6">Common Custom Structures</h2>

      <div className="space-y-6 mb-8">
        <div className="border-l-4 border-primary pl-6">
          <h3 className="font-semibold text-lg mb-2">Receivables-Based Revolving</h3>
          <p className="text-lg text-muted-foreground">Limit fluctuates based on your outstanding invoices. More sales mean more availability. Ideal for businesses with strong corporate customers.</p>
        </div>

        <div className="border-l-4 border-primary pl-6">
          <h3 className="font-semibold text-lg mb-2">Inventory-Based Revolving</h3>
          <p className="text-lg text-muted-foreground">Borrowing base calculated on inventory levels. Works well for distributors and manufacturers with valuable stock.</p>
        </div>

        <div className="border-l-4 border-primary pl-6">
          <h3 className="font-semibold text-lg mb-2">Contract-Based Revolving</h3>
          <p className="text-lg text-muted-foreground">Facility tied to confirmed contracts or purchase orders. Perfect for project-based businesses with lumpy cash flows.</p>
        </div>

        <div className="border-l-4 border-primary pl-6">
          <h3 className="font-semibold text-lg mb-2">Seasonal Revolving</h3>
          <p className="text-lg text-muted-foreground">Higher limits during peak season, lower during off-season. Matches your actual working capital cycle.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-12 mb-6">The Cost Structure</h2>

      <p className="text-lg leading-relaxed mb-6">
        Custom revolving facilities typically have two cost components:
      </p>

      <div className="bg-muted/30 p-8 rounded-lg mb-8">
        <div className="space-y-4">
          <div>
            <p className="font-medium text-lg">Availability Fee</p>
            <p className="text-muted-foreground">A small percentage on your total facility limit. This reserves capacity for you whether you use it or not. Typically 0.5-1.5% per annum.</p>
          </div>

          <div>
            <p className="font-medium text-lg">Utilization Interest</p>
            <p className="text-muted-foreground">Interest on what you actually draw. Usually prime + a margin based on your risk profile. You only pay this on amounts used.</p>
          </div>
        </div>
      </div>

      <p className="text-lg leading-relaxed mb-8">
        The combined cost is often competitive with or lower than standard overdrafts, especially when you factor in the flexibility and higher limits custom structures provide.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-6">Who This Works For</h2>

      <ul className="space-y-4 mb-8">
        <li className="flex items-start gap-3">
          <span className="text-primary mt-1">•</span>
          <p className="text-lg">Businesses outgrowing their current bank facilities</p>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary mt-1">•</span>
          <p className="text-lg">Companies with seasonal or cyclical working capital needs</p>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary mt-1">•</span>
          <p className="text-lg">SMEs with strong receivables or inventory but limited property security</p>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary mt-1">•</span>
          <p className="text-lg">Businesses taking on larger contracts and needing flexible capacity</p>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary mt-1">•</span>
          <p className="text-lg">Companies seeking facilities that grow with their business</p>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-12 mb-6">Getting Started</h2>

      <p className="text-lg leading-relaxed mb-6">
        Structuring a custom revolving facility requires understanding your business deeply. The process typically involves:
      </p>

      <div className="space-y-4 mb-8">
        <div className="flex gap-4">
          <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">1</span>
          <p className="text-lg">Initial consultation to understand your business model and working capital needs</p>
        </div>

        <div className="flex gap-4">
          <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">2</span>
          <p className="text-lg">Analysis of your financial statements, receivables aging, and inventory patterns</p>
        </div>

        <div className="flex gap-4">
          <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">3</span>
          <p className="text-lg">Structure design with proposed limits, pricing, and security</p>
        </div>

        <div className="flex gap-4">
          <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">4</span>
          <p className="text-lg">Funder matching to find the best fit for your structure</p>
        </div>

        <div className="flex gap-4">
          <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">5</span>
          <p className="text-lg">Documentation and implementation</p>
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/20 p-8 rounded-lg mt-12">
        <h3 className="text-xl font-semibold mb-4">Ready to Explore Custom Revolving Finance?</h3>
        
        <p className="text-lg mb-6">
          At Digital Equity Management, we specialize in structuring working capital solutions that fit your business. Let&apos;s discuss your needs and design a facility that works for you.
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
