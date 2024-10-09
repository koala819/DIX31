'use client'

import { PortableText } from '@portabletext/react'
import {
  ArrowLeft,
  Facebook,
  Link as LinkIcon,
  Share2,
  Twitter,
} from 'lucide-react'
import React, { useState } from 'react'

import Link from 'next/link'
import { useParams } from 'next/navigation'

import { fullBlog } from '@/types/blog'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

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

            <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <Link
                  href={`/${locale}/blog`}
                  className="focus:outline-none focus:ring"
                >
                  <Button
                    variant="outline"
                    className="flex items-center space-x-2 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors duration-300"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>
                      {locale === 'fr'
                        ? 'Retour aux articles'
                        : 'Back to articles'}
                    </span>
                  </Button>
                </Link>
                <Dialog
                  open={isShareDialogOpen}
                  onOpenChange={setIsShareDialogOpen}
                >
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex items-center space-x-2 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors duration-300"
                    >
                      <Share2 className="w-4 h-4" />
                      <span>{locale === 'fr' ? 'Partager' : 'Share'}</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        {locale === 'fr'
                          ? 'Partager cet article'
                          : 'Share this article'}
                      </DialogTitle>
                      <DialogDescription>
                        {locale === 'fr'
                          ? 'Choisissez une option de partage'
                          : 'Choose a sharing option'}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col space-y-4 mt-4">
                      <Button
                        onClick={() =>
                          navigator.clipboard.writeText(window.location.href)
                        }
                        className="flex items-center justify-center space-x-2"
                      >
                        <LinkIcon className="w-4 h-4" />
                        <span>
                          {locale === 'fr' ? 'Copier le lien' : 'Copy link'}
                        </span>
                      </Button>
                      <Button
                        onClick={() =>
                          window.open(
                            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                              window.location.href,
                            )}`,
                            '_blank',
                            'noopener,noreferrer',
                          )
                        }
                        className="flex items-center justify-center space-x-2 bg-[#1877F2] hover:bg-[#166FE5]"
                      >
                        <Facebook className="w-4 h-4" />
                        <span>Facebook</span>
                      </Button>
                      <Button
                        onClick={() =>
                          window.open(
                            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                              window.location.href,
                            )}&text=${encodeURIComponent(title)}`,
                            '_blank',
                            'noopener,noreferrer',
                          )
                        }
                        className="flex items-center justify-center space-x-2 bg-[#1DA1F2] hover:bg-[#1A91DA]"
                      >
                        <Twitter className="w-4 h-4" />
                        <span>Twitter</span>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </footer>
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
