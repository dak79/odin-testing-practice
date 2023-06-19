export const Calculator = () => {
  /**
   * Sum two numbers
   * @param {Number} a
   * @param {Number} b
   * @returns {Number}
   */
  const add = (a, b) => {
    if (checkInput(a) && checkInput(b)) {
      const c = a + b
      return Number.isInteger(c) ? c : floatPrecision(a, b, c, '+')
    }

    return 'Invalid input'
  }

  /**
   * Subtract two numbers
   * @param {Number} a
   * @param {Number} b
   * @returns {Number}
   */
  const subtract = (a, b) => {
    if (checkInput(a) && checkInput(b)) {
      const c = a - b
      return Number.isInteger(c) ? c : floatPrecision(a, b, c, '-')
    }

    return 'Invalid input'
  }

  /**
   * Multiply two numbers
   * @param {Number} a
   * @param {Number} b
   * @returns {Number}
   */
  const multiply = (a, b) => {
    if (checkInput(a) && checkInput(b)) {
      const c = a * b
      return Number.isInteger(c) ? c : floatPrecision(a, b, c, '*')
    }

    return 'Invalid input'
  }

  /**
   * Divide two numbers
   * @param {Number} a
   * @param {Number} b
   * @returns {Number}
   */
  const divide = (a, b) => {
    if (checkInput(a) && checkInput(b)) {
      if (b === 0) return 'Division for 0'
      const c = a / b
      return Number.isInteger(c) ? c : floatPrecision(a, b, c, '/')
    }
    return 'Invalid input'
  }

  /**
   * Check if the input is valid aka typeof number.
   * @param {} input
   * @returns
   */
  const checkInput = (input) => {
    if (isNaN(input)) return false
    if (typeof input === 'number') return true
    return false
  }

  /**
   * Count float digit
   * @param {Number} x
   * @returns {Number}
   */
  const floatDigit = (x) =>
    Number.isInteger(x) ? 0 : x.toString().split('.')[1].length

  /**
   * Define float precision
   * @param {Number} x
   * @param {Number} y
   * @param {Number} z
   * @param {'+'|'-'|'*'|'/'|} sign
   * @returns
   */
  const floatPrecision = (x, y, z, sign) => {
    if (sign === '+' || sign === '-') {
      return floatDigit(x) > floatDigit(y)
        ? parseFloat(z.toFixed(Math.abs(x)))
        : parseFloat(z.toFixed(Math.abs(y)))
    }

    if (sign === '*') {
      return parseFloat(z.toFixed(floatDigit(x) + floatDigit(y)))
    }

    if (sign === '/') {
      return floatDigit(z) < 5 ? z : parseFloat(z.toFixed(5))
    }
  }

  return {
    add,
    subtract,
    multiply,
    divide
  }
}
