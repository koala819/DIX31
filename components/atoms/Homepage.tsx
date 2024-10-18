'use client'

import { Suspense, useEffect } from 'react'

import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import dynamic from 'next/dynamic'
import { useSearchParams } from 'next/navigation'

import Career from '@/components/atoms/Career'
import FAQ from '@/components/atoms/Faq'
import IdeaToLaunchSteps from '@/components/atoms/IdeaToLaunchSteps'
import Services from '@/components/atoms/Services'
import Contact from '@/components/molecules/Contact'
import Testimonial from '@/components/molecules/Testimonial'

const Hero = dynamic(() => import('@/components/atoms/Hero'))
const Profile = dynamic(() => import('@/components/atoms/Profile'))
export const Homepage = () => {
  const t = useTranslations('ContentNext')
  const ScrollLogic = () => {
    const searchParams = useSearchParams()

    useEffect(() => {
      const scrollTo = searchParams.get('scrollTo')

      if (scrollTo === 'contact') {
        const scrollToContact = () => {
          const contactElement = document.getElementById('contact')

          if (contactElement) {
            const elementPosition = contactElement.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - 90

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            })

            // Vérification supplémentaire après le défilement
            setTimeout(() => {
              const newPosition = contactElement.getBoundingClientRect().top
              if (Math.abs(newPosition) > 5) {
                // Si la position n'est pas proche de 0 (avec une marge d'erreur)
                window.scrollTo({
                  top: window.pageYOffset + newPosition - 90,
                  behavior: 'smooth',
                })
              }
            }, 1000)
          }
        }

        // Essayer de défiler immédiatement
        scrollToContact()

        // Réessayer après un délai si le premier essai échoue
        setTimeout(scrollToContact, 1000)

        // Réessayer encore une fois après un délai plus long
        setTimeout(scrollToContact, 3000)
      }
    }, [searchParams])

    return null
  }

  return (
    <main className="container space-y-12">
      <ScrollLogic />
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
        <Contact id="contact" />
        <Testimonial user="Sid" />
        <FAQ />
      </Suspense>
    </main>
  )
}
