'use client'

import { Moon, Sun } from 'lucide-react'
import * as React from 'react'
import { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export function ModeToggle({
  handleNavItemClick,
}: {
  handleNavItemClick?: () => void
}) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    if (handleNavItemClick) handleNavItemClick()
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      {theme === 'dark' ? (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
