"use client";
import { Button, Chip } from "@nextui-org/react";
import Link from "next/link";
import { AiFillCheckCircle } from "react-icons/ai";
import Hero from "@/components/atoms/Hero";
import Presentation from "@/components/atoms/Presentation";
import Description from "@/components/atoms/Description";

export default function Page() {
  return (
    <section className='my-16'>
      <Hero />
      <Presentation />
      <Description />
      <div className=''>
        <div className='sm:flex sm:items-center sm:justify-between p-8'>
          <div>
            <h2 className='text-3xl font-bold text-gray-800 dark:text-gray-100'>
              Tarification simple et transparente
            </h2>
            <p className='mt-4 text-gray-500 dark:text-gray-400'>
              Pas de frais surprises.
            </p>
          </div>
        </div>
        <div className='flex items-center  justify-center px-2 space-x-8 my-16'>
          <div className='grid gap-6 mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 '>
            <section className='px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gray-300 dark:hover:bg-gray-900 bg-gray-200 dark:bg-gray-700'>
              <p className='text-lg font-medium text-gray-800 dark:text-gray-100'>
                Une page Web unique
              </p>
              <h4 className='mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100'>
                <span className='text-base font-normal text-gray-600 dark:text-gray-400'>
                  A partir de{" "}
                </span>
                <span className='whitespace-nowrap'>500 €</span>
              </h4>
              <p className='mt-4 text-gray-500 dark:text-gray-300'>
                Simple et attrayante elle présente les informations essentielles
                sur un sujet, un produit ou un service.
              </p>

              <div className='mt-8 space-y-8'>
                <div className='flex items-center'>
                  <AiFillCheckCircle className='w-5 h-5 text-blue-500' />
                  <span className='mx-4 text-gray-700 dark:text-gray-300'>
                    Responsive
                  </span>
                </div>

                <div className='flex items-center'>
                  <AiFillCheckCircle className='w-5 h-5 text-blue-500' />
                  <span className='mx-4 text-gray-700 dark:text-gray-300'>
                    Rapidité
                  </span>
                </div>

                <div className='flex items-center'>
                  <AiFillCheckCircle className='w-5 h-5 text-blue-500' />
                  <span className='mx-4 text-gray-700 dark:text-gray-300'>
                    Personnalisée
                  </span>
                </div>

                <div className='flex items-center'>
                  <AiFillCheckCircle className='w-5 h-5 text-blue-500' />
                  <span className='mx-4 text-gray-700 dark:text-gray-300'>
                    Incitatif
                  </span>
                </div>

                <div className='flex items-center'>
                  <AiFillCheckCircle className='w-5 h-5 text-blue-500' />
                  <span className='mx-4 text-gray-700 dark:text-gray-300'>
                    Stack JS
                  </span>
                </div>
              </div>

              <Link
                href='/contact'
                className='flex items-center justify-center p-8 lg:p-2 mt-8'
              >
                <Button color='primary' variant='shadow'>
                  <span className='text-xs'>Demander un devis</span>
                </Button>
              </Link>
            </section>
            <section className='px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gray-300 dark:hover:bg-gray-900 bg-gray-200 dark:bg-gray-700'>
              <p className='text-lg font-medium text-gray-800 dark:text-gray-100'>
                Site Vitrine
              </p>
              <h4 className='mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100'>
                <span className='text-base font-normal text-gray-600 dark:text-gray-400'>
                  A partir de{" "}
                </span>
                <span className='whitespace-nowrap'>1 000 €</span>
              </h4>
              <p className='mt-4 text-gray-500 dark:text-gray-300'>
                Exposez votre entreprise avec élégance grâce à notre expertise.
              </p>

              <div className='mt-8 space-y-8'>
                <div className='flex items-center'>
                  <AiFillCheckCircle className='w-5 h-5 text-blue-500' />
                  <span className='mx-4 text-gray-700 dark:text-gray-300'>
                    Professionnalisme
                  </span>
                </div>

                <div className='flex items-center'>
                  <AiFillCheckCircle className='w-5 h-5 text-blue-500' />
                  <span className='mx-4 text-gray-700 dark:text-gray-300'>
                    Visibilité en ligne
                  </span>
                </div>

                <div className='flex items-center'>
                  <AiFillCheckCircle className='w-5 h-5 text-blue-500' />
                  <span className='mx-4 text-gray-700 dark:text-gray-300'>
                    Accessibilité
                  </span>
                </div>

                <div className='flex items-center'>
                  <AiFillCheckCircle className='w-5 h-5 text-blue-500' />
                  <span className='mx-4 text-gray-700 dark:text-gray-300'>
                    Conception attrayante
                  </span>
                </div>

                <div className='flex items-center'>
                  <AiFillCheckCircle className='w-5 h-5 text-blue-500' />
                  <span className='mx-4 text-gray-700 dark:text-gray-300'>
                    Processus itératifs
                  </span>
                </div>
              </div>
              <Link
                href='/contact'
                className='flex items-center justify-center p-8 lg:p-2 mt-8'
              >
                <Button color='primary' variant='shadow'>
                  <span className='text-xs'>Demander un devis</span>
                </Button>
              </Link>
            </section>
            <section className='relative'>
              <div className='absolute -top-5 right-2 z-10'>
                <Chip color='primary'>Populaire</Chip>
              </div>
              <div className='px-6 py-4 transition-colors duration-200 transform bg-gray-700 rounded-lg dark:bg-blue-800 dark:hover:bg-blue-900'>
                <p className='text-lg font-medium text-gray-100'>
                  Site Dynamique
                </p>

                <h4 className='mt-2 text-4xl font-semibold text-gray-200 dark:text-gray-100'>
                  <span className='text-base font-normal'>A partir de </span>
                  <span className='whitespace-nowrap'>2 500 €</span>
                </h4>
                <p className='mt-4 text-gray-300'>
                  Un site interactif, mariez design et fonctionnalités de
                  manière harmonieuse.
                </p>

                <div className='mt-8 space-y-8'>
                  <div className='flex items-center'>
                    <AiFillCheckCircle className='w-5 h-5 text-blue-500' />
                    <span className='mx-4 text-gray-300'>Intéractif</span>
                  </div>

                  <div className='flex items-center'>
                    <AiFillCheckCircle className='w-5 h-5 text-blue-500' />
                    <span className='mx-4 text-gray-300'>Performant</span>
                  </div>

                  <div className='flex items-center'>
                    <AiFillCheckCircle className='w-5 h-5 text-blue-500' />
                    <span className='mx-4 text-gray-300'>Database</span>
                  </div>

                  <div className='flex items-center'>
                    <AiFillCheckCircle className='w-5 h-5 text-blue-500' />
                    <span className='mx-4 text-gray-300'>
                      Qualité exceptionnelle
                    </span>
                  </div>

                  <div className='flex items-center'>
                    <AiFillCheckCircle className='w-5 h-5 text-blue-500' />
                    <span className='mx-4 text-gray-300'>
                      Partenariat Actif
                    </span>
                  </div>
                </div>
                <Link
                  href='/contact'
                  className='flex items-center justify-center p-8 lg:p-2 mt-8'
                >
                  <Button color='primary' variant='shadow'>
                    <span className='text-xs'>Demander un devis</span>
                  </Button>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
