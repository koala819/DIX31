import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { PostProps } from "@/types/models";
import { Post } from "@/components/Post";

async function getDocFromParam(slug: string) {
  const doc = allPosts.find((doc) => doc.slug === slug);
  if (!doc) notFound();

  return doc;
}

export default async function Page({ params }: PostProps) {
  const post = await getDocFromParam(params.id);

  return <Post post={post} />;
}
