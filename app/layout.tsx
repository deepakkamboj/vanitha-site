import React from "react"
import type { Metadata } from 'next'
import { Poppins, Cormorant_Garamond, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-poppins'
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-cormorant'
});

const jetbrains = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

const dmSans = {}; // Declare dmSans variable here
const playfair = {}; // Declare playfair variable here

export const metadata: Metadata = {
  title: 'Vanitha - Indian American Association Of Women',
  description: 'Vanitha is a 501(c)(3) non-profit organization providing services to communities in need through educational forums and charity. Help for the helpless and education for all.',
  keywords: ['non-profit', 'charity', 'women empowerment', 'education', 'Indian American', 'community service', 'donate', 'volunteer'],
  openGraph: {
    title: 'Vanitha - Indian American Association Of Women',
    description: 'Help for the helpless and education for all. A volunteer-based 501(c)(3) non-profit organization.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vanitha - Indian American Association Of Women',
    description: 'Help for the helpless and education for all.',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${cormorant.variable} ${jetbrains.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
