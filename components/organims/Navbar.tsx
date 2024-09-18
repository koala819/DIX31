'use client'

import { Menu, X } from 'lucide-react'
import React, { useCallback, useEffect, useState } from 'react'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import HireMeBtn from '@/components/atoms/HireMeBtn'
import LangSwitcher from '@/components/atoms/LangSwitcher'
import NavbarItem from '@/components/atoms/NavbarItem'
import { ModeToggle as Toggle } from '@/components/atoms/Toggle'
import { Button } from '@/components/ui/button'

import { AnimatePresence, motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('home')
  const [scrollPosition, setScrollPosition] = useState(0)
  const pathname = usePathname()
  const t = useTranslations('Navbar')

  const links = [
    { name: 'home', href: '/', label: t('home') },
    { name: 'projects', href: '/projects', label: t('projects') },
    { name: 'blog', href: '/blog', label: t('blog') },
  ]

  const handleScroll = useCallback(() => {
    setScrollPosition(window.scrollY)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const determineActiveItem = useCallback((path: string) => {
    const cleanPath = path.replace(/^\/[^/]+/, '')
    if (cleanPath === '' || cleanPath === '/') return 'home'
    if (cleanPath.startsWith('/projects')) return 'projects'
    if (cleanPath.startsWith('/blog')) return 'blog'
    return ''
  }, [])

  useEffect(() => {
    setActiveItem(determineActiveItem(pathname))
  }, [pathname, determineActiveItem])

  const handleNavItemClick = useCallback(
    (item: React.SetStateAction<string>) => {
      setActiveItem(item)
      setIsOpen(false)
    },
    [],
  )

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent navbar-height"
      style={{
        backgroundColor:
          scrollPosition > 50 ? 'var(--navbar-bg-color)' : undefined,
        boxShadow: scrollPosition > 50 ? 'var(--navbar-shadow)' : 'none',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between h-full">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/"
            className="text-2xl font-bold text-gray-800 dark:text-white"
            prefetch={false}
          >
            Xavier Genolhac
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav id="navbar" className="hidden md:flex items-center space-x-8">
          <HireMeBtn /> {/* Moved back to the beginning for prominence */}
          {links.map((link) => (
            <NavbarItem
              key={link.name}
              href={link.href}
              label={link.label}
              isActive={activeItem === link.name}
              onClick={() => handleNavItemClick(link.name)}
            />
          ))}
          <LangSwitcher />
          <Toggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-4">
          <HireMeBtn /> {/* Added here for mobile view */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isOpen ? 'close' : 'open'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.div>
            </AnimatePresence>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white dark:bg-gray-900 z-40"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-8">
              <nav className="flex flex-col space-y-6">
                {links.map((link) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: links.indexOf(link) * 0.1,
                    }}
                  >
                    <NavbarItem
                      href={link.href}
                      label={link.label}
                      isActive={activeItem === link.name}
                      onClick={() => handleNavItemClick(link.name)}
                    />
                  </motion.div>
                ))}
                <motion.div
                  className="flex justify-between items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: (links.length + 1) * 0.1,
                  }}
                >
                  <LangSwitcher handleNavItemClick={() => setIsOpen(false)} />
                  <Toggle handleNavItemClick={() => setIsOpen(false)} />
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
