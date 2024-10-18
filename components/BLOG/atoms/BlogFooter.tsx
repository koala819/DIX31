import Image from 'next/legacy/image'

import { SimpleBlogCardProps } from '@/types/blog'

import { Link } from '@/i18n/routing'
import { urlFor } from '@/lib/Blog/sanity/client'
import { format, parseISO } from 'date-fns'
import { enUS, fr } from 'date-fns/locale'
import { motion } from 'framer-motion'

export function BlogFooter({
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
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
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
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href={`/blog/${post.currentSlug}`}>
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
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
                      : locale === 'fr'
                        ? post.titleFr
                        : post.titleEn
                  }
                  layout="fill"
                  // objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white line-clamp-2">
                  {locale === 'fr' ? post.titleFr : post.titleEn}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-3">
                  {locale === 'fr'
                    ? post.shortDescriptionFr
                    : post.shortDescriptionEn}
                </p>
                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                  <span>{formatDate(post.date, locale)}</span>
                  {post.tags && post.tags.length > 0 && (
                    <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded">
                      {post.tags[0].name}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}
