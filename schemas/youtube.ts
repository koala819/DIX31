import { YouTubePreview } from '@/components/atoms/YouTubePreview'

import { PlayIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

const youtube = defineType({
  name: 'youtube',
  type: 'object',
  title: 'YouTube Embed',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'YouTube video URL',
    }),
  ],
  preview: {
    select: { title: 'url' },
  },
  components: {
    preview: YouTubePreview,
  },
})

export default youtube
