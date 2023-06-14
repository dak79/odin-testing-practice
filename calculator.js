export const Calculator = () => {
  const add = (a, b) => {
    if (checkInput(a) && checkInput(b)) {
      const c = a + b
      return Number.isInteger(c) ? c : floatPrecision(a, b, c, '+')
    }

    return 'Invalid input'
  }

  const subtract = (a, b) => {
    if (checkInput(a) && checkInput(b)) {
      const c = a - b
      return Number.isInteger(c) ? c : floatPrecision(a, b, c, '-')
    }

    return 'Invalid input'
  }

  const multiply = (a, b) => {
    if (checkInput(a) && checkInput(b)) {
      const c = a * b
      return Number.isInteger(c) ? c : floatPrecision(a, b, c, '*')
    }

    return 'Invalid input'
  }

  const divide = (a, b) => {
    if (checkInput(a) && checkInput(b)) {
      if (b === 0) return 'Division for 0'
      const c = a / b
      return Number.isInteger(c) ? c : floatPrecision(a, b, c, '/')
    }
    return 'Invalid input'
  }

  const checkInput = (input) => {
    if (isNaN(input)) return false
    if (typeof input === 'number') return true
    return false
  }

  const floatDigit = (x) =>
    Number.isInteger(x) ? 0 : x.toString().split('.')[1].length

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
