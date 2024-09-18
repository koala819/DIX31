import Image from 'next/image'
import Link from 'next/link'

import { SimpleBlogCardProps } from '@/types/blog'

import { urlFor } from '@/lib/sanity'
import { format, parseISO } from 'date-fns'
import { motion } from 'framer-motion'

export function BlogHeader({
  firstPosts,
}: {
  firstPosts: SimpleBlogCardProps[]
}) {
  console.log('firstPosts', firstPosts)
  return (
    <motion.header
      className="grid md:grid-cols-2 gap-4"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {firstPosts &&
        firstPosts.map((post) => (
          <motion.div
            key={post.currentSlug}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href={`/blog/${post.currentSlug}`}
              className="relative block w-full h-64 md:h-80 rounded-lg overflow-hidden"
            >
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
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
              <div className="absolute bottom-0 left-0 p-4 z-10">
                {post.tag && post.tag.length > 0 && (
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded mb-2 inline-block">
                    {post.tag[0].name}
                  </span>
                )}
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 line-clamp-2">
                  {post.title}
                </h2>
                {post.smallDescription && (
                  <p className="text-gray-300 text-sm mb-2 line-clamp-2">
                    {post.smallDescription}
                  </p>
                )}
                <span className="text-gray-400 text-xs">
                  {format(parseISO(post.date), 'dd MMM yyyy')}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
    </motion.header>
  )
}
