import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Protection des Données - DIX31 | Confidentialité Garantie',
  description:
    'Découvrez comment DIX31.com protège et gère vos données personnelles. Lisez notre politique de confidentialité détaillée ici.',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/protection`,
  },
}

export default function Page() {
  return (
    <div className="container space-y-8">
      <h1 className="text-blue-500 dark:text-cyan-500 uppercase">
        Protection des Données Personnelles - DIX31
      </h1>

      <section className="flex flex-col space-y-4">
        <h2>Engagement de DIX31 :</h2>
        <span>
          DIX31.com prend très au sérieux la protection de vos données
          personnelles. Nous nous engageons à garantir un niveau de protection
          élevé pour vos données, conformément aux législations en vigueur et au
          Règlement Général sur la Protection des Données (RGPD).
        </span>
      </section>

      <section className="flex flex-col space-y-4">
        <h2>Responsable du traitement:</h2>
        <span>
          <u>Entité</u> : DIX31.com
        </span>
        <span>
          <u>Localisation</u> : 31300 Toulouse, France
        </span>
        <span>
          <u>Email</u> :
          <Link
            href="mailto:contact@dix31.com"
            className="underline hover:text-blue-700"
          >
            contact@dix31.com
          </Link>
        </span>
      </section>

      <section className="flex flex-col space-y-4">
        <h2>Finalités du traitement:</h2>
        <p>
          Les données personnelles que nous collectons sont utilisées pour :
        </p>
        <ul className="list-disc" role="list">
          <li className="mx-12" role="listitem">
            Gérer la relation clientèle et le support client.
          </li>
          <li className="mx-12" role="listitem">
            Répondre aux demandes via les formulaires de contact.
          </li>
          <li className="mx-12" role="listitem">
            Réaliser des mesures d&apos;audience telles que le suivi des pages
            vues et l&apos;activité sur le site.
          </li>
        </ul>
      </section>

      <section className="flex flex-col space-y-4">
        <h2>Données collectées:</h2>
        <p>
          Les informations que nous recueillons incluent notamment votre adresse
          email et votre adresse IP. Nous nous engageons à ne collecter que les
          données strictement nécessaires à la fourniture de nos services. Le
          caractère obligatoire ou facultatif des données est clairement indiqué
          lors de la collecte.
        </p>
      </section>

      <h2>Durée de conservation:</h2>
      <p>
        Les données sont conservées pendant la durée de fourniture du service et
        archivées selon les durées légales pour des raisons telles que le
        paiement et la garantie. Elles sont ensuite supprimées.
      </p>

      <section className="flex flex-col space-y-4">
        <h2>Destinataires des données:</h2>
        <p>
          Ces données sont principalement utilisées à des fins commerciales et
          techniques et peuvent être partagées avec :
        </p>
        <ul className="list-disc" role="list">
          <li className="mx-12" role="listitem">
            <span>
              <u>Google Analytics</u> - pour l&apos;analyse d&apos;audience
            </span>
          </li>
          <li className="mx-12" role="listitem">
            <span>
              <u>Nodemailer</u> - pour la gestion des communications.
            </span>
          </li>
        </ul>
      </section>

      <section className="flex flex-col space-y-4">
        <h2>Localisation et hébergement des données:</h2>
        <p>Les données sont hébergées par :</p>
        <ul className="list-disc" role="list">
          <li className="mx-12" role="listitem">
            <span>
              <u>Vercel </u> - hébergeur du site web (Données mondialisées).
            </span>
          </li>
          <li className="mx-12" role="listitem">
            <span>
              <u>Google Analytics et Nodemailer</u> - pour les fonctionnalités
              spécifiques mentionnées.
            </span>
          </li>
        </ul>
      </section>

      <h2>Retrait du Consentement:</h2>
      <p>
        Vous pouvez retirer votre consentement à tout moment pour les données
        non essentielles à nos services, en nous contactant à{' '}
        <Link
          href="mailto:contact@dix31.com"
          className="underline hover:text-blue-700"
        >
          contact@dix31.com
        </Link>
      </p>
    </div>
  )
}
