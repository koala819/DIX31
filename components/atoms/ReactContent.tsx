'use client'

import { useMemo } from 'react'

import { useTranslations } from 'next-intl'
import Image from 'next/legacy/image'

import { Link } from '@/i18n/routing'
import { myXP } from '@/lib/calculateXp'
import { motion } from 'framer-motion'

const ReactContent: React.FC = () => {
  const experience = useMemo(() => myXP(), [])
  const t = useTranslations('ContentReact')
  const introWithXp = t('intro', { years: experience })

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-foreground">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          alt="React logo"
          width={200}
          height={200}
          src="/images/react.svg"
          className="mx-auto mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
        <p className="text-xl text-muted-foreground">{introWithXp}</p>
        <a
          href="/?scrollTo=contact"
          className="inline-block mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          {t('dispositionLink')}
        </a>
      </motion.div>

      <motion.section {...fadeInUp} className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">{t('whyChoose')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <motion.div
              key={num}
              className="bg-card text-card-foreground p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold mb-2">
                {t(`reason${num}`)}
              </h3>
              <p className="text-muted-foreground">{t(`reason${num}Desc`)}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeInUp} className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">{t('reactWebsites')}</h2>
        <p className="text-lg mb-6 text-muted-foreground">
          {t('websitesDesc')}
        </p>
        <h2 className="text-3xl font-semibold mb-4">
          {t('reactApplications')}
        </h2>
        <p className="text-lg mb-6 text-muted-foreground">
          {t('applicationsDesc')}
        </p>
      </motion.section>

      <motion.section {...fadeInUp} className="text-center">
        <h2 className="text-3xl font-semibold mb-4">{t('hire')}</h2>
        <p className="text-lg mb-6 text-muted-foreground">{t('hireDesc')}</p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center items-center">
          <a
            href="/?scrollTo=contact"
            className="w-full sm:w-auto inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg font-semibold"
          >
            {t('contactLink')}
          </a>
          <Link
            href="/projects"
            className="w-full sm:w-auto inline-block px-6 py-3 bg-accent text-accent-foreground rounded-full hover:bg-accent/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 border border-accent-foreground/10"
          >
            {t('recentWorkLink')}
          </Link>
        </div>
      </motion.section>
    </div>
  )
}

export default ReactContent
