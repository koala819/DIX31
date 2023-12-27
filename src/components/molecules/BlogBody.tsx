import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types/models";
import { Date } from "@/components/atoms/Date";

export function BlogBody({ posts }: { posts: Post[] }) {
  return (
    <div className='flex flex-col space-y-8'>
      {posts.map((post, index) => (
        <Link
          key={index}
          href={`/blog/${post.slug}`}
          className='rounded w-full lg:flex mb-10  opacity-70 hover:opacity-100'
        >
          <div className='h-64 lg:w-56 flex-none overflow-hidden rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl relative'>
            <Image
              src={post.picture || ""}
              alt={post.title || ""}
              layout='fill'
              objectFit='cover'
              className='text-center'
            />
          </div>

          <div className='bg-slate-300 dark:bg-gray-900 px-4 flex flex-col justify-between leading-normal w-full rounded-b-2xl lg:rounded-bl-none lg:rounded-r-2xl text-gray-700 dark:text-gray-200 py-2 space-y-4'>
            <p className='mt-3 md:mt-0  font-bold text-2xl mb-2'>
              {post?.title?.slice(0, 30) + "..."}
            </p>
            <p className='text-base'>
              {post?.description?.slice(0, 200) + "..." || ""}
            </p>
            <p className='text-xs'>
              <Date dateString={post.date} />
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
