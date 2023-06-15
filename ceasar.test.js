/**
 * A caesarCipher function that takes a string and a shift factor and returns
 * it with each character “shifted”. Read more about how a Caesar cipher works
 * on this website.
 *
 *  Don’t forget to test wrapping from z to a.
 *  Don’t forget to test keeping the same case.
 *  Don’t forget to test punctuation!
 *
 * For this one, you may want to split the final function into a few smaller
 * functions. One concept of Testing is that you don’t need to explicitly test
 * every function you write… Just the public ones. So in this case you only
 * need tests for the final caesarCipher function. If it works as expected you
 * can rest assured that your smaller helper functions are doing what they’re
 * supposed to.
 */

import { CaesarCipher } from './ceasar'
const cipher = CaesarCipher()

describe('Caesar CaesarCipher API', () => {
  it('has an .encrypt() method', () => {
    expect(cipher).toHaveProperty('encrypt')
  })

  it('has a .decrypt() method', () => {
    expect(cipher).toHaveProperty('decrypt')
  })
})

describe('.encrypt() method', () => {
  it('does not accept a number as first parameter', () => {
    expect(cipher.encrypt(1111, 1)).toBe('Invalid input')
  })

  it('does not accept a boolean as first parameter', () => {
    expect(cipher.encrypt(true, 1)).toBe('Invalid input')
  })

  it('does not accept an object as first parameter', () => {
    expect(cipher.encrypt(['i', 1, true], 1)).toBe('Invalid input')
  })

  it('does not accept an undefined as first parameter', () => {
    expect(cipher.encrypt(undefined, 1)).toBe('Invalid input')
  })

  it('does not accept an null as first parameter', () => {
    expect(cipher.encrypt(null, 1)).toBe('Invalid input')
  })

  it('does not accept NaN as first parameter', () => {
    expect(cipher.encrypt(NaN, 1)).toBe('Invalid input')
  })

  it('does not accept a string as second parameter', () => {
    expect(cipher.encrypt('help', 'help')).toBe('Invalid input')
  })

  it('does not accept a boolean as second parameter', () => {
    expect(cipher.encrypt('help', true)).toBe('Invalid input')
  })

  it('does not accept an object as second parameter', () => {
    expect(cipher.encrypt('help', [1, 'i', true])).toBe('Invalid input')
  })

  it('does not accept an undefined as second parameter', () => {
    expect(cipher.encrypt('help', undefined)).toBe('Invalid input')
  })

  it('does not accept an null as second parameter', () => {
    expect(cipher.encrypt('help', null)).toBe('Invalid input')
  })

  it('does not accept NaN as second parameter', () => {
    expect(cipher.encrypt('help', NaN)).toBe('Invalid input')
  })

  it('must have two parameter', () => {
    expect(cipher.encrypt('help')).toBe('Invalid input')
  })
})
// Test trim, test case insensitive, test punctuation and test vrapping from z
// to a.
