import type { FormType } from '@forms/types'

const form: FormType = {
  netlify: {
    id: 'contact'
  },
  captcha: true,
  redirect: "/thank-you/",
  fields: [
    {
      name: 'name',
      required: true,
      label: 'Name',
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'phone'
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea'
    }
  ]
}

export default form