import { Metadata } from 'next'

import Privacy from '@/components/molecules/Privacy'

export const metadata: Metadata = {
  title: 'Protection des Données - DIX31 | Confidentialité Garantie',
  description:
    'Découvrez comment DIX31.com protège et gère vos données personnelles. Lisez notre politique de confidentialité détaillée ici.',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/protection`,
  },
}

export default function Page() {
  return <Privacy />
}
