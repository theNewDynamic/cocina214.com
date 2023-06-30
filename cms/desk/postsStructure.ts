import { ListItemBuilder } from 'sanity/desk'
import defineStructure from './defineStructure'
import { IoNewspaperOutline as icon } from 'react-icons/io5'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('News')
    .icon(icon)
    .child(
      S.documentTypeList('post')
        .showIcons(false)
        .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
    ),
)

