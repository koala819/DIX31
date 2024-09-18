'use client'

import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export default function Contact() {
  const [hideForm, setHideForm] = useState(false)

  const t = useTranslations('Contact')

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
    <section aria-labelledby="contact-title">
      <form id="contact" onSubmit={handleSubmit(handleSendMail)}>
        <h2 id="contact-title" className="pb-2 mb-2">
          {!hideForm ? t('title') : t('thx')}
        </h2>
        {!hideForm && (
          <div className="h-1 rounded overflow-hidden">
            <div className="w-24 h-full bg-blue-500 dark:bg-orange-600"></div>
          </div>
        )}
        <p
          className={`${!hideForm ? 'leading-relaxed mb-5 mt-2' : 'text-center'}`}
        >
          {!hideForm ? t('description') : t('confirmation')}
        </p>
        {!hideForm && (
          <>
            <div className="relative mb-4">
              <Label htmlFor="first_name">
                <h3>{t('name')}</h3>
              </Label>
              <Controller
                name="first_name"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    type="text"
                    color="primary"
                    id="first_name"
                    onChange={onChange}
                    value={value}
                    aria-describedby="first_name_error"
                  />
                )}
              />
              {errors.first_name && (
                <div
                  id="first_name_error"
                  className="text-red-500 font-mono text-xs"
                >
                  {errors.first_name.message}
                </div>
              )}
            </div>
            <div className="relative mb-4">
              <Label htmlFor="email">
                <h3>{t('email')}</h3>
              </Label>
              <Controller
                name="email"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    type="email"
                    color="primary"
                    id="email"
                    onChange={onChange}
                    value={value}
                    aria-describedby="email_error"
                  />
                )}
              />
              {errors.email && (
                <div
                  id="email_error"
                  className="text-red-500 font-mono text-xs"
                >
                  {errors.email.message}
                </div>
              )}
            </div>
            <div className="relative mb-4">
              <Label htmlFor="msg">
                <h3>{t('message')}</h3>
              </Label>
              <Controller
                name="msg"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <Textarea
                    color="primary"
                    value={value}
                    onChange={onChange}
                    id="msg"
                    aria-describedby="msg_error"
                  />
                )}
              />
              {errors.msg && (
                <div id="msg_error" className="text-red-500 font-mono text-xs">
                  {errors.msg.message}
                </div>
              )}
            </div>
            <div className="flex justify-center items-center">
              <Button color="primary" type="submit" aria-label={t('button')}>
                {t('button')}
              </Button>
            </div>
            <div className="mt-8 border-t pt-8">
              <h3>{t('or')}</h3>
              <div className="flex flex-col sm:flex-row justify-between">
                <div className="mb-2 sm:mb-0">
                  <span className="font-medium">E-mail:</span>
                  <Link
                    href="mailto:contact@dix31.com"
                    className="ml-1 text-blue-600 hover:underline"
                  >
                    contact@dix31.com
                  </Link>
                </div>
                <div>
                  <span className="font-medium">{t('phone')}</span>
                  <Link
                    href="tel:+33 676293024"
                    className="ml-1 text-blue-600 hover:underline"
                  >
                    +33 6 76 29 30 24
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </form>
    </section>
  )
}
