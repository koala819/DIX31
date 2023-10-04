"use client";
import { Button } from "@nextui-org/react";
import Date from "@/components/Date";
// import { PostData } from "@/types/models";
import { useRouter } from "next/navigation";
import Markdown from "markdown-to-jsx";

export function Post({ post }: any) {
  const router = useRouter();

  return (
    <>
      <style>
        {`
              a {
                text-decoration: underline;
              }
              a:hover {
                color: #0074e4;
              }
            `}
      </style>
      <div className='flex flex-col justify-center items-center'>
        <div className='p-4'>
          <h1 className='font-extrabold text-3xl mb-1'>{post.data.title}</h1>

          <div className='text-gray-500 font-medium mb-5'>
            <Date dateString={post.data.date} />
          </div>
        </div>
        <Markdown className='prose px-12 text-justify space-y-8 '>
          {post.content}
        </Markdown>
        <div className='flex items-center justify-center p-8'>
          <Button
            color='primary'
            variant='shadow'
            onClick={() => router.push("/blog")}
          >
            <span>Retour</span>
          </Button>
        </div>
      </div>
    </>
  );
}
