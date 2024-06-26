import { Suspense, lazy } from 'react'

import { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ThemeProvider } from '@/app/provider'
import GoogleAnalytics from '@/lib/GoogleAnalytics'
import '@/styles/globals.css'

const Navbar = lazy(() => import('@/components/templates/Navbar'))
const Footer = lazy(() => import('@/components/templates/Footer'))

const inter = Inter({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.CLIENT_URL}`),
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/fr-FR',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/app/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen min-w-screen">
            <Suspense fallback={<div>Chargement ...</div>}>
              <Navbar />
            </Suspense>
            <main className="flex-1">
              <div className="w-full px-4 mx-auto mt-6">
                <div className="flex flex-col min-w-0 break-words w-full mb-6 rounded-lg bg-gray-50 dark:bg-slate-800 border-0">
                  <GoogleAnalytics />
                  {children}
                </div>
              </div>
            </main>
            <Suspense fallback={<div>Chargement ...</div>}>
              <Footer />
            </Suspense>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
