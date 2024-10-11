'use client'

import { Linkedin, Mail } from 'lucide-react'
import { useMemo } from 'react'

import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'

import FooterLink from '@/components/atoms/FooterLink'
import HireMeBtn from '@/components/atoms/HireMeBtn'

import { Link } from '@/i18n/routing'

export default function Footer() {
  const t = useTranslations('Footer')

  const WithCustomLoading = dynamic(
    () => import('@/components/atoms/LoadImage'),
    {
      loading: () => (
        <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gray-300 animate-pulse rounded-xl"></div>
      ),
    },
  )

  const MemoizedImage = useMemo(
    () => (
      <WithCustomLoading
        src="/images/Xavier-GENOLHAC.jpg"
        alt="Photo de Xavier"
        fill
        className="rounded-xl object-cover border-4 border-white dark:border-gray-800 shadow-lg transition-transform duration-300 hover:scale-105"
        sizes="(max-width: 768px) 96px, 128px"
        priority
      />
    ),
    [],
  )

  return (
    <footer className="bg-gray-300 dark:bg-gray-900 pt-16 w-full relative">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="relative">
            <div className="absolute -top-32 left-0 w-24 h-24 lg:w-32 lg:h-32">
              {MemoizedImage}
            </div>
            <div className="grid gap-4 mt-16">
              <div>
                <div className="text-lg font-semibold text-gray-800 dark:text-white">
                  Xavier Genolhac
                </div>
                <p className="text-lg font-medium lg:text-xl text-gray-600 dark:text-gray-300">
                  Freelance Web Developer
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <HireMeBtn />
                <Link
                  href="mailto:contact@dix31.com"
                  className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/xavier-genolhac/"
                  target="_blank"
                  className="text-gray-600 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <h3 className="text-lg font-bold sm:text-2xl text-gray-600 dark:text-gray-200">
              Services
            </h3>
            <div className="grid gap-2">
              {['nextjs', 'react', 'tailwind'].map((service) => (
                <FooterLink key={service} href={`/${service}-dev`}>
                  {t(service)}
                </FooterLink>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            <h3 className="text-lg font-bold sm:text-2xl text-gray-600 dark:text-gray-200">
              More
            </h3>
            <div className="grid gap-2">
              <FooterLink href="https://github.com/koala819" external>
                GitHub
              </FooterLink>
              {['mentions', 'privacy'].map((page) => (
                <FooterLink key={page} href={`/${page}`}>
                  {t(page)}
                </FooterLink>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-md font-medium text-gray-500 dark:text-gray-400">
          Le code source de ce site est disponible sous licence copyleft sur{' '}
          <Link
            href="https://github.com/koala819/DIX31"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            GitHub
          </Link>
          .
        </div>
      </div>
    </footer>
  )
}
