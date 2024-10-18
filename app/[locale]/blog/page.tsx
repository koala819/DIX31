import type { Metadata } from 'next'

import { Article, SimpleBlogCardProps } from '@/types/blog'
import { Blog as BlogType } from '@/types/sanity'

import Blog from '@/components/BLOG/molecules/Blog'

import { sanityFetch } from '@/lib/Blog/sanity/client'
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

function countWordsInBlock(block: any): number {
  if (block._type === 'block' && block.children) {
    return block.children.reduce((count: number, child: any) => {
      if (typeof child.text === 'string') {
        return count + child.text.trim().split(/\s+/).length
      }
      return count
    }, 0)
  }
  return 0
}

function estimateReadTime(content: BlogType['contentFr']): number {
  const wordsPerMinute = 200
  const imageViewTime = 10 // seconds
  const codeReadTime = 20 // seconds per block
  let totalWords = 0
  let imageCount = 0
  let codeBlockCount = 0

  if (Array.isArray(content)) {
    content.forEach((item) => {
      if (item._type === 'block') {
        totalWords += countWordsInBlock(item)
      } else if (item._type === 'image' || item._type === 'cloudinaryImage') {
        imageCount++
      } else if (item._type === 'code') {
        codeBlockCount++
      }
    })
  }

  const readTimeMinutes = totalWords / wordsPerMinute
  const imageTimeMinutes = (imageCount * imageViewTime) / 60
  const codeTimeMinutes = (codeBlockCount * codeReadTime) / 60

  return Math.ceil(readTimeMinutes + imageTimeMinutes + codeTimeMinutes)
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
