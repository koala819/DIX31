import { Metadata } from 'next'

import Contact from '@/components/molecules/Contact'

export const metadata: Metadata = {
  title: 'Contactez DIX31 pour vos Projets de Développement Web en France',
  description:
    'Prenez contact avec DIX31 pour discuter de vos besoins en développement web et découvrir comment nous pouvons transformer vos idées en réalité.',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/contact`,
  },
}

export default function Page() {
  return <Contact />
}
