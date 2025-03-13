'use client'

import { Link } from '@/i18n/navigation'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function TechnosContact({
  title,
  description,
  contactText,
  workText,
}: {
  title: string
  description: string
  contactText: string
  workText: string
}) {
  return (
    <motion.section {...fadeInUp} className="text-center">
      <h2 className="text-3xl font-semibold mb-4">{title}</h2>
      <p className="text-lg mb-6 text-muted-foreground">{description}</p>
      <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center items-center">
        <a
          href="/?scrollTo=contact"
          className="w-full sm:w-auto inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg font-semibold"
        >
          {contactText}
        </a>
        <Link
          href="/projects"
          className="w-full sm:w-auto inline-block px-6 py-3 bg-accent text-accent-foreground rounded-full hover:bg-accent/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 border border-accent-foreground/10"
        >
          {workText}
        </Link>
      </div>
    </motion.section>
  )
}
