'use client'

import { useEffect, useState } from 'react'

import { SimpleBlogCardProps, TagCount } from '@/types/blog'

import { BlogBody } from '@/components/atoms/BLOG/BlogBody'
import { BlogFooter } from '@/components/atoms/BLOG/BlogFooter'
import { BlogHeader } from '@/components/atoms/BLOG/BlogHeader'
import { BlogSlide } from '@/components/atoms/BLOG/BlogSlide'

import { AnimatePresence, motion } from 'framer-motion'

interface BlogProps {
  posts: SimpleBlogCardProps[]
  locale: string
}

export default function Blog({ posts, locale }: BlogProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [displayPosts, setDisplayPosts] = useState<SimpleBlogCardProps[]>([])
  const [footerPosts, setFooterPosts] = useState<SimpleBlogCardProps[]>([])
  const [tagsCount, setTagsCount] = useState<TagCount>({})
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const mostRecentPosts = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2)

  // console.log('mostRecentPosts', mostRecentPosts)

  useEffect(() => {
    setIsLoading(true)
    const filteredPosts = selectedTag
      ? posts.filter((post) =>
          post.tags?.some((tag: { name: string }) => tag.name === selectedTag),
        )
      : posts

    const bodyPosts = selectedTag
      ? filteredPosts.slice(0, 10)
      : filteredPosts
          .filter((post) => !mostRecentPosts.includes(post))
          .slice(0, 10)

    const remainingPosts = selectedTag
      ? filteredPosts.slice(10)
      : filteredPosts
          .filter((post) => !mostRecentPosts.includes(post))
          .slice(10)

    setDisplayPosts(bodyPosts)
    setFooterPosts(remainingPosts)

    const count = posts.reduce((acc: TagCount, post: SimpleBlogCardProps) => {
      if (post.tags && post.tags.length > 0) {
        post.tags.forEach((tag: { name: string }) => {
          const tagName = tag.name
          acc[tagName] = (acc[tagName] || 0) + 1
        })
      }
      return acc
    }, {} as TagCount)
    setTagsCount(count)

    setTimeout(() => setIsLoading(false), 500) // Simulating loading for smooth transition
  }, [selectedTag, posts])

  const handleTagClick = (tagName: string) => {
    setSelectedTag(tagName)
  }

  const handleReset = () => {
    setSelectedTag(null)
  }

  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence>
        {selectedTag === null && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <BlogHeader firstPosts={mostRecentPosts} locale={locale} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col lg:flex-row gap-8 mt-10">
        <motion.aside
          className="w-full lg:w-1/4 order-2 lg:order-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <BlogSlide
            tags={tagsCount}
            onTagClick={handleTagClick}
            onReset={handleReset}
          />
        </motion.aside>

        <motion.section
          className="w-full lg:w-3/4 order-1 lg:order-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnimatePresence>
            {isLoading ? (
              <motion.div
                className="flex justify-center items-center h-64"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="loader"></div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <BlogBody posts={displayPosts} locale={locale} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>
      </div>

      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <BlogFooter posts={footerPosts} locale={locale} />
      </motion.div>
    </motion.div>
  )
}
