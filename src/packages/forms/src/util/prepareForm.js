import getFormAction from "./getFormAction"
import prepareField from "./prepareField"
import config from 'virtual:tnd-forms-config'

export default (data) => {
  const {
    title,
    name,
    method = "POST",
    charset="UTF-8",
    fields,
    attributes,
    submitCopy = config.submitCopy || "Submit",
    components,
    redirect,
    subject,
    cc,
    captcha = false,
    netlify = false,
    formspree = false
  } = data
  let hiddenFields = []
  if(formspree && cc){
    hiddenFields.push({
      name: "_cc",
      value: cc
    })
  }
  if(formspree && redirect) {
    hiddenFields.push({
      name: "_next",
      value: redirect
    })
  }
  if(formspree && subject) {
    hiddenFields.push({
      name: "_next",
      value: subject
    })
  }
  const service = formspree ? 'formspree' : netlify ? 'netlify' : false
  const preparedForm = {
    title,
    method,
    name: name || netlify && netlify.id,
    charset,
    attributes,
    submitCopy,
    action: getFormAction(data),
    service,
    captcha,
    enctype: fields.find(field=>field.type == "file") && "multipart/form-data",
    hiddenFields,
    components,
  }
  const preparedFields = fields && fields.length && fields.map(field => prepareField(field, preparedForm))
  return {
    ...preparedForm,
    fields: preparedFields,
  }
}