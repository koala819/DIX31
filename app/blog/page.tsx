import type { Metadata } from 'next'

import { SimpleBlogCardProps } from '@/types/simpleBlogCard'

import { client } from '@/lib/sanity'
import Blog from '@/ui/templates/Blog'

export const metadata: Metadata = {
  title: 'Blog de DIX31 - Dernières Tendances et Conseils en Développement Web',
  description:
    'Lisez le blog de DIX31 pour des insights uniques sur le développement web, des astuces de codage, des tendances du marché, et des études de cas détaillées.',
}

async function getPosts() {
  const query = `*[_type== 'blog'] | order(date desc) {
    title,
      date,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
  }`

  const data = await client.fetch(query)

  return data
}

export default async function Page() {
  const posts: SimpleBlogCardProps[] = await getPosts()
  console.log('posts from SANITY', posts)
  return <Blog />
}
