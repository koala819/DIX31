import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { fullBlog } from '@/types/blog'

import { Post } from '@/components/@unused/Post'

import { client } from '@/lib/sanity'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  async function getSlug(slug: string) {
    const query = `*[_type == 'blog' && slug.current =='${slug}'] {
      "currentSlug": slug.current,
        title,
        content,
        smallDescription,
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

  const post: fullBlog = await getSlug(params.slug)

  return {
    title: post.title,
    description: post.smallDescription.substring(0, 147) + '...',
    alternates: {
      canonical: `${process.env.CLIENT_URL}/blog/${params.slug}`,
    },
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  async function getSlug(slug: string) {
    const query = `*[_type == 'blog' && slug.current =='${slug}'] {
      "currentSlug": slug.current,
        title,
        content,
        titleImage,
        titleImagebyCloudinary,
        date,
        youtubeVideo {
          url
        }
    }[0]`
    if (!query) notFound()

    const data = await client.fetch(query)

    return data
  }

  const post: fullBlog = await getSlug(params.slug)

  return <Post post={post} />
}
