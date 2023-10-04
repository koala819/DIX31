"use client";
import { Button, Card, CardBody, Image, Tab, Tabs } from "@nextui-org/react";
import { GrReactjs } from "react-icons/gr";
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoVercel } from "react-icons/io5";
import { SiPostgresql } from "react-icons/si";
import { FaHandshake } from "react-icons/fa";
import { PiHandHeartFill } from "react-icons/pi";
import { MdOutlineBalance } from "react-icons/md";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className='flex flex-col-reverse md:flex-row items-center mt-8 p-8'>
        <div className='w-full md:w-2/3 bg-gradient-to-r shadow-lg rounded-lg p-12 text-justify'>
          <h1 className='text-4xl font-bold mb-2'>Xavier Genolhac</h1>
          <h2 className='text-lg text-gray-600 dark:text-gray-400 mb-4'>
            Software Craftsmanship
          </h2>
          <p className='text-base leading-relaxed mb-8'>
            Je m&apos;appelle Xavier, et je suis un passionné du web depuis le
            début des années 2000. En tant que développeur web freelance depuis
            2021, j&apos;ai choisi de me spécialiser dans la stack JS et le
            framework Next.js. Je suis là pour mettre à votre disposition mes
            compétences et mon savoir-faire en matière de conception et de
            création de sites internet. Que ce soit pour répondre à vos besoins
            en développement front-end ou en développement back-end, je suis
            prêt à vous accompagner.
          </p>
          <p>
            Je m&apos;engage à suivre les standards du web et à rester au fait
            des dernières tendances pour mener à bien votre projet, de
            l&apos;élaboration du cahier des charges jusqu&apos;à sa mise en
            ligne. De plus, je suis également disponible pour des projets de
            refonte de sites existants, ainsi que pour des audits et conseils en
            optimisation. N&apos;hésitez pas à consulter{" "}
            <Link href='/projets' className='underline hover:text-blue-700'>
              mes réalisations
            </Link>{" "}
            pour en savoir plus sur mon travail.
          </p>
          <div className='flex items-center space-x-4 mt-12 justify-center'>
            <div className='flex items-center'>
              <GrReactjs size={24} className='text-[#0480a6]' />
              <span className='ml-2'>React</span>
            </div>
            <div className='flex items-center'>
              <BiLogoTailwindCss size={24} className='text-[#39beff]' />
              <span className='ml-2'>Tailwind</span>
            </div>
            <div className='flex items-center'>
              <IoLogoVercel size={24} />
              <span className='ml-2'>Next.js</span>
            </div>
            <div className='flex items-center'>
              <SiPostgresql size={24} className='text-[#326897]' />
              <span className='ml-2'>PostgreSQL</span>
            </div>
          </div>
          <div className='flex items-center justify-center mt-8 space-x-4'>
            <Link href='/contact'>
              <Button color='primary' variant='shadow' className='uppercase'>
                me contacter
              </Button>
            </Link>
            <Link href='/projets'>
              <Button color='primary' variant='shadow' className='uppercase'>
                mes projets
              </Button>
            </Link>
          </div>
        </div>

        <div className='w-full md:w-1/3 flex items-center justify-center'>
          <Image
            isBlurred
            isZoomed
            width={240}
            src='https://avatars.githubusercontent.com/u/70317658?v=4'
            alt='Tête de Xavier Genolhac'
            //   className='m-5'
          />
        </div>
      </section>
      <section className='flex flex-col items-center justify-center p-8'>
        <Tabs aria-label='Options'>
          <Tab
            key='ecoute'
            title={
              <div className='flex items-center space-x-2'>
                <FaHandshake size={24} />
                <span>Répondre à vos besoins</span>
              </div>
            }
          >
            <Card>
              <CardBody className='text-justify'>
                L&apos;écoute attentive de votre projet marque le point de
                départ. Vos demandes sont ma priorité constante. Mon objectif
                est de saisir pleinement la nature de votre projet et de le
                concrétiser de la manière la plus efficace possible. Mon
                approche méticuleuse garantit un résultat de haute qualité pour
                chaque aspect de votre projet. De plus, ma capacité à travailler
                de manière autonome me permet de prendre en charge
                l&apos;intégralité du processus, de la conception à la
                réalisation.
              </CardBody>
            </Card>
          </Tab>
          <Tab
            key='accompagnement'
            title={
              <div className='flex items-center space-x-2'>
                <PiHandHeartFill size={24} />
                <span>Partenaire dévoué</span>
              </div>
            }
          >
            <Card>
              <CardBody className='text-justify'>
                L&apos;essence même de faire appel à mes services réside dans la
                recherche d&apos;un accompagnement distinctif. Je m&apos;engage
                à être à vos côtés tout au long de votre projet, en assurant un
                suivi continu du développement, en organisant des réunions
                fréquentes avec vous, et en instaurant une relation de confiance
                mutuelle.
              </CardBody>
            </Card>
          </Tab>
          <Tab
            key='adpatabilite'
            title={
              <div className='flex items-center space-x-2'>
                <MdOutlineBalance size={24} />
                <span>Accessibilité financière</span>
              </div>
            }
          >
            <Card>
              <CardBody className='text-justify'>
                Je vous offre des solutions personnalisées, conçues pour
                s&apos;adapter parfaitement à votre budget. Je suis convaincu
                que la création d&apos;un site web ne doit pas être hors de
                portée pour quiconque. C&apos;est pourquoi j&apos;ajuste mes
                offres en fonction de vos ressources financières, tout en
                préservant la qualité de mes services. Ensemble, nous trouverons
                toujours une solution adaptée à votre projet, sans compromettre
                la qualité ni la valeur que je vous apporte.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </section>
    </>
  );
}
