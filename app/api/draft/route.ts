import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

import { readToken } from '@/lib/Blog/sanity/api'
import { getClient } from '@/lib/Blog/sanity/client'
import { validatePreviewUrl } from '@sanity/preview-url-secret'

const clientWithToken = getClient().withConfig({ token: readToken })

export async function GET(request: Request) {
  const { isValid, redirectTo = '/' } = await validatePreviewUrl(
    clientWithToken,
    request.url,
  )
  if (!isValid) {
    return new Response('Invalid secret', { status: 401 })
  }

  draftMode().enable()

  redirect(redirectTo)
}
