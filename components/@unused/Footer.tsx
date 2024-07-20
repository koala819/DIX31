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

  const WithCustomLoading = dynamic(
    () => import('@/components/atoms/LoadImage'),
    {
      loading: () => <div>Chargement ...</div>,
    },
  )

  const Explore = [
    { label: 'Accueil', href: '/' },
    { label: 'Nos Projets', href: '/projects' },
    { label: 'Le Blog', href: '/blog' },
  ]

  const Utilz = [
    { label: 'Mentions légales', href: '/mentions' },
    { label: 'Confidentialité', href: '/protection' },
    { label: 'Nous Contacter', href: '/contact' },
  ]

  return (
    <footer className="px-6 py-12 mx-auto">
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
        <aside className="sm:col-span-2 flex flex-col justify-center items-center">
          <h3 className="text-2xl font-semibold">
            Recevez nos dernières nouveautés.
          </h3>
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
        </aside>

        <aside className="flex items-center justify-center">
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold underline">Explorez</h3>
            <div className="flex flex-col items-start mt-5 space-y-2">
              {Explore.map((item, index) => (
                <Link
                  href={item.href}
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-500 hover:underline hover:text-blue-500"
                  key={index}
                >
                  <h4>{item.label}</h4>
                </Link>
              ))}
            </div>
          </div>
        </aside>

        <aside className="flex items-center justify-center">
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold underline">
              Informations Utiles
            </h3>
            <div className="flex flex-col items-start mt-5 space-y-2">
              {Utilz.map((item, index) => (
                <Link
                  href={item.href}
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-500 hover:underline hover:text-blue-500"
                  key={index}
                >
                  <h4>{item.label}</h4>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

      <section className="lg:flex items-center justify-between">
        <aside className="w-full mt-2 text-sm md:text-xs lg:text-lg text-gray-500 dark:text-slate-400">
          <picture className="flex w-full justify-center">
            <WithCustomLoading
              src="/images/Footer_logo.png"
              alt="DIX31 logo"
              className="object-fill rounded-none block dark:hidden"
              width={250}
              height={50}
            />
            <WithCustomLoading
              src="/images/Footer_dark_logo.png"
              alt="DIX31 logo"
              className="object-fill rounded-none hidden dark:block"
              width={250}
              height={50}
            />
          </picture>

          <article className="text-center">
            Votre partenaire pour le développement web
          </article>
        </aside>

        <aside className="w-full">
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
        </aside>
      </section>
    </footer>
  )
}
