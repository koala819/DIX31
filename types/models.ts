import { ReactNode } from 'react'

export type Comment = {
  name: string
  title: string
  description: string
  link: string
  imageSrc: string
}

export type Realisations = {
  title: string
  presentation: string
  picture: {
    alt: string
    src: string
  }
  secteurs: {
    name: string
    description: string
  }[]
  links: { name: string; url: string }[]
  challenges: {
    title: string
    description: string
  }[]
  stacks: {
    name: string
  }[]
  gallery?: string
  photos?: {
    src: string
    width: number
    height: number
  }[]
}

export type Theme = 'light' | 'dark'

export type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

export type ThemeProviderProps = {
  children: ReactNode
}
