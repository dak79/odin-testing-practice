/**
 * Analyze a given array
 * @param {[]} arr
 *
 * @returns {Object}
 * @property average - compute the average of numbers in the array
 * @property min - min numbers in the array
 * @property max - max number in the array
 * @property length - array length
 *
 */
export const analyzeArray = (arr) => {
  /**
   * Finde the average in the array
   * @param {[]} arr
   * @returns average
   */
  const findAverage = (arr) =>
    parseFloat(
      (arr.reduce((prev, curr) => prev + curr, 0) / findLength(arr)).toFixed(2)
    )

  /**
   * Check if all array items are numbers.
   * @param {[]} arr
   * @returns {Boolean}
   */
  const checkItem = (arr) =>
    arr.every((item) => typeof item === 'number' && !isNaN(item))

  /**
   * Find the smallest number in the array.
   * @param {[]} arr
   * @returns {Number}
   */
  const findMin = (arr) => arr.sort((a, b) => a - b)[0]

  /**
   * Find the biggest number in the artay.
   * @param {[]} arr
   * @returns {Number}
   */
  const findMax = (arr) => arr.sort((a, b) => a - b)[findLength(arr) - 1]

  /**
   * Find array length
   * @param {[]} arr
   * @returns {Number}
   */
  const findLength = (arr) => arr.length

  if (Array.isArray(arr) && checkItem(arr)) {
    return {
      average: findAverage(arr),
      min: findMin(arr),
      max: findMax(arr),
      length: findLength(arr)
    }
  }

  return 'Invalid Input'
}
