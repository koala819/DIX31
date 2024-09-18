import { Suspense } from 'react'

import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import dynamic from 'next/dynamic'

import Career from '@/components/atoms/Career'
import FAQ from '@/components/atoms/Faq'
import IdeaToLaunchSteps from '@/components/atoms/IdeaToLaunchSteps'
import ScrollToContact from '@/components/atoms/ScrollToContact'
import Services from '@/components/atoms/Services'
import Contact from '@/components/molecules/Contact'
import Testimonial from '@/components/molecules/Testimonial'

const Hero = dynamic(() => import('@/components/atoms/Hero'))
const Profile = dynamic(() => import('@/components/atoms/Profile'))

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata.home' })

  const canonicalUrl = `${process.env.CLIENT_URL}/${locale}`

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'fr-FR': '/fr',
        'en-US': '/en',
      },
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      type: 'website',
      url: canonicalUrl,
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      alternateLocale: locale === 'fr' ? 'en_US' : 'fr_FR',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitterTitle'),
      description: t('twitterDescription'),
    },
    other: {
      'X-Robots-Tag': 'index, follow',
      publisher: 'Xavier - Développeur Web Freelance',
    },
  }
}

export default async function Page({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations({ locale })

  return (
    <main className="container space-y-12">
      <ScrollToContact />
      <Hero />
      <Suspense
        fallback={
          <div role="alert" aria-busy="true">
            {t('loading')}
          </div>
        }
      >
        <Profile />
        <Career />
        <Testimonial user="Joge" />
        <Services />
        <Testimonial user="Sandrine" />
        <IdeaToLaunchSteps />
        <Testimonial user="Pascal" />
        <Contact />
        <Testimonial user="Sid" />
        <FAQ />
      </Suspense>
    </main>
  )
}
