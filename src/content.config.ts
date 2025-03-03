import { getEvents, getLocations, getPages, getPosts, getProducts, getSingletons, getStaffMembers, getTaxonomyCategories } from "@data/sanity/api";
import { defineCollection } from "astro:content";

const getter = async (params: {
  process: Function,
  title: string,
}) => {
  const { process, title } = params
  const start = performance.now(); // Start time
  // Function or code block you want to measure
  const data = await process()
  const end = performance.now(); // End time
  const time = end - start
  const output = time >= 1000 ?
    (time / 1000).toFixed(2) + 's' :
    time.toFixed() + 'ms'

  console.log(`  📟 Getting ${title} (+${output})`)
  return data
}

const singletons = defineCollection({
  loader: async () => {
    return await getter({process: getSingletons, title: 'Singletons'})
  }
})

const pages = defineCollection({
  loader: async () => {
    return await getter({process: getPages, title: 'Pages'})
  }
})

const posts = defineCollection({
  loader: async () => {
    return await getter({process: getPosts, title: 'Posts'})
  }
})

const taxonomyCategories = defineCollection({
  loader: async () => {
    return await getter({process: getTaxonomyCategories, title: 'Categories'})
  }
})

const events = defineCollection({
  loader: async () => {
    return await getter({process: getEvents, title: 'Events'})
  }
})

const locations = defineCollection({
  loader: async () => {
    return await getter({process: getLocations, title: 'Locations'})
  }
})

const persons = defineCollection({
  loader: async () => {
    return await getter({process: getStaffMembers, title: 'Persons'})
  }
})

const products = defineCollection({
  loader: async () => {
    return await getter({process: getProducts, title: 'Products'})
  }
})

export const collections = {
  singletons,
  pages,
  posts,
  taxonomyCategories,
  locations,
  persons,
  products,
}