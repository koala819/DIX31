'use client'

import { useMemo } from 'react'

import dynamic from 'next/dynamic'

export default function DynamicLoadImage({
  src,
  alt,
  fill = false,
  priority = false,
  className = '',
  sizes = '',
  height,
  width,
  belowFold = false,
}: {
  alt: string
  className?: string
  fill?: boolean
  priority?: boolean
  src: string
  sizes?: string
  height?: number
  width?: number
  belowFold?: boolean
}) {
  const WithCustomLoading = dynamic(
    () => import('@/components/atoms/LoadImage'),
    {
      loading: () => (
        <div
          className={`${width ? `w-${width}` : 'w-24 lg:w-32'} ${height ? `h-${height}` : 'h-24 lg:h-32'} bg-gray-300 animate-pulse rounded-xl`}
        ></div>
      ),
    },
  )

  const MemoizedImage = useMemo(
    () => (
      <WithCustomLoading
        src={src}
        alt={alt}
        fill={fill}
        className={className}
        sizes={sizes}
        priority={priority && !belowFold} // Only set priority if it's not below fold
        loading={belowFold ? 'lazy' : 'eager'} // Use lazy loading for below fold images
        height={height} // Ajouté
        width={width} // Ajouté
      />
    ),
    [src, alt, fill, className, sizes, priority, height, width],
  )

  return MemoizedImage
}
