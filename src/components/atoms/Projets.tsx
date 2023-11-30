"use client";
import { Image } from "@nextui-org/react";
import Link from "next/link";

export default function Projets() {
  return (
    <section className='mx-auto max-w-2xl px-4 py-16 sm:py-24 lg:max-w-7xl lg:px-8 space-y-6'>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
          Réalisations avec le StarterPack
        </h2>
      </div>
      <p className='text-md text-gray-700 mx-auto mb-6'>
        Chaque site web que je crée est un récit de passion et
        d&apos;innovation. Explorez ici une sélection de mes sites les plus
        emblématiques, chacun reflétant une approche personnalisée et une
        réponse créative aux besoins uniques de mes partenaires.
      </p>
      <section className='flex justify-center w-full p-6'>
        <picture className='w-1/3'>
          <Image
            alt='Screenshot DIX31 Portfolio'
            className='object-cover'
            height={400}
            src='/images/Portfolio.jpg'
            width={400}
          />
        </picture>
        <div className='w-2/3 p-4 space-y-8'>
          <h3 className='text-xl font-semibold text-gray-800'>DIX31</h3>
          <p className='text-md text-gray-700'>
            Ce propre site illustre l&apos;efficacité et la flexibilité du
            Starter Pack. Il intègre des fonctionnalités avancées et une
            conception responsive, offrant une expérience utilisateur optimale
            et une démonstration concrète de mo savoir-faire en matière de
            développement web.
          </p>
        </div>
      </section>
      <section className='flex justify-center w-full p-6'>
        <picture className='w-1/3'>
          <Image
            alt='Screenshot Activ Savoirs'
            className='object-cover'
            height={400}
            src='/images/ActivSavoirs.jpg'
            width={400}
          />
        </picture>
        <div className='w-2/3 p-4 space-y-8'>
          <h3 className='text-xl font-semibold text-gray-800'>
            Activ&apos;Savoirs
          </h3>
          <p className='text-md text-gray-700'>
            Le site d&apos;Activ&apos;Savoirs, développé pour un centre de
            formation professionnelle continue, est un témoignage de ma capacité
            à créer des solutions sur mesure adaptées aux besoins spécifiques du
            secteur de la formation. Ce projet met en avant une interface
            intuitive et une expérience utilisateur enrichie.
          </p>
        </div>
      </section>

      <div className='text-center'>
        <Link
          href='/projets'
          className='inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300'
        >
          Découvrez mes autres réalisations
        </Link>
      </div>
    </section>
  );
}
