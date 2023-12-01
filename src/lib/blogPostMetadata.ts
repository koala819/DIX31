import { Metadata } from "next";

export const getBlogPostMetadata = (
  postTitle: string,
  postSummary: string
): Metadata => {
  return {
    title: `${postTitle} - Blog de DIX31`,
    description: `${postSummary.substring(0, 150)}...`,
  };
};
