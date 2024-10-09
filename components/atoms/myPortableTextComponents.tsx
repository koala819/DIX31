import { PortableTextReactComponents } from '@portabletext/react'
import React from 'react'

import CustomImage from './CustomImage'

export const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  block: {
    h2: ({ children }) => <h2 id={children?.toString()}>{children}</h2>,
    h3: ({ children }) => <h3 id={children?.toString()}>{children}</h3>,
  },
  types: {
    image: CustomImage,
    cloudinaryImage: CustomImage,
  },
}
