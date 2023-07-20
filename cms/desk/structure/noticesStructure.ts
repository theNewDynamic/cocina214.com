import { ListItemBuilder } from 'sanity/desk'
import defineStructure from './defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Notices')
    .child(
      S.documentTypeList('notice')
       // .showIcons(false)
    ),
)

