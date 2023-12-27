"use client";
import React, { useState, useEffect } from "react";
import PostPreview from "@/components/molecules/PostPreview";
import { Chip } from "@nextui-org/react";

import Image from "next/image";
import { allPosts } from ".contentlayer/generated";
import { Post } from "@/types/models";
import Link from "next/link";

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

  return (
    <div className='max-w-screen-xl mx-auto'>
      <header className='block md:flex md:space-x-2 px-2 lg:p-0'>
        <Link
          className='mb-4 md:mb-0 w-full md:w-1/2 relative rounded-lg inline-block'
          href='#'
          style={{ height: "250px" }}
        >
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10 rounded-lg'></div>
          <div className='relative w-full h-full rounded-lg overflow-hidden'>
            <Image
              src='https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
              alt="Description de l'image"
              layout='fill'
              objectFit='cover'
            />
            <span className='px-4 py-1 bg-black text-white inline-flex items-center justify-center mb-2 rounded absolute bottom-4 right-4 z-10'>
              Nutrition
            </span>
          </div>
          <div className='p-4 absolute bottom-0 left-0 z-20'>
            <h2 className='text-4xl font-semibold text-gray-100 leading-tight'>
              Pellentesque a consectetur velit, ac molestie ipsum. Donec
              sodales, massa et auctor.
            </h2>
            <div className='flex mt-3'>
              {/* ... */}
              <div>
                <p className='font-semibold text-gray-200 text-sm'>
                  Mike Sullivan
                </p>
                <p className='font-semibold text-gray-400 text-xs'> 14 Aug </p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          className='mb-4 md:mb-0 w-full md:w-1/2 relative rounded-lg inline-block'
          href='#'
          style={{ height: "250px" }}
        >
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10 rounded-lg'></div>
          <div className='relative w-full h-full rounded-lg overflow-hidden'>
            <Image
              src='https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80'
              alt="Description de l'image"
              layout='fill'
              objectFit='cover'
            />
            <span className='px-4 py-1 bg-black text-white inline-flex items-center justify-center mb-2 rounded absolute bottom-4 right-4 z-10'>
              Science
            </span>
          </div>
          <div className='p-4 absolute bottom-0 left-0 z-20'>
            <h2 className='text-4xl font-semibold text-gray-100 leading-tight'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h2>
            <div className='flex mt-3'>
              {/* ... */}
              <div>
                <p className='font-semibold text-gray-200 text-sm'>
                  Mike Sullivan
                </p>
                <p className='font-semibold text-gray-400 text-xs'> 14 Aug </p>
              </div>
            </div>
          </div>
        </Link>
      </header>

      <section className='block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10'>
        {/* Post Card */}
        {/* <div className="w-full lg:w-2/3">

          <a className="block rounded w-full lg:flex mb-10"
            href="#"
          >
            <div 
              className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
              style="background-image: url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')" 
              title="deit is very important"
            >
            </div>
            <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
              <div>
                <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                  Aliquam venenatis nisl id purus rhoncus, in efficitur sem hendrerit.
                </div>
                <p className="text-gray-700 text-base">
                  Duis euismod est quis lacus elementum, eu laoreet dolor consectetur. 
                  Pellentesque sed neque vel tellus lacinia elementum. Proin consequat ullamcorper eleifend.
                </p>
              </div>
              <div className="flex mt-3">
                <img src="https://randomuser.me/api/portraits/men/86.jpg"
                  className="h-10 w-10 rounded-full mr-2 object-cover" />
                <div>
                  <p className="font-semibold text-gray-700 text-sm capitalize"> eduard franz </p>
                  <p className="text-gray-600 text-xs"> 14 Aug </p>
                </div>
              </div>
            </div>
          </a>

          <div className="rounded w-full lg:flex mb-10">
            <div className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
              style="background-image: url('https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')" title="deit is very important">
            </div>
            <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
              <div>
                <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                  Integer commodo, sapien ut vulputate viverra
                </div>
                <p className="text-gray-700 text-base">
                  Nam malesuada aliquet metus, ac commodo augue mollis sit amet. 
                  Nam bibendum risus sit amet metus semper consectetur.
                  Proin consequat ullamcorper eleifend.
                  Nam bibendum risus sit amet metus semper consectetur.
                </p>
              </div>
              <div className="flex mt-3">
                <img src="https://randomuser.me/api/portraits/women/54.jpg"
                  className="h-10 w-10 rounded-full mr-2 object-cover" />
                <div>
                  <p className="font-semibold text-gray-700 text-sm capitalize"> Serenity Hughes </p>
                  <p className="text-gray-600 text-xs"> 14 Aug </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded w-full lg:flex mb-10">
            <div className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
              style="background-image: url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')" title="deit is very important">
            </div>
            <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
              <div>
                <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                  Suspendisse varius justo eu risus laoreet fermentum non aliquam dolor
                </div>
                <p className="text-gray-700 text-base">
                  Mauris porttitor, velit at tempus vulputate, odio turpis facilisis dui, 
                  vitae eleifend odio ipsum at odio. Phasellus luctus scelerisque felis eget suscipit. 
                </p>
              </div>
              <div className="flex mt-3">
                <img src="https://randomuser.me/api/portraits/men/86.jpg"
                  className="h-10 w-10 rounded-full mr-2 object-cover" />
                <div>
                  <p className="font-semibold text-gray-700 text-sm capitalize"> eduard franz </p>
                  <p className="text-gray-600 text-xs"> 14 Aug </p>
                </div>
              </div>
            </div>
          </div>

        </div> */}
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
