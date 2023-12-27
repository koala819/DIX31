"use client";
import React, { useState, useEffect } from "react";
import PostPreview from "@/components/molecules/PostPreview";
import { Chip } from "@nextui-org/react";
import Image from "next/image";
import { allPosts } from ".contentlayer/generated";
import { Post } from "@/types/models";
import Link from "next/link";
import { BlogHeader } from "@/components/atoms/BlogHeader";

export default function Blog() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [postPreviews, setPostPreviews] = useState<React.ReactNode[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);

  useEffect(() => {
    const tags = new Set<string>();
    allPosts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
    setAllTags([...tags]);
  }, []);

  useEffect(() => {
    const sortedPosts = [...allPosts]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .filter((post: Post) => !selectedTag || post.tags.includes(selectedTag));

    const previews = sortedPosts.map((post: Post) => (
      <PostPreview key={post.slug} post={post} />
    ));
    setPostPreviews(previews);
  }, [selectedTag]);

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag === selectedTag ? null : tag);
  };

  const handleShowAllClick = () => {
    setSelectedTag(null);
  };

  function getTwoMostRecentPosts() {
    return [...allPosts]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 2);
  }

  const mostRecentPosts = getTwoMostRecentPosts();

  return (
    <div className='max-w-screen-xl mx-auto'>
      <BlogHeader firstPosts={mostRecentPosts} />

      <section className='block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10'>
        {/* Post Card */}
        <aside className='w-full lg:w-2/3'>
          <Link className='block rounded w-full lg:flex mb-10' href='#'>
            <div
              className='h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75 rounded-2xl'
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')",
              }}
              title='deit is very important'
            ></div>

            <div className='bg-white rounded px-4 flex flex-col justify-between leading-normal'>
              <div>
                <div className='mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2'>
                  Aliquam venenatis nisl id purus rhoncus, in efficitur sem
                  hendrerit.
                </div>
                <p className='text-gray-700 text-base'>
                  Duis euismod est quis lacus elementum, eu laoreet dolor
                  consectetur. Pellentesque sed neque vel tellus lacinia
                  elementum. Proin consequat ullamcorper eleifend.
                </p>
              </div>
              <div className='flex mt-3'>
                <Image
                  alt='#'
                  src='https://randomuser.me/api/portraits/men/86.jpg'
                  className='h-10 w-10 rounded-full mr-2 object-cover'
                  width={40}
                  height={40}
                />
                <div>
                  <p className='font-semibold text-gray-700 text-sm capitalize'>
                    {" "}
                    eduard franz{" "}
                  </p>
                  <p className='text-gray-600 text-xs'> 14 Aug </p>
                </div>
              </div>
            </div>
          </Link>

          <div className='rounded w-full lg:flex mb-10'>
            <div
              className='h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75 rounded-2xl'
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')",
              }}
              title='deit is very important'
            ></div>
            <div className='bg-white rounded px-4 flex flex-col justify-between leading-normal'>
              <div>
                <div className='mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2'>
                  Integer commodo, sapien ut vulputate viverra
                </div>
                <p className='text-gray-700 text-base'>
                  Nam malesuada aliquet metus, ac commodo augue mollis sit amet.
                  Nam bibendum risus sit amet metus semper consectetur. Proin
                  consequat ullamcorper eleifend. Nam bibendum risus sit amet
                  metus semper consectetur.
                </p>
              </div>
              <div className='flex mt-3'>
                <Image
                  alt='#'
                  src='https://randomuser.me/api/portraits/women/54.jpg'
                  className='h-10 w-10 rounded-full mr-2 object-cover'
                  width={40}
                  height={40}
                />
                <div>
                  <p className='font-semibold text-gray-700 text-sm capitalize'>
                    {" "}
                    Serenity Hughes{" "}
                  </p>
                  <p className='text-gray-600 text-xs'> 14 Aug </p>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded w-full lg:flex mb-10'>
            <div
              className='h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75 rounded-2xl'
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')",
              }}
              title='deit is very important'
            ></div>
            <div className='bg-white rounded px-4 flex flex-col justify-between leading-normal'>
              <div>
                <div className='mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2'>
                  Suspendisse varius justo eu risus laoreet fermentum non
                  aliquam dolor
                </div>
                <p className='text-gray-700 text-base'>
                  Mauris porttitor, velit at tempus vulputate, odio turpis
                  facilisis dui, vitae eleifend odio ipsum at odio. Phasellus
                  luctus scelerisque felis eget suscipit.
                </p>
              </div>
              <div className='flex mt-3'>
                <Image
                  alt='#'
                  src='https://randomuser.me/api/portraits/men/86.jpg'
                  className='h-10 w-10 rounded-full mr-2 object-cover'
                  width={40}
                  height={40}
                />
                <div>
                  <p className='font-semibold text-gray-700 text-sm capitalize'>
                    {" "}
                    eduard franz{" "}
                  </p>
                  <p className='text-gray-600 text-xs'> 14 Aug </p>
                </div>
              </div>
            </div>
          </div>
        </aside>
        {/* Right Sidebar */}
        <aside className='w-full lg:w-1/3 px-3'>
          <div className='mb-4'>
            <h5 className='font-bold text-lg uppercase text-gray-700 px-1 mb-2'>
              Mots clés
            </h5>
            <ul>
              <li className='px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300'>
                <a
                  href='#'
                  className='flex items-center text-gray-600 cursor-pointer'
                >
                  <span className='inline-block h-4 w-4 bg-green-300 mr-3'></span>
                  Nutrition
                  <span className='text-gray-500 ml-auto'>23 articles</span>
                  <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                </a>
              </li>
              <li className='px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300'>
                <a
                  href='#'
                  className='flex items-center text-gray-600 cursor-pointer'
                >
                  <span className='inline-block h-4 w-4 bg-indigo-300 mr-3'></span>
                  Food & Diet
                  <span className='text-gray-500 ml-auto'>18 articles</span>
                  <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                </a>
              </li>
              <li className='px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300'>
                <a
                  href='#'
                  className='flex items-center text-gray-600 cursor-pointer'
                >
                  <span className='inline-block h-4 w-4 bg-yellow-300 mr-3'></span>
                  Workouts
                  <span className='text-gray-500 ml-auto'>34 articles</span>
                  <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                </a>
              </li>
              <li className='px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300'>
                <a
                  href='#'
                  className='flex items-center text-gray-600 cursor-pointer'
                >
                  <span className='inline-block h-4 w-4 bg-blue-300 mr-3'></span>
                  Immunity
                  <span className='text-gray-500 ml-auto'>9 articles</span>
                  <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </section>

      {/* ORIGINAL CODE */}
      <div className='flex justify-center flex-wrap space-x-2 md:space-x-4 my-4'>
        {allTags.map((tag) => (
          <Chip
            key={tag}
            color='primary'
            className={`hover:cursor-pointer my-1 ${
              selectedTag === tag ? "shadow" : "flat"
            } dark:bg-orange-500`}
            onClick={() => handleTagClick(tag)}
            style={{
              display:
                selectedTag && selectedTag !== tag ? "none" : "inline-flex",
            }}
          >
            {tag}
          </Chip>
        ))}
        {selectedTag && (
          <Chip
            color='primary'
            className='hover:cursor-pointer my-1 dark:bg-orange-500'
            onClick={handleShowAllClick}
          >
            Tout afficher
          </Chip>
        )}
      </div>
      <section className='text-gray-600 body-font dark:text-gray-300'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4'>{postPreviews}</div>
        </div>
      </section>
    </div>
  );
}
