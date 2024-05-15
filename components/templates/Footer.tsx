'use client'

import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { LuCopyleft } from 'react-icons/lu'

import dynamic from 'next/dynamic'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("L'e-mail est obligatoire")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "L'e-mail n'est pas valide",
      ),
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  async function handleSendMail(values: any) {
    const data = {
      email: values.email,
    }

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }

    fetch(`${process.env.CLIENT_URL}/api/mail`, options)
      .then((response: any) => {
        if (response.status === 200) {
          toast.success('Merci de votre inscription à la newsletter')
        } else {
          toast.error("Une erreur s'est produite", response.statusText)
        }
      })
      .catch((error: any) => {
        toast.error("Une erreur s'est produite", error)
      })
  }

  const WithCustomLoading = dynamic(() => import('@/lib/LoadImage'), {
    loading: () => <div>Chargement ...</div>,
  })

  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <span className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
              Recevez nos dernières nouveautés.
            </span>
            <form
              onSubmit={handleSubmit(handleSendMail)}
              className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row"
            >
              <Controller
                name="email"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <input
                    id="email"
                    type="email"
                    className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                    placeholder="Entrez votre email"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />

              {errors.email && (
                <div className="text-red-500 font-mono text-xs">
                  {errors.email.message}
                </div>
              )}

              <Button type="submit" className="ml-4 text-sm font-medium ">
                S&apos;abonner
              </Button>
            </form>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Explorez
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <Link
                href="/"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-500 hover:underline hover:text-blue-500"
              >
                Accueil
              </Link>
              <Link
                href="/projects"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-500 hover:underline hover:text-blue-500"
              >
                Nos Projets
              </Link>

              <Link
                href="/blog"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-500 hover:underline hover:text-blue-500"
              >
                Le Blog
              </Link>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Informations Utiles
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <Link
                href="/mentions"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-500 hover:underline hover:text-blue-500"
              >
                Mentions légales
              </Link>
              <Link
                href="/protection"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-500 hover:underline hover:text-blue-500"
              >
                Confidentialité
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-500 hover:underline hover:text-blue-500"
              >
                Nous Contacter
              </Link>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

        <div className="lg:flex items-center justify-between">
          <section className="w-full mt-2 text-sm md:text-xs lg:text-lg text-gray-500 dark:text-slate-400">
            <picture className="flex w-full justify-center">
              <WithCustomLoading
                src="/images/Footer_logo.png"
                alt="DIX31 logo"
                className="object-fill rounded-none"
                width={250}
                height={50}
              />
            </picture>

            <article className="text-center">
              Votre partenaire pour le développement web
            </article>
          </section>

          <section className="container mx-auto py-4 px-5 flex flex-wrap flex-row">
            <text className="flex text-gray-500 items-center space-x-2 dark:text-gray-200 w-full justify-center">
              <p>Copyleft</p>
              <LuCopyleft />
              <p> {currentYear} by Xavier</p>
            </text>
            <picture className="flex justify-center w-full lg:ml-auto space-x-8 sm:mt-0 mt-2">
              {/* <Tooltip showArrow={true} color="primary" content="Linkedin"> */}
              <Link
                href="https://www.linkedin.com/in/xavier%F0%9F%92%BB-genolhac-79a98390/"
                target="_blank"
                className="text-gray-500 dark:text-gray-200 dark:hover:text-blue-500 hover:text-blue-500"
                aria-label="Visitez mon profil LinkedIn"
              >
                <FaLinkedin size={24} className="hover:fill-blue-500" />
              </Link>
              {/* </Tooltip> */}
              {/* <Tooltip showArrow={true} color="danger" content="Youtube"> */}
              <Link
                href="https://www.youtube.com/channel/UCcQkYLTdSUjYHsof8fUwrng"
                target="_blank"
                className="text-gray-500 dark:text-gray-200 dark:hover:text-red-500 hover:text-red-500"
                aria-label="Visitez ma chaîne YouTube"
              >
                <FaYoutube size={24} className="hover:fill-red-500" />
              </Link>
              {/* </Tooltip> */}
              {/* <Tooltip showArrow={true} color="default" content="Github"> */}
              <Link
                href="https://github.com/koala819/"
                target="_blank"
                className="ml-3 text-gray-500 dark:text-gray-200 dark:hover:text-yellow-500 hover:text-yellow-500"
                aria-label="Visitez mon profil GitHub"
              >
                <FaGithub size={24} />
              </Link>
              {/* </Tooltip> */}
            </picture>
          </section>
        </div>
      </div>
    </footer>
  )
}
