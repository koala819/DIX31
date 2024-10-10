import { useEffect, useState } from 'react'

import { motion } from 'framer-motion'

interface Heading {
  id: string
  text: string | null
  level: string
}

interface TableOfContentsProps {
  locale: string
}

export const PostTableOfContents: React.FC<TableOfContentsProps> = ({
  locale,
}) => {
  const [activeHeading, setActiveHeading] = useState('')
  const [headings, setHeadings] = useState<Heading[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -80% 0px' },
    )

    const headingElements = document.querySelectorAll('h2, h3')
    headingElements.forEach((el) => observer.observe(el))

    const filteredHeadings = Array.from(headingElements)
      .map((el) => ({
        id: el.id,
        text: el.textContent,
        level: el.tagName.toLowerCase(),
      }))
      .filter(
        (heading) =>
          heading.id &&
          heading.text &&
          !['sommaire', 'services', 'more'].includes(
            heading.text.toLowerCase(),
          ),
      )

    setHeadings(filteredHeadings)

    return () => headingElements.forEach((el) => observer.unobserve(el))
  }, [])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -100
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    } else {
      console.error(`Element with id "${id}" not found`)
    }
  }

  return (
    <aside className="lg:w-1/4 lg:pr-8 mb-8 lg:mb-0">
      <nav className="sticky top-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100 border-b pb-2">
          {locale === 'fr' ? 'Sommaire' : 'Table of Contents'}
        </h2>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <motion.li
              key={heading.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => scrollToHeading(heading.id)}
                className={`
                  block w-full text-left py-2 px-3 rounded-md transition-all duration-200
                  ${heading.level === 'h3' ? 'ml-4 text-sm' : 'text-base font-medium'}
                  ${
                    activeHeading === heading.id
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 shadow-md'
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                  }
                `}
              >
                {heading.level === 'h2' && <span className="mr-2">•</span>}
                {heading.level === 'h3' && <span className="mr-2">◦</span>}
                {heading.text}
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
