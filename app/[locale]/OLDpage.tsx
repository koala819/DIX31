import React, { Suspense, cache, lazy } from 'react'

import { Metadata } from 'next'
import dynamic from 'next/dynamic'

import { comments } from '@/lib/comments'
import { client } from '@/lib/sanity'

const Hero = dynamic(() => import('@/components/atoms/Hero'))

const Blog = lazy(() => import('@/components/atoms/Blog'))
const Projects = lazy(() => import('@/components/atoms/StarsProjects'))
const Rates = lazy(() => import('@/components/atoms/Rates'))
const CommentList = lazy(() => import('@/components/molecules/CommentList'))

export const metadata: Metadata = {
  title: 'DIX31 - Création de Sites Web Personnalisés sur mesure à Toulouse',
  description:
    'Spécialiste en création de sites web personnalisés et responsive. Solutions sur mesure pour entreprises. Consultation gratuite.',
  robots: 'index, follow',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/`,
    languages: {
      'fr-FR': '/fr-FR',
    },
  },
}
export default async function Page() {
  const getPosts = cache(async () => {
    'use server'
    const query = `*[_type == 'blog'] | order(date desc)[0...3] {
      title,
      date,
      smallDescription,
      "currentSlug": slug.current,
      titleImage,
      titleImagebyCloudinary,
      "tag": tag[]->{
        name
      }
    }`

    return await client.fetch(query)
  })

  const posts = await getPosts()

  return (
    <div className="container space-y-12">
      <Hero />
      <Suspense fallback={<div>Chargement ...</div>}>
        <Blog posts={posts} />
        <Projects />
        <Rates />
        <CommentList comments={comments} />
      </Suspense>
    </div>
  )
}
