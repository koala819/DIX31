import Link from "next/link";

export default function Description() {
  return (
    <div className='mx-auto max-w-2xl px-4 py-16 sm:py-24 lg:max-w-7xl lg:px-8'>
      <div className='space-y-4'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
          Découvrez mon Starter Pack Gratuit
        </h2>
        <p className='text-lg text-gray-600'>
          Starter Pack inclut tout ce dont vous avez besoin pour lancer votre
          site web : une interface utilisateur riche avec{" "}
          <Link
            href='https://nextui.org/'
            className='text-blue-600 hover:text-blue-800 font-semibold'
            target='_blank'
          >
            NextUI
          </Link>
          , l&apos;intégration de{" "}
          <span className='font-semibold'>Google Analytics</span>, un script
          pour le formulaire de contact, un sélecteur de thème pour basculer
          entre les modes clair et sombre, et des{" "}
          <Link
            href='https://react-hot-toast.com/'
            className='text-blue-600 hover:text-blue-800 font-semibold'
            target='_blank'
          >
            notifications toast
          </Link>{" "}
          pour une meilleure interaction utilisateur.
        </p>
        <p className='text-lg text-gray-600'>
          Avec des instructions simples, vous pouvez cloner mon repo GitHub et
          lancer votre site en quelques étapes.
        </p>
        <p className='text-lg text-gray-600'>
          Suivez les instructions dans mon{" "}
          <Link
            href='https://www.dix31.com/blog/231116-StarterPack-with-Github'
            className='text-blue-600 hover:text-blue-800 font-semibold'
            target='_blank'
          >
            blog
          </Link>{" "}
          et ma{" "}
          <Link
            href='https://www.youtube.com/channel/UCcQkYLTdSUjYHsof8fUwrng'
            className='text-blue-600 hover:text-blue-800 font-semibold'
            target='_blank'
          >
            chaîne YouTube
          </Link>{" "}
          pour des tutoriels détaillés.
        </p>
      </div>
      <div className='mt-6 text-center'>
        <a
          href='https://github.com/koala819/starterPack'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700'
        >
          Clonez le Starter Pack Maintenant
        </a>
      </div>
    </div>
  );
}
