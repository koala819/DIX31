import Image from 'next/legacy/image'
import Link from 'next/link'

import { SimpleBlogCardProps } from '@/types/blog'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'

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
    return format(parsedDate, 'd MMM yyyy', {
      locale: locale === 'fr' ? fr : enUS,
    })
  }

  return (
    <motion.div
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
      <Accordion type="single" collapsible className="w-full">
        {posts.map((post, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex flex-col items-start w-full">
                  <div className="flex items-center space-x-2 mb-1">
                    <Badge className="text-sm font-normal px-2 py-0.5">
                      {post.tags && post.tags.length > 0
                        ? post.tags[0].name
                        : 'Uncategorized'}
                    </Badge>
                    <h2 className="text-lg font-semibold">
                      {locale === 'fr' ? post.titleFr : post.titleEn}
                    </h2>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex space-x-4 p-4">
                  <div className="w-1/4 flex items-center">
                    <div className="relative w-full pt-[100%]">
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
                        className="object-cover rounded absolute top-0 left-0"
                      />
                    </div>
                  </div>
                  <div className="w-3/4 flex flex-col justify-center">
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      {locale === 'fr'
                        ? post.shortDescriptionFr
                        : post.shortDescriptionEn}
                    </p>
                    <div className="flex justify-between items-center">
                      <time
                        className="text-xs text-gray-500 dark:text-gray-400"
                        dateTime={post.date}
                      >
                        {formatDate(post.date, locale)}
                      </time>
                      <Link
                        href={`/blog/${post.currentSlug}`}
                        className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {locale === 'fr' ? 'Lire la suite' : 'Read more'}
                        <svg
                          className="w-4 h-4 ml-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </motion.div>
  )
}
