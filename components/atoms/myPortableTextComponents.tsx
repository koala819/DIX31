import { PortableTextReactComponents } from '@portabletext/react'
import YouTubePlayer from 'react-player/youtube'

import CustomImage from './CustomImage'

export const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  block: {
    h2: ({ children }) => <h2 id={children?.toString()}>{children}</h2>,
    h3: ({ children }) => <h3 id={children?.toString()}>{children}</h3>,
  },
  types: {
    image: CustomImage,
    cloudinaryImage: CustomImage,
    youtube: ({ value }) => (
      <div className="my-8 aspect-w-16 aspect-h-9">
        <YouTubePlayer url={value.url} width="100%" height="100%" />
      </div>
    ),
  },
}
