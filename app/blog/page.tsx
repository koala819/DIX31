import type { Metadata } from 'next'

import { SimpleBlogCardProps } from '@/types/blog'

import { client } from '@/lib/sanity'
import Blog from '@/ui/templates/Blog'

export const metadata: Metadata = {
  title:
    'Conseils Professionnels en Développement Web par DIX31 - Blog Tech France',
  description:
    'Lisez le blog de DIX31 pour des insights uniques sur le développement web, des astuces de codage, des tendances du marché, et des études de cas détaillées.',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/blog`,
  },
}

async function getPosts() {
  const query = `*[_type== 'blog'] | order(date desc) {
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

export default async function Page() {
  const posts: SimpleBlogCardProps[] = await getPosts()
  return <Blog posts={posts} />
}
