import { ListItemBuilder } from 'sanity/desk'
import defineStructure from './defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('About Page')
    .child(
      S.document()
        .title('About')
        .schemaType('pageAbout')
        .documentId('pageAbout')
    ),

)

