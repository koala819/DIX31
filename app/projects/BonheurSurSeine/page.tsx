import { Metadata } from 'next'

import BonheurSurSeine from '@/ui/templates/projects/BonheurSurSeine'

export const metadata: Metadata = {
  title: 'Bonheur Sur Seine - La Communauté de la gyroroue en France | DIX31',
  description:
    "Explorez le monde de la gyroroue avec DIX31: un hub communautaire pour les amateurs d'EDPM. Découvrez, partagez via Next.js, Tailwind, TypeScript",
  alternates: {
    canonical: `${process.env.CLIENT_URL}/BonheurSurSeine`,
  },
}

export default function Page() {
  return <BonheurSurSeine />
}
