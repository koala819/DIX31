'use client'

import React, { useEffect, useState } from 'react'

import dynamic from 'next/dynamic'
import Link from 'next/link'

import { ModeToggle as Toggle } from '@/components/atoms/Toggle'
import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import { cn } from '@/lib/utils'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  function toggleNavbar() {
    setIsOpen(!isOpen)
  }

  function closeNavbar() {
    setIsOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function BookIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    )
  }

  function ChevronRightIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    )
  }

  function FolderIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
      </svg>
    )
  }

  function HomeIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  }

  function MailIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    )
  }

  function MenuIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    )
  }

  const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  })
  ListItem.displayName = 'ListItem'

  const WithCustomLoading = dynamic(() => import('@/lib/LoadImage'), {
    loading: () => <div>Chargement ...</div>,
  })

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-10 transition-all duration-300',
        isScrolled
          ? 'bg-white md:bg-white/95 dark:bg-gray-900 md:dark:bg-gray-900/50 shadow-md py-2'
          : 'bg-white dark:bg-gray-900 py-4',
      )}
    >
      <div className="flex items-center justify-between px-4 md:px-6 h-16 md:h-20">
        <div className="hidden md:block">
          <WithCustomLoading
            alt="Logo DIX31"
            height={80}
            src="/images/Navbar_logo.svg"
            className="rounded-none block dark:hidden"
            width={100}
          />
          <WithCustomLoading
            alt="Logo DIX31"
            height={80}
            src="/images/Navbar_logo_dark.png"
            className="rounded-none hidden dark:block"
            width={100}
          />
        </div>
        {/* MOBILE VIEW */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              className="md:hidden"
              size="icon"
              variant="outline"
              onClick={toggleNavbar}
            >
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          {isOpen && (
            <SheetContent side="left">
              <Link
                className="flex items-center gap-2"
                href="/"
                onClick={closeNavbar}
              >
                <WithCustomLoading
                  alt="Logo DIX31"
                  height={80}
                  src="/images/Navbar_logo.png"
                  className="rounded-none block dark:hidden"
                  width={100}
                />
                <WithCustomLoading
                  alt="Logo DIX31"
                  height={80}
                  src="/images/Navbar_logo_dark.png"
                  className="rounded-none hidden dark:block"
                  width={100}
                />
              </Link>
              <div className="grid gap-4 py-6">
                <Link
                  className="flex items-center gap-2 text-lg font-medium"
                  href="/"
                  onClick={closeNavbar}
                >
                  <HomeIcon className="h-5 w-5" />
                  Accueil
                </Link>
                <Collapsible className="grid gap-4">
                  <CollapsibleTrigger className="flex items-center gap-2 text-lg font-medium [&[data-state=open]>svg]:rotate-90">
                    <FolderIcon className="h-5 w-5" />
                    Réalisations
                    <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="-mx-6 grid gap-6 bg-gray-100 p-6 dark:bg-gray-800">
                      <Link
                        className="group grid h-auto w-full items-start gap-2"
                        href="/projects/Club306"
                        onClick={closeNavbar}
                      >
                        <div>
                          <div className="text-sm font-medium leading-none group-hover:underline">
                            Club 306
                          </div>
                          <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                            Premier club de France sur la Peugeot 306
                          </div>
                        </div>
                      </Link>
                      <Link
                        className="group grid h-auto w-full items-start gap-2"
                        href="/projects/BonheurSurSeine"
                        onClick={closeNavbar}
                      >
                        <div>
                          <div className="text-sm font-medium leading-none group-hover:underline">
                            Bonheur Sur Seine
                          </div>
                          <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                            Site sur la gyroroue
                          </div>
                        </div>
                      </Link>
                      <Link
                        className="group grid h-auto w-full items-start gap-2"
                        href="/projects/Thouy"
                        onClick={closeNavbar}
                      >
                        <div>
                          <div className="text-sm font-medium leading-none group-hover:underline">
                            Gîtes de Thouy
                          </div>
                          <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                            Location de gîtes dans le Tarn
                          </div>
                        </div>
                      </Link>
                      <Link
                        className="group grid h-auto w-full items-start gap-2"
                        href="/projects/ActivSavoirs"
                        onClick={closeNavbar}
                      >
                        <div>
                          <div className="text-sm font-medium leading-none group-hover:underline">
                            Activ&apos;Savoirs
                          </div>
                          <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                            Centre de formations profesionnelles continues
                          </div>
                        </div>
                      </Link>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
                <Link
                  className="flex items-center gap-2 text-lg font-medium"
                  href="/blog"
                  onClick={closeNavbar}
                >
                  <BookIcon className="h-5 w-5" />
                  Blog
                </Link>
                <Link
                  className="flex items-center gap-2 text-lg font-medium"
                  href="/contact"
                  onClick={closeNavbar}
                >
                  <MailIcon className="h-5 w-5" />
                  Contact
                </Link>
              </div>
            </SheetContent>
          )}
        </Sheet>

        {/* VIEW LARGE PAGE */}
        <div className="text-lg font-semibold">
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="/"
                >
                  <h3>Accueil</h3>
                </Link>
              </NavigationMenuLink>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <h3>Réalisations</h3>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <div className="w-full h-full flex items-center">
                          <ListItem
                            className="rounded-2xl"
                            href="/projects/Club306"
                          >
                            <WithCustomLoading
                              src="/images/logo-Club-306.png"
                              alt="Logo du Club 306"
                              width={500}
                              height={500}
                            />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              <h4 className="text-black dark:text-gray-200">
                                Club 306
                              </h4>
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Premier club de France sur la Peugeot 306
                            </p>
                          </ListItem>
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/projects/BonheurSurSeine">
                      <h4 className="text-black dark:text-gray-200">
                        Bonheur Sur Seine
                      </h4>
                      Site sur la gyroroue
                    </ListItem>
                    <ListItem href="/projects/Thouy">
                      <h4 className="text-black dark:text-gray-200">
                        Gîtes de Thouy
                      </h4>
                      Location de gîtes dans le Tarn
                    </ListItem>

                    <ListItem href="/projects/ActivSavoirs">
                      <h4 className="text-black dark:text-gray-200">
                        Activ&apos;Savoirs
                      </h4>
                      Centre de formations profesionnelles continues
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="/blog"
                >
                  <h3>Blog</h3>
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="/contact"
                >
                  <h3>Contact</h3>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="text-lg font-semibold">
          <Toggle />
        </div>
      </div>
    </header>
  )
}
