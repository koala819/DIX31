export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: "Titre de l'article du blog",
    },
    {
      name: 'tag',
      type: 'array',
      title: 'Tag',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'date',
      type: 'datetime',
      title: 'Date',
    },
    {
      name: 'titleImagebyCloudinary',
      title: 'Image Titre avec Cloudinary',
      type: 'cloudinaryImage',
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Image du titre',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texte Alternatif',
          description: 'Important pour le SEO et l’accessibilité.',
          validation: (Rule: any) =>
            Rule.error('Vous devez remplir le texte alternatif.').required(),
        },
      ],
    },

    {
      name: 'smallDescription',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Contenu',
      of: [
        { type: 'block' },
        {
          name: 'youtubeVideo',
          title: 'YouTube Video',
          type: 'youtubeVideo',
        },
        {
          name: 'cloudinaryImage',
          title: 'Cloudinary Image',
          type: 'cloudinaryImage',
        },
        {
          type: 'image',
          options: {
            hotspot: true, // Optional, for enabling hotspot functionality on images
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Légende',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Texte Alternatif',
              description: 'Important pour le SEO et l’accessibilité.',
              validation: (Rule: any) =>
                Rule.error(
                  'Vous devez remplir le texte alternatif.',
                ).required(),
            },
            {
              name: 'size',
              type: 'string',
              title: "Taille de l'Image",
              description: "Choisissez une taille pour l'image",
              options: {
                list: [
                  { title: 'Petite', value: 'small' },
                  { title: 'Moyenne', value: 'medium' },
                  { title: 'Grande', value: 'large' },
                ],
                layout: 'radio', // Vous pouvez changer le type de l'interface ici (par exemple 'dropdown')
              },
            },
          ],
        },
      ],
    },
  ],
}
