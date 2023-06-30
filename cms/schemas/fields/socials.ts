import { defineField } from 'sanity'
// import {FiFacebook } from 'react-icons/fi'

// - [ ] Add icons to preview for each item


const NETWORKS = [
  { title: 'Facebook', value: 'facebook' },
  { title: 'Twitter', value: 'twitter' },
  { title: 'Instagram', value: 'instagram' },
  { title: 'Mastodon', value: 'mastodon' }
]

export default defineField({
  name: 'socialLinks',
  title: 'Social Links',
  type: 'array',
  of: [
    {
      name: 'network',
      title: "Network",
      type: 'object',
      fields: [
        {
          name: 'network',
          type: 'string',
          title: 'Network',
          options: {
            list: NETWORKS
          }
        },
        { name: 'handle', type: 'string', title: 'Handle/ID' },
      ]
    }],
})




