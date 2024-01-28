export interface SimpleBlogCardProps {
  title: string
  date: string
  smallDescription: string
  currentSlug: string
  titleImage: any
  titleImagebyCloudinary: any
  tag: any
}

export interface fullBlog {
  slug: string
  date: string
  title: string
  content: any
  titleImage: any
  titleImagebyCloudinary: any
}

export interface TagCount {
  [key: string]: number
}

export interface TagIconMap {
  [key: string]: JSX.Element | null
}
