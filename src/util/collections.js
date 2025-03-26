import { collectionsRefs } from "@data/collections"

/**
 *
 * @param {string} id The referenced entry's id.
 * @returns {object}
 *
 * @example
 *  const entry = getRef('8934e3derer');
 */
export const getRef = (id) => {
  const found = collectionsRefs[id]
  return !!found ? found : false
}

/**
 *
 * @param {string[]} ids The referenced entries' ids.
 * @returns {object[]}
 *
 * @example
 * const entries = getRefs(['8934e3derer', 'erer8939r']);
 */
export const getRefs = (entries) => {
  if(!entries) {
    return []
  }
  const entriesOutput = entries.map(e => getRef(e))
  // We only return successful getRef
  return entriesOutput.filter(e => e)
}