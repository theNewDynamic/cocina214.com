
import page from './documents/page'
import post from './documents/post'
import location from './documents/location'
import homepage from './singletons/homepage'
import pageAbout from './singletons/pageAbout'
import siteSettings from './singletons/siteSettings'
import navigation from './singletons/navigation'
import blockContent from './objects/blockContent'
import blockSimple from './objects/blockSimple'
import BlockText from './blocks/text'
import BlockEntries from './blocks/entries'
import BlockSection from './blocks/section'
import person from './documents/person'
import taxonomyCategory from './documents/taxonomyCategory'
import notice from './documents/notice'

export const schemaTypes = [
  // DOCUMENTS
  page,
  post,
  person,
  location,
  notice,
  taxonomyCategory,
  // SINGLETONS
  homepage,
  pageAbout,
  siteSettings,
  navigation,

  // BLOCKS (for Page builders)
  BlockText,
  BlockEntries,
  BlockSection,
  // Objects (mostly CMS components/shortcodes)
  blockContent,
  blockSimple,

]