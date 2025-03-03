
import { getCollection } from "astro:content"


const _collections = {
  singletons: await getCollection('singletons'),
  pages: await getCollection('pages'),
  persons: await getCollection('persons'),
  posts: await getCollection('posts'),
  taxonomyCategories: await getCollection('taxonomyCategories'),
  events: await getCollection('events'),
  locations: await getCollection('locations'),
  products: await getCollection('products')
}

// Apply the parse function to all collections
const collections = Object.fromEntries(
  Object.entries(_collections).map(([key, value]) => [key, value.map((e) => ({
    id: e.id,
    collection: e.collection,
    ...e.data, // Flatten the data directly here
  }))])
);

export const singletons = collections.singletons
export const pages = collections.pages
export const persons = collections.persons
export const posts = collections.posts
export const taxonomyCategories = collections.taxonomyCategories
export const events = collections.events
export const locations = collections.locations
export const products = collections.products

export const home = collections.singletons.find(s => s.home)

const _collectionsRefs = Object.values(collections)
  .flat()
  .reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});

export const collectionsRefs = _collectionsRefs