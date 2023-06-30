import event from './documents/event'
import page from './documents/page'
import post from './documents/post'
import venue from './documents/venue'
import homepage from './singletons/homepage'
import siteSettings from './singletons/siteSettings'
import navigation from './singletons/navigation'
import blockContent from './objects/blockContent'
import blockSimple from './objects/blockSimple'
import BlockText from './blocks/text'
import BlockPosts from './blocks/posts'
import person from './documents/person'
import taxonomySection from './documents/taxonomySection'

export const schemaTypes = [
  // DOCUMENTS
  page,
  post,
  person,
  event,
  venue,
  taxonomySection,
  // SINGLETONS
  homepage,
  siteSettings,
  navigation,

  // BLOCKS (for Page builders)
  BlockText,
  BlockPosts,

  // Objects (mostly CMS components/shortcodes)
  blockContent,
  blockSimple,

]