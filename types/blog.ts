export interface Post {
  slug?: string
  date: string
  title?: string
  picture?: string
  tags: string[]
  description?: string
}

export interface PostProps {
  params: {
    id: string
  }
}

export interface TagIconMap {
  [key: string]: JSX.Element | null
}

export interface TagCount {
  [key: string]: number
}
