import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_CLIENT_URL}`),
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: '/app/favicon.ico',
  },
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const messages = await getMessages()
  const { locale } = await params

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          'antialiased bg-background text-foreground',
          inter.variable,
        )}
      >
        <div className="min-h-screen">
          <NextIntlClientProvider messages={messages}>
            {children}
            <SpeedInsights />
            <Analytics />
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  )
}
