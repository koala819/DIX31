import { createClient } from 'next-sanity'

import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-05-03',
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  if (!source) {
    return '/images/default_product.png'
  }

  try {
    let url: any
    source?._type === 'cloudinaryImage'
      ? (url = source.url)
      : (url = builder.image(source).url())
    return url
  } catch (error) {
    return '/images/default_product.png'
  }
}
