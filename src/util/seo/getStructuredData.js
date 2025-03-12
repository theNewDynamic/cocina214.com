import { getData } from "."
import { parseEvent, parseBase } from "./sd"

/**
 *
 * @param {*} entry
 * @returns The structured data as per the https://schema.org specifications.
 */
const getStructuredData = (entry) => {
  const data = getData(entry)
  let output = parseBase(data)
  if(data._type == "event") {
    output = {
      ...output,
      ...parseEvent(data)
    }
  }

  return output
}
export default getStructuredData