import { PortableTextReactComponents } from '@portabletext/react'

import dynamic from 'next/dynamic'

import CodeBlock from '@/components/BLOG/atoms/CodeBlock'
import CustomImage from '@/components/atoms/CustomImage'

const YouTubePlayer = dynamic(() => import('react-player/youtube'), {
  ssr: false,
  loading: () => <p>Chargement de la vidéo...</p>,
})

export const CustomPortanleTextComponents: Partial<PortableTextReactComponents> =
  {
    block: {
      h2: ({ children }) => <h2 id={children?.toString()}>{children}</h2>,
      h3: ({ children }) => <h3 id={children?.toString()}>{children}</h3>,
    },
    types: {
      code: ({ value }) => {
        // Check if value has the expected structure
        if (
          value &&
          typeof value === 'object' &&
          'code' in value &&
          'language' in value
        ) {
          return <CodeBlock code={value.code} language={value.language} />
        }
        // Fallback in case the structure is different
        return <pre>{JSON.stringify(value, null, 2)}</pre>
      },
      image: CustomImage,
      cloudinaryImage: CustomImage,
      youtube: ({ value }) => {
        return (
          <div className="my-8 aspect-w-16 aspect-h-9 flex justify-center">
            <YouTubePlayer url={value.url} />
          </div>
        )
      },
    },
  }
