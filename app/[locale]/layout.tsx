import { Analytics } from '@vercel/analytics/react'
import { Suspense } from 'react'

import { Metadata } from 'next'
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

import { getMessages } from 'next-intl/server'
import { VisualEditing } from 'next-sanity'
import { Inter } from 'next/font/google'
import { draftMode } from 'next/headers'

import { FooterWrapper } from '@/components/client/FooterWrapper'
import { NavbarWrapper } from '@/components/client/NavbarWrapper'
import { ThemeProviderWrapper } from '@/components/client/ThemeProviderWrapper'

import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_CLIENT_URL}`),
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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{locale: string}>;
}) {
  const messages = await getMessages()
  const isDraftMode = draftMode().isEnabled

  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }


  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          'antialiased bg-background text-foreground',
          fontHeading.variable,
          fontBody.variable,
        )}
      >
        {isDraftMode && (
          <a
            className="fixed right-0 bottom-0 bg-blue-500 text-white p-4 m-4"
            href="/api/draft-mode/disable"
          >
            Disable preview mode
          </a>
        )}

        <ThemeProviderWrapper>
          <NextIntlClientProvider messages={messages}>
            <Suspense fallback={<div className="navbar-height" />}>
              <NavbarWrapper />
            </Suspense>

            <div className="min-h-screen flex flex-col">
              <main className="flex-1 pt-navbar">
                <div className="w-full mx-auto">
                  <div className="flex flex-col min-w-0 break-words w-full rounded-lg bg-gray-50 dark:bg-slate-800 border-0 pb-16 md:pb-24">
                    {children}
                    {isDraftMode && <VisualEditing />}
                    <SpeedInsights />
                    <Analytics />
                  </div>
                </div>
              </main>

              <Suspense fallback={<div>Chargement ...</div>}>
                <FooterWrapper />
              </Suspense>
            </div>
          </NextIntlClientProvider>
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}
