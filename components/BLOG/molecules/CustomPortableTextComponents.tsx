import { PortableTextReactComponents } from '@portabletext/react'

import dynamic from 'next/dynamic'

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
