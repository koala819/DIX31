import { Metadata } from 'next'

import { Achievements } from '@/components/atoms/Achievements'

import { createMetadata } from '@/lib/utils'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return createMetadata({
    locale,
    namespace: 'metadata.projects',
    path: '/projects',
  })
}

export default function Page() {
  return <Achievements />
}
