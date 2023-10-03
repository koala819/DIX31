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
} from "@nextui-org/react";
import { AiFillChrome } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export function Top() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();

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
            <AiFillChrome />
            <p className='font-bold text-inherit'>DIX31</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex ' justify='center'>
        <NavbarItem isActive={path.includes("/services")}>
          <Link href='/services' aria-current='page' color='foreground'>
            Services
          </Link>
        </NavbarItem>
        <NavbarItem isActive={path.includes("/projets")}>
          <Link href='/projets' aria-current='page' color='foreground'>
            Projets
          </Link>
        </NavbarItem>
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
