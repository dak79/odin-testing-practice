export const CaesarCipher = () => {
  /**
   * Encryp a string with Ceasar Cipher by a shift factor
   * @param {String} str - String to encrypt
   * @param {Number} fctr - Shift factor
   * @returns
   */
  const encrypt = (str, fctr) => {
    if (checkType(str, 'string') && checkType(fctr, 'number')) {
      if (isNotShifting(fctr)) fctr += 1
      return cipher(str, fctr)
    }
    return 'Invalid input'
  }

  /**
   * Check if arguments are in the corrct input type
   * @param {} par
   * @param {'number'|'string'} type
   * @returns
   */
  const checkType = (par, type) => {
    if (typeof par === 'number' && isNaN(par)) return false
    if (typeof par === type) return true
    return false
  }

  /**
   * Check if the char is a letter
   * @param {String} char
   * @returns {Boolean}
   */
  const isLetter = (char) => char.toLowerCase() !== char.toUpperCase()

  /**
   * Check if shifting factor does not work
   * @param {Number} factor
   * @returns
   */
  const isNotShifting = (factor) => factor % 26 === 0
  /**
   * Return the string encoded
   * @param {String} str
   * @param {Number} fact
   * @param {String} encoded
   * @returns
   */
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
