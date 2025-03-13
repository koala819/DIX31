import { Metadata } from 'next'

import ProjectsContainer from '@/components/organims/ProjectsContainer'

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
  return <ProjectsContainer />
}
