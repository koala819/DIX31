import Image from 'next/image'
import Link from 'next/link'

import { SimpleBlogCardProps } from '@/types/blog'

import { urlFor } from '@/lib/sanity'
import { format, parseISO } from 'date-fns'
import { enUS, fr } from 'date-fns/locale'
import { motion } from 'framer-motion'

export function BlogBody({
  posts,
  locale,
}: {
  posts: SimpleBlogCardProps[]
  locale: string
}) {
  function formatDate(date: string, locale: string) {
    const parsedDate = parseISO(date)
    return format(parsedDate, 'dd MMM yyyy', {
      locale: locale === 'fr' ? fr : enUS,
    })
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group"
        >
          <Link
            href={`/blog/${post.currentSlug}`}
            className="block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={
                  post.titleImage
                    ? urlFor(post.titleImage)
                    : urlFor(post.titleImagebyCloudinary)
                }
                alt={
                  post.titleImagebyCloudinary
                    ? post.titleImagebyCloudinary.alt
                    : locale === 'fr'
                      ? post.titleFr
                      : post.titleEn
                }
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {locale === 'fr' ? post.titleFr : post.titleEn}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                {locale === 'fr'
                  ? post.shortDescriptionFr
                  : post.shortDescriptionEn}
              </p>
              <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{formatDate(post.date, locale)}</span>
                </div>
                {post.tags && post.tags.length > 0 && (
                  <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded-full text-xs font-semibold">
                    {post.tags[0].name}
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
