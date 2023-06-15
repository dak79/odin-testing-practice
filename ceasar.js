export const CaesarCipher = () => {
  const encrypt = (str, fctr) => {
    if (checkType(str, 'string') && checkType(fctr, 'number')) {
    }
    return 'Invalid input'
  }

  const checkType = (par, type) => {
    if (isNaN(par)) return false
    if (typeof par === type) return true
    return false
  }

  const decrypt = () => {}

  return {
    encrypt,
    decrypt
  }
}
