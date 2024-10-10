import { PortableTextReactComponents } from '@portabletext/react'
import YouTubePlayer from 'react-player/youtube'

import CustomImage from '@/components/atoms/CustomImage'

export const CustomPortanleTextComponents: Partial<PortableTextReactComponents> =
  {
    block: {
      h2: ({ children }) => <h2 id={children?.toString()}>{children}</h2>,
      h3: ({ children }) => <h3 id={children?.toString()}>{children}</h3>,
    },
    types: {
      image: CustomImage,
      cloudinaryImage: CustomImage,
      youtubeVideo: ({ value }) => {
        return (
          <div className="my-8 aspect-w-16 aspect-h-9 flex justify-center">
            <YouTubePlayer url={value.url} />
          </div>
        )
      },
    },
  }
