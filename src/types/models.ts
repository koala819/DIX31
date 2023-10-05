export interface Recommandation {
  name: string;
  title: string;
  description: string;
  link: string;
  imageSrc: string;
}

export interface PostProps {
  params: {
    id: string;
  };
}

// type Params = {
//   id: string;
// };

// export type PostData = {
//   title: string;
//   date: string;
//   contentHtml: string;
// };

// export type Props = {
//   params: Params;
// };
