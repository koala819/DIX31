"use client";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { Date as DateComp } from "@/components/atoms/Date";
import { Post } from "@/types/models";

const PostPreview = ({ post }: { post: Post }) => {
  const { slug, date, title, picture } = post;

  return (
    <section className='p-4 md:w-1/3'>
      <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden dark:bg-gray-600'>
        <picture className='relative aspect-video flex items-center justify-center'>
          <Image
            className='p-2 rounded-md'
            src={picture || ""}
            alt={title}
            width={200}
            height={100}
          />
        </picture>

        <div className='p-6'>
          <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 dark:text-gray-200 mb-1'>
            <DateComp dateString={date} />
          </h2>
          <h3 className='title-font text-lg font-medium text-gray-900 mb-3 dark:text-gray-300'>
            {title}
          </h3>
          <div className='flex items-center flex-wrap'>
            <Link
              className='text-blue-500 inline-flex items-center md:mb-2 lg:mb-0 hover:underline hover:text-[#DB2323] dark:text-orange-400'
              href={`/blog/${slug}`}
            >
              Lire Plus
              <svg
                className='w-4 h-4 ml-2'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M5 12h14'></path>
                <path d='M12 5l7 7-7 7'></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostPreview;
