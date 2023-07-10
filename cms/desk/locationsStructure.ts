import { ListItemBuilder } from 'sanity/desk'
import defineStructure from './defineStructure'
import { MdOutlinePinDrop as icon } from "react-icons/md"

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Locations')
    .icon(icon)
    .child(
      S.documentTypeList('location')
       // .showIcons(false)
    ),
)

