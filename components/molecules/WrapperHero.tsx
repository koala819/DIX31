import { getTranslations } from 'next-intl/server'

import HeroClient from '@/components/client/Hero'

import { myXP } from '@/lib/calculateXp'

export default async function HeroWrapper() {
  const tHero = await getTranslations('Hero')
  const tGlobal = await getTranslations()

  const experience = myXP()

  const profileItems = [
    { label: tHero('experience'), value: `${experience} ${tHero('years')}` },
    { label: tHero('stack'), value: 'Next.js & Tailwind' },
    { label: tHero('location'), value: 'Toulouse' },
    { label: tHero('languages'), value: tHero('langues') },
  ]

  const data = {
    title: tHero('title'),
    hireButtonText: tGlobal('Btn-hire'),
    profileItems,
  }

  return <HeroClient data={data} />
}
