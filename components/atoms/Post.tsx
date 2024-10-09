'use client'

import { PortableText } from '@portabletext/react'
import React, { useState } from 'react'

import { useParams } from 'next/navigation'

import { fullBlog } from '@/types/blog'

import { PostFooter } from './PostFooter'
import { PostHeader } from './PostHeader'
import { PostTableOfContents } from './PostTableOfContents'
import { myPortableTextComponents } from './myPortableTextComponents'

import { urlFor } from '@/lib/sanity'
import { format, parseISO } from 'date-fns'
import { enUS, fr } from 'date-fns/locale'

// import { AnimatePresence, motion } from 'framer-motion'

export function Post({ post }: { post: fullBlog }) {
  const params = useParams()
  const locale = params.locale as string
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false)

  // const [isImageModalOpen, setIsImageModalOpen] = useState(false)

  // const CustomImage = ({ value }: { value: any }) => {
  //   const handleImageClick = () => {
  //     setSelectedImage(urlFor(value))
  //     setIsImageModalOpen(true)
  //   }

  //   return (
  //     <motion.figure
  //       className="my-8 cursor-pointer"
  //       initial={{ opacity: 0, y: 20 }}
  //       animate={{ opacity: 1, y: 0 }}
  //       transition={{ duration: 0.5 }}
  //       onClick={handleImageClick}
  //     >
  //       <Image
  //         src={urlFor(value)}
  //         alt={value.alt || 'Image'}
  //         width={600}
  //         height={400}
  //         className="w-full h-[400px] object-cover rounded-lg shadow-md"
  //       />
  //       {value.caption && (
  //         <figcaption className="text-center text-sm text-gray-500 mt-2">
  //           {value.caption}
  //         </figcaption>
  //       )}
  //     </motion.figure>
  //   )
  // }

  const title = locale === 'fr' ? post.titleFr : post.titleEn
  const content = locale === 'fr' ? post.contentFr : post.contentEn
  const shortDescription =
    locale === 'fr' ? post.shortDescriptionFr : post.shortDescriptionEn

  const estimatedReadTime = Math.ceil(
    content.reduce((acc, block) => {
      if (block._type === 'block') {
        return (
          acc +
          block.children.reduce(
            (sum: number, child: { text?: string }) =>
              sum + (child.text?.length || 0),
            0,
          )
        )
      }
      return acc
    }, 0) / 200,
  )

  const formatDate = (date: string) => {
    return format(parseISO(date), 'dd MMMM yyyy', {
      locale: locale === 'fr' ? fr : enUS,
    })
  }

  return (
    <div className="min-h-screen">
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <PostHeader
          titleImage={urlFor(post.titleImagebyCloudinary)}
          title={title}
          shortDescription={shortDescription}
          date={formatDate(post.date)}
          readTime={estimatedReadTime}
          locale={locale}
        />

        <main className="container mx-auto px-4 py-12 flex flex-col lg:flex-row">
          <PostTableOfContents locale={locale} />

          <article className="lg:w-3/4">
            <div className="prose prose-lg lg:prose-xl dark:prose-invert mx-auto">
              <PortableText
                value={content}
                components={myPortableTextComponents}
              />
            </div>

            <PostFooter
              locale={locale}
              title={title}
              isShareDialogOpen={isShareDialogOpen}
              setIsShareDialogOpen={setIsShareDialogOpen}
            />
          </article>
        </main>

        {/* <button
          onClick={toggleDarkMode}
          className="fixed bottom-4 right-4 p-2 bg-gray-200 dark:bg-gray-800 rounded-full shadow-lg"
        >
          {isDarkMode ? (
            <Sun className="w-6 h-6 text-yellow-500" />
          ) : (
            <Moon className="w-6 h-6 text-gray-700" />
          )}
        </button> */}

        {/* <AnimatePresence>
          {isImageModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
              onClick={() => setIsImageModalOpen(false)}
            >
              <motion.img
                src={selectedImage}
                alt="Full size image"
                className="max-w-full max-h-full object-contain"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />
            </motion.div>
          )}
        </AnimatePresence> */}
      </div>
    </div>
  )
}
