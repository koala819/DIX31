import { Metadata } from "next";

function getBlogPostMetadata(postTitle: string, postSummary: string): Metadata {
  return {
    title: `${postTitle} - Blog de DIX31`,
    description: `${postSummary.substring(0, 150)}...`,
  };
}

export { getBlogPostMetadata };
