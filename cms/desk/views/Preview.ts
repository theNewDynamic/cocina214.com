import { SanityDocument } from 'sanity';
import Iframe from 'sanity-plugin-iframe-pane';
import { getPreviewUrl } from '../getPreviewUrl';

export const Preview = (S) => {
  return S.view.component(Iframe).title('Preview')
    .options({
      url: (doc: SanityDocument) => getPreviewUrl(doc),
      showDisplayUrl: false,
      loader: true,
      reload: {
        button: true,
        revision: true,
      },
      attributes: {
        referrerPolicy: 'strict-origin-when-cross-origin',
        sandbox: 'allow-same-origin',
      }
    })
}

