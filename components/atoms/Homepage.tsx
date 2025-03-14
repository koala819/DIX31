import { Suspense } from 'react'

import { useTranslations } from 'next-intl'

import { ScrollToSection } from '@/components/client/ScrollToSection'
import CareerWrapper from '@/components/molecules/WrapperCareer'
import ContactWrapper from '@/components/molecules/WrapperContact'
import FAQWrapper from '@/components/molecules/WrapperFAQ'
import HeroWrapper from '@/components/molecules/WrapperHero'
import IdeaToLaunchStepsWrapper from '@/components/molecules/WrapperIdeaToLaunchSteps'
import ProfileWrapper from '@/components/molecules/WrapperProfile'
import ServicesWrapper from '@/components/molecules/WrapperServices'
import TestimonialWrapper from '@/components/molecules/WrapperTestimonial'

export const Homepage = () => {
  const t = useTranslations('ContentNext')

  return (
    <main className="container space-y-12">
      <ScrollToSection />

      <Suspense
        fallback={
          <div role="alert" aria-busy="true">
            {t('loading')}
          </div>
        }
      >
        <HeroWrapper />
      </Suspense>

      <Suspense
        fallback={
          <div role="alert" aria-busy="true">
            {t('loading')}
          </div>
        }
      >
        <ProfileWrapper />
      </Suspense>

      <CareerWrapper />

      <TestimonialWrapper user="Joge" />

      <ServicesWrapper />

      <TestimonialWrapper user="Sandrine" />

      <IdeaToLaunchStepsWrapper />

      <TestimonialWrapper user="Pascal" />

      <ContactWrapper id="contact" />

      <TestimonialWrapper user="Sid" />

      <FAQWrapper />
    </main>
  )
}
