import { projectId, dataset, projectTitle } from './lib/sanity.api'
import { theme } from 'https://themer.sanity.build/api/hues?primary=68b3f0'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { media } from 'sanity-plugin-media'
import initialValue from './schemas/templates/initialValue'
import { dashboard } from './desk/dashboard'
import { structure } from './desk/structure'
import { defaultDocumentNode } from './desk/defaultDocumentNode'
import { netlifyTool } from 'sanity-plugin-netlify'

let sharedPlugins = [
  dashboard,
  media(),
  netlifyTool(),
]

if (process.env.NODE_ENV == "development") {
  sharedPlugins.push(visionTool())
}

const base = {
  schema: {
    types: schemaTypes,
    templates: (prev: any) => [
      ...prev,
      ...initialValue
    ]
  },
}

const production = {
  ...base,
  title: projectTitle,
  projectId,
  theme,
  name: 'default',
  dataset,
  basePath: '/main',
  plugins: [
    deskTool({
      structure: structure,
      defaultDocumentNode
    }),
    ...sharedPlugins,
  ]
}

const staging = {
  ...base,
  title: projectTitle + ' Dev',
  projectId,
  theme,
  name: 'staging',
  dataset: 'production',
  basePath: '/dev',
  plugins: [
    deskTool({
      structure: structure,
      defaultDocumentNode
    }),
    ...sharedPlugins,
  ],
}

let workspace = [production]

if (process.env.NODE_ENV == "development") {
  workspace = [production, staging]
}

export default defineConfig(
  workspace
)

