'use client'

import { Menu } from 'lucide-react'
import { useState } from 'react'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

import HireMeBtn from '@/components/atoms/HireMeBtn'
import { ModeToggle as Toggle } from '@/components/atoms/Toggle'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import LangSwitcher from '../atoms/LangSwitcher'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('Navbar')
  function handleNavItemClick() {
    setIsOpen(false)
  }

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Link href="/" className="text-lg font-bold" prefetch={false}>
        Xavier Genolhac
      </Link>
      {/* Desktop */}
      <nav className="ml-auto hidden gap-4 md:flex">
        <HireMeBtn />
        <Link
          href="/"
          className="relative transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:h-1 data-[active=true]:after:h-1 data-[active=true]:text-primary"
          prefetch={false}
        >
          {t('home')}
        </Link>
        <Link
          href="/projects"
          className="relative transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:h-1 data-[active=true]:after:h-1 data-[active=true]:text-primary"
          prefetch={false}
        >
          {t('projects')}
        </Link>
        <Link
          href="/blog"
          className="relative transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:h-1 data-[active=true]:after:h-1 data-[active=true]:text-primary"
          prefetch={false}
        >
          {t('blog')}
        </Link>
        <Toggle />
        <LangSwitcher />
      </nav>
      {/* Mobile menu */}
      <div className="ml-auto flex items-center gap-2 md:hidden">
        <HireMeBtn />
        <Sheet
          open={isOpen}
          onOpenChange={setIsOpen}
          aria-label="Navigation menu"
        >
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>
          <SheetContent side="right">
            <div className="grid gap-2 py-6">
              <Link
                href="/"
                className="flex w-full items-center py-2 text-lg font-semibold"
                prefetch={false}
                onClick={handleNavItemClick}
              >
                {t('home')}
              </Link>
              <Link
                href="/projects"
                className="flex w-full items-center py-2 text-lg font-semibold"
                prefetch={false}
                onClick={handleNavItemClick}
              >
                {t('projects')}
              </Link>
              <Link
                href="/blog"
                className="flex w-full items-center py-2 text-lg font-semibold"
                prefetch={false}
                onClick={handleNavItemClick}
              >
                {t('blog')}
              </Link>
              <div className="w-full flex justify-center space-x-8">
                <LangSwitcher />
                <Toggle />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
