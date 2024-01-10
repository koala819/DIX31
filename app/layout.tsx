import { Inter } from 'next/font/google'
import Head from 'next/head'

import { ThemeProviders } from '@/app/provider'
import '@/styles/globals.css'
import GoogleAnalytics from '@/ui/atoms/GoogleAnalytics'
import { Footer } from '@/ui/templates/Footer'
import { NavbarDIX as Navbar } from '@/ui/templates/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <Head>
        <link rel="canonical" href={`${process.env.CLIENT_URL}`} />
        <link rel="icon" href="/app/favicon.ico" />
      </Head>
      <body className={`${inter.className}`}>
        <ThemeProviders>
          <div className="min-h-screen min-w-screen">
            {/* <div className=" flex flex-col h-screen"> */}
            <Navbar />

            <main className="flex-1">
              <div className="w-full px-4 mx-auto mt-6">
                <div className="flex flex-col min-w-0 break-words w-full mb-6rounded-lg bg-gray-50 dark:bg-slate-800 border-0">
                  <GoogleAnalytics />
                  {children}
                </div>
              </div>
            </main>
            <Footer />
          </div>
          {/* </div> */}
        </ThemeProviders>
      </body>
    </html>
  )
}
