import { getPostContent } from "@/lib/posts";
import { Post } from "@/components/Post";
// import { PostData } from "@/types/models";
// import GrayMatterFile from "gray-matter";

// export async function generateMetadata({ params }: Props) {
//   const postData: PostData = await getPostData(params.id);

//   return {
//     title: postData.title,
//   };
// }

export default async function Page(props: any) {
  const slug = props.params.id;
  const post = getPostContent(slug);

  return <Post post={post} />;
}
