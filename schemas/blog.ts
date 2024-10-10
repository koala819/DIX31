const blogSchema = {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'titleFr',
      type: 'string',
      title: 'Titre (Français)',
    },
    {
      name: 'titleEn',
      type: 'string',
      title: 'Title (English)',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: (doc: { titleEn: string; titleFr: string }) =>
          `${doc.titleEn} ${doc.titleFr}`,
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
      name: 'shortDescriptionFr',
      type: 'text',
      title: 'Courte Description (Français)',
    },
    {
      name: 'shortDescriptionEn',
      type: 'text',
      title: 'Small Description (English)',
    },
    {
      name: 'contentFr',
      type: 'array',
      title: 'Contenu (Français)',
      of: [
        { type: 'block' },
        {
          name: 'youtube',
          title: 'YouTube Video',
          type: 'youtube',
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
    {
      name: 'contentEn',
      type: 'array',
      title: 'Content (English)',
      of: [
        { type: 'block' },
        {
          name: 'youtube',
          title: 'YouTube Video',
          type: 'youtube',
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
              title: 'Caption',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              description: 'Important for SEO and accessibility.',
              validation: (Rule: any) =>
                Rule.error(
                  'You must fill out the alternative text.',
                ).required(),
            },
            {
              name: 'size',
              type: 'string',
              title: 'Image Size',
              description: 'Choose a size for the image',
              options: {
                list: [
                  { title: 'Small', value: 'small' },
                  { title: 'Medium', value: 'medium' },
                  { title: 'Large', value: 'large' },
                ],
                layout: 'radio', // You can change the type of interface here (e.g., 'dropdown')
              },
            },
          ],
        },
      ],
    },
  ],
}

export default blogSchema
