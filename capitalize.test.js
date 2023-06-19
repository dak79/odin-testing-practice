import { capitalize } from './capitalize'

test('Input Number', () => {
  expect(capitalize(12122)).toBe('Input must be string')
})

test('Input: Boolean', () => {
  expect(capitalize(true)).toBe('Input must be string')
})

test('Input: Array', () => {
  expect(capitalize(['a', 1, true, { name: 'Peter' }])).toBe(
    'Input must be string'
  )
})

test('String with one word capitalized', () => {
  expect(capitalize('minimum')).toBe('Minimum')
})

test('String with more word capitalized', () => {
  expect(capitalize('minimum talent or not')).toBe('Minimum talent or not')
})

test('String 123 capitalized', () => {
  expect(capitalize('123')).toBe('123')
})
