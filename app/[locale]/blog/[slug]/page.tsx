import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { fullBlog } from '@/types/blog'

import { Post } from '@/components/organims/Post'

import { client } from '@/lib/sanity'

async function getSlug(slug: string) {
  const query = `*[_type == 'blog' && slug.current == '${slug}'] {
    "currentSlug": slug.current,
    titleFr,
    titleEn,
    contentFr,
    contentEn,
    shortDescriptionFr,
    shortDescriptionEn,
    titleImage,
    titleImagebyCloudinary,
    date,
    youtubeVideo {
      url
    }
  }[0]`
  const data = await client.fetch(query)
  if (!data) notFound()
  return data
}
export async function generateMetadata({
  params,
}: {
  params: { slug: string; locale: string }
}): Promise<Metadata> {
  const post: fullBlog = await getSlug(params.slug)
  if (!post) notFound()

  const title = params.locale === 'fr' ? post.titleFr : post.titleEn
  const description =
    params.locale === 'fr' ? post.shortDescriptionFr : post.shortDescriptionEn

  return {
    title: title,
    description: description ? description.substring(0, 147) + '...' : '',
    alternates: {
      canonical: `${process.env.CLIENT_URL}/${params.locale}/blog/${params.slug}`,
    },
  }
}

export default async function Page({
  params,
}: {
  params: { slug: string; locale: string }
}) {
  const post: fullBlog = await getSlug(params.slug)

  if (!post) notFound()

  return <Post post={post} />
}
