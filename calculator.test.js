/**
 * A calculator object that contains functions for the basic operations: add,
 * subtract, divide and multiply. Each of these functions should take two
 * numbers and return the correct calculation.
 */
import { Calculator } from './calculator'

const calc = Calculator()

describe('Object calulator', () => {
  it('has method add', () => {
    expect(calc).toHaveProperty('add')
  })

  it('has method subtract', () => {
    expect(calc).toHaveProperty('subtract')
  })

  it('has method divide', () => {
    expect(calc).toHaveProperty('divide')
  })

  it('has method multiply', () => {
    expect(calc).toHaveProperty('multiply')
  })
})

describe('method .add()', () => {
  it('does not accept string', () => {
    expect(calc.add(1, '2')).toBe('Invalid input')
  })

  it('does not accept boolean', () => {
    expect(calc.add(true, 2)).toBe('Invalid input')
  })

  it('does not accept objects', () => {
    expect(calc.add(1, [1, 2])).toBe('Invalid input')
  })

  it('does not accept undefined', () => {
    expect(calc.add(undefined, 2)).toBe('Invalid input')
  })

  it('does not accept NaN', () => {
    expect(calc.add(NaN, 2)).toBe('Invalid input')
  })

  it('does not accept null', () => {
    expect(calc.add(2, null)).toBe('Invalid input')
  })

  it('must have two input', () => {
    expect(calc.add(1)).toBe('Invalid input')
  })

  it('does add two positive integer', () => {
    expect(calc.add(3, 2)).toBe(5)
  })

  it('return a positive sum of two positive integer', () => {
    expect(calc.add(345, 212)).toBe(557)
  })

  it('does add two positive float', () => {
    expect(calc.add(3.4, 2.6)).toBe(6)
  })

  it('return a float sum of two positive float', () => {
    expect(calc.add(0.5, 2.6)).toBe(3.1)
  })

  it('return a positive sum of a positive and a negative integer', () => {
    expect(calc.add(9, -4)).toBe(5)
  })

  it('return a positive sum of a negative and a positive integer', () => {
    expect(calc.add(-4, 5)).toBe(1)
  })

  it('return a negative sum of a positive and a negative integer', () => {
    expect(calc.add(4, -9)).toBe(-5)
  })

  it('return a negative sum of a negative and a positive integer', () => {
    expect(calc.add(-4, 3)).toBe(-1)
  })

  it('return a negative sum of two negative integer', () => {
    expect(calc.add(-4, -5)).toBe(-9)
  })

  it('return a positive sum of a positive and a negative float', () => {
    expect(calc.add(9.4, -4.3)).toBe(5.1)
  })

  it('return a positive sum of a negative and a positive float', () => {
    expect(calc.add(-4.4, 5.3)).toBe(0.9)
  })

  it('return a negative sum of a positive and a negative float', () => {
    expect(calc.add(4.4, -9.6)).toBe(-5.2)
  })

  it('return a negative sum of a negative and a positive float', () => {
    expect(calc.add(-4.8, 3.2)).toBe(-1.6)
  })

  it('return a negative sum of two negative float', () => {
    expect(calc.add(-4.4, -5.4)).toBe(-9.8, 1)
  })
})

describe('method .subtract()', () => {
  it('does not accept string', () => {
    expect(calc.subtract(1, '2')).toBe('Invalid input')
  })

  it('does not accept boolean', () => {
    expect(calc.subtract(true, 2)).toBe('Invalid input')
  })

  it('does not accept objects', () => {
    expect(calc.subtract(1, [1, 2])).toBe('Invalid input')
  })

  it('does not accept undefined', () => {
    expect(calc.subtract(undefined, 2)).toBe('Invalid input')
  })

  it('does not accept NaN', () => {
    expect(calc.subtract(NaN, 2)).toBe('Invalid input')
  })

  it('does not accept null', () => {
    expect(calc.subtract(2, null)).toBe('Invalid input')
  })

  it('must have two input', () => {
    expect(calc.subtract(1)).toBe('Invalid input')
  })

  it('does subtract two positive integer', () => {
    expect(calc.subtract(3, 2)).toBe(1)
  })

  it('return a positive integer result of two positive integer subtraction', () => {
    expect(calc.subtract(345, 212)).toBe(133)
  })

  it('does subtract two positive float', () => {
    expect(calc.subtract(3.4, 2.6)).toBe(0.8)
  })

  it('return a float result of two positive float', () => {
    expect(calc.subtract(50.56, 2.6)).toBe(47.96)
  })

  it('return a positive subtraction of a positive and a negative integer', () => {
    expect(calc.subtract(9, -4)).toBe(13)
  })

  it('return a negative subtraction of a negative and a positive integer', () => {
    expect(calc.subtract(-4, 5)).toBe(-9)
  })

  it('return a positive subtraction of two negative integer', () => {
    expect(calc.subtract(-4, -5)).toBe(1)
  })

  it('return a negative subtraction of two negative integer', () => {
    expect(calc.subtract(-6, -5)).toBe(-1)
  })

  it('return a negative subtraction of two positive integer', () => {
    expect(calc.subtract(8, 18)).toBe(-10)
  })

  it('return a positive subtraction of a positive and a negative float', () => {
    expect(calc.subtract(9.5, -4.3)).toBe(13.8)
  })

  it('return a negative subtraction of a negative and a positive float', () => {
    expect(calc.subtract(-4.6, 5.9)).toBe(-10.5)
  })

  it('return a positive subtraction of two negative float', () => {
    expect(calc.subtract(-4.4, -5.5)).toBe(1.1)
  })

  it('return a negative subtraction of two negative float', () => {
    expect(calc.subtract(-6.6, -5.5)).toBe(-1.1)
  })

  it('return a negative subtraction of two positive float', () => {
    expect(calc.subtract(8.9, 18.12)).toBe(-9.22)
  })
})

//TODO: divide. multply
