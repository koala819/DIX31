import Image from 'next/image'
import Link from 'next/link'

import { SimpleBlogCardProps } from '@/types/blog'

import { urlFor } from '@/lib/sanity'
import { format, parseISO } from 'date-fns'

export function BlogHeader({
  firstPosts,
}: {
  firstPosts: SimpleBlogCardProps[]
}) {
  return (
    <header className="block md:flex md:space-x-2 px-2 lg:p-0">
      {firstPosts.map((post) => (
        <Link
          key={post.currentSlug}
          className="group mb-4 md:mb-0 w-full md:w-1/2 relative rounded-lg inline-block"
          href={`/blog/${post.currentSlug}`}
          style={{ height: '250px' }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 hover:opacity-20 z-10 rounded-lg" />
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              src={urlFor(post.titleImage)}
              alt={post.title || 'image sans titre'}
              layout="fill"
              objectFit="cover"
            />
            <span className="px-4 py-1 bg-black text-white inline-flex items-center justify-center mb-2 rounded absolute top-4 left-4 z-10">
              {post.tag[0].name}
            </span>
          </div>
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <h2 className="text-4xl font-semibold text-gray-100 group-hover:text-black leading-tight">
              {post.title}
            </h2>
            <div className="flex mt-3">
              <p className="font-semibold text-gray-300 group-hover:text-black text-xs">
                {format(parseISO(post.date), 'dd-MM-yyyy')}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </header>
  )
}
