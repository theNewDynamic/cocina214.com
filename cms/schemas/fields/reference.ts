import { defineField } from "sanity"

export default (ref_types,　params = {}) => {
  let types = ref_types
  if(!Array.isArray(ref_types)) {
    types = [ref_types] 
  }
  let name = types[0]
  const to = types.map(type => ({
    type,
  }))
  return defineField({
    name,
    type: "reference",
    to,
    ...params,
  })
}