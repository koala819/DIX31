import { Metadata } from 'next'

import { Projects } from '@/components/atoms/Projects'

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

export default function ProjectsPage() {
  return <Projects />
}
