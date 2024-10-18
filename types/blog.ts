export interface Article {
  id: number
  title: string
  excerpt: string | null
  coverImage: string
  date: string
  categories: string[]
  readTime: number
  currentSlug: string
}

export interface BlogGridProps {
  articles: Article[]
  locale: string
}

export interface SimpleBlogCardProps {
  titleFr: string
  titleEn: string
  date: string
  shortDescriptionFr: string | null
  shortDescriptionEn: string | null
  currentSlug: string
  titleImage: {
    _type: 'image'
    alt: string
    asset: {
      _ref: string
      _type: 'reference'
    }
  } | null
  titleImagebyCloudinary: any // Ajustez le type selon la structure réelle
  tags: { name: string }[] | null
  contentFr: any
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
  youtube?: {
    url: string
  }
}

export interface TagCount {
  [key: string]: number
}

export interface TagIconMap {
  [key: string]: JSX.Element | null
}
