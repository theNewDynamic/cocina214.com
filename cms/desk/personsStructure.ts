import { ListItemBuilder } from 'sanity/desk'
import defineStructure from './defineStructure'
import { IoNewspaperOutline as icon } from 'react-icons/io5'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Staff')
    .icon(icon)
    .child(
      S.documentTypeList('person')
        .showIcons(false)
        .defaultOrdering([{ field: 'title', direction: 'asc' }])
    ),
)

