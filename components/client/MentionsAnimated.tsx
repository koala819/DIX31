'use client'

import { motion } from 'framer-motion'

export default function MentionsAnimated() {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-extrabold text-primary sm:text-5xl lg:text-6xl">
        Mentions Légales
      </h1>
      <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
        Transparence et conformité au cœur de mes services
      </p>
    </motion.div>
  )
}
