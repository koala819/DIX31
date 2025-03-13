'use client'

import { PortableText } from '@portabletext/react'
import { ArrowLeft } from 'lucide-react'

import { useParams, usePathname } from 'next/navigation'

import { fullBlog } from '@/types/blog'

import { PostHeader } from '@/components/BLOG/atoms/PostHeader'
import { PostTableOfContents } from '@/components/BLOG/atoms/PostTableOfContents'
import { ShareDialog } from '@/components/BLOG/atoms/ShareDialog'
import SimilarPostsList from '@/components/BLOG/atoms/SimilarPostsList'
import { CustomPortableTextComponents } from '@/components/BLOG/molecules/CustomPortableTextComponents'
import { Button } from '@/components/ui/button'

import { Link } from '@/i18n/navigation'
import { estimateReadTime } from '@/lib/Blog/utils'
import { format, parseISO } from 'date-fns'
import { enUS, fr } from 'date-fns/locale'

interface PostProps {
  post: fullBlog & {
    coverImage?: string; // Nouvelle propriété ajoutée par notre transformation
  }
  similarPosts: {
    currentSlug: string
    titleFr: string
    titleEn: string
    date: string
    coverImage?: string; // Nouvelle propriété ajoutée par notre transformation
  }[]
}

export const Post: React.FC<PostProps> = ({ post, similarPosts }) => {
  const params = useParams()
  const fullUrl = usePathname()
  const locale = params.locale as string

  const title = locale === 'fr' ? post.titleFr : post.titleEn
  const content = locale === 'fr' ? post.contentFr : post.contentEn
  const shortDescription =
    locale === 'fr' ? post.shortDescriptionFr : post.shortDescriptionEn

  const formatDate = (date: string) => {
    return format(parseISO(date), 'dd MMMM yyyy', {
      locale: locale === 'fr' ? fr : enUS,
    })
  }

  return (
    <div className="min-h-screen">
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <PostHeader
          titleImage={post.coverImage || '/images/default_product.png'} // Utiliser la propriété coverImage au lieu de urlFor
          title={title}
          shortDescription={shortDescription}
          date={formatDate(post.date)}
          readTime={estimateReadTime(content)}
          locale={locale}
        />

        <main className="container mx-auto px-4 py-12 flex flex-col lg:flex-row">
          <PostTableOfContents locale={locale} />

          <article className="lg:w-1/2 lg:px-8">
            <div className="prose prose-lg lg:prose-xl dark:prose-invert mx-auto">
              {content && (
                <PortableText
                  value={content}
                  components={CustomPortableTextComponents}
                />
              )}
            </div>

            <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <Link
                  href="/blog"
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
                >
                  <Button
                    variant="ghost"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="font-medium">
                      {locale === 'fr'
                        ? 'Retour aux articles'
                        : 'Back to articles'}
                    </span>
                  </Button>
                </Link>
                <ShareDialog locale={locale} title={title} url={fullUrl} />
              </div>
            </footer>
          </article>

          <aside className="lg:w-1/4 lg:pl-8 mt-12 lg:mt-0">
            <div className="sticky top-24 space-y-8">
              <div className="bg-blue-100 dark:bg-blue-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-200">
                  {locale === 'fr'
                    ? 'Expertise freelance'
                    : 'Freelance Expertise'}
                </h3>
                <p className="text-blue-700 dark:text-blue-300 mb-4">
                  {locale === 'fr'
                    ? "Besoin d'un développeur expérimenté pour votre projet ?"
                    : 'Need an experienced developer for your project?'}
                </p>
                <Link href="/?scrollTo=contact">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                    {locale === 'fr' ? 'Contactez-moi' : 'Contact Me'}
                  </Button>
                </Link>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                  {locale === 'fr' ? 'Articles similaires' : 'Similar Articles'}
                </h3>
                <SimilarPostsList
                  locale={locale}
                  formatDate={formatDate}
                  similarPosts={similarPosts}
                />
              </div>
            </div>
          </aside>
        </main>
      </div>
    </div>
  )
}