/**
 * Capitalize string
 * @param {String} str
 * @returns
 */
export const capitalize = (str) => {
  if (typeof str !== 'string') return 'Input must be string'
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
}
