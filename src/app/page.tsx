import { Metadata } from 'next'

import Description from '@/components/atoms/Description'
import Hero from '@/components/atoms/Hero'
import Presentation from '@/components/atoms/Presentation'
import Projets from '@/components/atoms/Projets'
import Rates from '@/components/atoms/Rates'
import CommentList from '@/components/molecules/CommentList'

import { comments } from '@/lib/comments'

export const metadata: Metadata = {
  title: '  DIX31 - Développeur Web Xavier | Sites Web Personnalisés',
  description:
    'Spécialiste en création de sites web personnalisés et responsive. Solutions sur mesure pour entreprises. Consultation gratuite.',
}
export default function Page() {
  return (
    <section className="my-16">
      <Hero />
      <Presentation />
      <Description />
      <Projets />
      <Rates />
      <CommentList comments={comments} />
    </section>
  )
}
