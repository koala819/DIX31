import Image from 'next/image'
import Link from 'next/link'

import { SimpleBlogCardProps } from '@/types/blog'

import { urlFor } from '@/lib/sanity'
import { format, parseISO } from 'date-fns'
import { motion } from 'framer-motion'

export function BlogBody({ posts }: { posts: SimpleBlogCardProps[] }) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {posts.map((post, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Link
            href={`/blog/${post.currentSlug}`}
            className="block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48 w-full">
              <Image
                src={
                  post.titleImage
                    ? urlFor(post.titleImage)
                    : urlFor(post.titleImagebyCloudinary)
                }
                alt={
                  post.titleImagebyCloudinary
                    ? post.titleImagebyCloudinary.alt
                    : post.title
                }
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h2 className="font-bold text-xl mb-2 text-gray-800 dark:text-white">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {post.smallDescription?.slice(0, 100) + '...' || ''}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                <span>{format(parseISO(post.date), 'dd MMM yyyy')}</span>
                {post.tag && post.tag.length > 0 && (
                  <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded">
                    {post.tag[0].name}
                  </span>
                )}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}
