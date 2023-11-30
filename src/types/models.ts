export type Comment = {
  name: string;
  title: string;
  description: string;
  link: string;
  imageSrc: string;
};

export interface PostProps {
  params: {
    id: string;
  };
}
