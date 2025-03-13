'use client'

import DynamicLoadImage from '@/components/client/DynamicLoadImage'

import { motion } from 'framer-motion'

export default function TechnosHeader({
  title,
  intro,
  ctaText,
  picture,
  alt,
}: {
  title: string
  intro: string
  ctaText: string
  picture: string
  alt: string
}) {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto mb-8 w-[200px] h-[200px] relative">
        <DynamicLoadImage
          alt={alt}
          fill
          src={picture}
          className="mx-auto"
          priority={true} // Ajout de priority car c'est une image dans la partie visible
        />
      </div>
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-xl text-muted-foreground">{intro}</p>
      <a
        href="/?scrollTo=contact"
        className="inline-block mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors duration-300"
      >
        {ctaText}
      </a>
    </motion.div>
  )
}
