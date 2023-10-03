"use client";
import { Chip, Button, Tooltip } from "@nextui-org/react";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <section className='text-gray-600 dark:text-gray-300 md:flex items-center justify-center p-4 '>
        <div className='w-full md:w-1/2 p-4'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-200'>
            Cumuler les aides
          </h1>
          <p className='mb-8 leading-relaxed'>
            Création d&apos;un site informatif pour guider les propriétaires
            dans la rénovation de leurs habitations en présentant les aides
            disponibles.
          </p>
          <div className='md:flex items-center space-x-4 mt-12 justify-center space-y-2 md:space-y-0'>
            <Chip color='primary'>Projet d&apos;équipe</Chip>
            <Chip color='primary'>Web App</Chip>
            <Chip color='primary'>Site de Leads</Chip>
          </div>
        </div>
        <div className='flex justify-center w-full md:w-1/2 p-6'>
          <Image
            alt='Cumuler les aides website'
            className='object-cover'
            height={400}
            src='/images/CumulerAides.jpg'
            width={400}
          />
        </div>
      </section>
      <section className='w-full mx-auto grid md:grid-cols-4 gap-x-4 p-4 space-y-12 md:space-y-0'>
        <div className='text-center space-y-4 p-2 border-1 rounded-lg border-gray-300'>
          <p className='font-bold text-lg'>Secteur</p>
          <p>Rénovation Immobilière</p>
        </div>
        <div className='text-center space-y-4 p-2 border-1 rounded-lg border-gray-300'>
          <p className='font-bold text-lg'>Type de projet</p>
          <p>Application Web</p>
        </div>
        <div className='text-center space-y-4 p-2 border-1 rounded-lg border-gray-300'>
          <p className='font-bold text-lg'>Date de livraison</p>
          <p>2021</p>
        </div>
        <div className='text-center space-y-4 p-2 border-1 rounded-lg border-gray-300'>
          <p className='font-bold text-lg'>Consulter le projet</p>
          <div className='space-x-2'>
            <Tooltip
              content='Code non disponible'
              className='cursor-not-allowed'
            >
              <Button className='cursor-not-allowed' size='sm'>
                Github
              </Button>
            </Tooltip>

            <Tooltip content="Le projet n'est plus en ligne">
              <Button
                size='sm'
                color='danger'
                className='mt-2 md:mt-0 cursor-not-allowed'
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
            Le défi consistait à développer une application web robuste et
            évolutive pour accompagner les locataires ou les propriétaires dans
            la rénovation de leurs habitations. La collecte, le traitement et la
            présentation d&apos;informations actualisées sur les aides
            financières nécessitaient une architecture de base de données
            complexe et une interface utilisateur conviviale.
          </p>
        </div>
        <div className='md:w-1/2 space-y-8 text-justify'>
          <h1 className='text-3xl font-bold'>Stratégie</h1>
          <p>
            Approche de développement agile, avec une étroite collaboration
            entre l&apos;équipe de développement et les experts en rénovation.
            Nous avons mis en place une base de données dynamique pour gérer les
            informations et axé notre communication sur les médias sociaux pour
            attirer les utilisateurs en quête d&apos;informations sur les aides
            à la rénovation.
          </p>
        </div>
      </section>
      <section className='w-full p-4 flex flex-col space-y-8'>
        <h1 className='text-3xl font-bold'>Stacks utilisées</h1>
        <div className='flex items-center justify-center space-x-4'>
          <Chip color='primary'>HTML</Chip>
          <Chip color='primary'>CSS</Chip>
          <Chip color='primary'>JavaScript</Chip>
          <Chip color='primary'>Google Cloud Platform</Chip>
        </div>
      </section>
    </>
  );
}
