import Link from "next/link";

export default function Page() {
  return (
    <section className='text-gray-700 dark:text-white text-justify'>
      <div className='container px-4 mb-20 mt-20 mx-auto '>
        <h1 className='text-blue-500 dark:text-cyan-500 text-2xl text-center mb-12 uppercase font-bold'>
          Protection des données personnelles
        </h1>

        <div className='flex flex-col space-y-4'>
          <p>
            Dix31 est soucieux de la protection des données personnelles. Je
            m&apos;engage à assurer le meilleur niveau de protection à vos
            données personnelles en conformité avec la loi applicable et le{" "}
            <Link
              href='https://www.cnil.fr/fr/reglement-europeen-protection-donnees'
              target='_blank'
              className='underline hover:text-blue-700'
            >
              règlement général sur la protection des données personnelles
            </Link>
            .
          </p>
        </div>

        <h1 className='sm:text-3xl text-4xl font-medium title-font mb-4 text-gray-900 dark:text-slate-400 mt-8'>
          Responsable du traitement
        </h1>
        <div className='flex flex-col space-y-4'>
          <p>
            Les données personnelles collectées sur ce site internet sont
            enregistrées dans une base de données informatisée par le
            responsable du traitement :
          </p>
          <div className='flex flex-col space-y-4'>
            <p>DIX31</p>
            <p>31300 Toulouse FRANCE</p>
            <p>contact@dix31.com</p>
          </div>
        </div>

        <h1 className='sm:text-3xl text-4xl font-medium title-font mb-4 text-gray-900 dark:text-slate-400 mt-8'>
          Finalités du traitement
        </h1>
        <p className='text-justify mb-4'>
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

        <h1 className='sm:text-3xl text-4xl font-medium title-font mb-4 text-gray-900 dark:text-slate-400 mt-8'>
          Données collectées
        </h1>
        <p className='text-justify mb-4'>
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
        <h1 className='sm:text-3xl text-4xl font-medium title-font mb-4 text-gray-900 dark:text-slate-400 mt-8'>
          Durée de conservation
        </h1>
        <p className='text-justify mb-4'>
          Les données sont conservées pendant toute la durée d&apos;utilisation
          du service puis sont archivées pour une durée supplémentaire en lien
          avec les durées de prescription et de conservation légale pour des
          raisons strictement limitées et autorisées par la loi (paiement,
          garantie, litiges, etc.). Passé ce délai, elles sont supprimées.
        </p>
        <h1 className='sm:text-3xl text-4xl font-medium title-font mb-4 text-gray-900 dark:text-slate-400 mt-8'>
          Destinataires
        </h1>
        <p className='text-justify mb-4'>
          Les données collectées sont destinées dans un but commercial et
          technique.
        </p>
        <p> Elles sont également transmises aux tiers suivants : </p>
        <ul className='list-disc' role='list'>
          <li className='mx-12' role='listitem'>
            Google Analytics (analytics.google.com) en tant qu&apos;outil de
            suivi d&apos;audience,
          </li>
          <li className='mx-12' role='listitem'>
            SmtpJS (smtpjs.com) utilisé pour le formulaire de contact.
          </li>
        </ul>
        <h1 className='sm:text-3xl text-4xl font-medium title-font mb-4 text-gray-900 dark:text-slate-400 mt-8 text-left'>
          Localisation & hébergement des données collectées
        </h1>
        <p className='text-justify mb-4'>
          Les données collectées sont hébergées par les prestataires suivants :
        </p>
        <ul className='list-disc' role='list'>
          <li className='mx-12' role='listitem'>
            Vercel en qualité d&apos;hébergeur du site web (localisation des
            données : monde),
          </li>
          <li className='mx-12' role='listitem'>
            Google Analytics (analytics.google.com) en tant qu&apos;outil de
            suivi d&apos;audience (localisation des données : Monde),
          </li>
          <li className='mx-12' role='listitem'>
            nodemailer (nodemailer.com) utilisé pour l&apos;envoi du formulaire
            de contact.
          </li>
        </ul>
        <h1 className='sm:text-3xl text-4xl font-medium title-font mb-4 text-gray-900 dark:text-slate-400 mt-8'>
          Retrait du consentement
        </h1>
        <p className='text-justify mb-4'>
          Vous pouvez retirer à tout moment votre consentement sur
          l&apos;utilisation de vos données personnelles non-indispensables à la
          bonne utilisation du service fourni par ce site internet :{" "}
        </p>
        <ul className='list-disc' role='list'>
          <li className='mx-12' role='listitem'>
            en écrivant à contact@dix31.com pour le retrait de données que vous
            m&apos;auriez communiqué par{" "}
            <Link href='/contact' className='underline hover:text-blue-700'>
              le biais du formulaire
            </Link>{" "}
            présent sur le site.
          </li>
        </ul>
      </div>
    </section>
  );
}
