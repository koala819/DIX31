import { Metadata } from 'next'

import Dix31 from '@/ui/templates/projects/Dix31'

export const metadata: Metadata = {
  title: 'DIX31 - Site Web de Xavier, Développeur Web',
  description:
    "Explorez le site de DIX31, une vitrine de mes compétences en développement web et de mes réalisations. Découvrez comment j'utilise Next.js, TypeScript, et Tailwind pour créer des sites web performants, personnalisés et adaptatifs, démontrant mon expertise en tant que développeur web.",
}

export default function Page() {
  return <Dix31 />
}
