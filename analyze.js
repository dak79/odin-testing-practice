export const analyzeArray = (arr) => {
  const findAverage = (arr) =>
    parseFloat(
      (arr.reduce((prev, curr) => prev + curr, 0) / findLength(arr)).toFixed(2)
    )
  const checkItem = (arr) =>
    arr.every((item) => typeof item === 'number' && !isNaN(item))

  const findMin = (arr) => arr.sort((a, b) => a - b)[0]
  const findMax = (arr) => arr.sort((a, b) => a - b)[findLength(arr) - 1]
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
