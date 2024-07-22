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
  contentFr: any[]
  contentEn: any[]
  date: string
  slug: string
  shortDescriptionFr: string
  shortDescriptionEn: string
  titleFr: string
  titleEn: string
  titleImage: any
  titleImagebyCloudinary: any
  youtubeVideo?: {
    url: string
  }
}

export interface TagCount {
  [key: string]: number
}

export interface TagIconMap {
  [key: string]: JSX.Element | null
}
