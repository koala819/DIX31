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
  content: any
  date: string
  slug: string
  smallDescription: string
  title: string
  titleImage: any
  titleImagebyCloudinary: any
}

export interface TagCount {
  [key: string]: number
}

export interface TagIconMap {
  [key: string]: JSX.Element | null
}
