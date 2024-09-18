import React from 'react'

import Link from 'next/link'

import { motion } from 'framer-motion'

const NavbarItem = ({
  href,
  label,
  isActive,
  onClick,
}: {
  href: string
  label: string
  isActive: boolean
  onClick: () => void
}) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        className={`text-lg font-medium transition-colors duration-200 ${
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

export default NavbarItem
