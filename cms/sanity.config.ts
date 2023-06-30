import { projectId, dataset, projectTitle } from './lib/sanity.api'
import { theme } from 'https://themer.sanity.build/api/hues?primary=68b3f0'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import DocumentsPane from 'sanity-plugin-documents-pane'
import { media } from 'sanity-plugin-media'
import initialValue from './schemas/templates/initialValue'
import { structure } from './desk/'

import { netlifyTool } from 'sanity-plugin-netlify'


const defaultDocumentNodeResolver = (S) =>
  S.document().views([
    S.view.form(),
    S.view
      .component(DocumentsPane)
      .options({
        query: `*[!(_id in path("drafts.**")) && references($id)]`,
        params: { id: `_id` },
      })
      .title('Incoming References'),
  ])

let sharedPlugins = [
  media(),
  netlifyTool(),
]

if (process.env.NODE_ENV == "development") {
  sharedPlugins.push(visionTool())
}

const productionUrl = async (prev, context) => {
  const previewHash = "77ce18c3317165749f0dc37b42cb251f"
  let domain = process.env.NODE_ENV == "development" ? "http://localhost:3000" : "{siteURL}"
  // context includes the client an other details
  const { document } = context
  const included = [
    "event",
    "person",
    'media',
    "post",
    "pageChairs",
    "home",
    "page",

  ]
  if (included.includes(document._type)) {
    return `${domain}/preview/${previewHash}/${document._id}`
  }

  return prev
}

const base = {
  projectId,
  basePath: '/  ',
  title: projectTitle,
  sharedPlugins,
  document: {
    productionUrl
  },
  schema: {
    types: schemaTypes,
    templates: (prev) => [
      ...prev,
      ...initialValue
    ]
  },
}

export default defineConfig([
  {
    ...base,
    theme,
    name: 'default',
    dataset: 'production',
    basePath: '/main',
    plugins: [
      deskTool({
        structure: structure,
        defaultDocumentNode: defaultDocumentNodeResolver,
      }),
      ...base.sharedPlugins,
    ]
  }
]
)

