'use client'

import { Menu } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'

import HireMeBtn from '@/components/client/HireMeBtn'
import LangSwitcher from '@/components/atoms/LangSwitcher'
import NavbarItem from '@/components/atoms/NavbarItem'
import { ModeToggle as Toggle } from '@/components/atoms/Toggle'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import { Link } from '@/i18n/navigation'
import { AnimatePresence, motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()
  const t = useTranslations('Navbar')

  const links = [
    { name: 'home', href: '/', label: t('home') },
    { name: 'projects', href: '/projects', label: t('projects') },
    { name: 'blog', href: '/blog', label: t('blog') },
  ]

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    setActiveItem(determineActiveItem(pathname))
  }, [pathname])

  useEffect(() => {
    // Simuler un délai de chargement
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const determineActiveItem = (path: string) => {
    const cleanPath = path.replace(/^\/[^/]+/, '')
    if (cleanPath === '' || cleanPath === '/') return 'home'
    if (cleanPath.startsWith('/projects')) return 'projects'
    if (cleanPath.startsWith('/blog')) return 'blog'
    return ''
  }

  const handleNavItemClick = (item: string) => {
    setActiveItem(item)
    setIsOpen(false)
  }

  const handleCloseMenu = () => {
    setIsOpen(false)
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={{ height: '200px', opacity: 0 }}
      animate={{
        height: '60px',
        opacity: 1,
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="mx-auto px-4 h-full flex flex-col justify-center">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex flex-col"
            animate={{ gap: isScrolled ? '0px' : '4px' }}
          >
            <Link
              href="/"
              className="font-bold text-gray-800 dark:text-white transition-colors duration-200 hover:text-gray-600 dark:hover:text-gray-300"
              prefetch={false}
            >
              <motion.span
                animate={isScrolled ? 'small' : 'large'}
                variants={{
                  small: { fontSize: '1.25rem' },
                  large: { fontSize: '1.5rem' },
                }}
                transition={{ duration: 0.3 }}
              >
                Xavier Genolhac
              </motion.span>
            </Link>
            <AnimatePresence>
              {!isLoading && !isScrolled && (
                <motion.p
                  className="text-xs md:text-sm text-gray-600 dark:text-gray-400"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Développeur Web Full Stack | Next.js | React | Node.js
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Desktop Navigation */}
          <AnimatePresence>
            {!isLoading && (
              <motion.nav
                className="hidden md:flex items-center space-x-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <HireMeBtn isScrolled={isScrolled} />
                {links.map((link) => (
                  <NavbarItem
                    key={link.name}
                    href={link.href}
                    label={link.label}
                    isActive={activeItem === link.name}
                    onClick={() => handleNavItemClick(link.name)}
                    isScrolled={isScrolled}
                  />
                ))}
                <LangSwitcher isScrolled={isScrolled} />
                <Toggle isScrolled={isScrolled} />
              </motion.nav>
            )}
          </AnimatePresence>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {!isLoading && (
              <motion.div
                className="md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <div className="flex justify-between items-center my-6">
                      <LangSwitcher />
                      <Toggle />
                    </div>
                    <nav className="flex flex-col space-y-4">
                      <HireMeBtn onClose={handleCloseMenu} />
                      {links.map((link) => (
                        <NavbarItem
                          key={link.name}
                          href={link.href}
                          label={link.label}
                          isActive={activeItem === link.name}
                          onClick={() => handleNavItemClick(link.name)}
                        />
                      ))}
                    </nav>
                  </SheetContent>
                </Sheet>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  )
}
