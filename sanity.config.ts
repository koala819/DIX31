'use client'

// import { resolveLocations } from './plugins/resolveLocations'
import { schemaTypes } from './schemas'

import { codeInput } from '@sanity/code-input'
import { debugSecrets } from '@sanity/preview-url-secret/sanity-plugin-debug-secrets'
import { visionTool } from '@sanity/vision'
// import {presentationTool} from 'sanity/presentation'
// import { visualEditing } from '@sanity/visual-editing'
import { apiVersion, basePath, dataset, projectId } from 'lib/sanity.api'
// import { locate } from 'plugins/locate'
// import { pageStructure, singletonPlugin } from 'plugins/settings'
import { defineConfig } from 'sanity'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { presentationTool } from 'sanity/presentation'
import { structureTool } from 'sanity/structure'

const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE
const SANITY_STUDIO_PREVIEW_URL =
  process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000'
// console.log('porjectId', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)
// console.log('dataset', process.env.EXT_PUBLIC_SANITY_NEXT_PUBLIC_SANITY_DATASET)
// console.log('token', process.env.SANITY_API_READ_TOKEN)

export default defineConfig({
  basePath,
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  schema: {
    types: schemaTypes,
  },

  plugins: [
    presentationTool({
      // locate,
      // Modifié : remplacement de 'locate' par 'resolve.locations'
      // resolve: {
      //   locations: resolveLocations,
      // },
      previewUrl: {
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
      // previewUrl: SANITY_STUDIO_PREVIEW_URL,
      // previewUrl: {
      //   previewMode: {
      //     enable: '/api/draft',
      //   },
      // },
    }),
    codeInput(),
    // visualEditing({
    //   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    //   dataset: process.env.EXT_PUBLIC_SANITY_NEXT_PUBLIC_SANITY_DATASET,
    //   token: process.env.SANITY_API_READ_TOKEN,
    // }),
    structureTool(),

    // structureTool({
    //   structure: pageStructure([home, settings]),
    // }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    // singletonPlugin([home.name, settings.name]),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    // See url preview secrets in the schema for debugging
    ...(process.env.NODE_ENV === 'development' ? [debugSecrets()] : []),
  ].filter(Boolean),
})
