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

  it('use Cesar cipher and encrypt by 1', () => {
    expect(cipher.encrypt('hello', 1)).toBe('ifmmp')
  })

  it('use Cesar cipher and encrypt by 2', () => {
    expect(cipher.encrypt('hello', 2)).toBe('jgnnq')
  })

  it('does not change punctuation', () => {
    expect(cipher.encrypt('!@#$%^&*()-_=+[]{};:,<.>/?', 1)).toBe(
      '!@#$%^&*()-_=+[]{};:,<.>/?'
    )
  })

  it('does not change spaces', () => {
    expect(cipher.encrypt('hello, world!', 1)).toBe('ifmmp, xpsme!')
  })

  it('is case sensitive: all upper cases', () => {
    expect(cipher.encrypt('HELLO, WORLD!', 1)).toBe('IFMMP, XPSME!')
  })

  it('is case sensitive: upper and lower cases', () => {
    expect(cipher.encrypt('hElLO, woRlD!', 1)).toBe('iFmMP, xpSmE!')
  })

  it('trim white spaces at the beginning and at the end', () => {
    expect(cipher.encrypt('        hello, world!           ', 1)).toBe(
      'ifmmp, xpsme!'
    )
  })

  it('does wrap if char is z', () => {
    expect(cipher.encrypt('z', 1)).toBe('a')
  })

  it('does wrap if char is Z', () => {
    expect(cipher.encrypt('Z', 1)).toBe('A')
  })

  it('does wrap at char z if shift code is > di 26 ', () => {
    expect(cipher.encrypt('zzzz', 27)).toBe('aaaa')
  })

  it('does wrap at char Z if shift code is > di 26 ', () => {
    expect(cipher.encrypt('ZZZZ', 27)).toBe('AAAA')
  })

  it('does encrypt multiple of 26 by increasing shift factor by 1', () => {
    expect(cipher.encrypt('hello', 26)).toBe('ifmmp')
  })

  it('does encrypt ff shift factor is 0 by increasing shift factor by 1', () => {
    expect(cipher.encrypt('hello', 0)).toBe('ifmmp')
  })
})
