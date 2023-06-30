import { defineField } from "sanity"

export default (ref_types,　params = {}) => {
  let types = ref_types
  if(!Array.isArray(ref_types)) {
    types = [ref_types] 
  }
  let name = types[0] + 's'
  const to = types.map(type => ({
    type,
  }))
  return defineField({
    name,
    type: "array",
    of: [
      {
        type: "reference",
        to
      }
    ],
    ...params,
  })
}