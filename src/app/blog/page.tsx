"use client";
import { Chip, Image } from "@nextui-org/react";
import Link from "next/link";
import { Date as DateComp } from "@/components/Date";
import { allPosts } from ".contentlayer/generated";
import React, { ReactElement, useEffect, useState } from "react";

export default function Blog() {
  const [postPreviews, setPostPreviews] = useState<ReactElement[]>([]);
  const [allTags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const today = new Date();
  const dayDate = today.toISOString().slice(0, 10);

  useEffect(() => {
    const newPostPreviews = allPosts
      .filter(({ date }) => dayDate >= date.slice(0, 10))
      .sort((a, b) => (a.date > b.date ? -1 : 1));

    const filteredPostPreviews = selectedTag
      ? newPostPreviews.filter((post) => post.tags.includes(selectedTag))
      : newPostPreviews;

    const recentPosts = filteredPostPreviews.slice(0, 3);
    const olderPosts = filteredPostPreviews.slice(3);

    const recentPostPreviews = recentPosts.map(
      ({ slug, date, title, picture }) => (
        <section className='p-4 md:w-1/3' key={slug}>
          <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden dark:bg-gray-600'>
            <picture className='relative aspect-video flex items-center justify-center'>
              <Image
                className='p-2 rounded-md'
                src={picture || ""}
                alt={picture}
                width={200}
                height={100}
              />
            </picture>

            <div className='p-6'>
              <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 dark:text-gray-200 mb-1'>
                <DateComp dateString={date} />
              </h2>
              <text className='title-font text-lg font-medium text-gray-900 mb-3 dark:text-gray-300'>
                {title}
              </text>
              <text className='flex items-center flex-wrap'>
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
              </text>
            </div>
          </div>
        </section>
      )
    );

    const olderPostList =
      filteredPostPreviews.length >= 3 ? (
        <div className='p-4 space-y-4 border-2 border-gray-200 border-opacity-60 rounded-lg w-full'>
          {olderPosts.map(({ picture, slug, title }) => (
            <Link
              key={slug}
              className='font-medium text-gray-900 dark:text-white flex flex-col hover:bg-slate-100 dark:hover:bg-orange-500 dark:hover:text-black hover:p-2'
              href={`/blog/${slug}`}
            >
              <div className='flex space-x-2  items-center'>
                <Image
                  className='p-2 rounded-md'
                  src={picture || ""}
                  alt={picture}
                  width={200}
                  height={100}
                />
                {title}
              </div>
            </Link>
          ))}
        </div>
      ) : null;
    const allTags = new Set(newPostPreviews.flatMap(({ tags }) => tags));
    const sortedTags = [
      ...Array.from(allTags).sort((a, b) =>
        a.localeCompare(b, undefined, { sensitivity: "base" })
      ),
      "Tout afficher",
    ];
    setTags(sortedTags);

    setPostPreviews([
      ...recentPostPreviews,
      <React.Fragment key='olderPosts'>{olderPostList}</React.Fragment>,
    ]);
  }, [selectedTag]);

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag === "Tout afficher" ? null : tag);

    const filteredPostPreviews = postPreviews.filter((preview) => {
      const tagsInPreview = preview.props.children;
      return (
        tag === "Tout afficher" ||
        (Array.isArray(tagsInPreview) && tagsInPreview.includes(tag))
      );
    });

    setPostPreviews(filteredPostPreviews);
  };

  return (
    <div>
      <div className='flex justify-center flex-wrap space-x-2 md:space-x-4 my-4'>
        {allTags.map((tag) => (
          <Chip
            key={tag}
            color='primary'
            className={`hover:cursor-pointer my-1 ${
              selectedTag === tag ? "shadow" : "flat"
            } dark:bg-orange-500`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </Chip>
        ))}
      </div>
      <section className='text-gray-600 body-font dark:text-gray-300'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4'>{postPreviews}</div>
        </div>
      </section>
    </div>
  );
}
