import { ListItemBuilder } from 'sanity/desk'
import defineStructure from './defineStructure'
import { IoNewspaperOutline as icon } from 'react-icons/io5'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Other Pages')
    .icon(icon)
    .child(
      S.documentTypeList('page')
        .showIcons(false)
        .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
    ),
)

