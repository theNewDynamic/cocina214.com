import {defineField, defineType} from 'sanity'
import socials from '../fields/socials'

// schemas/siteSettings.js
export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',      
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text'
    },
    {
      name: 'notice',
      title: 'Site Notice',
      description: "special notice to show at top of site",
      type: 'blockSimple'
    },
    defineField({
      name: 'navImage',
      title: 'NAV image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

   
    socials



  ],
  preview: {
    prepare() {
      const title = "Site Settings "
      return {
        title: title,        
      }
    }
  }
})


