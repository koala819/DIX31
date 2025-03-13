'use client'

import { Link } from '@/i18n/navigation'
import { motion } from 'framer-motion'

interface NavbarItemProps {
  href: string
  label: string
  isActive: boolean
  onClick: () => void
  isScrolled?: boolean
}

export default function NavbarItem({
  href,
  label,
  isActive,
  onClick,
  isScrolled,
}: NavbarItemProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        className={`${isScrolled ? 'lg:text-sm' : 'lg:text-lg'} font-medium transition-colors duration-200 ${
          isActive
            ? 'text-blue-600 dark:text-blue-400'
            : 'text-gray-600 dark:text-gray-300'
        }`}
        onClick={onClick}
      >
        {label}
      </Link>
    </motion.div>
  )
}
