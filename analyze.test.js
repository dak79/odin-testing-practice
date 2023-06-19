/** An analyzeArray function that takes an array of numbers and returns an
 * object with the following properties: average, min, max, and length.
 *    const object = analyzeArray([1,8,3,4,2,6]);
 *        object == {
 *          average: 4,
 *          min: 1,
 *          max: 8,
 *          length: 6
 *          };
 */
import { analyzeArray } from './analyze'

const object = analyzeArray([1, 8, 3, 4, 2, 6])
const object1 = analyzeArray([1, 4, 5, 9, 12, 34, 49, 1, 23])
const object2 = analyzeArray([10, 24, 54, 159, 123, -2, 0])

describe('analyzeArray()', () => {
  it('accepts only array as argument, no string', () => {
    expect(analyzeArray('array')).toBe('Invalid Input')
  })

  it('accepts only array as argument, no numbers', () => {
    expect(analyzeArray(1234)).toBe('Invalid Input')
  })

  it('accepts only array as argument, no objects', () => {
    expect(analyzeArray({ a: 1, b: 2, 3: 'c' })).toBe('Invalid Input')
  })

  it('accepts only array as argument, no undefined', () => {
    expect(analyzeArray(undefined)).toBe('Invalid Input')
  })

  it('accepts only array aa argument, no NaN', () => {
    expect(analyzeArray(NaN)).toBe('Invalid Input')
  })

  it('accepts only array as argument, no null', () => {
    expect(analyzeArray(null)).toBe('Invalid Input')
  })

  it('must have an argument', () => {
    expect(analyzeArray()).toBe('Invalid Input')
  })

  it('has an array argument with items type number, no booleans', () => {
    expect(analyzeArray([1, 2, true])).toBe('Invalid Input')
  })

  it('has an array argument with items type number, no strings', () => {
    expect(analyzeArray([1, 2, 'c'])).toBe('Invalid Input')
  })

  it('has an array argument with items type number, no objects', () => {
    expect(analyzeArray([1, 2, [1, 23]])).toBe('Invalid Input')
  })

  it('has an array argument with items type number, no NaN', () => {
    expect(analyzeArray([1, 2, NaN])).toBe('Invalid Input')
  })
  it('has an array argument with items type number, no undefined', () => {
    expect(analyzeArray([1, 2, undefined])).toBe('Invalid Input')
  })

  it('has an array argument with items type number, no null', () => {
    expect(analyzeArray([1, 2, null])).toBe('Invalid Input')
  })

  it('return an objetct with average property', () => {
    expect(object).toHaveProperty('average')
  })

  it('return an object with average: 4', () => {
    expect(object).toHaveProperty('average', 4)
  })

  it('return an object with average: 15.33', () => {
    expect(object1).toHaveProperty('average', 15.33)
  })

  it('return an object with average: 52.57', () => {
    expect(object2).toHaveProperty('average', 52.57)
  })

  it('return an objetct with min property', () => {
    expect(object).toHaveProperty('min')
  })

  it('return an object with min: 1', () => {
    expect(object).toHaveProperty('min', 1)
  })

  it('return an object with min: 1', () => {
    expect(object1).toHaveProperty('min', 1)
  })

  it('return an object with min: 0', () => {
    expect(object2).toHaveProperty('min', -2)
  })

  it('return an objetct with max property', () => {
    expect(object).toHaveProperty('max')
  })

  it('return an objetct with max property', () => {
    expect(object).toHaveProperty('max', 8)
  })

  it('return an objetct with max property', () => {
    expect(object1).toHaveProperty('max', 49)
  })

  it('return an objetct with max property', () => {
    expect(object2).toHaveProperty('max', 159)
  })

  it('return an objetct with length property', () => {
    expect(object).toHaveProperty('length')
  })

  it('return an object with length: 6', () => {
    expect(object).toHaveProperty('length', 6)
  })

  it('return an object with average: 9', () => {
    expect(object1).toHaveProperty('length', 9)
  })

  it('return an object with length: 7', () => {
    expect(object2).toHaveProperty('length', 7)
  })
})
