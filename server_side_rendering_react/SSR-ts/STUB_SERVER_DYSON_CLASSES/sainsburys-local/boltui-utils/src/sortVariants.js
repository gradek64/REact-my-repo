import config from './config/ordering'

const { variants } = config

// Variant helpers
export const typeMapper = (type) => (value) => ({ type, value })
export const defaultMapper = (attrType) => ({ attributes }) => {
  const { type, value } = attributes.find((attr) => attr.type === attrType)
  return typeMapper(type)(value)
}

/**
 * Returns a filter function which, when given an array of products, filters
 * out any products which don't have the given attribute type and value.
 *
 * e.g. [].filter(variantFilter('Color', 'Black')) will filter out all
 * products which don't have the Black Color attribute
 */
export const variantFilter = (type, value) => (product) => {
  const hasMatchingAttribute = product.attributes.some((attribute) => {
    return attribute.type === type && attribute.value === value
  })

  return hasMatchingAttribute
}

// Map helpers
const toExpression = (exp) => new RegExp(`^${exp}$`, 'i')
const toInnerType = (type) => [type, variants[type]]
const toExpressionType = ([exp, order = 'fixed']) => [toExpression(exp), order]
const toTypedArray = ([type, list]) => [type, list.map(toExpressionType)]

// Reduce helpers
const fromTypedArray = [(result, [key, value]) => ({ ...result, [key]: value }), {}]

// Expression keys
const expressionsKeys = Object.keys(variants)

// Expressions map
const expressionsMap = expressionsKeys
  .map(toInnerType)
  .map(toTypedArray)
  .reduce(...fromTypedArray)

// Sorting helpers
const numberSort = (current, next) => parseFloat(next, 10) - parseFloat(current, 10)
const lengthSort = (current, next) => next.length - current.length
const alphabetSort = (current, next) => {
  if (next === current) return 0
  return next < current ? 1 : -1
}
const diffSort = (current, next) => {
  // eslint-disable-next-line no-restricted-globals
  const isInt = (...numbers) => numbers.every((number) => isFinite(number))
  const isSameFirstLetter = (first, second) => first[0] === second[0]
  // Sort integer values
  if (isInt(current, next)) return numberSort(current, next)
  // Sort otherwise
  return isSameFirstLetter(current, next) ? lengthSort(current, next) : alphabetSort(current, next)
}

/**
 * Apply matching comparator
 * @method applyMatching
 */
const applyMatching = (
  /**
   * @param  {Object}    comparators  A map of all available comparators
   * @return {Function}
   */
  comparators
) => (
  /**
   * @param  {Array}     comparator  List of comparators to apply
   * @param  {RegExp}    exp         The expression to check against
   * @return {Function}              Array.sort() compare function
   */
  comparator,
  exp
) => (next, current) => {
  // Type safety for values
  const all = [].concat(comparator)
  const first = exp.exec(next).slice(1)
  const second = exp.exec(current).slice(1)
  // Evaluate and find first decisive comparison
  const evaluate = (comp, index) => comparators[comp](first[index], second[index])
  return all.map(evaluate).find((value) => value !== 0) || 0
}

// Linter doesn't support recursive definitions
let comparators = {}

/**
 * Nested sort based on RegExp match
 * @method nest
 */
const nest = (
  /*
   * @param  {String}    type  The type of variant
   * @return {Function}        Array.sort() comparator function
   */
  type
) => (current, next) => {
  const keyIndex = expressionsKeys.map(toExpression).findIndex((key) => key.test(type))
  const expressions = expressionsMap[expressionsKeys[keyIndex]]
  const testExp = (str) => ([expression]) => expression.test(str)
  const getIndex = (str) => expressions.findIndex(testExp(str))
  const firstIndex = getIndex(current)
  const indexDiff = getIndex(next) - firstIndex
  // Sort by index in config map
  if (indexDiff !== 0) return indexDiff
  // Otherwise apply ordering function
  const [exp, comp] = expressions[firstIndex]
  return applyMatching(comparators)(comp, exp)(current, next)
}

/**
 * Comparators map
 */
comparators = {
  fixed: () => 0,
  asc: (current, next) => diffSort(current, next),
  desc: (current, next) => diffSort(next, current),
  // Recurvise methods for nested types
  colour: nest('colour'),
  size: nest('size'),
  service: nest('service'),
  'bed size': nest('bed size')
}

/**
 * Sorting helper for product variants
 * @method sortVariants
 */
export const sortVariants = (
  /**
   * @param  {Function}  mapper  Mapper to use for object
   * @return {Function}          Array.sort() comparator function
   */
  mapper
) => (current, next) => {
  const { type = '', value: a } = mapper(current)
  const { value: b } = mapper(next)
  return nest(type)(b, a)
}

/**
 * Sorting attributes by type
 */
export const sortAttributes = (current, next) => {
  const { type: a } = current
  const { type: b } = next
  const find = (value) => expressionsKeys.map(toExpression).findIndex((exp) => exp.test(value))
  return find(a) - find(b)
}
