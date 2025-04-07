import type { Metadata } from 'next'

import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'

import './globals.css'
import Navbar from '@/components/global/Navbar'
import { getMetadata } from '@/constants/metadata'

const inter = Inter({ subsets: ['latin'] })

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetadata()
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          {/* <Footer /> */}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
