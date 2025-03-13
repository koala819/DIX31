// components/client/NavbarWrapper.tsx
import { getTranslations } from 'next-intl/server'

import NavbarClient from '@/components/client/Navbar'

export async function NavbarWrapper() {
  // Chargement des traductions côté serveur
  const t = await getTranslations('Navbar')
  const t2 = await getTranslations()

  // Préparation des liens de navigation côté serveur
  const links = [
    { name: 'home', href: '/', label: t('home') },
    { name: 'projects', href: '/projects', label: t('projects') },
    { name: 'blog', href: '/blog', label: t('blog') },
  ]

  const hireButtonText = t2('Btn-hire')

  return <NavbarClient links={links} hireButtonText={hireButtonText} />
}
