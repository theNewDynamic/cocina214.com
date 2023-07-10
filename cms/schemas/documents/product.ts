import { defineType } from 'sanity'
import { title, seo, slug, date, description, image, hero } from '../fields'
import { defaultOrdering as orderings } from '../orderings'
import { IoDocumentTextOutline as icon } from 'react-icons/io5'

export default defineType({
  name: 'product',
  title: 'Product',
  icon,
  type: 'document',
  orderings,
  groups: [
    {
      name: 'sales_data',
      title: 'Sales Data',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'images',
      title: 'Images',
    },
    {
      name: 'related',
      title: 'Related Items',
    },
  ],
  fields: [
    title,
    slug,
    date,
    description,
    {
      type: "array",
      name: "images",
      of: [
        {type: "image"}
      ]
    },
    {
      type: 'object',
      name: 'sales_data',
      group: "sales_data",
      fields: [
        {
          type: 'string',
          name: 'sku'
        },
        {
          type: 'boolean',
          name: 'for_sale'
        },
        {
          type: 'number',
          name: 'price'
        },
        {
          type: 'number',
          name: 'shipping_weight'
        },
        {
          type: "array",
          name: "sizes",
          of: [{type: "string"}]
        }
      ]
    },
    {
      name: 'body',
      type: 'blockContent',      
    }
  ],

  preview: {
    select: {
      title: 'title',
      association: 'association',
      subscription: 'sales_data.subscription',
      media: 'image.asset'

    },
    prepare({ title, subscription, association, media }) {
      const subtitle = association == "subscription" && subscription ? `Subscription: ${subscription}` : association

      return {
        title: title,
        subtitle,
        media
      }
    },
  },
})
