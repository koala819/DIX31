'use client'

import { useEffect, useState } from 'react'

import { SimpleBlogCardProps, TagCount } from '@/types/blog'

import { BlogBody } from '@/components/molecules/BlogBody'
import { BlogFooter } from '@/components/molecules/BlogFooter'
import { BlogHeader } from '@/components/molecules/BlogHeader'
import { BlogSlide } from '@/components/molecules/BlogSlide'

export default function Blog({ posts }: { posts: SimpleBlogCardProps[] }) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [displayPosts, setDisplayPosts] = useState<SimpleBlogCardProps[]>([])
  const [footerPosts, setFooterPosts] = useState<SimpleBlogCardProps[]>([])
  const [tagsCount, setTagsCount] = useState<TagCount>({})

  // Déterminer les deux articles les plus récents pour BlogHeader
  const mostRecentPosts = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2)

  useEffect(() => {
    const filteredPosts = selectedTag
      ? posts.filter((post) =>
          post.tag.some((tag: { name: string }) => tag.name === selectedTag),
        )
      : posts

    // Séparer les posts pour BlogBody
    const bodyPosts = selectedTag
      ? filteredPosts.slice(0, 10)
      : filteredPosts
          .filter((post) => !mostRecentPosts.includes(post))
          .slice(0, 10)

    // Séparer les posts pour BlogFooter
    const remainingPosts = selectedTag
      ? filteredPosts.slice(10)
      : filteredPosts
          .filter((post) => !mostRecentPosts.includes(post))
          .slice(10)

    setDisplayPosts(bodyPosts)
    setFooterPosts(remainingPosts)

    // Calculer le nombre d'articles par tag
    const count = posts.reduce((acc: TagCount, post: SimpleBlogCardProps) => {
      if (post.tag && post.tag.length > 0) {
        post.tag.forEach((tag: { name: string }) => {
          const tagName = tag.name
          acc[tagName] = (acc[tagName] || 0) + 1
        })
      }
      return acc
    }, {} as TagCount)
    setTagsCount(count)
  }, [selectedTag, posts])

  const handleTagClick = (tagName: string) => {
    setSelectedTag(tagName)
  }

  const handleReset = () => {
    setSelectedTag(null)
  }

  return (
    <div className="container">
      <div className="pt-1">
        {selectedTag === null && <BlogHeader firstPosts={mostRecentPosts} />}
      </div>
      <section className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
        <aside className="w-full lg:w-2/3">
          <BlogBody posts={displayPosts} />
        </aside>
        <aside className="w-full lg:w-1/3 px-3">
          <BlogSlide
            tags={tagsCount}
            onTagClick={handleTagClick}
            onReset={handleReset}
          />
        </aside>
      </section>
      <BlogFooter posts={footerPosts} />
    </div>
  )
}
