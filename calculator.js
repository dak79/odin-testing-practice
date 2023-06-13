export const Calculator = () => {
  const add = (a, b) => {
    if (checkInput(a) && checkInput(b)) {
      const c = a + b
      return Number.isInteger(c) ? c : floatPrecision(a, b, c)
    }

    return 'Invalid input'
  }

  const subtract = (a, b) => {
    if (checkInput(a) && checkInput(b)) {
      const c = a - b
      return Number.isInteger(c) ? c : floatPrecision(a, b, c)
    }

    return 'Invalid input'
  }

  const divide = () => {}

  const multiply = () => {}

  const checkInput = (input) => {
    if (isNaN(input)) return false
    if (typeof input === 'number') return true
    return false
  }

  const floatPrecision = (x, y, z) =>
    x.toString().split('.')[1].length > y.toString().split('.')[1].length
      ? parseFloat(z.toFixed(Math.abs(x)))
      : parseFloat(z.toFixed(Math.abs(y)))

  return {
    add,
    subtract,
    divide,
    multiply
  }
}

const calc = Calculator()
console.log(calc.add(NaN, 2))
