import {
  Suspense, // , cache, lazy
} from 'react'

import { Metadata } from 'next'
import dynamic from 'next/dynamic'

import Career from '@/components/atoms/Career'

// import { comments } from '@/lib/comments'
// import { client } from '@/lib/sanity'

const Hero = dynamic(() => import('@/components/atoms/Hero'))
const Profile = dynamic(() => import('@/components/atoms/Profile'))

// const Blog = lazy(() => import('@/components/atoms/Blog'))
// const Projects = lazy(() => import('@/components/atoms/StarsProjects'))
// const Rates = lazy(() => import('@/components/atoms/Rates'))
// const CommentList = lazy(() => import('@/components/molecules/CommentList'))

export const metadata: Metadata = {
  title: 'Xavier - Développeur Web Freelance',
  description:
    'Spécialiste en réalisation de projets web personnalisés. Solutions sur mesure pour entreprises et particuliers. Consultation gratuite.',
  keywords:
    'développeur web, freelance, projets web, solutions sur mesure, consultation',
  robots: 'index, follow',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/`,
    languages: {
      'fr-FR': '/fr',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: 'Xavier - Développeur Web Freelance',
    description:
      'Spécialiste en réalisation de projets web personnalisés. Solutions sur mesure pour entreprises et particuliers.',
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xavier - Développeur Web Freelance',
    description:
      'Spécialiste en réalisation de projets web personnalisés. Solutions sur mesure pour entreprises et particuliers.',
  },
}

export default async function Page() {
  // const getPosts = cache(async () => {
  //   'use server'
  //   const query = `*[_type == 'blog'] | order(date desc)[0...3] {
  //     title,
  //     date,
  //     smallDescription,
  //     "currentSlug": slug.current,
  //     titleImage,
  //     titleImagebyCloudinary,
  //     "tag": tag[]->{
  //       name
  //     }
  //   }`

  //   return await client.fetch(query)
  // })

  // const posts = await getPosts()

  return (
    <div className="container space-y-12">
      <Hero />
      <Suspense fallback={<div>Chargement ...</div>}>
        <Profile />
        <Career />
        {/* <Blog posts={posts} /> */}
        {/* <Projects /> */}
        {/* <Rates /> */}
        {/* <CommentList comments={comments} /> */}
      </Suspense>
    </div>
  )
}