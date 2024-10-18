'use client'

import { schemaTypes } from '../../../schemas'

import { apiVersion, basePath, dataset, projectId } from '@/lib/Blog/sanity/api'
import { codeInput } from '@sanity/code-input'
import { debugSecrets } from '@sanity/preview-url-secret/sanity-plugin-debug-secrets'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { presentationTool } from 'sanity/presentation'
import { structureTool } from 'sanity/structure'

const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE

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
      previewUrl: {
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
    codeInput(),
    structureTool(),
    unsplashImageAsset(),
    visionTool({ defaultApiVersion: apiVersion }),
    ...(process.env.NODE_ENV === 'development' ? [debugSecrets()] : []),
  ].filter(Boolean),
})
