'use client'

import { PortableText } from '@portabletext/react'
import { useState } from 'react'

import { useParams } from 'next/navigation'

import { fullBlog } from '@/types/blog'

import { PostHeader } from '@/components/atoms/PostHeader'
import { PostTableOfContents } from '@/components/atoms/PostTableOfContents'
import { PostFooter } from '@/components/molecules/PostFooter'
import { myPortableTextComponents } from '@/components/molecules/myPortableTextComponents'

import { urlFor } from '@/lib/sanity'
import { format, parseISO } from 'date-fns'
import { enUS, fr } from 'date-fns/locale'

export function Post({ post }: { post: fullBlog }) {
  const params = useParams()
  const locale = params.locale as string
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false)

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
      </div>
    </div>
  )
}
