"use client";
import React, { useState, useEffect } from "react";
import PostPreview from "@/components/molecules/PostPreview";
import { Chip } from "@nextui-org/react";
// import Image from "next/image";
import { allPosts } from ".contentlayer/generated";
import { Post } from "@/types/models";
// import Link from "next/link";
import { BlogHeader } from "@/components/molecules/BlogHeader";
import { BlogBody } from "@/components/molecules/BlogBody";
import { BlogFooter } from "@/components/molecules/BlogFooter";

export default function Blog() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [tenPosts, setTenPosts] = useState<Post[]>([]);
  const [oldPosts, setOldPosts] = useState<Post[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);

  // useEffect(() => {
  //   const tags = new Set<string>();
  //   allPosts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
  //   setAllTags([...tags]);
  // }, []);

  // useEffect(() => {
  //   const sortedPosts = [...allPosts]
  //     .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  //     .filter((post: Post) => !selectedTag || post.tags.includes(selectedTag));

  //   const previews = sortedPosts.map((post: Post) => (
  //     <PostPreview key={post.slug} post={post} />
  //   ));
  //   setPostPreviews(previews);
  // }, [selectedTag]);

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

  useEffect(() => {
    const sortedPosts = [...allPosts]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .filter((post: Post) => !selectedTag || post.tags.includes(selectedTag))
      .filter((post: Post) => !mostRecentPosts.includes(post as any));

    const firstTenPosts = sortedPosts.slice(0, 10);
    const olderPosts = sortedPosts.slice(10);

    setTenPosts(firstTenPosts);
    setOldPosts(olderPosts);
  }, []);

  return (
    <div className='p-1'>
      <BlogHeader firstPosts={mostRecentPosts} />

      <section className='block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10'>
        {/* Post Card */}
        <aside className='w-full lg:w-2/3'>
          <BlogBody posts={tenPosts} />
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
      <BlogFooter posts={oldPosts} />

      {/* ORIGINAL CODE */}
      {/* <div className='flex justify-center flex-wrap space-x-2 md:space-x-4 my-4'>
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
      </section> */}
    </div>
  );
}
