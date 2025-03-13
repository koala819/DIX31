import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { fullBlog } from '@/types/blog'
import { Post } from '@/components/BLOG/organisms/Post'
import { sanityFetch } from '@/lib/Blog/sanity/client'
import { getImageUrl } from '@/lib/Blog/sanity/client' // Importer la nouvelle fonction

async function getSlug(slug: string) {
  const query = `*[_type == 'blog' && slug.current == '${slug}'] {
    "currentSlug": slug.current,
    titleFr,
    titleEn,
    contentFr,
    contentEn,
    shortDescriptionFr,
    shortDescriptionEn,
    titleImage,
    titleImagebyCloudinary,
    imageSource,
    date,
    youtubeVideo {
      url
    }
  }[0]`
  const data = await sanityFetch({ query })
  if (!data) notFound()
  return data
}

async function getSlugWithSimilarPosts(slug: string) {
  // Première requête pour obtenir l'article principal
  const postQuery = `*[_type == 'blog' && slug.current == '${slug}'][0] {
    "currentSlug": slug.current,
    titleFr,
    titleEn,
    contentFr,
    contentEn,
    shortDescriptionFr,
    shortDescriptionEn,
    titleImage,
    titleImagebyCloudinary,
    imageSource,
    date,
    youtubeVideo {
      url
    },
    categories
  }`
  const post = await sanityFetch({ query: postQuery })
  if (!post) notFound()

  // Deuxième requête pour obtenir les articles similaires
  const similarPostsQuery = `*[_type == 'blog' && slug.current != '${slug}' && count(categories[@in $categories]) == count($categories)] | order(date desc) [0...3] {
    "currentSlug": slug.current,
    titleFr,
    titleEn,
    date,
    titleImage,
    titleImagebyCloudinary,
    imageSource
  }`
  const similarPosts = await sanityFetch({
    query: similarPostsQuery,
    params: { categories: post.categories },
  })

  // Transformer les similarPosts pour utiliser la bonne image
  const transformedSimilarPosts = similarPosts.map((similarPost: any) => {
    return {
      ...similarPost,
      // Remplacer les URL d'images par celle déterminée par getImageUrl
      titleImage: undefined,
      titleImagebyCloudinary: undefined,
      // Ajouter une nouvelle propriété pour l'URL de l'image
      coverImage: getImageUrl(similarPost)
    }
  })

  // Transformer le post principal pour utiliser la bonne image
  const transformedPost = {
    ...post,
    // Remplacer les URL d'images par celle déterminée par getImageUrl
    coverImage: getImageUrl(post)
  }

  return { post: transformedPost, similarPosts: transformedSimilarPosts }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string; locale: string }
}): Promise<Metadata> {
  const post: fullBlog = await getSlug(params.slug)
  if (!post) notFound()

  const title = params.locale === 'fr' ? post.titleFr : post.titleEn
  const description =
    params.locale === 'fr' ? post.shortDescriptionFr : post.shortDescriptionEn

  return {
    title: title,
    description: description ? description.substring(0, 147) + '...' : '',
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}/${params.locale}/blog/${params.slug}`,
    },
    openGraph: {
      images: [
        {
          url: getImageUrl(post), // Utiliser la nouvelle fonction
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  }
}

export default async function Page({
  params,
}: {
  params: { slug: string; locale: string }
}) {
  const { post, similarPosts } = await getSlugWithSimilarPosts(params.slug)
  if (!post) notFound()

  return <Post post={post} similarPosts={similarPosts} />
}