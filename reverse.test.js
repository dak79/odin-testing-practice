/**
 * A reveseString function that take a string and revese it
 */

import { reverse } from './reverse'

describe('Revese String', () => {
  it('accept only string as input (No Number)', () => {
    expect(reverse(23)).toBe('Input must be string')
  })

  it('accept only string as input (No Boolean)', () => {
    expect(reverse(true)).toBe('Input must be string')
  })

  it('accept only string as input (No Object)', () => {
    expect(reverse({ name: 'Pablo', age: 54 })).toBe('Input must be string')
  })

  it('with a word (minimum -> muminim)', () => {
    expect(reverse('minimum')).toBe('muminim')
  })

  it('with a word (minimum -> muminim)', () => {
    expect(reverse('minimum')).toBe('muminim')
  })

  it('with more words (minimum is maximum -> mumixam si muminim)', () => {
    expect(reverse('minimum is maximum')).toBe('mumixam si muminim')
  })

  it('starting with capital letter (Minimum is maximum -> mumixam si muminiM)', () => {
    expect(reverse('Minimum is maximum')).toBe('mumixam si muminiM')
  })

  it('uppercase (MINIMUM IS MAXIMUM -> MUMIXAM SI MUMINIM)', () => {
    expect(reverse('MINIMUM IS MAXIMUM')).toBe('MUMIXAM SI MUMINIM')
  })

  it('starting with number (132 MINIMUM IS MAXIMUM -> MUMIXAM SI MUMINIM 231)', () => {
    expect(reverse('132 MINIMUM IS MAXIMUM')).toBe('MUMIXAM SI MUMINIM 231')
  })
})
