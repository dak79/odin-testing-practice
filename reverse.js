export const reverse = (str) => {
  if (typeof str !== 'string') return 'Input must be string'
  return str.split('').reverse().join('')
}
