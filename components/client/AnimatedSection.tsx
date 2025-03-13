'use client'

// components/privacy/AnimatedSection.tsx
import { ReactNode } from 'react'

import { motion } from 'framer-motion'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
}

export default function AnimatedSection({
  children,
  className = '',
}: AnimatedSectionProps) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  )
}
