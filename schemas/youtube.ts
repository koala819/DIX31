// schemas/video.ts
export default {
  name: 'youtubeVideo',
  title: 'YouTube Video',
  type: 'object',
  fields: [
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule: any) =>
        Rule.uri({
          scheme: ['http', 'https'],
          allowRelative: false,
          message: 'Must be a valid YouTube URL',
        }),
    },
  ],
}
