import {
  Suspense, // , cache, lazy
} from 'react'

import { Metadata } from 'next'
import dynamic from 'next/dynamic'

import Career from '@/components/atoms/Career'
import IdeaToLaunchSteps from '@/components/atoms/IdeaToLaunchSteps'
import ScrollToContact from '@/components/atoms/ScrollToContact'
import Services from '@/components/atoms/Services'
import Contact from '@/components/molecules/Contact'
import Testimonial from '@/components/molecules/Testimonial'

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
    <main className="container space-y-12">
      <ScrollToContact />
      <Hero />
      <Suspense
        fallback={
          <div role="alert" aria-busy="true">
            Chargement ...
          </div>
        }
      >
        <Profile />
        <Career />
        <Testimonial user="Joge" />
        <Services />
        <Testimonial user="Sandrine" />
        <IdeaToLaunchSteps />
        <Testimonial user="Pascal" />
        <Contact />
        <Testimonial user="Sid" />

        {/* <Opinion /> */}
        {/* <Blog posts={posts} /> */}
        {/* <Projects /> */}
        {/* <Rates /> */}
        {/* <CommentList comments={comments} /> */}
      </Suspense>
    </main>
  )
}
