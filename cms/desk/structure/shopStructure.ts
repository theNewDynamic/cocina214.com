import { ListItemBuilder } from 'sanity/desk'
import defineStructure from './defineStructure'
import { AiOutlineShop as icon, AiOutlineShopping, AiOutlineTag as taxIcon } from 'react-icons/ai'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Shop')
    .icon(icon)
    .child(
      S.list().title('Shop')
        .items([
          S.listItem()
            .icon(icon)
            .title('Shop Page')
            .child(S.document()
              .schemaType('pageShop')
              .documentId('pageShop')
            ),
          S.listItem()
            .title('Products')
            .icon(AiOutlineShopping)
            .child(
              S.documentTypeList('product')
                .showIcons(false)
                .defaultOrdering([{ field: 'title', direction: 'asc' }])
            ),
          S.listItem()
            .title('Categories')
            .icon(taxIcon)
            .child(
              S.documentTypeList('taxonomyProductCategory')
                .showIcons(false)
                .defaultOrdering([{ field: 'title', direction: 'asc' }])
            ),
        ])
    ),
)




