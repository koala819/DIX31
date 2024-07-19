'use client'

import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'

const WithCustomLoading = dynamic(() => import('@/lib/LoadImage'), {
  loading: () => <div>Chargement ...</div>,
})

const Career = () => {
  const t = useTranslations('Career')

  return (
    <>
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>
      <div className="flex flex-col lg:flex-row flex-wrap w-full items-center justify-center p-4 rounded-lg gap-4 mt-8">
        {[
          { src: '/images/KillBills.jpeg', alt: 'Logo de KillBils' },
          { src: '/images/LoopSider.jpeg', alt: 'Logo de Loopsider' },
          { src: '/images/Sopra-Steria.png', alt: 'Logo de Sopra Steria' },
          { src: '/images/Airbus.webp', alt: 'Logo de Airbus' },
          {
            src: '/images/Mosquee-Colomiers.jpg',
            alt: 'Logo de la mosquée de Colomiers',
          },
          {
            src: '/images/BonheurSurSeine_logo.png',
            alt: 'Logo de Bonheur Sur Seine',
          },
        ].map((image, index) => (
          <div
            key={index}
            className="relative w-40 h-40 lg:w-48 lg:h-48 flex-shrink-0 overflow-hidden rounded-xl"
          >
            <WithCustomLoading
              src={image.src}
              alt={image.alt}
              layout="fill"
              className="object-contain transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 160px, 192px"
              priority
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default Career
