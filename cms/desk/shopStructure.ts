import { ListItemBuilder } from 'sanity/desk'
import defineStructure from './defineStructure'
import { AiOutlineShop as icon, AiOutlineShopping } from 'react-icons/ai'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Shop')
    .icon(icon)
    .child(
      S.list().title('Shop')
        .items([
          S.listItem()
            .title('All Products')
            .icon(AiOutlineShopping)
            .child(
              S.documentTypeList('product')
                .showIcons(false)
                .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
            ),
          S.listItem()
            .icon(icon)
            .title('Shop Page')
            .child(S.document()
              .schemaType('pageShop')
              .documentId('pageShop')
            ),
        ])
    ),
)




