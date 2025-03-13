'use client'

import Image from 'next/legacy/image'

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
      <Image
        alt={alt}
        width={200}
        height={200}
        src={picture}
        className="mx-auto mb-8"
      />
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
