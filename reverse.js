/**
 * Reverse a string
 * @param {String} str
 * @returns
 */
export const reverse = (str) => {
  if (typeof str !== 'string') return 'Input must be string'
  return str.split('').reverse().join('')
}
