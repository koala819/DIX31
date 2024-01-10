import { Metadata } from 'next'

import { comments } from '@/utils/comments'

// import Description from '@/components/atoms/Description'
import Hero from '@/ui/atoms/Hero'
// import Presentation from '@/components/atoms/Presentation'
import Projets from '@/ui/atoms/Projets'
import Rates from '@/ui/atoms/Rates'
import CommentList from '@/ui/molecules/CommentList'

export const metadata: Metadata = {
  title: '  DIX31 - Développeur Web Xavier | Sites Web Personnalisés',
  description:
    'Spécialiste en création de sites web personnalisés et responsive. Solutions sur mesure pour entreprises. Consultation gratuite.',
}
export default function Page() {
  return (
    <section className="my-16">
      <Hero />
      {/* <Presentation /> */}
      {/* <Description /> */}
      <Projets />
      <Rates />
      <CommentList comments={comments} />
    </section>
  )
}
