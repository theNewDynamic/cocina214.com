import { defineType } from "sanity"
import { AiOutlineYoutube } from 'react-icons/ai'
import { TfiVimeo } from 'react-icons/tfi'
export default defineType(    {
  name: 'blockVideo',
  title: 'Video',
  type: 'object',
  fields: [
    {
      name: 'id',
      type: 'string',
      title: 'Video ID',
    }
  ],
  preview: {
    select: {
      id: 'id',
    },
    prepare({ id }) {
      let service = "youtube"
      let reg = new RegExp(`/^\d+$/`)
      if (reg.test(id)){
        service = "vimeo"
      }
      return {
        title: "Video",
        subtitle: `${id} (${service})`,
        media: service == "youtube" ? AiOutlineYoutube : TfiVimeo,
      }
    }
  }
})