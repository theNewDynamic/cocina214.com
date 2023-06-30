import { defineType } from "sanity"
import { BsCodeSlash as icon} from 'react-icons/bs'
export default defineType(    {
  name: 'blockHTML',
  title: 'HTML',
  type: 'object',
  fields: [
    {
      name: "title",
      type: "string",
      description: "optional"
    },
    {
      name: 'html',
      type: 'text',
      title: 'HTML',
    }
  ],
  preview: {
    select: {
      html: 'html',
    },
    prepare({ html }) {
      return {
        title: "HTML",
        subtitle: html,
        media: icon
      }
    }
  }
})