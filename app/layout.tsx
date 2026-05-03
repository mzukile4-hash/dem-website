import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})


export const metadata: Metadata = {
  metadataBase: new URL('https://demng.co.za'),
  title: {
    default: 'Digital Equity Management | Alternative Finance & Tokenization Advisory',
    template: '%s | Digital Equity Management',
  },
  description: 'DEM helps South African SMEs and growing companies access working capital, trade finance, invoice discounting, purchase order finance, and structured capital raising solutions.',
  keywords: ['alternative finance South Africa', 'invoice discounting', 'purchase order finance', 'trade finance', 'working capital', 'SME funding', 'DEM'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Digital Equity Management',
    description: 'Alternative finance, working capital, trade finance and capital raising advisory for South African businesses.',
    url: 'https://demng.co.za',
    siteName: 'Digital Equity Management',
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Equity Management',
    description: 'Working capital and alternative finance advisory for South African SMEs.',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
