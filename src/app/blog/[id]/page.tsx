import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import Date from "@/components/Date";
import { getPostData } from "@/lib/posts";
// import { PostDisplay } from "@/components/Post";
import { PostData, Props } from "@/types/models";
// import { Button } from "@nextui-org/react";
// import { useRouter } from "next/navigation";

const getPostContent = (slug: string) => {
  const folder = "src/posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export async function generateMetadata({ params }: Props) {
  const postData: PostData = await getPostData(params.id);

  return {
    title: postData.title,
  };
}

export default async function Post(props: any) {
  const slug = props.params.id;
  const post = getPostContent(slug);
  // const router = useRouter();

  return (
    <div>
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
        {/* <Button
          color='primary'
          variant='shadow'
          onClick={() => router.push("/blog")}
        >
          <span>Retour</span>
        </Button> */}
      </div>
    </div>
  );
}

// export default async function Post({ params }: Props) {
//   const postData: PostData = await getPostData(params.id);

//   return <PostDisplay postData={postData} />;
// }
