import { FileText, Package, Ship, Globe, Link2, Clock, Settings, TrendingUp, Layers } from "lucide-react"

const services = [
  { icon: FileText, label: "Invoice discounting" },
  { icon: Layers, label: "Factoring" },
  { icon: Package, label: "Purchase order financing" },
  { icon: Ship, label: "Pre-shipment finance" },
  { icon: Globe, label: "Trade finance" },
  { icon: Link2, label: "Supply chain finance" },
  { icon: Clock, label: "Early payment programmes" },
  { icon: Settings, label: "Custom revolving finance structures" },
  { icon: TrendingUp, label: "Capital raising support" },
]

export function AlternativeFinanceSection() {
  return (
    <section id="alternative-finance" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">
            Alternative Finance
          </h2>
          <div className="w-12 h-px bg-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We help companies access working capital solutions through our network of 
            financiers and strategic finance partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="flex items-center gap-4 p-5 bg-background rounded-sm border border-border/50 hover:border-accent/30 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-sm bg-muted">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-foreground font-medium">{service.label}</span>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Our role is to understand the transaction, package the opportunity correctly, 
            and match the business with the right finance partner.
          </p>
        </div>
      </div>
    </section>
  )
}
