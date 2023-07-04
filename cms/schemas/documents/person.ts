import { defineType, defineField } from 'sanity'
import { personOrdering as orderings } from '../orderings'
import { SlUserFemale as icon } from "react-icons/sl";
import { image, associations, description, slug, reference } from '../fields';

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
      options: { columns: 2 },
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Full Name',
      type: 'string',
    },
    slug,
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
      name: "job_title",
      title: "Title",
      type: "string",
    },
    description,
    {
      name: 'body',
      title: "Body",
      type: "blockContent"
    },
  ],
  initialValue: {
    associations: ['staff']
  },
  preview: {
    select: {
      title: 'title',
      associations: 'associations',
      position: 'position',
      image: 'image.asset'
    },
    prepare({ title, image, associations, academic_year, position }) {
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