'use client'

import Link from 'next/link'

import LegalCard from '@/components/atoms/LegalCard'
import LegalItem from '@/components/atoms/LegalItem'

import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.section {...fadeInUp} className="space-y-8">
          <LegalCard title="Informations Générales">
            <ul className="space-y-2">
              <LegalItem label="Nom du site web" value="DIX31.com" />
              <LegalItem label="Numéro de Siret" value="85254837900019" />
              <LegalItem
                label="Directeur de la publication"
                value="Xavier GENOLHAC"
              />
              <LegalItem
                label="Activité"
                value="Création de sites web sur mesure et développement de logiciels spécifiques"
              />
              <LegalItem label="URL" value="www.dix31.com" />
              <LegalItem label="Localisation" value="31300 Toulouse - France" />
            </ul>
          </LegalCard>

          <LegalCard title="Hébergement">
            <LegalItem label="Nom" value="Vercel" />
          </LegalCard>
        </motion.section>

        <motion.section {...fadeInUp} className="space-y-8">
          <LegalCard title="Utilisation de Cookies">
            <p className="text-muted-foreground">
              En utilisant DIX31.com, vous acceptez mon utilisation de cookies
              qui améliore votre expérience et m&aposaide à suivre les visites
              via Google Analytics.
            </p>
          </LegalCard>

          <LegalCard title="Liens Hypertextes">
            <p className="text-muted-foreground">
              DIX31.com peut inclure des liens vers d&apos;autres sites. Je ne
              suis pas responsable de leur contenu ni de leurs pratiques de
              confidentialité.
            </p>
          </LegalCard>
        </motion.section>
      </div>

      <motion.section {...fadeInUp} className="mt-12">
        <LegalCard title="Protection des Données Personnelles">
          <p className="text-muted-foreground">
            Vos données personnelles sont utilisées uniquement en interne et ne
            sont ni vendues, ni échangées, ni louées à des tiers. Conformément à
            la loi du 6 janvier 1978, vous avez le droit d&apos;accès, de
            rectification et de suppression de vos données.
            <p>
              <Link
                href="/contact"
                className="text-primary hover:underline inline-flex items-center"
              >
                Contactez-moi
              </Link>{' '}
              pour exercer ce droit.
            </p>
          </p>
        </LegalCard>
      </motion.section>

      <motion.section {...fadeInUp} className="mt-8">
        <LegalCard title="Propriété Intellectuelle">
          <p className="text-muted-foreground">
            Les contenus de DIX31.com sont sous licences de copyleft, permettant
            leur utilisation sous conditions. Consultez les termes de ces
            licences pour comprendre vos droits.
          </p>
        </LegalCard>
      </motion.section>
    </div>
  )
}
