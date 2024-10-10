import type { Metadata } from 'next'

import { SimpleBlogCardProps } from '@/types/blog'

import Blog from '@/components/@unused/oragnisms/Blog'

import { client } from '@/lib/sanity'
import { createMetadata } from '@/lib/utils'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return createMetadata({
    locale,
    namespace: 'metadata.blog',
    path: '/projects',
  })
}

async function getPosts() {
  const query = `*[_type == 'blog'] | order(date desc) {
    titleFr,
    titleEn,
    date,
    shortDescriptionFr,
    shortDescriptionEn,
    "currentSlug": slug.current,
    titleImage,
    titleImagebyCloudinary,
    "tags": tags[]->{ name }
  }`
  return await client.fetch(query)
}

export default async function Page({ params: { locale } }: any) {
  const posts: SimpleBlogCardProps[] = await getPosts()
  // console.log('posts', posts)

  return <Blog posts={posts} locale={locale} />
}
