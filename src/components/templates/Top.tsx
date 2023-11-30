"use client";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Button,
} from "@nextui-org/react";
import { FiChevronDown } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Image from "next/image";
import { useRouter } from "next/navigation";
import whitelogo from "../../../public/images/Navbar_logo.svg";
import blackLogo from "../../../public/images/Navbar_logo_dark.png";
import { useTheme } from "next-themes";

export function Top() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();
  const router = useRouter();
  const { resolvedTheme } = useTheme();

  const logo = resolvedTheme === "dark" ? blackLogo : whitelogo;

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projets", path: "/projets" },
    { name: "Recommandations", path: "/recommandations" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className='pb-4'
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
          "dark:data-[active=true]:after:bg-orange-600",
        ],
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className='sm:hidden'
        />
        <NavbarBrand>
          <Link href='/' aria-current='page' color='foreground'>
            <Image
              src={logo}
              alt='DIX31 logo'
              className='object-fill'
              width={80}
              height={50}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex ' justify='center'>
        <NavbarItem isActive={path.includes("/services")}>
          <Link href='/services' aria-current='page' color='foreground'>
            Services
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem isActive={path.includes("/projets")}>
            <DropdownTrigger>
              <Button
                disableRipple
                className={` ${
                  path.includes("/projets")
                    ? "font-bold text-base data-[hover=true]:bg-transparent"
                    : "p-0 text-base data-[hover=true]:bg-transparent hover:text-gray-600"
                }`}
                endContent={<FiChevronDown />}
                radius='sm'
                variant='light'
              >
                Projets
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label='My realisations'
            className='w-[340px]'
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key='99_uptime'
              description='Centre de formations activateur de compétences.'
              startContent={
                <Image
                  alt="Activ'Savoirs website"
                  className='object-cover w-full h-full'
                  height={100}
                  src='/images/ActivSavoirs.jpg'
                  width={100}
                />
              }
              onClick={() => router.push("/projets/ActivSavoirs")}
            >
              Activ&apos;Savoirs
            </DropdownItem>
            <DropdownItem
              key='99_uptime'
              description='Réunir les passionnés de la Peugeot 306.'
              startContent={
                <Image
                  alt='Club306 website'
                  className='object-cover w-full h-full'
                  height={100}
                  src='/images/Club306.jpg'
                  width={100}
                />
              }
              onClick={() => router.push("/projets/Club306")}
            >
              Club 306
            </DropdownItem>
            <DropdownItem
              key='supreme_support'
              description='Vitrine de mes compétences et réalisations professionnelles.'
              startContent={
                <Image
                  alt='My portfolio website'
                  className='object-cover w-full h-full'
                  height={100}
                  src='/images/Portfolio.jpg'
                  width={100}
                />
              }
              onClick={() => router.push("/projets/portfolio")}
            >
              Mon Portfolio
            </DropdownItem>
            <DropdownItem
              key='thouy'
              description='Site de location de gîtes personnalisé'
              startContent={
                <Image
                  alt='Gîtes de Thouy website'
                  className='object-cover w-full h-full'
                  height={100}
                  src='/images/Thouy.jpg'
                  width={100}
                />
              }
              onClick={() => router.push("/projets/Thouy")}
            >
              Gîtes de Thouy
            </DropdownItem>
            <DropdownItem
              key='usage_metrics'
              description='Jeu créé avec passion pour renforcer mes compétences en JavaScript.'
              startContent={
                <Image
                  alt='First memory game'
                  priority
                  className='object-cover w-full h-full'
                  height={100}
                  src='/images/gameMemory.jpg'
                  width={100}
                />
              }
              onClick={() => router.push("/projets/memoryGame")}
            >
              Memory Game
            </DropdownItem>
            <DropdownItem
              key='production_ready'
              description='Site pour guider les propriétaires dans la rénovation de leurs habitations.'
              startContent={
                <Image
                  alt='Cumuler les aides website'
                  className='object-cover w-full h-full'
                  height={100}
                  src='/images/CumulerAides.jpg'
                  width={100}
                />
              }
              onClick={() => router.push("/projets/CumulerAides")}
            >
              Cumuler les aides
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem isActive={path.includes("/recommandations")}>
          <Link href='/recommandations' aria-current='page' color='foreground'>
            Recommandations
          </Link>
        </NavbarItem>
        <NavbarItem isActive={path.includes("/contact")}>
          <Link href='/contact' aria-current='page' color='foreground'>
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem isActive={path.includes("/blog")}>
          <Link href='/blog' aria-current='page' color='foreground'>
            Blog
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className='mt-8'>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={"foreground"}
              // color={
              //   index === 2
              //     ? "primary"
              //     : index === menuItems.length - 1
              //     ? "danger"
              //     : "foreground"
              // }
              className='w-full hover:bg-rose-500 hover:text-white p-2 hover:rounded-xl hover:w-1/2 '
              href={item.path}
              size='lg'
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
