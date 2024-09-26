import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { SimpleBlogCardProps } from '@/types/blog'

import Blog from '@/components/@unused/oragnisms/Blog'

import { client } from '@/lib/sanity'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata.blog' })
  const canonicalUrl = `${process.env.CLIENT_URL}/${locale}/blog`

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'fr-FR': '/fr',
        'en-US': '/en',
      },
    },
  }
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
