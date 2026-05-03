import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/80 py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-6">
            <Image
              src="/images/dem-logo.png"
              alt="Digital Equity Management"
              width={140}
              height={60}
              className="h-14 w-auto mx-auto invert"
            />
          </div>

          {/* Services */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/60 mb-8">
            <span>Alternative Finance</span>
            <span className="hidden md:inline">|</span>
            <span>Tokenization Advisory</span>
            <span className="hidden md:inline">|</span>
            <span>Working Capital Solutions</span>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-white/20 mx-auto mb-8" />

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm mb-8">
            <Link href="#about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="#alternative-finance" className="hover:text-white transition-colors">
              Services
            </Link>
            <Link href="#tokenization" className="hover:text-white transition-colors">
              Tokenization
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Digital Equity Management. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
