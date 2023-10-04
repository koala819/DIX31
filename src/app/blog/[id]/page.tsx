// import Date from "@/components/Date";
import { getPostData } from "@/lib/posts";
import { PostDisplay } from "@/components/Post";
import { PostData, Props } from "@/types/models";

export async function generateMetadata({ params }: Props) {
  const postData: PostData = await getPostData(params.id);

  return {
    title: postData.title,
  };
}

export default async function Post({ params }: Props) {
  const postData: PostData = await getPostData(params.id);

  return <PostDisplay postData={postData} />;
}
