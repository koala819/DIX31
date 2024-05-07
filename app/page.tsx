import { Metadata } from 'next'

import { comments } from '@/utils/comments'

import { client } from '@/lib/sanity'
import Blog from '@/ui/atoms/Blog'
// import Description from '@/components/atoms/Description'
import Hero from '@/ui/atoms/Hero'
import Projets from '@/ui/atoms/Projets'
import Rates from '@/ui/atoms/Rates'
import CommentList from '@/ui/molecules/CommentList'

export const metadata: Metadata = {
  title: 'DIX31 - Création de Sites Web Personnalisés sur mesure à Toulouse',
  description:
    'Spécialiste en création de sites web personnalisés et responsive. Solutions sur mesure pour entreprises. Consultation gratuite.',
}
export default async function Page() {
  async function getPosts() {
    const query = `*[_type == 'blog'] | order(date desc)[0...3] {
      title,
      date,
      smallDescription,
      "currentSlug": slug.current,
      titleImage,
      titleImagebyCloudinary,
      "tag": tag[]->{
        name
      }
    }`

    return await client.fetch(query)
  }
  const posts = await getPosts()
  return (
    <section className="my-16">
      <Hero />
      <Blog posts={posts} />
      {/* <Description /> */}
      <Projets />
      <Rates />
      <CommentList comments={comments} />
    </section>
  )
}
