import { Metadata } from 'next'

import { Achievements } from '@/components/@unused/Achievements'

export const metadata: Metadata = {
  title:
    'Projets de DIX31 : Découvrez Nos Réalisations en Développement Web en France',
  description:
    'Explorez le portfolio de DIX31 pour voir des exemples de nos travaux en développement web, des sites vitrines aux solutions web dynamiques.',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/projects`,
  },
}

export default function Page() {
  return <Achievements />
}
