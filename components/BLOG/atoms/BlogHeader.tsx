import Image from 'next/legacy/image'

import { SimpleBlogCardProps } from '@/types/blog'

import { Link } from '@/i18n/routing'
import { urlFor } from '@/lib/Blog/sanity/client'
import { format, parseISO } from 'date-fns'
import { enUS, fr } from 'date-fns/locale'
import { motion } from 'framer-motion'

export function BlogHeader({
  firstPosts,
  locale,
}: {
  firstPosts: SimpleBlogCardProps[]
  locale: string
}) {
  function formatDate(date: string, locale: string) {
    const parsedDate = parseISO(date)
    return format(parsedDate, 'dd MMM yyyy', {
      locale: locale === 'fr' ? fr : enUS,
    })
  }

  return (
    <motion.header
      className="grid md:grid-cols-2 gap-6"
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
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group"
          >
            <Link
              href={`/blog/${post.currentSlug}`}
              className="relative block w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl"
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
                    : locale === 'fr'
                      ? post.titleFr
                      : post.titleEn
                }
                layout="fill"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <div className="space-y-3">
                  {post.tags && post.tags.length > 0 && (
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-500 text-white rounded-full transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                      {post.tags[0].name}
                    </span>
                  )}
                  <h2 className="text-2xl md:text-3xl font-bold leading-tight text-white transition-all duration-300 group-hover:text-blue-300">
                    {locale === 'fr' ? post.titleFr : post.titleEn}
                  </h2>
                  {(locale === 'fr'
                    ? post.shortDescriptionFr
                    : post.shortDescriptionEn) && (
                    <p className="text-sm text-gray-200 line-clamp-2 transition-all duration-300 group-hover:text-white">
                      {locale === 'fr'
                        ? post.shortDescriptionFr
                        : post.shortDescriptionEn}
                    </p>
                  )}
                  <div className="flex items-center space-x-2 text-xs text-gray-300">
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
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
    </motion.header>
  )
}
