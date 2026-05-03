import { Droplets, Wallet, Users, Shield, ArrowLeftRight } from "lucide-react"

const benefits = [
  { icon: Droplets, title: "Improved liquidity", description: "Unlock value from traditionally illiquid assets" },
  { icon: Wallet, title: "Alternative capital raising", description: "Access new funding channels and investor pools" },
  { icon: Users, title: "Broader investor access", description: "Reach a wider range of potential investors" },
  { icon: Shield, title: "Digitisation of ownership rights", description: "Secure and transparent ownership records" },
  { icon: ArrowLeftRight, title: "Secondary-market flexibility", description: "Potential for enhanced trading opportunities" },
]

export function TokenizationSection() {
  return (
    <section id="tokenization" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">
            Tokenization Advisory
          </h2>
          <div className="w-12 h-px bg-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We assist businesses and asset owners explore tokenization as a modern capital 
            raising and liquidity tool.
          </p>
        </div>

        <div className="mb-16">
          <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-8">
            Tokenization involves converting rights or ownership interests in real-world assets 
            into digital form. This can help unlock liquidity for assets that are traditionally 
            illiquid, including private businesses, property-related assets and structured 
            investment opportunities.
          </p>
          <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
            Our advisory work focuses on practical structuring, commercial feasibility, 
            investor positioning and regulatory awareness.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-center text-sm font-medium tracking-widest text-muted-foreground uppercase mb-8">
            Why Tokenization
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.slice(0, 3).map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="p-6 bg-muted/50 rounded-sm text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-background border border-border">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="font-medium text-foreground mb-2">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              )
            })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
            {benefits.slice(3).map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="p-6 bg-muted/50 rounded-sm text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-background border border-border">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="font-medium text-foreground mb-2">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
