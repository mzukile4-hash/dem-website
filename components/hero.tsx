import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-sage-muted">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.1)_100%)]" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center pt-20">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-charcoal mb-6">
          ALTERNATIVE FINANCE
        </h1>
        <div className="w-16 h-px bg-charcoal/30 mx-auto mb-6" />
        <p className="text-lg md:text-xl text-charcoal/70 font-light tracking-wide">
          Facilitators & Advisory
        </p>
        <div className="mt-12">
          <Link
            href="#about"
            className="inline-flex items-center gap-2 text-sm font-medium text-charcoal/60 hover:text-charcoal transition-colors"
          >
            <span>Learn more</span>
            <svg
              className="w-4 h-4 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
