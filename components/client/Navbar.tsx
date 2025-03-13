'use client'

// components/navbar/NavbarClient.tsx
import { Menu } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

import { usePathname } from 'next/navigation'

import LangSwitcher from '@/components/atoms/LangSwitcher'
import NavbarItem from '@/components/atoms/NavbarItem'
import { ModeToggle } from '@/components/atoms/Toggle'
import HireMeBtn from '@/components/client/HireMeBtn'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import { Link } from '@/i18n/navigation'
import { AnimatePresence, motion } from 'framer-motion'

type NavLink = {
  name: string
  href: string
  label: string
}

interface NavbarClientProps {
  links: NavLink[]
  hireButtonText: string
}

export default function NavbarClient({
  links,
  hireButtonText,
}: NavbarClientProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Gestionnaire de défilement optimisé
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 20
    if (isScrolled !== scrolled) {
      setIsScrolled(scrolled)
    }
  }, [isScrolled])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Déterminer l'élément actif en fonction du chemin
  useEffect(() => {
    const cleanPath = pathname.replace(/^\/[^/]+/, '')
    let active = ''

    if (cleanPath === '' || cleanPath === '/') active = 'home'
    else if (cleanPath.startsWith('/projects')) active = 'projects'
    else if (cleanPath.startsWith('/blog')) active = 'blog'

    setActiveItem(active)
  }, [pathname])

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
      initial={{ height: '60px', opacity: 0 }}
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
              {!isScrolled && (
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
          <nav className="hidden md:flex items-center space-x-8">
            <HireMeBtn
              isScrolled={isScrolled}
              onClose={undefined}
              buttonText={hireButtonText}
            />
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
            <ModeToggle isScrolled={isScrolled} />
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex justify-between items-center my-6">
                  <LangSwitcher />
                  <ModeToggle />
                </div>
                <nav className="flex flex-col space-y-4">
                  <HireMeBtn
                    onClose={handleCloseMenu}
                    buttonText={hireButtonText}
                  />
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
          </div>
        </div>
      </div>
    </motion.header>
  )
}
