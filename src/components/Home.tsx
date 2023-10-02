"use client";

import { Button, Card, CardBody, Image, Tab, Tabs } from "@nextui-org/react";
import { GrReactjs } from "react-icons/gr";
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoVercel } from "react-icons/io5";
import { SiPostgresql } from "react-icons/si";

export function Home() {
  // const [isLoaded, setIsLoaded] = useState(false);

  // const toggleLoad = () => {
  //   setIsLoaded(!isLoaded);
  // };

  return (
    <>
      <section className='flex flex-col-reverse md:flex-row items-center mt-8'>
        <div className='w-full md:w-2/3 bg-gradient-to-r shadow-lg rounded-lg m-8 p-2'>
          <h1 className='text-4xl font-bold mb-2'>Xavier Genolhac</h1>
          <h2 className='text-lg text-gray-600 mb-4'>Software Craftsmanship</h2>
          <p className='text-base leading-relaxed'>
            Je suis un professionnel créatif et enthousiaste qui se consacre à
            la conception et au développement de sites web et
            d&apos;applications sur mesure.
          </p>
          <div className='flex items-center space-x-4 mt-4 justify-center'>
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
            <Button color='primary' variant='ghost' className='uppercase'>
              me contacter
            </Button>
            <Button color='primary' variant='ghost' className='uppercase'>
              mes projets
            </Button>
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
      <section className='flex items-center justify-center mt-8 md:mr-32 md:mb-32'>
        <div className='flex w-11/12 flex-col'>
          <Tabs aria-label='Options'>
            <Tab key='ecoute' title='Ecoute'>
              <Card>
                <CardBody>
                  L&apos;écoute attentive de votre projet marque le point de
                  départ. Vos demandes sont ma priorité constante. Mon objectif
                  est de saisir pleinement la nature de votre projet et de le
                  concrétiser de la manière la plus efficace possible. Mon
                  approche méticuleuse garantit un résultat de haute qualité
                  pour chaque aspect de votre projet. De plus, ma capacité à
                  travailler de manière autonome me permet de prendre en charge
                  l&apos;intégralité du processus, de la conception à la
                  réalisation.
                </CardBody>
              </Card>
            </Tab>
            <Tab key='accompagnement' title='Accompagnement'>
              <Card>
                <CardBody>
                  L&apos;essence même de faire appel à mes services réside dans
                  la recherche d&apos;un accompagnement distinctif. Je
                  m&apos;engage à être à vos côtés tout au long de votre projet,
                  en assurant un suivi continu du développement, en organisant
                  des réunions fréquentes avec vous, et en instaurant une
                  relation de confiance mutuelle.
                </CardBody>
              </Card>
            </Tab>
            <Tab key='adpatabilite' title='Adaptabilité'>
              <Card>
                <CardBody>
                  Je vous offre des solutions personnalisées, conçues pour
                  s&apos;adapter parfaitement à votre budget. Je suis convaincu
                  que la création d&apos;un site web ne doit pas être hors de
                  portée pour quiconque. C&apos;est pourquoi j&apos;ajuste mes
                  offres en fonction de vos ressources financières, tout en
                  préservant la qualité de mes services. Ensemble, nous
                  trouverons toujours une solution adaptée à votre projet, sans
                  compromettre la qualité ni la valeur que je vous apporte.
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </section>
    </>
  );
}
