"use client";
import { useState, useEffect } from "react";
import { allPosts } from ".contentlayer/generated";
import { Post, TagCount } from "@/types/models";
import { BlogHeader } from "@/components/molecules/BlogHeader";
import { BlogBody } from "@/components/molecules/BlogBody";
import { BlogFooter } from "@/components/molecules/BlogFooter";
import { BlogSlide } from "@/components/atoms/BlogSlide";

export default function Blog() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [displayPosts, setDisplayPosts] = useState<Post[]>([]);
  const [footerPosts, setFooterPosts] = useState<Post[]>([]);
  const [tagsCount, setTagsCount] = useState<TagCount>({});

  // Déterminer les deux articles les plus récents pour BlogHeader
  const mostRecentPosts = allPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

  useEffect(() => {
    const filteredPosts = selectedTag
      ? allPosts.filter((post) => post.tags.includes(selectedTag))
      : allPosts;

    // Séparer les posts pour BlogBody et BlogFooter
    const bodyPosts = selectedTag
      ? filteredPosts.slice(0, 10)
      : filteredPosts
          .filter((post) => !mostRecentPosts.includes(post))
          .slice(0, 10);
    const remainingPosts = selectedTag
      ? filteredPosts.slice(10)
      : filteredPosts
          .filter((post) => !mostRecentPosts.includes(post))
          .slice(10);

    setDisplayPosts(bodyPosts);
    setFooterPosts(remainingPosts);

    // Calculer le nombre d'articles par tag
    const count = allPosts.reduce((acc: TagCount, post) => {
      post.tags.forEach((tag) => {
        acc[tag] = (acc[tag] || 0) + 1;
      });
      return acc;
    }, {} as TagCount);
    setTagsCount(count);
  }, [selectedTag]);

  const handleTagClick = (tagName: string) => {
    setSelectedTag(tagName);
  };

  const handleReset = () => {
    setSelectedTag(null);
  };

  return (
    <div className='p-1'>
      {selectedTag === null && <BlogHeader firstPosts={mostRecentPosts} />}
      <section className='block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10'>
        <aside className='w-full lg:w-2/3'>
          <BlogBody posts={displayPosts} />
        </aside>
        <aside className='w-full lg:w-1/3 px-3'>
          <BlogSlide
            tags={tagsCount}
            onTagClick={handleTagClick}
            onReset={handleReset}
          />
        </aside>
      </section>
      <BlogFooter posts={footerPosts} />
    </div>
  );
}
