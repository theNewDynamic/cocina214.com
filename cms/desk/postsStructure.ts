import { ListItemBuilder } from 'sanity/desk'
import defineStructure from './defineStructure'
import { IoNewspaperOutline as icon } from 'react-icons/io5'
import { AiOutlineTag as taxIcon} from 'react-icons/ai'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('News')
    .icon(icon)
    .child(
      S.list().title('Shop')
      .items([
        S.listItem()
        .title('News Entries')
        .icon(icon)
        .child(
          S.documentTypeList('post')
            .showIcons(false)
            .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
        ),
        S.listItem()
        .title('Categories')
        .icon(taxIcon)
        .child(
          S.documentTypeList('taxonomyCategory')
            .showIcons(false)
            .defaultOrdering([{ field: 'title', direction: 'asc' }])
        ),
      ])

    ),
)

