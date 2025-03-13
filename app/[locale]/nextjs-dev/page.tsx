import { Metadata } from 'next'

import NextjsPage from '@/components/molecules/NextjsPage'

export const metadata: Metadata = {
  title: 'Next.js Development - DIX31 | Création de Sites Web à Toulouse',
  description:
    "Développement d'applications web modernes avec Next.js par DIX31",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}/nextjs`,
  },
}

const Page = () => {
  return <NextjsPage />
}

export default Page
