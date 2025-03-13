'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

interface ModeToggleProps {
  isScrolled?: boolean
}

export function ModeToggle({ isScrolled }: ModeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Synchroniser l'état initial avec le thème actuel
  useEffect(() => {
    setIsDarkMode(theme === 'dark')
  }, [theme])

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    setTheme(newMode ? 'dark' : 'light')
  }

  return (
    <Button
      variant="outline"
      onClick={toggleDarkMode}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full shadow-lg"
    >
      {isDarkMode ? (
        <Sun
          className={`text-yellow-500 ${isScrolled ? 'w-4 h-4' : 'w-6 h-6'}`}
        />
      ) : (
        <Moon
          className={`text-gray-700 ${isScrolled ? 'w-4 h-4' : 'w-6 h-6'}`}
        />
      )}
    </Button>
  )
}
