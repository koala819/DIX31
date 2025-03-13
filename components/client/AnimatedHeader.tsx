'use client'

// components/privacy/AnimatedHeader.tsx
import { motion } from 'framer-motion'

interface AnimatedHeaderProps {
  title: string
  subtitle: string
}

export default function AnimatedHeader({
  title,
  subtitle,
}: AnimatedHeaderProps) {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-extrabold text-primary sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
        {subtitle}
      </p>
    </motion.div>
  )
}
