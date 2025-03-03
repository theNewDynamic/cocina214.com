
/**
 * Returns the entries set as 'future' and sorted asc
 * @param {array} entry
 * @returns {object[]}
 */
export const getFuture = (entries) => {
  return entries.filter(e => e.future).sort((a, b) => new Date(a.time_start) - new Date(b.time_start))
}

/**
 * Returns the entries not set as 'future' in their original order
 * @param {array} entry
 * @returns {object[]}
 */
export const getPast = (entries) => {
  return entries.filter(e => !e.future)
}