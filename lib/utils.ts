import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { getFileStats } from './serverUtils'

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

interface GenerateMetadataProps {
  locale: any
  namespace: string
  path: string
  additionalMetadata?: Partial<Metadata>
  imagePath?: string
  dateCreated?: string | Date
  dateModified?: string | Date
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Idéalement, imagePath devrait  avoir une taille de 1200x630 pixels pour une compatibilité optimale avec la plupart des plateformes.

export async function createMetadata({
  locale,
  namespace,
  path,
  additionalMetadata = {},
  imagePath,
  dateCreated,
  dateModified,
}: GenerateMetadataProps): Promise<Metadata> {
  let fileStats

  try {
    fileStats = await getFileStats(path)
    const t = await getTranslations({ locale, namespace })
    const canonicalUrl = `${process.env.CLIENT_URL}/${locale}${path}`

    // Fonction pour formater les dates
    const formatDate = (date: string | Date | undefined) => {
      if (!date) return undefined
      return new Date(date).toISOString()
    }

    // Utiliser les dates fournies ou celles du fichier, avec priorité aux dates fournies
    const effectiveDateCreated = dateCreated || fileStats?.dateCreated
    const effectiveDateModified = dateModified || fileStats?.dateModified
    const formattedDateCreated = formatDate(effectiveDateCreated)
    const formattedDateModified = formatDate(effectiveDateModified)

    const baseMetadata: Metadata = {
      title: t('title'),
      description: t('description'),
      keywords: t('keywords'),

      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      alternates: {
        canonical: canonicalUrl,
        languages: {
          'fr-FR': `/fr${path}`,
          'en-US': `/en${path}`,
        },
      },
      openGraph: {
        title: t('ogTitle'),
        description: t('ogDescription'),
        type: 'website',
        url: canonicalUrl,
        locale: locale === 'fr' ? 'fr_FR' : 'en_US',
        alternateLocale: locale === 'fr' ? 'en_US' : 'fr_FR',
        ...(imagePath && {
          images: [`${process.env.CLIENT_URL}/${imagePath}`],
        }),
        ...(fileStats && {
          publishedTime: fileStats.dateCreated.toISOString(),
          modifiedTime: fileStats.dateModified.toISOString(),
        }),
        ...(formattedDateCreated && { publishedTime: formattedDateCreated }),
        ...(formattedDateModified && { modifiedTime: formattedDateModified }),
      },
      twitter: {
        card: 'summary_large_image',
        title: t('twitterTitle'),
        description: t('twitterDescription'),
        ...(imagePath && {
          images: [`${process.env.CLIENT_URL}/${imagePath}`],
        }),
      },
    }

    const otherMetadata: Record<string, string | number | (string | number)[]> =
      {
        'X-Robots-Tag': 'index, follow',
        publisher: 'Xavier - Développeur Web Freelance',
      }

    if (formattedDateCreated) {
      otherMetadata['article:published_time'] = formattedDateCreated
    }
    if (formattedDateModified) {
      otherMetadata['article:modified_time'] = formattedDateModified
    }

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: t('title'),
      description: t('description'),
      url: canonicalUrl,
      ...(formattedDateCreated && { datePublished: formattedDateCreated }),
      ...(formattedDateModified && { dateModified: formattedDateModified }),
    }

    otherMetadata['script:ld+json'] = JSON.stringify(jsonLd)

    baseMetadata.other = otherMetadata

    // Fusion des métadonnées de base avec les métadonnées additionnelles
    return { ...baseMetadata, ...additionalMetadata }
  } catch (error) {
    console.error('Error getting file stats:', error)
    return {}
  }
}
