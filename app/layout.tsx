import { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ThemeProviders } from '@/app/provider'
import '@/styles/globals.css'
import GoogleAnalytics from '@/ui/atoms/GoogleAnalytics'
import { Footer } from '@/ui/templates/Footer'
import { NavbarDIX as Navbar } from '@/ui/templates/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.CLIENT_URL}`),
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/fr-FR',
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
      <body className={`${inter.className}`}>
        <ThemeProviders>
          <div className="min-h-screen min-w-screen">
            <Navbar />

            <main className="flex-1">
              <div className="w-full px-4 mx-auto mt-6">
                <div className="flex flex-col min-w-0 break-words w-full mb-6 rounded-lg bg-gray-50 dark:bg-slate-800 border-0">
                  <GoogleAnalytics />
                  {children}
                </div>
              </div>
            </main>
            <Footer />
          </div>
        </ThemeProviders>
      </body>
    </html>
  )
}
