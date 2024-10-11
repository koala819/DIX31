'use client'

import LegalCard from '@/components/atoms/LegalCard'
import LegalItem from '@/components/atoms/LegalItem'

import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function Privacy() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold text-primary sm:text-5xl lg:text-6xl">
          Protection des Données Personnelles
        </h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
          Confidentialité et sécurité au cœur de mon engagement
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.section {...fadeInUp} className="space-y-8">
          <LegalCard title="Engagement de DIX31">
            <p className="text-muted-foreground">
              DIX31.com prend très au sérieux la protection de vos données
              personnelles. Je m&apos;engage à garantir un niveau de protection
              élevé pour vos données, conformément aux législations en vigueur
              et au Règlement Général sur la Protection des Données (RGPD).
            </p>
          </LegalCard>

          <LegalCard title="Responsable du traitement">
            <ul className="space-y-2">
              <LegalItem label="Entité" value="DIX31.com" />
              <LegalItem label="Localisation" value="31300 Toulouse, France" />
              <LegalItem
                label="Email"
                value={
                  <a
                    href="/?scrollTo=contact"
                    className="text-primary hover:underline"
                  >
                    contact@dix31.com
                  </a>
                }
              />
            </ul>
          </LegalCard>
        </motion.section>

        <motion.section {...fadeInUp} className="space-y-8">
          <LegalCard title="Finalités du traitement">
            <ul className="space-y-2 text-muted-foreground">
              <li>• Gérer la relation clientèle et le support client.</li>
              <li>• Répondre aux demandes via les formulaires de contact.</li>
              <li>• Réaliser des mesures d&apos;audience.</li>
            </ul>
          </LegalCard>

          <LegalCard title="Données collectées">
            <p className="text-muted-foreground">
              Les informations recueillis incluent notamment votre adresse email
              et votre adresse IP. Je m&apos;engage à ne collecter que les
              données strictement nécessaires à la fourniture de mes services.
            </p>
          </LegalCard>
        </motion.section>
      </div>

      <motion.section {...fadeInUp} className="mt-12">
        <LegalCard title="Durée de conservation">
          <p className="text-muted-foreground">
            Les données sont conservées pendant la durée de fourniture du
            service et archivées selon les durées légales pour des raisons
            telles que le paiement et la garantie. Elles sont ensuite
            supprimées.
          </p>
        </LegalCard>
      </motion.section>

      <motion.section {...fadeInUp} className="mt-8">
        <LegalCard title="Destinataires des données">
          <p className="text-muted-foreground">
            Ces données sont principalement utilisées à des fins commerciales et
            techniques et peuvent être partagées avec :
          </p>
          <ul className="mt-2 space-y-2 text-muted-foreground">
            <li>• Google Analytics - pour l&apos;analyse d&apos;audience</li>
            <li>• Nodemailer - pour la gestion des communications</li>
          </ul>
        </LegalCard>
      </motion.section>

      <motion.section {...fadeInUp} className="mt-8">
        <LegalCard title="Localisation et hébergement des données">
          <ul className="space-y-2 text-muted-foreground">
            <li>• Vercel - hébergeur du site web (Données mondialisées)</li>
            <li>
              • Google Analytics et Nodemailer - pour les fonctionnalités
              spécifiques mentionnées
            </li>
          </ul>
        </LegalCard>
      </motion.section>

      <motion.section {...fadeInUp} className="mt-8">
        <LegalCard title="Retrait du Consentement">
          <p className="text-muted-foreground">
            Vous pouvez retirer votre consentement à tout moment pour les
            données non essentielles à mes services, en me contactant à{' '}
            <a
              href="/?scrollTo=contact"
              className="text-primary hover:underline"
            >
              contact@dix31.com
            </a>
          </p>
        </LegalCard>
      </motion.section>
    </div>
  )
}
