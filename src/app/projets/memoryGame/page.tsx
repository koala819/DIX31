"use client";
import { Chip, Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className='text-gray-600 dark:text-gray-300 md:flex items-center justify-center p-4 '>
        <div className='w-full md:w-1/2 p-4'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-200'>
            Memory Game
          </h1>
          <p className='mb-8 leading-relaxed'>
            J&apos;ai créé ce jeu avec passion pour renforcer mes compétences en
            JavaScript tout en offrant à mon fils une expérience ludique pour
            maîtriser l&apos;utilisation de la souris.
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
              Jeux Educatif
            </Chip>
            <Chip
              color='primary'
              className='dark:bg-orange-500 dark:text-black'
            >
              Projet Perso
            </Chip>
          </div>
        </div>
        <div className='flex justify-center w-full md:w-1/2 p-6'>
          <Image
            alt='Memory Game project'
            className='object-cover'
            height={400}
            src='/images/gameMemory.jpg'
            width={400}
          />
        </div>
      </section>
      <section className='w-full mx-auto grid md:grid-cols-4 gap-x-4 p-4 space-y-12 md:space-y-0'>
        <div className='text-center space-y-4 p-2 border-1 rounded-lg border-gray-300'>
          <p className='font-bold text-lg'>Secteur</p>
          <p>Familiale</p>
        </div>
        <div className='text-center space-y-4 p-2 border-1 rounded-lg border-gray-300'>
          <p className='font-bold text-lg'>Type de projet</p>
          <p>JavaScript</p>
        </div>
        <div className='text-center space-y-4 p-2 border-1 rounded-lg border-gray-300'>
          <p className='font-bold text-lg'>Date de livraison</p>
          <p>2020</p>
        </div>
        <div className='text-center space-y-4 p-2 border-1 rounded-lg border-gray-300'>
          <p className='font-bold text-lg'>Consulter le projet</p>
          <div className='space-x-2'>
            <Link href='https://github.com/koala819/MemoryGame' target='_blank'>
              <Button
                size='sm'
                color='primary'
                className='mt-2 md:mt-0 dark:bg-orange-500 dark:text-black hover:underline'
                variant='shadow'
              >
                Github
              </Button>
            </Link>

            <Link href='https://memorygame819.netlify.app/' target='_blank'>
              <Button
                size='sm'
                color='primary'
                className='mt-2 md:mt-0 dark:bg-orange-500 dark:text-black hover:underline'
                variant='shadow'
              >
                Visiter
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className='w-full p-4 md:flex md:space-x-8 space-y-12 md:space-y-0'>
        <div className='md:w-1/2 space-y-8 text-justify'>
          <h1 className='text-3xl font-bold'>Challenge technique</h1>
          <p>
            Le défi de ce projet réside dans sa nature d&apos;être mon premier
            projet JavaScript. Il nécessitait la maîtrise des concepts
            fondamentaux de programmation, la gestion des événements souris, et
            la création d&apos;une expérience interactive convaincante pour
            aider mon fils à apprendre tout en consolidant mes compétences en
            développement web.
          </p>
        </div>
        <div className='md:w-1/2 space-y-8 text-justify'>
          <h1 className='text-3xl font-bold'>Stratégie</h1>
          <p>
            Mon approche pour ce projet en solitaire a débuté par une solide
            compréhension des bases de JavaScript. J&apos;ai ensuite exploré
            GitHub pour la gestion de versions et utilisé Netlify pour le
            déploiement. Ma stratégie consistait à suivre des tutoriels,
            résoudre des problèmes pratiques, et à m&apos;appuyer sur des
            ressources en ligne pour acquérir les compétences nécessaires à la
            réussite du projet.
          </p>
        </div>
      </section>
      <section className='w-full p-4 flex flex-col space-y-8'>
        <h1 className='text-3xl font-bold'>Stacks utilisées</h1>
        <div className='flex items-center justify-center space-x-4'>
          <Chip color='primary' className='dark:bg-orange-500 dark:text-black'>
            HTML
          </Chip>
          <Chip color='primary' className='dark:bg-orange-500 dark:text-black'>
            CSS
          </Chip>
          <Chip color='primary' className='dark:bg-orange-500 dark:text-black'>
            JavaScript
          </Chip>
          <Chip color='primary' className='dark:bg-orange-500 dark:text-black'>
            Netlify
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
