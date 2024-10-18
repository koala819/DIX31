import { Metadata } from 'next'

import { Homepage } from '@/components/atoms/Homepage'

import { createMetadata } from '@/lib/utils'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return createMetadata({
    locale,
    namespace: 'metadata.home',
    path: '/',
  })
}

export default async function FirstPage() {
  return <Homepage />
}
