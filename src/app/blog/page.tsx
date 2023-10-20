"use client";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { Date as DateComp } from "@/components/Date";
import { allPosts } from ".contentlayer/generated";
import { ReactElement, useEffect, useState } from "react";

export default function Blog() {
  const [postPreviews, setPostPreviews] = useState<ReactElement[]>([]);
  const today = new Date();
  const dayDate = today.toISOString().slice(0, 10);

  useEffect(() => {
    const newPostPreviews = allPosts
      .filter(({ date }) => dayDate >= date.slice(0, 10))
      .map(({ slug, date, title, picture }) => (
        <div className='p-4 md:w-1/3' key={slug}>
          <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden dark:bg-gray-600'>
            <div className='relative aspect-video flex items-center justify-center'>
              <Image
                className='p-2 rounded-md'
                src={picture || ""}
                alt={picture}
                width={200}
                height={100}
              />
            </div>
            <div className='p-6'>
              <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 dark:text-gray-200 mb-1'>
                <DateComp dateString={date} />
              </h2>
              <div className='title-font text-lg font-medium text-gray-900 mb-3 dark:text-gray-300'>
                {title}
              </div>
              <div className='flex items-center flex-wrap '>
                <Link
                  className='text-blue-500 inline-flex items-center md:mb-2 lg:mb-0 hover:underline hover:text-[#DB2323] dark:text-orange-400 dark:hover:text-orange-300'
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
        </div>
      ));

    setPostPreviews(newPostPreviews);
  }, []);

  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap -m-4'>{postPreviews}</div>
      </div>
    </section>
  );
}
