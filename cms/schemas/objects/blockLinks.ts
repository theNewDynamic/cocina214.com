import { defineType } from "sanity"
import { BsFiles } from 'react-icons/bs'
import { links } from "../fields"
export default defineType(    {
  name: 'blockLinks',
  title: 'Buttons',
  type: 'object',
  fields: [
    {
      ...links,
      title: "Buttons"
    }
  ],
  preview: {
    select: {
      links: 'links',
    },
    prepare({ links }) {
      return {
        title: "Buttons",
        subtitle: links && links.length ? links.length + ' Button' : 'No button yet',
        media: BsFiles
      }
    }
  }
})