import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { SimpleBlogCardProps } from '@/types/blog'

import { urlFor } from '@/lib/sanity'
import { format, parseISO } from 'date-fns'

export function BlogFooter({ posts }: { posts: SimpleBlogCardProps[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      {posts.map((post, index) => (
        <div
          key={index}
          className="rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow"
        >
          <Link href={`/blog/${post.currentSlug}`}>
            <div className="w-full h-48 overflow-hidden">
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
                layout="responsive"
                width={100}
                height={48}
                objectFit="cover"
              />
            </div>
            <div className="px-4 py-2">
              <h3 className="font-bold text-lg mb-2">{post.title}</h3>
              {/* <p className='text-gray-700 text-sm'>
                  {post?.description?.slice(0, 100) + "..."}
                </p>*/}
              <p className="text-gray-600 text-xs mt-2">
                {format(parseISO(post.date), 'dd-MM-yyyy')}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}
