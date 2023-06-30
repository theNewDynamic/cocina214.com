import { ListItemBuilder } from 'sanity/desk'
import defineStructure from './defineStructure'
import { IoCalendarOutline as icon, IoPinSharp, IoReorderFourSharp } from 'react-icons/io5'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Events')
    .icon(icon)
    .child(
      S.list()
        .title('Filters')
        .items([
          S.listItem()
            .title('Events')
            .icon(icon)
            .child(
              S.documentTypeList('event')
                .showIcons(false)
                .defaultOrdering([{ field: 'time_start', direction: 'desc' }])
            ),
          S.listItem()
            .title('Venues')
            .icon(IoPinSharp)
            .child(
              S.documentTypeList('venue')
                .showIcons(false)
                .defaultOrdering([{ field: 'title', direction: 'asc' }])
            ),           
            
        ])
    ),
)
