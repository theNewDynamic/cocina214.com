/**
 * Desk structure overrides
 */
import { ListItemBuilder, StructureResolver } from 'sanity/desk'


import home from './homeStructure'
import posts from './postsStructure'
import persons from './personsStructure'
import settings from './settingsStructure'


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
      S.divider(),
      posts(S, context),
      S.divider(),
      persons(S, context),
      settings(S, context),
      // Unhide the documentTypeListItems to configure desk
      //...S.documentTypeListItems().filter(hiddenDocTypes),

    ])
