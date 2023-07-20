import { ListItemBuilder } from 'sanity/desk'
import defineStructure from './defineStructure'
import { IoHomeOutline } from 'react-icons/io5'
import { Preview } from '../views/Preview'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Home Page')
    .icon(IoHomeOutline)
    .child(
      S.document()
        .title('Home')
        .schemaType('home')
        .documentId('home')
        .views([
          S.view.form(),
          Preview(S)
        ])
    ),

)

