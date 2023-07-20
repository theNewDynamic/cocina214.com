import { SanityDocument } from 'sanity';
import { includePreview, domain, previewHash } from '../sanity.api';

export const getPreviewUrl = (doc: SanityDocument) => {
  const showPreview = includePreview.includes(doc._type);
  if (showPreview) {
    return `${domain}/preview/${previewHash}/${doc._id}`;
  }
}
