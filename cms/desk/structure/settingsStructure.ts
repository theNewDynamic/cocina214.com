import { ListItemBuilder } from 'sanity/desk'
import defineStructure from './defineStructure'
import { IoSettingsOutline } from 'react-icons/io5'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Site')
    .icon(IoSettingsOutline)
    .child(
      S.list()
        .title('Settings')
        .showIcons(false)
        .items([
          S.listItem()
            .title('Metadata')
            .child(S
              .document()
              .schemaType('siteSettings')
              .documentId('siteSettings')),
          S.listItem()
            .title('Navigation')
            .child(S
              .document()
              .schemaType('navigation')
              .documentId('navigation')
            ),
        ]))
)
