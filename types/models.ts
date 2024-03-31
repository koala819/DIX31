import { ReactNode } from 'react'

export type Comment = {
  name: string
  title: string
  description: string
  link: string
  imageSrc: string
}

export type Theme = 'light' | 'dark'

export type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

export type ThemeProviderProps = {
  children: ReactNode
}
