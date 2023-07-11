
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
import BlockLocation from './blocks/location'
import BlockForm from './blocks/form'
import person from './documents/person'
import taxonomyCategory from './documents/taxonomyCategory'
import notice from './documents/notice'
import pageShop from './singletons/pageShop'
import product from './documents/product'
import taxonomyProductCategory from './documents/taxonomyProductCategory'
export const schemaTypes = [
  // DOCUMENTS
  page,
  post,
  person,
  product,
  location,
  notice,
  taxonomyCategory,
  taxonomyProductCategory,
  // SINGLETONS
  homepage,
  pageAbout,
  siteSettings,
  navigation,
  pageShop,
  // BLOCKS (for Page builders)
  BlockText,
  BlockEntries,
  BlockSection,
  BlockLocation,
  BlockForm,
  // Objects (mostly CMS components/shortcodes)
  blockContent,
  blockSimple,

]