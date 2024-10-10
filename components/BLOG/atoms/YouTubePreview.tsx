import YouTubePlayer from 'react-player/youtube'

import { Flex, Text } from '@sanity/ui'
import type { PreviewProps } from 'sanity'

export function YouTubePreview(props: PreviewProps) {
  const { title } = props

  return (
    <Flex padding={3} align="center" justify="center">
      {typeof title === 'string' ? (
        <YouTubePlayer url={title} />
      ) : (
        <Text>Add a YouTube URL</Text>
      )}
    </Flex>
  )
}
