import type { Metadata } from 'next'

import Blog from '@/ui/templates/Blog'

export const metadata: Metadata = {
  title: 'Blog de DIX31 - Dernières Tendances et Conseils en Développement Web',
  description:
    'Lisez le blog de DIX31 pour des insights uniques sur le développement web, des astuces de codage, des tendances du marché, et des études de cas détaillées.',
}

export default function Page() {
  return <Blog />
}
