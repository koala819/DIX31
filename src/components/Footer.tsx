"use client";
import { AiFillChrome } from "react-icons/ai";
import { LuCopyleft } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Malt from "../../public/images/malt-logo.svg";
import Image from "next/image";
import { Tooltip } from "@nextui-org/react";

export function Footer() {
  return (
    <footer className='text-gray-900 bg-gray-200 dark:bg-slate-700 dark:text-slate-300'>
      <div className='container px-5 md:py-12 mx-auto flex md:items-center md:flex-row md:flex-nowrap flex-wrap flex-col'>
        <div className='flex w-full md:w-1/3 px-4 md:justify-start justify-center mt-4 md:mt-0'>
          <nav className='flex flex-col mb-8'>
            <h2 className='title-font font-medium tracking-widest text-sm mb-3 uppercase'>
              Découvrez davantage
            </h2>
            <Link
              href='/projets/portfolio'
              className='text-gray-600 hover:underline dark:text-zinc-300 capitalize'
            >
              Portfolio
            </Link>
            <Link
              href='/services'
              className='text-gray-600 hover:underline dark:text-zinc-300 capitalize'
            >
              Mes services
            </Link>
            <Link
              href='/blog'
              className='text-gray-600 hover:underline dark:text-zinc-300 capitalize'
            >
              Blog
            </Link>
          </nav>
        </div>

        <section className='w-full md:w-1/3 flex justify-center items-center'>
          <div className='md:w-11/12 w-full flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
            <div className='flex title-font font-medium items-center justify-center'>
              <AiFillChrome size={42} />
              <span className='ml-3 text-xl'>DIX31</span>
            </div>
            <div className='w-full mt-2 text-sm md:text-xs lg:text-lg text-gray-500 dark:text-slate-400 '>
              <p className=' flex justify-center items-center'>
                <span className='font-bold text-lg lg:text-xl'>D</span>
                éveloppeur
                <span className='font-bold text-lg lg:text-xl ml-2'> I</span>
                ndépendant
                <span className='font-bold text-lg lg:text-xl ml-2'>X</span>
                avier
              </p>
              <p className=' flex justify-center items-center'>
                Votre partenaire pour le développement web
              </p>
            </div>
          </div>
        </section>

        <div className='flex w-full md:w-1/3 px-4 md:justify-end justify-center mt-4 md:mt-0'>
          <nav className='flex flex-col mb-8'>
            <h2 className='title-font font-medium tracking-widest text-sm mb-3 uppercase'>
              Liens utiles
            </h2>

            <Link
              href='/mentions'
              className='text-gray-600 hover:underline dark:text-zinc-300 capitalize'
            >
              mentions légales
            </Link>
            <Link
              href='/protection'
              className='text-gray-600 hover:underline dark:text-zinc-300 capitalize'
            >
              protections des données
            </Link>
            <Link
              href=''
              className='text-gray-600 hover:underline dark:text-zinc-300 capitalize'
            >
              contact
            </Link>
          </nav>
        </div>
      </div>
      <div className='bg-gray-100 dark:bg-black'>
        <div className='container mx-auto py-4 px-5 flex flex-wrap flex-row'>
          <Link
            href='https://fr.wikipedia.org/wiki/Copyleft'
            target='_blank'
            className='flex text-gray-500 items-center space-x-2 dark:text-gray-200 hover:font-bold'
          >
            <p>Copyleft</p>
            <LuCopyleft />
            <p> 2023 by Xavier</p>
          </Link>
          <div className='ml-auto'>
            <span className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start space-x-8'>
              <Tooltip showArrow={true} color='primary' content='Linkedin'>
                <Link
                  href='https://www.linkedin.com/in/xavier%F0%9F%92%BB-genolhac-79a98390/'
                  target='_blank'
                  className='text-gray-500 dark:text-gray-200 dark:hover:text-blue-500'
                >
                  <FaLinkedin size={24} />
                </Link>
              </Tooltip>
              <Tooltip showArrow={true} color='danger' content='Malt'>
                <Link
                  href='https://www.malt.fr/profile/xaviergenolhac'
                  target='_blank'
                  className='text-gray-500 dark:text-gray-200 dark:hover:text-blue-500'
                >
                  <Image src={Malt} alt='Malt' width={24} height={24} />
                </Link>
              </Tooltip>
              <Tooltip showArrow={true} color='default' content='Github'>
                <Link
                  href='https://github.com/koala819/'
                  target='_blank'
                  className='ml-3 text-gray-500 dark:text-gray-200 dark:hover:text-yellow-500'
                >
                  <FaGithub size={24} />
                </Link>
              </Tooltip>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
