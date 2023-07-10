import { defineType } from "sanity"
import { BsFiles } from 'react-icons/bs'
export default defineType(    {
  name: 'blockFiles',
  title: 'Menus',
  type: 'object',
  fields: [
    {
      name: 'files',
      title: 'Menus',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string'
            },
            {
              name: 'file',
              type: 'file'
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      files: 'files',
    },
    prepare({ files }) {
      return {
        title: "Menus",
        subtitle: files && files.length ? files.length + ' Menu' + (files.length > 1 ? 's' : '') : 'No files yet',
        media: BsFiles
      }
    }
  }
})