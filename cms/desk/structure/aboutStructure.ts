import { ListItemBuilder } from 'sanity/desk'
import defineStructure from './defineStructure'
import { Preview } from '../views/Preview'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('About Page')
    .child(
      S.document()
        .title('About')
        .schemaType('pageAbout')
        .documentId('pageAbout')
        .views([
          S.view.form(),
          Preview(S)
        ])
    ),

)

