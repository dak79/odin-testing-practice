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

  it('does add an integer and a float', () => {
    expect(calc.add(3, 6.4)).toBe(9.4)
  })

  it('does add a float and an integer', () => {
    expect(calc.add(3.7, 2)).toBe(5.7)
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

  it('does subtract an integer and a float', () => {
    expect(calc.subtract(3, 6.4)).toBe(-3.4)
  })

  it('does subtract a float and an integer', () => {
    expect(calc.subtract(3.7, 2)).toBe(1.7)
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

describe('method .multiply()', () => {
  it('does not accept string', () => {
    expect(calc.multiply(1, '2')).toBe('Invalid input')
  })

  it('does not accept boolean', () => {
    expect(calc.multiply(true, 2)).toBe('Invalid input')
  })

  it('does not accept objects', () => {
    expect(calc.multiply(1, [1, 2])).toBe('Invalid input')
  })

  it('does not accept undefined', () => {
    expect(calc.multiply(undefined, 2)).toBe('Invalid input')
  })

  it('does not accept NaN', () => {
    expect(calc.multiply(NaN, 2)).toBe('Invalid input')
  })

  it('does not accept null', () => {
    expect(calc.multiply(2, null)).toBe('Invalid input')
  })

  it('must have two input', () => {
    expect(calc.multiply(1)).toBe('Invalid input')
  })

  it('does multiply two positive integer', () => {
    expect(calc.multiply(3, 2)).toBe(6)
  })

  it('return a positive integer after multiply two positive integer', () => {
    expect(calc.multiply(345, 212)).toBe(73140)
  })

  it('does multiply two positive float', () => {
    expect(calc.multiply(3.4, 2.6)).toBe(8.84)
  })

  it('does multiply an integer and a float', () => {
    expect(calc.multiply(3, 6.4)).toBe(19.2)
  })

  it('does multiply a float and an integer', () => {
    expect(calc.multiply(3.7, -2)).toBe(-7.4)
  })

  it('return a float after multiply two positive float', () => {
    expect(calc.multiply(50.56, 2.6)).toBe(131.456)
  })

  it('return a negative integer after multiply a positive and a negative integer', () => {
    expect(calc.multiply(9, -4)).toBe(-36)
  })

  it('return a negative integer after multiply a negative and a positive integer', () => {
    expect(calc.multiply(-4, 5)).toBe(-20)
  })

  it('return a positive integer after multiply two negative integer', () => {
    expect(calc.multiply(-4, -5)).toBe(20)
  })

  it('return a negative float after multiply a positive and a negative float', () => {
    expect(calc.multiply(9.5, -4.3)).toBe(-40.85)
  })

  it('return a negative float after multiply a negative and a positive float', () => {
    expect(calc.multiply(-4.6, 5.9)).toBe(-27.14)
  })

  it('return a positive float after multiply two negative float', () => {
    expect(calc.multiply(-4.4, -5.5)).toBe(24.2)
  })
})

describe('method .divide()', () => {
  it('does not accept string', () => {
    expect(calc.divide(1, '2')).toBe('Invalid input')
  })

  it('does not accept boolean', () => {
    expect(calc.divide(true, 2)).toBe('Invalid input')
  })

  it('does not accept objects', () => {
    expect(calc.divide(1, [1, 2])).toBe('Invalid input')
  })

  it('does not accept undefined', () => {
    expect(calc.divide(undefined, 2)).toBe('Invalid input')
  })

  it('does not accept NaN', () => {
    expect(calc.divide(NaN, 2)).toBe('Invalid input')
  })

  it('does not accept null', () => {
    expect(calc.divide(2, null)).toBe('Invalid input')
  })

  it('must have two input', () => {
    expect(calc.divide(1)).toBe('Invalid input')
  })

  it('does not accept to divisor 0', () => {
    expect(calc.divide(3, 0)).toBe('Division for 0')
  })

  it('does return 0 if dividend is 0', () => {
    expect(calc.divide(0, 100)).toBe(0)
  })

  it('does add two positive integer', () => {
    expect(calc.divide(3, 2)).toBe(1.5)
  })

  it('return a positive quotient after divide two positive integer', () => {
    expect(calc.divide(345, 212)).toBe(1.62736)
  })

  it('does divide two positive float', () => {
    expect(calc.divide(3.4, 2.6)).toBe(1.30769)
  })

  it('does divide an integer and a float', () => {
    expect(calc.divide(3, 6.4)).toBe(0.46875)
  })

  it('does divide a float and an integer', () => {
    expect(calc.divide(3.7, -2)).toBe(-1.85)
  })

  it('return a negative quotient after divide a positive and a negative integer', () => {
    expect(calc.divide(9, -4)).toBe(-2.25)
  })

  it('return a negative quotient after divide a negative and a positive integer', () => {
    expect(calc.divide(-4, 5)).toBe(-0.8)
  })

  it('return a positive quotient after divide two negative integer', () => {
    expect(calc.divide(-4, -5)).toBe(0.8)
  })

  it('return a negative quotient after divide a positive and a negative float', () => {
    expect(calc.divide(9.4, -4.3)).toBe(-2.18605)
  })

  it('return a negative quotient after divide a negative and a positive float', () => {
    expect(calc.divide(-4.4, 5.3)).toBe(-0.83019)
  })

  it('return a positive quotient after divide two negative float', () => {
    expect(calc.divide(-4.4, -5.4)).toBe(0.81481)
  })
})
