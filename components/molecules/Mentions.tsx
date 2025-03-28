import LegalCard from '@/components/atoms/LegalCard'
import LegalItem from '@/components/atoms/LegalItem'
import AnimatedHeader from '@/components/client/AnimatedHeader'
import AnimatedSection from '@/components/client/AnimatedSection'

import { Link } from '@/i18n/navigation'

export default function Mentions() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <AnimatedHeader
        title="Mentions Légales"
        subtitle="Transparence et conformité au cœur de mes services"
      />

      <AnimatedSection className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

          <LegalCard title="Utilisation de Cookies">
            <p className="text-muted-foreground">
              En utilisant DIX31.com, vous acceptez mon utilisation de cookies
              qui améliore votre expérience et m&apos;aide à suivre les visites
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
        </div>

        <LegalCard title="Protection des Données Personnelles">
          <div className="text-muted-foreground space-y-2">
            <p>
              Vos données personnelles sont utilisées uniquement en interne et
              ne sont ni vendues, ni échangées, ni louées à des tiers.
              Conformément à la loi du 6 janvier 1978, vous avez le droit
              d&apos;accès, de rectification et de suppression de vos données.
            </p>
            <p>
              <Link
                href="/?scrollTo=contact"
                className="text-primary hover:underline inline-flex items-center"
              >
                Contactez-moi
              </Link>{' '}
              pour exercer ce droit.
            </p>
          </div>
        </LegalCard>

        <LegalCard title="Propriété Intellectuelle">
          <p className="text-muted-foreground">
            Les contenus de DIX31.com sont sous licences de copyleft, permettant
            leur utilisation sous conditions. Consultez les termes de ces
            licences pour comprendre vos droits.
          </p>
        </LegalCard>
      </AnimatedSection>
    </div>
  )
}
