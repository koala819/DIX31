import { Metadata } from 'next'

export function getBlogPostMetadata(postTitle: string, postSummary: any) {
  const metadata: Metadata = {
    title: `${postTitle} - Blog de DIX31`,
    description: `${postSummary[0].children[0].text.substring(0, 150)}...`,
  }

  return metadata
}
