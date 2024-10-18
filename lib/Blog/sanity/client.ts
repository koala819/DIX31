'server-only'

import { type QueryParams, createClient } from 'next-sanity'

import { apiVersion, basePath, dataset, projectId } from '@/lib/Blog/sanity/api'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: false, // Désactiver le CDN pour toujours obtenir les données les plus récentes
  perspective: 'published',
  stega: {
    enabled: process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview',
    studioUrl: basePath,
  },
})

export function getClient(preview?: { token: string }) {
  if (preview) {
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    })
  }
  return client
}

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  if (!source) {
    return '/images/default_product.png'
  }
  try {
    return source._type === 'cloudinaryImage'
      ? source.url
      : builder.image(source).url()
  } catch (error) {
    return '/images/default_product.png'
  }
}

export async function sanityFetch<QueryString extends string>({
  query,
  params = {},
}: {
  query: QueryString
  params?: QueryParams
}) {
  const now = new Date().toISOString()
  return client.fetch(query, { ...params, now })
}
