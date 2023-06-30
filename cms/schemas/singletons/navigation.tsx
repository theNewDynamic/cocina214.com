import { defineField, defineType } from 'sanity'
import {RxRows as icon} from 'react-icons/rx'

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  icon: icon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      hidden: true,
      initialValue: 'Main Menu',
    }),
    defineField({
      name: 'navigation',
      title: 'Nav Items',
      type: 'array',
      of: [{
        name: "internal",
        title: "Internal",
        type: 'object',
        fields: [
          { name: 'name', type: 'string' },
          { name: 'link', type: 'reference', to: [
              { type: 'home' },
              { type: 'page' },              
            ],
          }
        ]
      }, {
        name: "external",
        title: "External",
        type: "object",
        fields: [
          { name: 'name', type: 'string' },
          { name: 'url', title: "URL", type: 'url' },
        ]
      }]



    }),
  ],
  preview: {    
    prepare() {
      const title = "Main Menu"
      return {
        title: title,        
      }
    }
  }
})
