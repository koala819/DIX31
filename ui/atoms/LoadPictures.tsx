// import { Image as ImageNextUI } from '@nextui-org/react'
import Image from 'next/image'

const LoadPictures = ({
  src,
  alt,
  width,
  height,
  className,
  objectFit,
  layout,
  priority,
}: {
  src: any
  alt: string
  width?: number
  height?: number
  className?: string
  objectFit?: string
  layout?: string
  priority?: boolean
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
          // layout={layout}
          priority={priority}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          objectFit={objectFit}
          // layout={layout}
          priority={priority}
        />
      )}
    </div>
  )
}

export default LoadPictures
