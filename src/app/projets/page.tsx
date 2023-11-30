"use client";
import { Card, CardFooter, Button } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <section className='text-gray-600 dark:text-gray-300 flex items-center justify-center p-4 '>
        <div className='w-3/4 p-4'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-200'>
            Explorer mes projets
          </h1>
          <p className='mb-8 leading-relaxed'>
            Voici une liste de projets auxquels j&apos;ai contribué en tant que
            développeur ou membre de l&apos;équipe de développement...
          </p>
        </div>

        <Link href='/contact'>
          <Button
            variant='shadow'
            color='primary'
            className='dark:bg-orange-600 dark:text-black dark:font-extrabold hover:underline'
          >
            Me Contacter
          </Button>
        </Link>
      </section>
      <section className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-32 mb-8 p-8 '>
        <Card isFooterBlurred radius='lg' className='border-none'>
          <Image
            alt="Activ'Savoirs website"
            className='object-cover w-full h-full'
            height={400}
            src='/images/ActivSavoirs.jpg'
            width={400}
          />
          <CardFooter className='justify-between before:bg-white dark:bg-gray-800 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
            <p className='text-tiny text-gray-800 dark:text-white'>
              Activ&apos;Savoirs
            </p>
            <Link href='/projets/ActivSavoirs'>
              <Button
                className='text-tiny text-gray-200 bg-black/60 dark:bg-orange-600 dark:text-black hover:underline'
                variant='flat'
                color='default'
                radius='lg'
                size='sm'
              >
                Découvrir
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card isFooterBlurred radius='lg' className='border-none'>
          <Image
            alt='Club306 website'
            className='object-cover w-full h-full'
            height={400}
            src='/images/Club306.jpg'
            width={400}
          />
          <CardFooter className='justify-between before:bg-white dark:bg-gray-800 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
            <p className='text-tiny text-gray-200'>Club 306</p>
            <Link href='/projets/Club306'>
              <Button
                className='text-tiny text-gray-200 bg-black/60 dark:bg-orange-600 dark:text-black hover:underline'
                variant='flat'
                color='default'
                radius='lg'
                size='sm'
              >
                Découvrir
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card isFooterBlurred radius='lg' className='border-none'>
          <Image
            alt='My portfolio website'
            className='object-cover w-full h-full'
            height={1000}
            src='/images/Portfolio.jpg'
            width={1000}
          />
          <CardFooter className='justify-between before:bg-white/10 dark:bg-gray-800 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
            <p className='text-tiny text-gray-600 dark:text-gray-200'>
              DIX31 Portfolio
            </p>
            <Link href='/projets/portfolio'>
              <Button
                className='text-tiny text-gray-600 bg-black/20 dark:bg-orange-600 dark:text-black hover:underline'
                variant='flat'
                color='default'
                radius='lg'
                size='sm'
              >
                Découvrir
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card isFooterBlurred radius='lg' className='border-none'>
          <Image
            alt='Gîtes de Thouy website'
            className='object-cover w-full h-full'
            height={1000}
            src='/images/Thouy.jpg'
            width={1000}
          />
          <CardFooter className='justify-between before:bg-white/10 dark:bg-gray-800 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
            <p className='text-tiny text-gray-600 dark:text-gray-200'>
              Gîtes de Thouy
            </p>
            <Link href='/projets/Thouy'>
              <Button
                className='text-tiny text-gray-600 bg-black/20 dark:bg-orange-600 dark:text-black hover:underline'
                variant='flat'
                color='default'
                radius='lg'
                size='sm'
              >
                Découvrir
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card isFooterBlurred radius='lg' className='border-none'>
          <Image
            alt='First memory game'
            priority
            className='object-cover w-full h-full'
            height={400}
            src='/images/gameMemory.jpg'
            width={400}
          />
          <CardFooter className='justify-between before:bg-gray-800 dark:bg-gray-800 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
            <p className='text-tiny text-gray-800'>Memory Game</p>
            <Link href='/projets/memoryGame'>
              <Button
                className='text-tiny text-gray-200 bg-black/60 dark:bg-orange-600 dark:text-black hover:underline'
                variant='flat'
                color='default'
                radius='lg'
                size='sm'
              >
                Découvrir
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card isFooterBlurred radius='lg' className='border-none'>
          <Image
            alt='Cumuler les aides website'
            className='object-cover w-full h-full'
            height={400}
            src='/images/CumulerAides.jpg'
            width={400}
          />
          <CardFooter className='justify-between before:bg-white dark:bg-gray-800 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
            <p className='text-tiny text-gray-200'>Cumuler les aides</p>
            <Link href='/projets/CumulerAides'>
              <Button
                className='text-tiny text-gray-200 bg-black/60 dark:bg-orange-600 dark:text-black hover:underline'
                variant='flat'
                color='default'
                radius='lg'
                size='sm'
              >
                Découvrir
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </section>
    </>
  );
}
