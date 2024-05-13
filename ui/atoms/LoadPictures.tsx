import { Image as ImageNextUI } from '@nextui-org/react'

import Image from 'next/image'

const LoadPictures = ({
  src,
  alt,
  width,
  height,
  className,
  objectFit,
  layout,
}: {
  src: any
  alt: string
  width?: number
  height?: number
  className?: string
  objectFit?: string
  layout?: string
}) => {
  return (
    <div>
      {layout === 'fill' ? (
        <Image
          src={src}
          alt={alt}
          loading="lazy"
          className={className}
          objectFit={objectFit}
          layout={layout}
        />
      ) : layout === 'responsive' ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          className={className}
          objectFit={objectFit}
          layout={layout}
        />
      ) : (
        <ImageNextUI
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          className={className}
        />
      )}
    </div>
  )
}

export default LoadPictures
