import React from 'react'

import { Metadata } from 'next'

import Mentions from '@/components/molecules/Mentions'

export const metadata: Metadata = {
  title: 'Mentions Légales - DIX31 | Création de Sites Web à Toulouse',
  description:
    'Consultez les mentions légales de DIX31.com pour des informations sur notre politique de confidentialité, les cookies, et la propriété intellectuelle.',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/mentions`,
  },
}
const Page = () => {
  return <Mentions />
}

export default Page
