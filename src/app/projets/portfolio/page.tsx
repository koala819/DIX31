"use client";
import { Chip, Button, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className='text-gray-600 dark:text-gray-300 md:flex items-center justify-center p-4 '>
        <div className='w-full md:w-1/2 p-4'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-200'>
            DIX31
          </h1>
          <p className='mb-8 leading-relaxed'>
            Une exposition complète et professionnelle de mes compétences et
            réalisations, reflétant l&apos;intégralité de mon parcours
            professionnel.
          </p>
          <div className='md:flex items-center space-x-4 mt-12 justify-center space-y-2 md:space-y-0'>
            <Chip
              color='primary'
              className='dark:bg-orange-500 dark:text-black'
            >
              Projet Solo
            </Chip>
            <Chip
              color='primary'
              className='dark:bg-orange-500 dark:text-black'
            >
              Site Vitrine
            </Chip>
            <Chip
              color='primary'
              className='dark:bg-orange-500 dark:text-black'
            >
              Software Craftsmanship
            </Chip>
          </div>
        </div>
        <div className='flex justify-center w-full md:w-1/2 p-6'>
          <Image
            alt='Screenshot DIX31 Portfolio'
            className='object-cover'
            height={400}
            src='/images/Portfolio.jpg'
            width={400}
          />
        </div>
      </section>
      <section className='w-full mx-auto grid md:grid-cols-4 gap-x-4 p-4 space-y-12 md:space-y-0'>
        <div className='text-center space-y-4 p-2 border-1 rounded-lg border-gray-300'>
          <p className='font-bold text-lg'>Secteur</p>
          <p>Tech</p>
        </div>
        <div className='text-center space-y-4 p-2 border-1 rounded-lg border-gray-300'>
          <p className='font-bold text-lg'>Type de projet</p>
          <p>Portfolio</p>
        </div>
        <div className='text-center space-y-4 p-2 border-1 rounded-lg border-gray-300'>
          <p className='font-bold text-lg'>Date de livraison</p>
          <p>2023</p>
        </div>
        <div className='text-center space-y-4 p-2 border-1 rounded-lg border-gray-300'>
          <p className='font-bold text-lg'>Consulter le projet</p>
          <div className='space-x-2'>
            <Link href='https://github.com/koala819/myWebSite' target='_blank'>
              <Button
                size='sm'
                color='primary'
                className='mt-2 md:mt-0 dark:bg-orange-500 dark:text-black hover:underline'
                variant='shadow'
              >
                Github
              </Button>
            </Link>

            <Tooltip content='Vous le visitez en ce moment ^^'>
              <Button
                size='sm'
                color='danger'
                className='mt-2 md:mt-0 cursor-not-allowed'
                variant='shadow'
              >
                Visiter
              </Button>
            </Tooltip>
          </div>
        </div>
      </section>
      <section className='w-full p-4 md:flex md:space-x-8 space-y-12 md:space-y-0'>
        <div className='md:w-1/2 space-y-8 text-justify'>
          <h1 className='text-3xl font-bold'>Challenge technique</h1>
          <p>
            Le défi technique résidait dans la création d&apos;un site web
            complet pour mon portfolio, en mettant en œuvre des compétences
            variées en conception web, développement front-end et intégration de
            contenu. La personnalisation, l&apos;optimisation des performances
            et l&apos;adaptabilité à divers dispositifs étaient également des
            défis clés à relever pour offrir une expérience utilisateur
            exceptionnelle.
          </p>
        </div>
        <div className='md:w-1/2 space-y-8 text-justify'>
          <h1 className='text-3xl font-bold'>Stratégie</h1>
          <p>
            La stratégie incluait l&apos;utilisation de Next.js pour la rapidité
            de développement, Vercel pour le déploiement continu, Tailwind CSS
            pour une conception efficace, et TypeScript pour la sécurité du
            code. Cette combinaison a permis de créer un site web robuste,
            performant et maintenable.
          </p>
        </div>
      </section>
      <section className='w-full p-4 flex flex-col space-y-8'>
        <h1 className='text-3xl font-bold'>Stacks utilisées</h1>
        <div className='flex items-center justify-center space-x-4'>
          <Chip color='primary' className='dark:bg-orange-500 dark:text-black'>
            Next.JS
          </Chip>
          <Chip color='primary' className='dark:bg-orange-500 dark:text-black'>
            TypeScript
          </Chip>
          <Chip color='primary' className='dark:bg-orange-500 dark:text-black'>
            Tailwind
          </Chip>
          <Chip color='primary' className='dark:bg-orange-500 dark:text-black'>
            Vercel
          </Chip>
        </div>
      </section>
      <Link href='/projets' className='w-full flex flex-col my-32 items-center'>
        <Button
          variant='shadow'
          color='primary'
          className='dark:bg-orange-500 dark:text-black hover:underline'
        >
          Retour
        </Button>
      </Link>
    </>
  );
}
