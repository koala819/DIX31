import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { fullBlog } from '@/types/blog'

import { Post } from '@/components/BLOG/organisms/Post'

import { sanityFetch } from '@/lib/Blog/sanity/client'

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
  const data = await sanityFetch({ query })
  if (!data) notFound()
  return data
}

async function getSlugWithSimilarPosts(slug: string) {
  // Première requête pour obtenir l'article principal
  const postQuery = `*[_type == 'blog' && slug.current == '${slug}'][0] {
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
    },
    categories
  }`

  const post = await sanityFetch({ query: postQuery })
  if (!post) notFound()

  // Deuxième requête pour obtenir les articles similaires
  const similarPostsQuery = `*[_type == 'blog' && slug.current != '${slug}' && count(categories[@in $categories]) == count($categories)] | order(date desc) [0...3] {
    "currentSlug": slug.current,
    titleFr,
    titleEn,
    date,
    titleImage,
    titleImagebyCloudinary,
  }`

  const similarPosts = await sanityFetch({
    query: similarPostsQuery,
    params: { categories: post.categories },
  })

  return { post, similarPosts }
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
  // const post: fullBlog = await getSlug(params.slug)
  const { post, similarPosts } = await getSlugWithSimilarPosts(params.slug)
  if (!post) notFound()
  return <Post post={post} similarPosts={similarPosts} />
}
