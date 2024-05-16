import Link from 'next/link'

export default function Page() {
  return (
    <div className="container space-y-8">
      <h1 className="text-blue-500 dark:text-cyan-500 uppercase">
        Protection des données personnelles
      </h1>

      <span>
        DIX31.com est soucieux de la protection des données personnelles. Nous
        nous m&apos;engageons à assurer le meilleur niveau de protection à vos
        données personnelles en conformité avec la loi applicable et le{' '}
        <Link
          href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees"
          target="_blank"
          className="underline hover:text-blue-700"
        >
          règlement général sur la protection des données personnelles
        </Link>
        .
      </span>

      <section className="flex flex-col space-y-4">
        <h2>Responsable du traitement</h2>
        <p>
          Les données personnelles collectées sur ce site internet sont
          enregistrées dans une base de données informatisée par le responsable
          du traitement :
        </p>
        <ul>
          <li>DIX31.com</li>
          <li>31300 Toulouse FRANCE</li>
          <li>
            <Link
              href="mailto:contact@dix31.com"
              className="underline hover:text-blue-700"
            >
              contact@dix31.com
            </Link>
          </li>
        </ul>
      </section>

      <section className="flex flex-col space-y-4">
        <h2>Finalités du traitement</h2>
        <p>
          Les données personnelles collectées sont utilisées pour la gestion de
          la clientèle et du support client, l&apos;envoi d&apos;emails de
          réponses aux formulaires de contact.
        </p>
        <p>
          Certaines données sont collectées automatiquement du fait de vos
          actions sur le site afin d&apos;effectuer des mesures d&apos;audience
          (le nombre de pages vues, le nombre de visites du site, les produits
          consultés, etc.) ou sont nécessaires à la prévention et la résolution
          d’incidents techniques.
        </p>
      </section>

      <section className="flex flex-col space-y-4">
        <h2>Données collectées</h2>
        <p>
          Les données personnelles collectées et traitées sont notamment vos
          email et adresse IP.
        </p>
        <p>
          Je m&apos;engages à ne collecter que le minimum de données nécessaires
          au bon fonctionnement du service fourni par ce site internet. Le
          caractère obligatoire ou facultatif des données collectées vous est
          signalé au moment de leur saisie par une mention
          &quot;Obligatoire&quot; (ou tout autre indicateur visuel approrié
          comme un astérisque ou un élément en gras) ou &quot;Facultatif&quot;.
        </p>
      </section>

      <h2>Durée de conservation</h2>
      <p>
        Les données sont conservées pendant toute la durée d&apos;utilisation du
        service puis sont archivées pour une durée supplémentaire en lien avec
        les durées de prescription et de conservation légale pour des raisons
        strictement limitées et autorisées par la loi (paiement, garantie,
        litiges, etc.). Passé ce délai, elles sont supprimées.
      </p>

      <section className="flex flex-col space-y-4">
        <h2>Destinataires</h2>
        <p>
          Les données collectées sont destinées dans un but commercial et
          technique.
        </p>
        <p> Elles sont également transmises aux tiers suivants : </p>
        <ul className="list-disc" role="list">
          <li className="mx-12" role="listitem">
            Google Analytics (analytics.google.com) en tant qu&apos;outil de
            suivi d&apos;audience,
          </li>
          <li className="mx-12" role="listitem">
            Nodemailer (
            <Link
              href="https://www.nodemailer.com/"
              className="underline hover:text-blue-700"
              target="_blank"
            >
              nodemailer.com
            </Link>
            ) utilisé pour le formulaire de contact.
          </li>
        </ul>
      </section>

      <section className="flex flex-col space-y-4">
        <h2>Localisation & hébergement des données collectées</h2>
        <p>
          Les données collectées sont hébergées par les prestataires suivants :
        </p>
        <ul className="list-disc" role="list">
          <li className="mx-12" role="listitem">
            Vercel en qualité d&apos;hébergeur du site web (localisation des
            données : monde),
          </li>
          <li className="mx-12" role="listitem">
            Google Analytics (analytics.google.com) en tant qu&apos;outil de
            suivi d&apos;audience (localisation des données : Monde),
          </li>
          <li className="mx-12" role="listitem">
            nodemailer (nodemailer.com) utilisé pour l&apos;envoi du formulaire
            de contact.
          </li>
        </ul>
      </section>

      <h2>Retrait du consentement</h2>
      <p>
        Vous pouvez retirer à tout moment votre consentement sur
        l&apos;utilisation de vos données personnelles non-indispensables à la
        bonne utilisation du service fourni par ce site internet, en écrivant à{' '}
        <Link
          href="mailto:contact@dix31.com"
          className="underline hover:text-blue-700"
        >
          contact@dix31.com
        </Link>{' '}
        pour le retrait de données que vous nous auriez communiqué.
      </p>
    </div>
  )
}
