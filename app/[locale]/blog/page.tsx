import type { Metadata } from 'next'

import { Article, SimpleBlogCardProps } from '@/types/blog'

import Blog from '@/components/BLOG/molecules/Blog'

import { sanityFetch } from '@/lib/Blog/sanity/client'
import { estimateReadTime } from '@/lib/Blog/utils'
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
    "tags": tags[]->{ name },
    contentFr
  }`
  return await sanityFetch({ query })
}

function transformPostsToArticles(
  posts: SimpleBlogCardProps[],
  locale: string,
): Article[] {
  return posts.map((post, index) => {
    return {
      id: index + 1,
      title:
        locale === 'en'
          ? post.titleEn || post.titleFr || 'Untitled'
          : post.titleFr || post.titleEn || 'Untitled',
      excerpt:
        locale === 'en'
          ? post.shortDescriptionEn ||
            post.shortDescriptionFr ||
            'No description available'
          : post.shortDescriptionFr ||
            post.shortDescriptionEn ||
            'No description available',
      coverImage:
        post.titleImagebyCloudinary?.url || '/images/default-cover.jpg',
      date: post.date || new Date().toISOString().split('T')[0],
      categories: post.tags?.map((tag) => tag.name) || ['Uncategorized'],
      readTime: post.contentFr ? estimateReadTime(post.contentFr) : 0,
      currentSlug: post.currentSlug || '',
    }
  })
}

export default async function Page({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const posts: SimpleBlogCardProps[] = await getPosts()
  const articles = transformPostsToArticles(posts, locale)
  return <Blog articles={articles} locale={locale} />
}
