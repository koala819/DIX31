import Image from 'next/image'
import Link from 'next/link'

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

export default function Navbar() {
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

  function MountainIcon(props: any) {
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
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    )
  }
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      {/* MOBILE VIEW */}
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link className="flex items-center gap-2" href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="font-semibold">Mon Site</span>
          </Link>
          <div className="grid gap-4 py-6">
            <Link
              className="flex items-center gap-2 text-lg font-medium"
              href="#"
            >
              <HomeIcon className="h-5 w-5" />
              Accueil
            </Link>
            <Collapsible className="grid gap-4">
              <CollapsibleTrigger className="flex items-center gap-2 text-lg font-medium [&[data-state=open]>svg]:rotate-90">
                <FolderIcon className="h-5 w-5" />
                Projets
                <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="-mx-6 grid gap-6 bg-gray-100 p-6 dark:bg-gray-800">
                  <Link
                    className="group grid h-auto w-full items-start gap-2"
                    href="#"
                  >
                    <Image
                      alt="Club306"
                      className="rounded-lg object-cover"
                      height="150"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: '200/150',
                        objectFit: 'cover',
                      }}
                      width="200"
                    />
                    <div>
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Club306
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                        Un club pour les passionnés de sports et de loisirs.
                      </div>
                    </div>
                  </Link>
                  <Link
                    className="group grid h-auto w-full items-start gap-2"
                    href="#"
                  >
                    <Image
                      alt="BonheurSurSeine"
                      className="rounded-lg object-cover"
                      height="150"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: '200/150',
                        objectFit: 'cover',
                      }}
                      width="200"
                    />
                    <div>
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        BonheurSurSeine
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                        Un projet pour rendre la Seine plus accessible aux
                        citoyens.
                      </div>
                    </div>
                  </Link>
                  <Link
                    className="group grid h-auto w-full items-start gap-2"
                    href="#"
                  >
                    <Image
                      alt="ActivSavoirs"
                      className="rounded-lg object-cover"
                      height="150"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: '200/150',
                        objectFit: 'cover',
                      }}
                      width="200"
                    />
                    <div>
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        ActivSavoirs
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                        Une plateforme d&apos;apprentissage en ligne pour tous.
                      </div>
                    </div>
                  </Link>
                  <Link
                    className="group grid h-auto w-full items-start gap-2"
                    href="#"
                  >
                    <Image
                      alt="Thouy"
                      className="rounded-lg object-cover"
                      height="150"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: '200/150',
                        objectFit: 'cover',
                      }}
                      width="200"
                    />
                    <div>
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Thouy
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                        Un projet de rénovation urbaine dans le quartier de
                        Thouy.
                      </div>
                    </div>
                  </Link>
                </div>
              </CollapsibleContent>
            </Collapsible>
            <Link
              className="flex items-center gap-2 text-lg font-medium"
              href="#"
            >
              <BookIcon className="h-5 w-5" />
              Blog
            </Link>
            <Link
              className="flex items-center gap-2 text-lg font-medium"
              href="#"
            >
              <MailIcon className="h-5 w-5" />
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      {/* VIEW LARGE PAGE */}
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <Link
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              href="#"
            >
              Accueil
            </Link>
          </NavigationMenuLink>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Projets</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[600px] p-2">
                <NavigationMenuLink asChild>
                  <Link
                    className="group grid h-auto w-full items-start gap-2 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    href="#"
                  >
                    <Image
                      alt="Club306"
                      className="rounded-lg object-cover"
                      height="150"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: '200/150',
                        objectFit: 'cover',
                      }}
                      width="200"
                    />
                    <div>
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Club306
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                        Un club pour les passionnés de sports et de loisirs.
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    className="group grid h-auto w-full items-start gap-2 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    href="#"
                  >
                    <Image
                      alt="BonheurSurSeine"
                      className="rounded-lg object-cover"
                      height="150"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: '200/150',
                        objectFit: 'cover',
                      }}
                      width="200"
                    />
                    <div>
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        BonheurSurSeine
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                        Un projet pour rendre la Seine plus accessible aux
                        citoyens.
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    className="group grid h-auto w-full items-start gap-2 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    href="#"
                  >
                    <Image
                      alt="ActivSavoirs"
                      className="rounded-lg object-cover"
                      height="150"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: '200/150',
                        objectFit: 'cover',
                      }}
                      width="200"
                    />
                    <div>
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        ActivSavoirs
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                        Une plateforme d&apos;apprentissage en ligne pour tous.
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    className="group grid h-auto w-full items-start gap-2 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    href="#"
                  >
                    <Image
                      alt="Thouy"
                      className="rounded-lg object-cover"
                      height="150"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: '200/150',
                        objectFit: 'cover',
                      }}
                      width="200"
                    />
                    <div>
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Thouy
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                        Un projet de rénovation urbaine dans le quartier de
                        Thouy.
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              href="#"
            >
              Blog
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              href="#"
            >
              Contact
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}
