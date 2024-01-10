import { Metadata } from 'next'

import ActivSavoirs from '@/ui/templates/projects/ActivSavoirs'

export const metadata: Metadata = {
  title: "Activ'Savoirs - Site de Formation Professionnelle par DIX31",
  description:
    "Découvrez Activ'Savoirs, un site web innovant conçu par DIX31 pour une expérience utilisateur enrichie. Le projet illustre notre expertise en Next.js, Tailwind, TypeScript, et Prismic, offrant une interface moderne et une gestion de contenu flexible pour le secteur de la formation professionnelle.",
}

export default function Page() {
  return <ActivSavoirs />
}
