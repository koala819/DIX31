import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mentions Légales - DIX31 | Création de Sites Web à Toulouse',
  description:
    'Consultez les mentions légales de DIX31.com pour des informations sur notre politique de confidentialité, les cookies, et la propriété intellectuelle.',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/mentions`,
  },
}

export default function Page() {
  return (
    <div className="container space-y-8">
      <h1 className="text-blue-500 dark:text-cyan-500 text-center uppercase">
        Mentions légales de DIX31
      </h1>

      <section className="flex flex-col space-y-4">
        <h2>Informations Générales :</h2>
        <span>
          <u>Nom du site web</u> : DIX31.com
        </span>

        <span>
          <u>Numéro de Siret</u> : 85254837900019
        </span>

        <span>
          <u>Directeur de la publication</u> : Xavier GENOLHAC
        </span>

        <span>
          <u>Activité</u> : Création de sites web sur mesure et développement de
          logiciels spécifiques
        </span>

        <span>
          <u>URL</u> : www.dix31.com
        </span>

        <span>
          <u>Localisation</u> : 31300 Toulouse - France
        </span>
      </section>

      <section>
        <h2>Hébergement:</h2>
        <span>
          <u>Nom</u> : Vercel
        </span>
      </section>

      <h2>Utilisation de Cookies :</h2>
      <p>
        En utilisant DIX31.com, vous acceptez notre utilisation de cookies qui
        améliorent votre expérience et nous aident à suivre les visites via
        Google Analytics.
      </p>

      <h2>Liens Hypertextes:</h2>
      <p>
        DIX31.com peut inclure des liens vers d&apos;autres sites. Nous ne
        sommes pas responsables de leur contenu ni de leurs pratiques de
        confidentialité.
      </p>

      <h2>Protection des Données Personnelles :</h2>
      <p>
        Vos données personnelles sont utilisées uniquement en interne et ne sont
        ni vendues, ni échangées, ni louées à des tiers. Conformément à la loi
        du 6 janvier 1978, vous avez le droit d&apos;accès, de rectification et
        de suppression de vos données.{' '}
        <Link href="/contact" className="underline hover:text-blue-700">
          Contactez-nous
        </Link>{' '}
        pour exercer ce droit.
      </p>

      <h2>Propriété Intellectuelle:</h2>
      <p>
        Les contenus de DIX31.com sont sous licences de copyleft, permettant
        leur utilisation sous conditions. Consultez les termes de ces licences
        pour comprendre vos droits.
      </p>
    </div>
  )
}
