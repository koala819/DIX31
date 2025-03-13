'use client'

import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function TechnosBenefits({
  title,
  reasons,
}: {
  title: string
  reasons: {
    title: string
    description: string
  }[]
}) {
  return (
    <motion.section {...fadeInUp} className="mb-16">
      <h2 className="text-3xl font-semibold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className="bg-card text-card-foreground p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
            <p className="text-muted-foreground">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
