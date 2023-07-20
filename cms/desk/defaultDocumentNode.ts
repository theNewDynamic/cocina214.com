import { DefaultDocumentNodeResolver } from 'sanity/desk'
import { includePreview } from '../sanity.api'
import { Preview } from './views/Preview'
import { incomingReferences } from './views/incomingReferences'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) => {

  const showPreview = includePreview.includes(schemaType)

  if (showPreview) {
    return S.document().views([
      S.view.form(),
      Preview(S),
      incomingReferences(S)
    ])
  } else {
    return S.document().views([
      S.view.form(),
      incomingReferences(S)
    ])
  }
}
