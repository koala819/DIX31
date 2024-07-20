'use client'

import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import NavbarLinks from '@/components//molecules/NavbarLinks'
import HireMeBtn from '@/components/atoms/HireMeBtn'
import LangSwitcher from '@/components/atoms/LangSwitcher'
import { ModeToggle as Toggle } from '@/components/atoms/Toggle'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [activeItem, setActiveItem] = useState<string>('home')
  const pathname = usePathname()
  const t = useTranslations('Navbar')

  const links = [
    { name: 'home', href: '/', label: t('home') },
    { name: 'projects', href: '/projects', label: t('projects') },
    { name: 'blog', href: '/blog', label: t('blog') },
  ]

  useEffect(() => {
    if (pathname === '/') setActiveItem('home')
    else if (pathname.startsWith('/projects')) setActiveItem('projects')
    else if (pathname.startsWith('/blog')) setActiveItem('blog')
  }, [pathname])

  function handleNavItemClick(item: string) {
    setActiveItem(item)
    setIsOpen(false)
  }

  return (
    <header
      className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 sticky top-0 z-50 bg-background shadow-sm"
      role="banner"
    >
      <Link href="/" className="text-lg font-bold" prefetch={false}>
        Xavier Genolhac
      </Link>

      {/* Desktop */}
      <nav
        className="ml-auto hidden gap-4 lg:flex"
        aria-label="Main Navigation"
      >
        <HireMeBtn />
        <NavbarLinks
          links={links}
          activeItem={activeItem}
          onClick={handleNavItemClick}
        />
        <Toggle />
        <LangSwitcher />
      </nav>

      {/* Mobile menu */}
      <div className="ml-auto flex items-center gap-2 lg:hidden">
        <HireMeBtn />
        <Sheet
          open={isOpen}
          onOpenChange={setIsOpen}
          aria-label="Navigation menu"
        >
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden"
              aria-haspopup="true"
              aria-expanded={isOpen}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>
          <SheetContent side="right">
            <nav className="grid gap-2 py-6">
              <Link
                href="/"
                className="flex w-full items-center py-2 text-lg font-semibold navbar-mobile-item"
                prefetch={false}
                data-active={activeItem === 'home'}
                onClick={() => handleNavItemClick('home')}
                aria-current={activeItem === 'home' ? 'page' : undefined}
              >
                {t('home')}
              </Link>
              <Link
                href="/projects"
                className="flex w-full items-center py-2 text-lg font-semibold navbar-mobile-item"
                prefetch={false}
                data-active={activeItem === 'projects'}
                onClick={() => handleNavItemClick('projects')}
                aria-current={activeItem === 'projects' ? 'page' : undefined}
              >
                {t('projects')}
              </Link>
              <Link
                href="/blog"
                className="flex w-full items-center py-2 text-lg font-semibold navbar-mobile-item"
                prefetch={false}
                data-active={activeItem === 'blog'}
                onClick={() => handleNavItemClick('blog')}
                aria-current={activeItem === 'home' ? 'page' : undefined}
              >
                {t('blog')}
              </Link>
              <div className="w-full flex justify-center space-x-8">
                <LangSwitcher handleNavItemClick={() => setIsOpen(false)} />
                <Toggle handleNavItemClick={() => setIsOpen(false)} />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
