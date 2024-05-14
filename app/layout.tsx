// import { Analytics } from '@vercel/analytics/react'
// import { Suspense, lazy } from 'react'
import { Metadata } from 'next'

// import { Inter } from 'next/font/google'
// import { ThemeProviders } from '@/app/provider'

// import '@/styles/globals.css'

// import GoogleAnalytics from '@/ui/atoms/GoogleAnalytics'

// import { Footer } from '@/ui/templates/Footer'
// import { NavbarDIX as Navbar } from '@/ui/templates/Navbar'

// const Footer = lazy(() => import('@/ui/templates/Footer'))
// const Navbar = lazy(() => import('@/ui/templates/Navbar'))

// const inter = Inter({
//   weight: ['400', '700'],
//   style: ['normal'],
//   subsets: ['latin'],
//   variable: '--font-inter',
//   display: 'swap',
// })

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
      <body
      // className={`${inter.variable}`}
      >
        {/* <ThemeProviders> */}
        <div className="min-h-screen min-w-screen">
          {/* <Suspense fallback={<div>Chargement ...</div>}>
              <Navbar />
            </Suspense> */}

          <main className="flex-1">
            <div className="w-full px-4 mx-auto mt-6">
              <div className="flex flex-col min-w-0 break-words w-full mb-6 rounded-lg bg-gray-50 dark:bg-slate-800 border-0">
                {/* <GoogleAnalytics /> */}
                {children}
                {/* <Analytics /> */}
              </div>
            </div>
          </main>
          {/* <Suspense fallback={<div>Chargement ...</div>}>
              <Footer />
            </Suspense> */}
        </div>
        {/* </ThemeProviders> */}
      </body>
    </html>
  )
}
