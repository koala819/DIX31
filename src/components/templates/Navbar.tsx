'use client'

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react'
import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

import { ThemeSwitcher } from '@/components/utils/ThemeSwitcher'

import whitelogo from '../../../public/images/Navbar_logo.svg'
import blackLogo from '../../../public/images/Navbar_logo_dark.png'

export const NavbarDIX = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const path = usePathname()
  const router = useRouter()
  const { theme } = useTheme()

  const logo = theme === 'dark' ? blackLogo : whitelogo

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Projets', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="pb-4"
      isBordered={true}
      position="sticky"
      classNames={{
        item: [
          'flex',
          'relative',
          'h-full',
          'items-center',
          "data-[active=true]:after:content-['']",
          'data-[active=true]:after:absolute',
          'data-[active=true]:after:bottom-0',
          'data-[active=true]:after:left-0',
          'data-[active=true]:after:right-0',
          'data-[active=true]:after:h-[2px]',
          'data-[active=true]:after:rounded-[2px]',
          'data-[active=true]:after:bg-primary',
          'dark:data-[active=true]:after:bg-orange-600',
        ],
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" aria-current="page" color="foreground">
            <Image
              src={logo}
              alt="DIX31 logo"
              className="object-fill"
              width={80}
              height={50}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex " justify="center">
        <NavbarItem isActive={path === '/'} className="hidden sm:flex">
          <Link href="/" aria-current="page" color="foreground">
            Accueil
          </Link>
        </NavbarItem>

        <Dropdown>
          <NavbarItem isActive={path.includes('/projects')}>
            <DropdownTrigger>
              <Button
                disableRipple
                className={` ${
                  path.includes('/projects')
                    ? 'font-bold text-base data-[hover=true]:bg-transparent'
                    : 'p-0 text-base data-[hover=true]:bg-transparent hover:text-gray-600'
                }`}
                endContent={<FiChevronDown />}
                radius="sm"
                variant="light"
              >
                Projets
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="My realisations"
            className="w-[340px]"
            itemClasses={{
              base: 'gap-4',
            }}
          >
            <DropdownItem
              key="99_uptime"
              description="Centre de formations professionnelles continues"
              startContent={
                <Image
                  alt="Activ'Savoirs website"
                  className="object-cover w-full h-full"
                  height={100}
                  src="/images/ActivSavoirs.jpg"
                  width={100}
                />
              }
              onClick={() => router.push('/projects/ActivSavoirs')}
            >
              Activ&apos;Savoirs
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              description="Premier club automobiles de France"
              startContent={
                <Image
                  alt="Club 306 France"
                  className="object-cover w-full h-full"
                  height={100}
                  src="/images/Club306.jpg"
                  width={100}
                />
              }
              onClick={() => router.push('/projects/Club306')}
            >
              Club 306
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              description="Développeur Indépendant Xavier Website"
              startContent={
                <Image
                  alt="DIX31 website"
                  className="object-cover w-full h-full"
                  height={100}
                  src="/images/Portfolio.jpg"
                  width={100}
                />
              }
              onClick={() => router.push('/projects/dix31')}
            >
              DIX31
            </DropdownItem>
            <DropdownItem
              key="thouy"
              description="Site de location de gîtes dans le Tarn"
              startContent={
                <Image
                  alt="Gîtes de Thouy website"
                  className="object-cover w-full h-full"
                  height={100}
                  src="/images/Thouy.jpg"
                  width={100}
                />
              }
              onClick={() => router.push('/projects/Thouy')}
            >
              Gîtes de Thouy
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Jeux créé avec passion"
              startContent={
                <Image
                  alt="Memory game"
                  priority
                  className="object-cover w-full h-full"
                  height={100}
                  src="/images/gameMemory.jpg"
                  width={100}
                />
              }
              onClick={() => router.push('/projects/memoryGame')}
            >
              Memory Game
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="Guider dans la rénovation des habitations"
              startContent={
                <Image
                  alt="Cumuler les aides website"
                  className="object-cover w-full h-full"
                  height={100}
                  src="/images/CumulerAides.jpg"
                  width={100}
                />
              }
              onClick={() => router.push('/projects/CumulerAides')}
            >
              Cumuler les aides
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem isActive={path.includes('/blog')}>
          <Link href="/blog" aria-current="page" color="foreground">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem
          isActive={path.includes('/contact')}
          className="hidden sm:flex"
        >
          <Link href="/contact" aria-current="page" color="foreground">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="mt-8">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={'foreground'}
              // color={
              //   index === 2
              //     ? "primary"
              //     : index === menuItems.length - 1
              //     ? "danger"
              //     : "foreground"
              // }
              className="w-full hover:bg-rose-500 hover:text-white p-2 hover:rounded-xl hover:w-1/2 "
              href={item.path}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
