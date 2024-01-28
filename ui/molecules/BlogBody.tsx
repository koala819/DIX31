import Image from 'next/image'
import Link from 'next/link'

import { SimpleBlogCardProps } from '@/types/blog'

import { urlFor } from '@/lib/sanity'
import { format, parseISO } from 'date-fns'

export function BlogBody({ posts }: { posts: SimpleBlogCardProps[] }) {
  return (
    <div className="flex flex-col space-y-8">
      {posts.map((post, index) => (
        <Link
          key={index}
          href={`/blog/${post.currentSlug}`}
          className="rounded w-full lg:flex mb-10  opacity-70 hover:opacity-100"
        >
          <div className="h-64 lg:w-56 flex-none overflow-hidden rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl relative">
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
              layout="fill"
              objectFit="cover"
              className="text-center"
            />
          </div>

          <div className="bg-slate-300 dark:bg-gray-900 px-4 flex flex-col justify-between leading-normal w-full rounded-b-2xl lg:rounded-bl-none lg:rounded-r-2xl py-2 space-y-4">
            <p className="mt-3 md:mt-0  font-bold text-2xl mb-2">
              {post?.title?.slice(0, 30) + '...'}
            </p>
            <p className="text-base">
              {post?.smallDescription?.slice(0, 200) + '...' || ''}
            </p>
            <p className="text-xs">
              {format(parseISO(post.date), 'dd-MM-yyyy')}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}
