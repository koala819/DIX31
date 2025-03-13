'use client'

import { ChevronsLeft, ChevronsRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { FiClock, FiSearch } from 'react-icons/fi'

import { useTranslations } from 'next-intl'
import Image from 'next/legacy/image'

import { BlogGridProps } from '@/types/blog'

import CategoryFilter from '@/components/BLOG/atoms/CategoryFilter'
import { Button } from '@/components/ui/button'

import { Link } from '@/i18n/navigation'
import { format, parseISO } from 'date-fns'
import { enUS, fr } from 'date-fns/locale'

const BlogGrid: React.FC<BlogGridProps> = ({ articles, locale }) => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [filter, setFilter] = useState<string>('all')

  const t = useTranslations('Blog')
  const articlesPerPage = 6

  const allCategories = [
    'all',
    ...new Set(articles.flatMap((article) => article.categories)),
  ]

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === 'all' || article.categories.includes(filter)),
  )

  const indexOfLastArticle = currentPage * articlesPerPage
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle,
  )

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, filter])

  function formatDate(date: string, locale: string) {
    const parsedDate = parseISO(date)
    return format(parsedDate, 'd MMM yyyy', {
      locale: locale === 'fr' ? fr : enUS,
    })
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <main className="container mx-auto px-4 py-8">
        <header className="mb-12 text-center relative">
          <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            {t('subtitle')}
          </p>
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder={t('searchPlaceholder')}
              className="w-full px-4 py-2 rounded-full border-2 border-gray-300 dark:border-gray-700 focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </header>

        <CategoryFilter
          categories={allCategories}
          activeFilter={filter}
          onFilterChange={setFilter}
          locale={locale}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentArticles.map((article) => (
            <Link href={`/blog/${article.currentSlug}`} key={article.id}>
              <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="relative h-48">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    layout="fill"
                    className="transition-opacity duration-300 object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                    <time className="text-xs" dateTime={article.date}>
                      {formatDate(article.date, locale)}
                    </time>
                    <div className="flex items-center">
                      <FiClock className="mr-1" />
                      <span>
                        {article.readTime} {t('readTime')}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {article.categories.map((category) => (
                      <span
                        key={category}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <Button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              variant="outline"
              size="icon"
            >
              <span className="sr-only">Previous</span>
              <ChevronsLeft className="h-4 w-4" />
            </Button>
            {Array.from({
              length: Math.ceil(filteredArticles.length / articlesPerPage),
            }).map((_, index) => (
              <Button
                key={index}
                onClick={() => paginate(index + 1)}
                variant={currentPage === index + 1 ? 'secondary' : 'outline'}
              >
                {index + 1}
              </Button>
            ))}
            <Button
              onClick={() => paginate(currentPage + 1)}
              disabled={
                currentPage ===
                Math.ceil(filteredArticles.length / articlesPerPage)
              }
              variant="outline"
              size="icon"
            >
              <span className="sr-only">Next</span>
              <ChevronsRight className="h-4 w-4" />
            </Button>
          </nav>
        </div>
      </main>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .grid > a > article {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}

export default BlogGrid
