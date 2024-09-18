'use client'

import { PortableText } from '@portabletext/react'
import {
  ArrowLeft,
  Calendar,
  Clock,
  Facebook,
  Link as LinkIcon,
  Share2,
  Twitter,
} from 'lucide-react'
import React, { useState } from 'react'

import Image from 'next/image'
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

import { urlFor } from '@/lib/sanity'
import { format, parseISO } from 'date-fns'
import { AnimatePresence, motion } from 'framer-motion'

export function Post({ post }: { post: fullBlog }) {
  const params = useParams()
  const locale = params.locale as string
  const [isShareDialogOpen, setIsShareDialogOpen] = useState<boolean>(false)

  const CustomImage = ({ value }: { value: { size: string; alt: string } }) => {
    let width, height
    switch (value.size) {
      case 'small':
        width = 300
        height = 300
        break
      case 'medium':
        width = 600
        height = 600
        break
      case 'large':
        width = 900
        height = 900
        break
      default:
        width = 600
        height = 600
    }
    return (
      <motion.div
        className="flex justify-center my-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href={urlFor(value)} target="_blank">
          <Image
            src={urlFor(value)}
            alt={value.alt || 'Image'}
            width={width}
            height={height}
            className="rounded-lg cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </Link>
      </motion.div>
    )
  }

  const myPortableTextComponents = {
    types: {
      image: CustomImage,
      cloudinaryImage: CustomImage,
    },
    marks: {
      link: ({ value, children }: any) => (
        <Link
          href={value.href}
          className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </Link>
      ),
    },
  }

  const richTextStyles = `
    mt-8
    text-lg
    text-gray-700
    leading-relaxed
    max-w-prose
    mx-auto
    prose
    prose-headings:font-bold
    prose-headings:text-gray-900
    prose-h2:text-3xl
    prose-h3:text-2xl
    prose-p:mb-4
    prose-a:text-blue-600
    prose-img:rounded-xl
    prose-img:shadow-lg
  `

  const title = locale === 'fr' ? post.titleFr : post.titleEn
  const content = locale === 'fr' ? post.contentFr : post.contentEn

  const estimatedReadTime = Math.ceil(
    content.reduce((acc, block) => {
      if (block._type === 'block') {
        return (
          acc +
          block.children.reduce(
            (sum: any, child: { text: string | any[] }) =>
              sum + (child.text?.length || 0),
            0,
          )
        )
      }
      return acc
    }, 0) / 200,
  )

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        alert(locale === 'fr' ? 'Lien copié !' : 'Link copied!')
      })
      .catch((err) => {
        console.error('Failed to copy: ', err)
      })
  }

  const shareUrl = encodeURIComponent(window.location.href)
  const shareTitle = encodeURIComponent(title)

  return (
    <motion.div
      className="container pt-navbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <article className="max-w-4xl mx-auto">
        <AnimatePresence>
          <motion.header
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-4">{title}</h1>
            <div className="flex items-center text-sm text-muted-foreground space-x-4">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {format(parseISO(post.date), 'dd MMMM yyyy')}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {estimatedReadTime} min de lecture
              </span>
            </div>
          </motion.header>

          {post.youtubeVideo && post.youtubeVideo.url && (
            <motion.div
              className="video-container mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={post.youtubeVideo.url.replace('watch?v=', 'embed/')}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full rounded-lg shadow-lg"
                ></iframe>
              </div>
            </motion.div>
          )}

          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
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
                  : title
              }
              width={1200}
              height={630}
              priority
              className="rounded-xl shadow-2xl w-full"
            />
          </motion.div>

          <motion.div
            className={richTextStyles}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PortableText
              value={content}
              components={myPortableTextComponents}
            />
          </motion.div>

          <motion.footer
            className="mt-12 pt-6 border-t border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center">
              <Link
                href={`/${locale}/blog`}
                className="focus:outline-none focus:ring"
              >
                <Button
                  variant="outline"
                  className="flex items-center space-x-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
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
                    className="flex items-center space-x-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
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
                      onClick={handleCopyLink}
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
                          `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
                          '_blank',
                          'noopener,noreferrer',
                        )
                      }
                      className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700"
                    >
                      <Facebook className="w-4 h-4" />
                      <span>Facebook</span>
                    </Button>
                    <Button
                      onClick={() =>
                        window.open(
                          `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`,
                          '_blank',
                          'noopener,noreferrer',
                        )
                      }
                      className="flex items-center justify-center space-x-2 bg-sky-500 hover:bg-sky-600"
                    >
                      <Twitter className="w-4 h-4" />
                      <span>Twitter</span>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </motion.footer>
        </AnimatePresence>
      </article>
    </motion.div>
  )
}
