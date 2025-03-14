// components/molecules/ContactWrapper.tsx
import { getTranslations } from 'next-intl/server'

import ContactForm from '@/components/client/Contact'

interface ContactWrapperProps {
  id?: string
}

export default async function ContactWrapper({ id }: ContactWrapperProps) {
  // Récupérer les traductions côté serveur
  const t = await getTranslations('Contact')

  // Préparer les données de traduction
  const translations = {
    title: t('title'),
    thx: t('thx'),
    description: t('description'),
    confirmation: t('confirmation'),
    name: t('name'),
    email: t('email'),
    message: t('message'),
    button: t('button'),
    or: t('or'),
    phone: t('phone'),
  }

  // Passer les traductions au composant client
  return <ContactForm id={id} translations={translations} />
}
