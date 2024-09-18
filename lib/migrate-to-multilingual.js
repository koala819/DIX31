require('dotenv').config({ path: '.env.local' })
const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-05-03',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
})

// Fonction pour migrer un seul document
async function migrateDocument(doc) {
  const {
    _id,
    _rev,
    title,
    tag,
    slug,
    date,
    titleImagebyCloudinary,
    titleImage,
    smallDescription,
    content,
  } = doc

  // Créer le nouveau document avec la structure multilingue
  const newDoc = {
    _id,
    _rev,
    _type: 'blog',
    titleFr: title,
    titleEn: title, // Initialiser avec le titre français, à traduire manuellement plus tard
    tags: tag, // Notez que le champ 'tag' est renommé en 'tags' dans le nouveau schéma
    slug,
    date,
    titleImagebyCloudinary,
    titleImage,
    shortDescriptionFr: smallDescription,
    shortDescriptionEn: smallDescription, // Initialiser avec la description française, à traduire manuellement plus tard
    contentFr: content,
    contentEn: content, // Initialiser avec le contenu français, à traduire manuellement plus tard
  }

  // Mettre à jour le document dans Sanity
  return client.createOrReplace(newDoc)
}

// Fonction principale pour migrer tous les documents
async function migrateAllDocuments() {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error(
      'SANITY_API_WRITE_TOKEN is not set. Please add it to your .env.local file.',
    )
    process.exit(1)
  }

  // Récupérer tous les documents de type 'blog'
  const query = '*[_type == "blog"]'
  const documents = await client.fetch(query)

  console.log(`Migrating ${documents.length} documents...`)

  for (const doc of documents) {
    try {
      await migrateDocument(doc)
      console.log(`Successfully migrated document ${doc._id}`)
    } catch (error) {
      console.error(`Failed to migrate document ${doc._id}:`, error)
    }
  }

  console.log('Migration completed')
}

// Exécuter la migration
migrateAllDocuments().catch(console.error)
