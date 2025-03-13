'use client'

import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function TechnoServices({
  websitesTitle,
  websitesDesc,
  appsTitle,
  appsDesc,
}: {
  websitesTitle: string
  websitesDesc: string
  appsTitle: string
  appsDesc: string
}) {
  return (
    <motion.section {...fadeInUp} className="mb-16">
      <h2 className="text-3xl font-semibold mb-4">{websitesTitle}</h2>
      <p className="text-lg mb-6 text-muted-foreground">{websitesDesc}</p>
      <h2 className="text-3xl font-semibold mb-4">{appsTitle}</h2>
      <p className="text-lg mb-6 text-muted-foreground">{appsDesc}</p>
    </motion.section>
  )
}
