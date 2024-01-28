'use client'

import { PortableText } from '@portabletext/react'

import Image from 'next/image'
import Link from 'next/link'

import { fullBlog } from '@/types/blog'

import { Button } from '@/components/ui/button'

import { urlFor } from '@/lib/sanity'
import { format, parseISO } from 'date-fns'

export function Post({ post }: { post: fullBlog }) {
  // getBlogPostMetadata(post.title, post.content)

  return (
    <div className="p-8 sm:prose-base md:prose-lg">
      <header className="p-4">
        <h1 className="font-extrabold text-3xl">{post.title}</h1>

        <span className="text-gray-500 font-medium">
          {format(parseISO(post.date), 'dd-MM-yyyy')}
        </span>
      </header>

      <div className="w-full flex justify-center">
        <Image
          src={urlFor(post.titleImage)}
          alt={post.title}
          width={500}
          height={800}
          priority
          className="rounded-lg mt-8 border"
        />
      </div>

      <div className="flex justify-center mt-16">
        <div className="prose prose-blue prose-xl dark:prose-invert prose-li:marker:text-primary max-w-none md:max-w-3xl">
          <PortableText value={post.content} />
        </div>
      </div>
      <div className="flex items-center justify-center p-8">
        <Link href="/blog">
          <Button>Retour</Button>
        </Link>
      </div>
    </div>
  )
}
