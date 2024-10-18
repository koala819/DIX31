import { Metadata } from 'next'

import { Blog as BlogType } from '@/types/sanity'

function countWordsInBlock(block: any): number {
  if (block._type === 'block' && block.children) {
    return block.children.reduce((count: number, child: any) => {
      if (typeof child.text === 'string') {
        return count + child.text.trim().split(/\s+/).length
      }
      return count
    }, 0)
  }
  return 0
}

export function estimateReadTime(content: BlogType['contentFr']): number {
  const wordsPerMinute = 200
  const imageViewTime = 10 // seconds
  const codeReadTime = 20 // seconds per block
  let totalWords = 0
  let imageCount = 0
  let codeBlockCount = 0

  if (Array.isArray(content)) {
    content.forEach((item) => {
      if (item._type === 'block') {
        totalWords += countWordsInBlock(item)
      } else if (item._type === 'image' || item._type === 'cloudinaryImage') {
        imageCount++
      } else if (item._type === 'code') {
        codeBlockCount++
      }
    })
  }

  const readTimeMinutes = totalWords / wordsPerMinute
  const imageTimeMinutes = (imageCount * imageViewTime) / 60
  const codeTimeMinutes = (codeBlockCount * codeReadTime) / 60

  return Math.ceil(readTimeMinutes + imageTimeMinutes + codeTimeMinutes)
}

export function getBlogPostMetadata(postTitle: string, postSummary: any) {
  const metadata: Metadata = {
    title: `${postTitle} - Blog de DIX31`,
    description: `${postSummary[0].children[0].text.substring(0, 150)}...`,
  }

  return metadata
}
