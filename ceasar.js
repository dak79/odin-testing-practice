export const CaesarCipher = () => {
  const encrypt = (str, fctr) => {
    if (checkType(str, 'string') && checkType(fctr, 'number')) {
      if (isNotShifting(fctr)) fctr += 1
      return cipher(str, fctr)
    }
    return 'Invalid input'
  }

  const checkType = (par, type) => {
    if (typeof par === 'number' && isNaN(par)) return false
    if (typeof par === type) return true
    return false
  }

  const isLetter = (char) => char.toLowerCase() !== char.toUpperCase()

  const isNotShifting = (factor) => factor % 26 === 0

  const cipher = (str, fact, encoded = '') => {
    for (let char of str.trim()) {
      let charCode = char.charCodeAt(0)

      let shiftedCharCode =
        charCode < 97
          ? ((charCode + fact - 65) % 26) + 65
          : ((charCode + fact - 97) % 26) + 97

      let shiftedChar = isLetter(char)
        ? String.fromCharCode(shiftedCharCode)
        : char

      encoded += shiftedChar
    }

    return encoded
  }

  return {
    encrypt
  }
}
