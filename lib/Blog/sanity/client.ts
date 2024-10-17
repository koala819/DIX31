// ./src/sanity/lib/client.ts
import { QueryOptions, type QueryParams, createClient } from 'next-sanity'
import { draftMode } from 'next/headers'

import { token } from './token'

// import { apiVersion, dataset, projectId } from '../env'
import { apiVersion, dataset, projectId } from 'lib/sanity.api'
import 'server-only'

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  stega: {
    enabled: process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview',
    studioUrl: '/studio',
  },
})

export async function sanityFetch<const QueryString extends string>({
  query,
  params = {},
  revalidate = 60, // default revalidation time in seconds
  tags = [],
}: {
  query: QueryString
  params?: QueryParams
  revalidate?: number | false
  tags?: string[]
}) {
  const isDraftMode = draftMode().isEnabled

  if (isDraftMode && !token) {
    throw new Error('Missing environment variable SANITY_API_READ_TOKEN')
  }

  const queryOptions: QueryOptions = {}
  let maybeRevalidate = revalidate

  if (isDraftMode) {
    queryOptions.token = token
    queryOptions.perspective = 'previewDrafts'
    queryOptions.stega = true

    maybeRevalidate = 0 // Do not cache in Draft Mode
  } else if (tags.length) {
    maybeRevalidate = false // Cache indefinitely if tags supplied
  }

  return client.fetch(query, params, {
    ...queryOptions,
    next: {
      revalidate: maybeRevalidate,
      tags,
    },
  })
}
