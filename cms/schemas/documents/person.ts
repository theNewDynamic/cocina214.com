import { defineType, defineField } from 'sanity'
import { personOrdering as orderings } from '../orderings'
import { SlUserFemale as icon } from "react-icons/sl";
import { image,  slug } from '../fields';

export default defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  icon,
  orderings,
  fieldsets: [
    {
      name: 'name',
      title: 'Full Name',
      hidden: true,
      options: { columns: 2 },
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Name',
      type: 'string',
    },
    {
      name: "job_title",
      title: "Title",
      type: "string",
    },
    {
      ...slug,
      hidden: true,
    },
    {
      name: 'first_name',
      title: 'First Name',
      type: 'string',
      fieldset: 'name',
    },
    {
      name: 'last_name',
      title: 'Last Name',
      type: 'string',
      fieldset: 'name',
    },
    {
      name: "associations",
      type: "array",
      hidden: true,
      of: [
        { type: "string" }
      ],
    },
    image,    
    {
      name: 'body',
      title: "Body",
      type: "blockContent",
      hidden: true,
    },
  ],
  initialValue: {
    associations: ['staff']
  },
  preview: {
    select: {
      title: 'title',
      associations: 'associations',
      position: 'job_title',
      image: 'image.asset'
    },
    prepare({ title, image, associations, position }) {
      let subtitle = associations ? associations.join(', ') : 'No association'
      let subtitle_strings = []
      if(associations?.includes('staff') && position) {
        subtitle_strings.push(`Staff, ${position}`)
      }
      return {
        title,
        media: image,
        subtitle: subtitle_strings.length ? subtitle_strings.join(', ') : subtitle,
      }
    }
  }
})