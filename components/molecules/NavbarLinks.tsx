import React from 'react'

import Link from 'next/link'

interface NavbarLink {
  name: string
  href: string
  label: string
}

interface NavbarLinksProps {
  links: NavbarLink[]
  activeItem: string
  // eslint-disable-next-line no-unused-vars
  onClick: (name: string) => void
}

const NavbarLinks: React.FC<NavbarLinksProps> = ({
  links,
  activeItem,
  onClick,
}) => (
  <div className="flex items-center space-x-4">
    {links.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className="navbar"
        prefetch={false}
        data-active={activeItem === link.name}
        onClick={() => onClick(link.name)}
        aria-current={activeItem === link.name ? 'page' : undefined}
      >
        {link.label}
      </Link>
    ))}
  </div>
)

export default NavbarLinks
