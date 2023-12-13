/**
 * Returns a random integer between the specified values. The value
 * is no lower than min and is less than (but not equal to) max.
 */
const getRandomNumberBetween = (start: number, end: number): number => {
  const min = Math.ceil(start)
  const max = Math.floor(end)
  return Math.floor(Math.random() * (max - min) + min)
}

export default getRandomNumberBetween
