import { NextResponse } from 'next/server'

import generateAtomFeed from '@/lib/generateAtomFeed'

export async function GET() {
  try {
    const xml = await generateAtomFeed()
    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/rss+xml',
        'Cache-Control': 'max-age=0, s-maxage=3600',
      },
    })
  } catch (error) {
    console.error(error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
