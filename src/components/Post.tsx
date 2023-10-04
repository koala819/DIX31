"use client";
import { Button } from "@nextui-org/react";
import Date from "@/components/Date";
import { PostData } from "@/types/models";
import { useRouter } from "next/navigation";

export function PostDisplay({ postData }: { postData: PostData }) {
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
      {/* Post Title */}
      <div className='p-4'>
        <h1 className='font-extrabold text-3xl mb-1'>{postData.title}</h1>

        <div className='text-gray-500 font-medium mb-5'>
          <Date dateString={postData.date} />
        </div>
      </div>

      {/* Post Content */}
      <div
        className='text-gray-600 space-y-8 px-12'
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        // dangerouslySetInnerHTML={{
        //   __html: postData.contentHtml.replace(/href/g, "target='_blank' href"),
        // }}
      />
      {/* TIP: dangerouslySetInnerHTML is a React feature that allows you to render HTML that comes from an external source as if it were regular JSX. It replaces innerHTML used by Javascript.
Here we are rendering the HTML that comes from the markdown file thanks to remark (remark converted the markdown into HTML)*/}
      <div className='flex items-center justify-center p-8'>
        <Button
          color='primary'
          variant='shadow'
          onClick={() => router.push("/blog")}
        >
          <span>Retour</span>
        </Button>
      </div>
    </>
  );
}
