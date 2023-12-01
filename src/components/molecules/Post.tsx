"use client";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Date } from "@/components/atoms/Date";
import { Image, Snippet } from "@nextui-org/react";
import Link from "next/link";
import { FaCat, FaArrowRight } from "react-icons/fa";
import { GiSheep } from "react-icons/gi";
import { getBlogPostMetadata } from "@/lib/blogPostMetadata";

const mdxComponents = {
  FaCat,
  FaArrowRight,
  GiSheep,
  Image,
  Snippet,
  Link,
};

export function Post({ post }: any) {
  const MDXContent = useMDXComponent(post.body.code);
  getBlogPostMetadata(post.title, post.body.code);

  return (
    <div className='p-8 sm:prose-base md:prose-lg'>
      <div className='p-4'>
        <h1 className='font-extrabold text-3xl mb-1'>{post.title}</h1>

        <div className='text-gray-500 font-medium mb-5'>
          <Date dateString={post.date} />
        </div>
      </div>
      <MDXContent components={mdxComponents} />
      <div className='flex items-center justify-center p-8'>
        <Link
          href='/blog'
          className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 dark:bg-orange-600 dark:text-black dark:font-extrabold dark:hover:underline'
        >
          Retour
        </Link>
      </div>
    </div>
  );
}
