import { Suspense } from 'react'
import { useTranslations } from 'next-intl'
import Career from '@/components/atoms/Career'
import FAQ from '@/components/atoms/Faq'
import IdeaToLaunchSteps from '@/components/atoms/IdeaToLaunchSteps'
import Services from '@/components/atoms/Services'
import Contact from '@/components/molecules/Contact'
import Testimonial from '@/components/molecules/Testimonial'
import { ScrollToSection } from '@/components/client/ScrollToSection'
import { DynamicHero } from '@/components/client/Hero'
import { DynamicProfile } from '@/components/client/Profile'

export const Homepage = () => {
  const t = useTranslations('ContentNext')

  return (
    <main className="container space-y-12">
      <ScrollToSection />

      <DynamicHero />

      <Suspense
        fallback={
          <div role="alert" aria-busy="true">
            {t('loading')}
          </div>
        }
      >
        <DynamicProfile />
      </Suspense>

      <Career />

      <Testimonial user="Joge" />

      <Services />

      <Testimonial user="Sandrine" />

      <IdeaToLaunchSteps />

      <Testimonial user="Pascal" />

      <Contact id="contact" />

      <Testimonial user="Sid" />

      <FAQ />
    </main>
  )
}