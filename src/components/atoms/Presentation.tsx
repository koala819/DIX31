import Image from "next/image";
import StarterPack_formulaire_contact from "../../../public/images/StarterPack_formulaire_contact.jpg";
import StarterPack_mode_sombre from "../../../public/images/StarterPack_mode_sombre.jpg";
import StarterPack_google_analytics from "../../../public/images/StarterPack_Google_Analytics.jpg";
import StartPack_gratuit_libre from "../../../public/images/StarterPack_gratuit_libre.jpg";
import Link from "next/link";

export default function Presentation() {
  return (
    <section className='mx-auto max-w-2xl px-4 py-16 sm:py-24 lg:max-w-7xl lg:px-8'>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
          Une solution web sur mesure pour les entrepreneurs et les associations
        </h2>
      </div>
      <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        <Link
          href='https://glittery-lebkuchen-a1a108.netlify.app/contact'
          target='_blank'
          className='group relative cursor-pointer'
        >
          <picture className='aspect-square w-full overflow-hidden rounded-md opacity-75 hover:opacity-100 lg:h-80'>
            <Image
              src={StarterPack_formulaire_contact}
              alt='Screenhot du Formulaire de contact'
              className='w-full h-full object-center object-cover lg:w-full lg:h-full'
              width={300}
              height={300}
            />
          </picture>
          <h3 className='mt-4 text-sm text-gray-700'>
            Formulaire de contact intégré et fonctionnel
          </h3>
        </Link>
        <Link
          href='https://glittery-lebkuchen-a1a108.netlify.app'
          target='_blank'
          className='group relative cursor-pointer'
        >
          <picture className='aspect-square w-full overflow-hidden rounded-md opacity-75 hover:opacity-100 lg:h-80'>
            <Image
              src={StarterPack_mode_sombre}
              alt='Product image'
              className='w-full h-full object-center object-cover lg:w-full lg:h-full'
              width={300}
              height={300}
            />
          </picture>
          <h3 className='mt-4 text-sm text-gray-700'>
            Basculer facilement entre les thèmes clair et sombre
          </h3>
        </Link>
        <Link
          href='https://github.com/koala819/starterPack/blob/master/site/src/components/util/GoogleAnalytics.tsx'
          target='_blank'
          className='group relative cursor-pointer'
        >
          <picture className='aspect-square w-full overflow-hidden rounded-md opacity-75 hover:opacity-100 lg:h-80'>
            <Image
              src={StarterPack_google_analytics}
              alt='Code Google Analytics intégré'
              className='w-full h-full object-center object-cover lg:w-full lg:h-full'
              width={300}
              height={300}
            />
          </picture>
          <h3 className='mt-4 text-sm text-gray-700'>
            Intégration de Google Analytics pour des insights précis
          </h3>
        </Link>
        <Link
          href='https://github.com/koala819/starterPackch'
          target='_blank'
          className='group relative cursor-pointer'
        >
          <picture className='aspect-square w-full overflow-hidden rounded-md opacity-75 hover:opacity-100 lg:h-80'>
            <Image
              src={StartPack_gratuit_libre}
              alt='Screenshot repo GitHub'
              className='w-full h-full object-center object-cover lg:w-full lg:h-full'
              width={300}
              height={300}
            />
          </picture>
          <h3 className='mt-4 text-sm text-gray-700'>
            Entièrement gratuit et open-source
          </h3>
        </Link>
      </div>
    </section>
  );
}
