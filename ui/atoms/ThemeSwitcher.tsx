'use client'

// import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'

// import { useTheme } from 'next-themes'
import { useTheme } from '@/context/ThemeContext'

export function ThemeSwitcher() {
  // const { theme, setTheme } = useTheme()
  // const [mounted, setMounted] = useState(false)

  // useEffect(() => {
  //   setMounted(true)
  // }, [])
  const { theme, toggleTheme } = useTheme()

  // const toggleTheme = () => {
  //   setTheme(theme === 'light' ? 'dark' : 'light')
  // }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      {theme === 'light' ? <Sun /> : <Moon />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
