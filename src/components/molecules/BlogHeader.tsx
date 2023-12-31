import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types/models";
import { Date } from "@/components/atoms/Date";

export function BlogHeader({ firstPosts }: { firstPosts: Post[] }) {
  return (
    <header className='block md:flex md:space-x-2 px-2 lg:p-0'>
      {firstPosts.map((post) => (
        <Link
          key={post.slug}
          className='mb-4 md:mb-0 w-full md:w-1/2 relative rounded-lg inline-block'
          href={`/blog/${post.slug}`}
          style={{ height: "250px" }}
        >
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10 rounded-lg'></div>
          <div className='relative w-full h-full rounded-lg overflow-hidden'>
            <Image
              src={post.picture || ""}
              alt={post.title || ""}
              layout='fill'
              objectFit='cover'
            />
            <span className='px-4 py-1 bg-black text-white inline-flex items-center justify-center mb-2 rounded absolute top-4 left-4 z-10'>
              {post.tags[0]}
            </span>
          </div>
          <div className='p-4 absolute bottom-0 left-0 z-20'>
            <h2 className='text-4xl font-semibold text-gray-100 leading-tight'>
              {post.title}
            </h2>
            <div className='flex mt-3'>
              <div>
                <p className='font-semibold text-gray-400 text-xs'>
                  <Date dateString={post.date} />
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </header>
  );
}
