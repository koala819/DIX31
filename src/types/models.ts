export type Comment = {
  name: string;
  title: string;
  description: string;
  link: string;
  imageSrc: string;
};

export interface Post {
  slug?: string;
  date: string;
  title?: string;
  picture?: string;
  tags: string[];
}

export interface PostProps {
  params: {
    id: string;
  };
}
