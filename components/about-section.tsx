export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">
            About
          </h2>
          <div className="w-12 h-px bg-accent mx-auto" />
        </div>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <p className="text-lg">
            Digital Equity Management is an alternative finance facilitation and advisory 
            business focused on helping companies access working capital, structured finance 
            and capital raising solutions.
          </p>

          <p>
            Our journey started in e-commerce, where we helped businesses build digital sales 
            channels, manage fulfilment, customer service, back-office operations, and digital 
            marketing. This experience gave us a practical understanding of how growth, cash 
            flow, operations and working capital pressure affect businesses.
          </p>

          <p>
            We later moved deeper into finance after seeing how many SMEs struggle to access 
            flexible funding without signing away excessive security or facing unsuitable 
            finance structures.
          </p>

          <p>
            Through our fintech and finance partners, we assist businesses in finding practical 
            funding solutions aligned to their operating realities.
          </p>
        </div>
      </div>
    </section>
  )
}
