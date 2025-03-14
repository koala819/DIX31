import { getTranslations } from 'next-intl/server'

import CareerClient from '@/components/client/Career'

export default async function CareerWrapper() {
  const t = await getTranslations('Career')

  const translations = {
    title: t('title'),
    description: t('description'),
  }

  const companies = [
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
  ]

  return <CareerClient translations={translations} companies={companies} />
}
