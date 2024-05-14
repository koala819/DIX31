// import React, { Suspense, lazy } from 'react'
// import { cache } from 'react'
import { Metadata } from 'next'

// import { comments } from '@/utils/comments'
// import { client } from '@/lib/sanity'
import Hero from '@/ui/atoms/Hero'

// const Blog = lazy(() => import('@/ui/atoms/Blog'))
// const Projets = lazy(() => import('@/ui/atoms/Projets'))
// const Rates = lazy(() => import('@/ui/atoms/Rates'))
// const CommentList = lazy(() => import('@/ui/molecules/CommentList'))

export const metadata: Metadata = {
  title: 'DIX31 - Création de Sites Web Personnalisés sur mesure à Toulouse',
  description:
    'Spécialiste en création de sites web personnalisés et responsive. Solutions sur mesure pour entreprises. Consultation gratuite.',
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
    <section className="my-16">
      <Hero />
      {/* <Suspense fallback={<div>Chargement ...</div>}>
        <Blog posts={posts} />
        <Projets />
        <Rates />
        <CommentList comments={comments} />
      </Suspense> */}
    </section>
  )
}
