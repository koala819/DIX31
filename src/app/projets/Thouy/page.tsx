"use client";
import { Chip, Button, Tooltip } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <section className='text-gray-600 dark:text-gray-300 md:flex items-center justify-center p-4 '>
        <div className='w-full md:w-1/2 p-4'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-200'>
            Gîtes de Thouy
          </h1>
          <p className='mb-8 leading-relaxed'>
            Explorez le Tarn avec style grâce à notre site de location de gîtes
            personnalisé. Des escapades uniques vous attendent dans cette région
            pittoresque.
          </p>
          <div className='md:flex items-center space-x-4 mt-12 justify-center space-y-2 md:space-y-0'>
            <Chip color='primary'>Projet Solo</Chip>
            <Chip color='primary'>Frontend</Chip>
            <Chip color='primary'>Site Vitrine</Chip>
          </div>
        </div>
        <div className='flex justify-center w-full md:w-1/2 p-6'>
          <Image
            alt='Gîtes de Thouy website'
            className='object-cover'
            height={400}
            src='/images/Thouy.jpg'
            width={400}
          />
        </div>
      </section>
      <section className='w-full mx-auto grid md:grid-cols-4 gap-x-4 p-4 space-y-12 md:space-y-0'>
        <div className='text-center space-y-4 p-2 border-1 rounded-lg border-gray-300'>
          <p className='font-bold text-lg'>Secteur</p>
          <p>Tourisme</p>
        </div>
        <div className='text-center space-y-4 p-2 border-1 rounded-lg border-gray-300'>
          <p className='font-bold text-lg'>Type de projet</p>
          <p>Site Vitrine</p>
        </div>
        <div className='text-center space-y-4 p-2 border-1 rounded-lg border-gray-300'>
          <p className='font-bold text-lg'>Date de livraison</p>
          <p>2005</p>
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
            <Link
              href='https://web.archive.org/web/20150221195549/http:/www.gites-tarn-thouy.com/index.php'
              target='_blank'
            >
              <Tooltip content='Archive du site de 2011'>
                <Button size='sm' color='primary' className='mt-2 md:mt-0'>
                  Visiter
                </Button>
              </Tooltip>
            </Link>
          </div>
        </div>
      </section>
      <section className='w-full p-4 md:flex md:space-x-8 space-y-12 md:space-y-0'>
        <div className='md:w-1/2 space-y-8 text-justify'>
          <h1 className='text-3xl font-bold'>Challenge technique</h1>
          <p>
            Monsieur Dominique Thouy, propriétaire du Hameau de Thouy, a exprimé
            le besoin d&apos;accroître la visibilité en ligne de ses cinq gîtes.
            Son objectif est d&apos;établir une présence professionnelle sur
            Internet afin de promouvoir efficacement la location de ses
            hébergements et d&apos; &apos;atteindre un public plus large.
          </p>
        </div>
        <div className='md:w-1/2 space-y-8 text-justify'>
          <h1 className='text-3xl font-bold'>Stratégie</h1>
          <p>
            La création du site internet pour le Hameau de Thouy, composé de 5
            gîtes, a présenté un défi technique stimulant. Le principal enjeu
            résidait dans la mise en place d&apos;une plateforme robuste et
            conviviale pour promouvoir et faciliter la location des gîtes.
            L&apos;objectif était de garantir une expérience utilisateur
            optimale tout en intégrant des fonctionnalités de réservation
            efficaces.
          </p>
        </div>
      </section>
      <section className='w-full p-4 flex flex-col space-y-8'>
        <h1 className='text-3xl font-bold'>Stacks utilisées</h1>
        <div className='flex items-center justify-center space-x-4'>
          <Chip color='primary'>HTML</Chip>
          <Chip color='primary'>CSS</Chip>
          <Chip color='primary'>PHP</Chip>
        </div>
      </section>
    </>
  );
}
