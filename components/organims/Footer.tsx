'use client'

import { Linkedin, Mail } from 'lucide-react'
import { useMemo } from 'react'

import dynamic from 'next/dynamic'
import Link from 'next/link'

import HireMeBtn from '@/components/atoms/HireMeBtn'

export default function Component() {
  const WithCustomLoading = dynamic(
    () => import('@/components/atoms/LoadImage'),
    {
      loading: () => <div>Chargement ...</div>,
    },
  )

  const MemoizedImage = useMemo(
    () => (
      <WithCustomLoading
        src="/images/Xavier-GENOLHAC.jpg"
        alt="Photo de Xavier"
        layout="fill"
        className="rounded-xl object-cover border-4 border-white dark:border-gray-800 shadow-lg"
        sizes="(max-width: 768px) 96px, 128px"
        priority
      />
    ),
    [],
  )

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 p-6 md:py-12 w-full relative mt-16 md:mt-24">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="relative pt-28 md:pt-0">
            <div className="absolute -top-24 md:-top-36 left-0 w-24 h-24 lg:w-32 lg:h-32">
              {MemoizedImage}
            </div>
            <div className="grid gap-4">
              <div>
                <div className="text-lg font-semibold dark:text-white">
                  Xavier Genolhac
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Freelance Web Developer
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <HireMeBtn />
                <Link href="mailto:contact@dix31.com">
                  <Mail className="w-6 h-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/xavier-genolhac/"
                  target="_blank"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="text-lg font-semibold dark:text-white">
              Services
            </div>
            <div className="grid gap-2">
              <Link
                href="#"
                className="text-sm hover:underline dark:text-gray-300"
                prefetch={false}
              >
                Next.js Development
              </Link>
              <Link
                href="#"
                className="text-sm hover:underline dark:text-gray-300"
                prefetch={false}
              >
                React Development
              </Link>
              <Link
                href="#"
                className="text-sm hover:underline dark:text-gray-300"
                prefetch={false}
              >
                Tailwind CSS
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="text-lg font-semibold dark:text-white">More</div>
            <div className="grid gap-2">
              <Link
                href="#"
                className="text-sm hover:underline dark:text-gray-300"
                prefetch={false}
              >
                GitHub
              </Link>
              <Link
                href="#"
                className="text-sm hover:underline dark:text-gray-300"
                prefetch={false}
              >
                YouTube
              </Link>
              <Link
                href="#"
                className="text-sm hover:underline dark:text-gray-300"
                prefetch={false}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
