"use client";
import {
  Chip,
  Button,
  Modal,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [imageSrc, setImageSrc] = useState<string>("");
  const router = useRouter();

  function displayBigPicture(picture: string) {
    onOpen();
    setImageSrc(`/images/FS${picture}.jpg`);
  }

  return (
    <>
      <section className='text-gray-600 dark:text-gray-300 md:flex items-center justify-center p-4 '>
        <div className='w-full md:w-1/2 p-4'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-200'>
            Club 306
          </h1>
          <p className='mb-8 leading-relaxed'>
            Le Club 306 réunit les passionnés de la Peugeot 306, partageant leur
            amour pour ce modèle emblématique de voiture.
          </p>
          <div className='md:flex items-center space-x-4 mt-12 justify-center space-y-2 md:space-y-0'>
            <Chip color='primary'>Projet Solo</Chip>
            <Chip color='primary'>Web App</Chip>
            <Chip color='primary'>Site Communautaire</Chip>
          </div>
        </div>
        <div className='flex justify-center w-full md:w-1/2 p-6'>
          <Image
            alt='Club306 website'
            className='object-cover'
            height={400}
            src='/images/Club306.jpg'
            width={400}
          />
        </div>
      </section>
      <section className='w-full mx-auto grid md:grid-cols-4 gap-x-4 p-4 space-y-12 md:space-y-0'>
        <div className='text-center space-y-4 p-2 border-1 rounded-lg border-gray-300'>
          <p className='font-bold text-lg'>Secteur</p>
          <p>Association</p>
        </div>
        <div className='text-center space-y-4 p-2 border-1 rounded-lg border-gray-300'>
          <p className='font-bold text-lg'>Type de projet</p>
          <p>Application Web</p>
        </div>
        <div className='text-center space-y-4 p-2 border-1 rounded-lg border-gray-300'>
          <p className='font-bold text-lg'>Date de livraison</p>
          <p>2023</p>
        </div>
        <div className='text-center space-y-4 p-2 border-1 rounded-lg border-gray-300'>
          <p className='font-bold text-lg'>Consulter le projet</p>
          <div className='space-x-2'>
            <Link href='https://github.com/koala819/club306' target='_blank'>
              <Button size='sm' variant='shadow' color='primary'>
                Github
              </Button>
            </Link>

            <Link href='https://www.club306.fr/' target='_blank'>
              <Button
                size='sm'
                color='primary'
                className='mt-2 md:mt-0'
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
            Le défi technique consistait à développer un site web communautaire
            moderne pour le Club 306, répondant aux besoins du président Pascal
            Besnard. L&apos;objectif ambitieux était de rassembler 100
            passionnés de la Peugeot 306 en trois ans, nécessitant une
            conception conviviale, des fonctionnalités interactives, une gestion
            efficace des membres et une stratégie de croissance solide.
          </p>
        </div>
        <div className='md:w-1/2 space-y-8 text-justify'>
          <h1 className='text-3xl font-bold'>Stratégie</h1>
          <p>
            La stratégie consistait à choisir le framework Next.js pour
            concevoir l&apos;outil nécessaire à Pascal. L&apos;intégration de
            PayPal a facilité l&apos;adhésion des membres. En quelques mois, la
            communauté a dépassé les 100 membres, démontrant le succès de la
            stratégie.
          </p>
        </div>
      </section>
      <section className='w-full p-4 flex flex-col space-y-8'>
        <h1 className='text-3xl font-bold'>Stacks utilisées</h1>
        <div className='flex items-center justify-center space-x-4'>
          <Chip color='primary'>Next.JS</Chip>
          <Chip color='primary'>Tailwind</Chip>
          <Chip color='primary'>TypeScript</Chip>
          <Chip color='primary'>Supabase</Chip>
        </div>
      </section>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size='5xl'
        hideCloseButton
      >
        <ModalContent>
          {() => (
            <Image
              className='object-cover object-center w-full h-full'
              alt='Panel member club 306'
              height={1000}
              src={imageSrc}
              width={1000}
            />
          )}
        </ModalContent>
      </Modal>
      <section className='w-full p-4'>
        <>
          <h1 className='text-3xl font-bold'>Preview</h1>
          <p>
            Les adhérents disposent d&apos;un espace exclusif, voici un aperçu
            de cette section réservée aux membres.
          </p>
          <div className='w-full mx-auto grid md:grid-cols-4 gap-x-4 p-4 space-y-12 md:space-y-0'>
            <div className='text-center space-y-4 p-2 border-1 rounded-lg border-gray-300'>
              <Image
                onClick={() => displayBigPicture("cpanel01")}
                alt='Panel member club 306'
                className='object-cover'
                height={400}
                src='/images/cpanel01.jpg'
                width={400}
              />
            </div>
            <div className='text-center space-y-4 p-2 border-1 rounded-lg border-gray-300'>
              <Image
                onClick={() => displayBigPicture("cpanel02")}
                alt='Panel member club 306'
                className='object-cover'
                height={400}
                src='/images/cpanel02.jpg'
                width={400}
              />
            </div>
            <div className='text-center space-y-4 p-2 border-1 rounded-lg border-gray-300'>
              <Image
                onClick={() => displayBigPicture("cpanel03")}
                alt='Panel member club 306'
                className='object-cover'
                height={400}
                src='/images/cpanel03.jpg'
                width={400}
              />
            </div>
            <div className='text-center space-y-4 p-2 border-1 rounded-lg border-gray-300'>
              <Image
                onClick={() => displayBigPicture("cpanel04")}
                alt='Panel member club 306'
                className='object-cover'
                height={400}
                src='/images/cpanel04.jpg'
                width={400}
              />
            </div>
          </div>
        </>
      </section>
      <section className='w-full p-4 mb-12'>
        <>
          <p>
            En plus, il existe un espace dédié aux membres du staff pour
            administrer efficacement le site web. Voici un aperçu de cette
            section réservée.
          </p>
          <div className='w-full mx-auto grid md:grid-cols-4 gap-x-4 p-4 space-y-12 md:space-y-0'>
            <div className='text-center space-y-4 p-2 border-1 rounded-lg border-gray-300'>
              <Image
                onClick={() => displayBigPicture("cpanel_admin01")}
                alt='Panel staff member club 306'
                className='object-cover'
                height={400}
                src='/images/cpanel_admin01.jpg'
                width={400}
              />
            </div>
            <div className='text-center space-y-4 p-2 border-1 rounded-lg border-gray-300'>
              <Image
                onClick={() => displayBigPicture("cpanel_admin02")}
                alt='Panel staff member club 306'
                className='object-cover'
                height={400}
                src='/images/cpanel_admin02.jpg'
                width={400}
              />
            </div>
            <div className='text-center space-y-4 p-2 border-1 rounded-lg border-gray-300'>
              <Image
                onClick={() => displayBigPicture("cpanel_admin03")}
                alt='Panel staff member club 306'
                className='object-cover'
                height={400}
                src='/images/cpanel_admin03.jpg'
                width={400}
              />
            </div>
            <div className='text-center space-y-4 p-2 border-1 rounded-lg border-gray-300'>
              <Image
                onClick={() => displayBigPicture("cpanel_admin04")}
                alt='Panel staff member club 306'
                className='object-cover'
                height={400}
                src='/images/cpanel_admin04.jpg'
                width={400}
              />
            </div>
          </div>
        </>
      </section>
      <section className='w-full p-4 flex flex-col my-32'>
        <Button
          variant='shadow'
          color='primary'
          onClick={() => router.push("/projets")}
        >
          Retour
        </Button>
      </section>
    </>
  );
}
