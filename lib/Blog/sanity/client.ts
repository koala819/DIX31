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

// Fonction pour obtenir l'URL d'image en fonction de la source choisie
export function getImageUrl(blog: any): string {
  if (!blog) {
    return '/images/default_product.png'
  }

  try {
    // Si la source d'image est Cloudinary et qu'une image Cloudinary existe
    if (blog.imageSource === 'cloudinary' && blog.titleImagebyCloudinary) {
      return blog.titleImagebyCloudinary.url || '/images/default_product.png'
    }

    // Sinon, utiliser l'image Sanity par défaut
    if (blog.titleImage) {
      return builder.image(blog.titleImage).url()
    }

    // Si aucune des deux images n'est disponible, revenir à l'image par défaut
    return '/images/default_product.png'
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'URL de l\'image:', error)
    return '/images/default_product.png'
  }
}

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