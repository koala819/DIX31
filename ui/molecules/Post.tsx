'use client'

import { PortableText } from '@portabletext/react'

import Image from 'next/image'
import Link from 'next/link'

import { fullBlog } from '@/types/blog'

import { Button } from '@/components/ui/button'

import { urlFor } from '@/lib/sanity'
import { format, parseISO } from 'date-fns'

const CustomImage = ({ value }: { value: { size: string; alt: string } }) => {
  let width, height

  switch (value.size) {
    case 'small':
      width = 100
      height = 100
      break
    case 'medium':
      width = 300
      height = 300
      break
    case 'large':
      width = 900
      height = 900
      break
    default:
      width = 500
      height = 500
  }
  return (
    <div className="flex justify-center">
      <Link href={urlFor(value)} target="_blank">
        <Image
          src={urlFor(value)}
          alt={value.alt || 'Image'}
          width={width}
          height={height}
          className="rounded-lg cursor-pointer"
        />
      </Link>
    </div>
  )
}

const myPortableTextComponents = {
  types: {
    image: CustomImage,
    cloudinaryImage: CustomImage,
  },
  marks: {
    link: ({ value, children }: any) => (
      <Link
        href={value.href}
        className="hover:text-blue-500 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </Link>
    ),
  },
}

const richTextStyles = `
mt-14
text-justify
max-w-2xl
m-auto
prose-headings:my-5
prose-heading:text-2xl
prose-p:mb-5
prose-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-li:ml-4
`

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
          src={
            post.titleImage
              ? urlFor(post.titleImage)
              : urlFor(post.titleImagebyCloudinary)
          }
          alt={
            post.titleImagebyCloudinary
              ? post.titleImagebyCloudinary.alt
              : post.title
          }
          width={500}
          height={800}
          priority
          className="rounded-lg mt-8 border"
        />
      </div>

      <div className={richTextStyles}>
        <PortableText
          value={post?.content}
          components={myPortableTextComponents}
        />
      </div>

      <div className="flex items-center justify-center p-8">
        <Link href="/blog">
          <Button>Retour</Button>
        </Link>
      </div>
    </div>
  )
}
