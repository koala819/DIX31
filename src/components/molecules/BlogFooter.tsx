import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types/models";
import { Date } from "@/components/atoms/Date";

export function BlogFooter({ posts }: { posts: Post[] }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8'>
      {posts.map((post, index) => (
        <div
          key={index}
          className='rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow'
        >
          <Link href={`/blog/${post.slug}`}>
            <div className='w-full h-48 overflow-hidden'>
              <Image
                src={post.picture || ""}
                alt={post.title || ""}
                layout='responsive'
                width={100}
                height={48}
                objectFit='cover'
              />
            </div>
            <div className='px-4 py-2'>
              <h3 className='font-bold text-lg mb-2'>{post.title}</h3>
              {/* <p className='text-gray-700 text-sm'>
                  {post?.description?.slice(0, 100) + "..."}
                </p>*/}
              <p className='text-gray-600 text-xs mt-2'>
                <Date dateString={post.date} />
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
