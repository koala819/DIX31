export default {
    name: 'cloudinaryImage',
    title: 'Image Cloudinary',
    type: 'object',
    fields: [
      {
        name: 'url',
        title: 'URL',
        type: 'url',
        description: 'L’URL de l’image sur Cloudinary',
      },
      {
        name: 'alt',
        type: 'string',
        title: 'Texte Alternatif',
        description: 'Important pour le SEO et l’accessibilité.',
        validation: (Rule: any) =>
          Rule.error('Vous devez remplir le texte alternatif.').required(),
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
          layout: 'radio',
        },
      },
    ],
  }
  