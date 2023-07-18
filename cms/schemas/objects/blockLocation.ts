import { defineType } from "sanity"
import { MdOutlinePinDrop as icon } from "react-icons/md"
import { reference } from "../fields"
export default defineType({
  name: 'blockLocation',
  title: 'Location',
  type: 'object',
  icon,
  fields: [
    reference('location')
  ],
  preview: {
    select: {
      location: 'location.title',
    },
    prepare({ location }) {
      return {
        title: "Location",
        subtitle: location,
        icon,
      }
    }
  }
})