/**
 * Desk structure overrides
 */
import { ListItemBuilder, StructureResolver } from 'sanity/desk'


import home from './homeStructure'
import posts from './postsStructure'
import persons from './personsStructure'
import pages from './pagesStructure'
import notices from './noticesStructure'
import locations from './locationsStructure'
import settings from './settingsStructure'
import about from './aboutStructure'
import shop from './shopStructure'

// If you add document types to desk structure manually, you can add them to this function to prevent duplicates in the root pane
const hiddenDocTypes = (listItem: ListItemBuilder) => {
  const id = listItem.getId()

  if (!id) {
    settings
    return false
  }

  return ![
    'media.tag',
    'home'
  ].includes(id)
}

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      home(S, context),
      notices(S, context),
      posts(S, context),
      S.divider(),
      about(S, context),
      persons(S, context),
      locations(S, context),
      pages(S, context),
      S.divider(),
      shop(S, context),
      S.divider(),
      // settings(S, context),
      // Unhide the documentTypeListItems to configure desk
      //...S.documentTypeListItems().filter(hiddenDocTypes),

    ])
