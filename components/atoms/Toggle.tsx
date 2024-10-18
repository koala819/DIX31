import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'

import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export function ModeToggle({ isScrolled }: { isScrolled?: boolean }) {
  const { theme, setTheme } = useTheme()
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button
      variant="outline"
      onClick={toggleDarkMode}
      className=" p-2 bg-gray-200 dark:bg-gray-800 rounded-full shadow-lg"
    >
      {isDarkMode ? (
        <Sun
          className={` text-yellow-500 ${isScrolled ? 'w-4 h-4' : 'w-6 h-6'}`}
        />
      ) : (
        <Moon
          className={` text-gray-700 ${isScrolled ? 'w-4 h-4' : 'w-6 h-6'}`}
        />
      )}
    </Button>
  )
}
