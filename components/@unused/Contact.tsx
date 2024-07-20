'use client'

import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import dynamic from 'next/dynamic'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export default function Contact() {
  const [hideForm, setHideForm] = useState(false)

  const WithCustomLoading = dynamic(
    () => import('@/components/atoms/LoadImage'),
    {
      loading: () => <div>Chargement ...</div>,
    },
  )

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("L'e-mail est obligatoire")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "L'e-mail n'est pas valide",
      ),

    first_name: yup.string().required('Veuillez saisir votre nom'),
    msg: yup.string().required('Veuillez saisir votre message'),
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
      firstName: values.first_name,
      email: values.email,
      message: values.msg,
    }

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }

    fetch(`${process.env.CLIENT_URL}/api/mail`, options)
      .then((response: any) => {
        if (response.status === 200) {
          toast.success('Votre message a bien été envoyé')
          setHideForm(true)
        } else {
          toast.error("Une erreur s'est produite", response.statusText)
        }
      })
      .catch((error: any) => {
        toast.error("Une erreur s'est produite", error)
      })
  }

  return (
    // <section className="container flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden p-12">
    <section className="container flex flex-col md:flex-row rounded-lg">
      <div className="w-full md:w-1/3 relative h-96 md:h-auto">
        <WithCustomLoading
          alt="DIX31 pour vous accompagner"
          layout="fill"
          objectFit="cover"
          src="/images/Xavier-DIX31.jpg"
        />
      </div>

      <aside className="w-full p-8 md:w-2/3">
        <form onSubmit={handleSubmit(handleSendMail)}>
          <h2 className="text-lg font-medium title-font text-center pb-2 mb-2">
            {!hideForm ? 'Contactez moi' : 'Merci'}
          </h2>
          {!hideForm && (
            <div className="h-1 rounded overflow-hidden">
              <div className="w-24 h-full bg-blue-500 dark:bg-orange-600"></div>
            </div>
          )}
          <p
            className={`${
              !hideForm ? 'leading-relaxed mb-5 mt-2' : 'text-center'
            }`}
          >
            {!hideForm
              ? 'Transformez votre vision en réalité avec mon développement sur mesure.'
              : "Je vous répondrai d'ici 24h maximum."}
          </p>
          {!hideForm && (
            <>
              <div className="relative mb-4">
                <Controller
                  name="first_name"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      type="text"
                      color="primary"
                      id="first_name"
                      placeholder="Entrez votre nom"
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />

                {errors.first_name && (
                  <div className="text-red-500 font-mono text-xs">
                    {errors.first_name.message}
                  </div>
                )}
              </div>

              <div className="relative mb-4">
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      type="email"
                      color="primary"
                      id="email"
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
              </div>

              <div className="relative mb-4">
                <Controller
                  name="msg"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <Textarea
                      color="primary"
                      value={value}
                      onChange={onChange}
                      placeholder="Veuillez saisir votre message"
                      autoFocus
                    />
                  )}
                />

                {errors.msg && (
                  <div className="text-red-500 font-mono text-xs">
                    {errors.msg.message}
                  </div>
                )}
              </div>

              <div className="flex justify-center items-center">
                <Button color="primary" type="submit">
                  Envoyer votre message
                </Button>
              </div>

              <p className="text-xs mt-3 text-center">
                Mon engagement : vous apporter une réponse en moins de 24h.
              </p>
            </>
          )}
        </form>
      </aside>
    </section>
  )
}
