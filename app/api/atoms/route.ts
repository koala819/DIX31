import { NextResponse } from 'next/server'

import generateAtomFeed from '@/lib/generateAtomFeed'

export async function GET() {
  try {
    const xml = await generateAtomFeed()
    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml',
      },
    })
  } catch (error) {
    console.error(error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
