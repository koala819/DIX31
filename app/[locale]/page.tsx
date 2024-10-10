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

import { createMetadata } from '@/lib/utils'

const Hero = dynamic(() => import('@/components/atoms/Hero'))
const Profile = dynamic(() => import('@/components/atoms/Profile'))

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return createMetadata({
    locale,
    namespace: 'metadata.home',
    path: '/',
  })
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
