/* eslint-disable id-length */
/**
 * @param {string} text string
 * Hyphenates all spaces and +
 */
const hyphenateSpaces = (text) => text.toLowerCase().replace(/((%20)|\s|\+)+/g, '-')

/**
 * @param {string} text string
 * Strips everything but A-Z, a-z, 0-9, hyphens but removes hyphens at start and end
 */
const stripPunctuation = (text) => text.replace(/[^a-zA-Z0-9-]/g, '').replace(/^-*|-*$/g, '')

/**
 * @param {string} text Encoded string
 */
const encode = (text) => text.replace(/-/g, '%252D').replace(/%20/g, '-').replace(/%2B/g, '+')

/**
 * @param {string} text Encoded string
 */
const decode = (text) => text.replace(/-/g, '%20').replace(/%252D/g, '-')

/**
 * @param {string} text Encoded string
 */
const getSanitised = (text) => decodeURIComponent(decode(text))

const getCategoriesJoined = (categories) => (categories ? categories.join('/') : '')

const getEncodedBrowseCategories = (categories) =>
  categories
    ? categories.map((category) => stripPunctuation(hyphenateSpaces(category))).filter((category) => category)
    : ''

const getCategoryFilterPath = (categoryId, isBrowse = false) => {
  if (isBrowse) {
    return categoryId ? `c:${categoryId}/` : ''
  }

  return categoryId ? `category:${categoryId}/` : ''
}

const sortByValues = [
  {
    key: 'relevance_desc',
    value: {
      type: 'relevance',
      order: 'desc'
    },
    label: 'Most Popular',
    path: 'sort:relevance:desc'
  },
  {
    key: 'price_asc',
    value: {
      type: 'price',
      order: 'asc'
    },
    label: 'Price: Low - High',
    path: 'sort:price'
  },
  {
    key: 'price_desc',
    value: {
      type: 'price',
      order: 'desc'
    },
    label: 'Price: High - Low',
    path: 'sort:price:desc'
  },
  {
    key: 'customer rating_desc',
    value: {
      type: 'customer rating',
      order: 'desc'
    },
    label: 'Customer Rating',
    path: 'sort:customer-rating'
  },
  {
    key: 'newness_desc',
    value: {
      type: 'newness',
      order: 'desc'
    },
    label: 'New Arrivals',
    path: 'sort:new-arrivals'
  }
]

const refinementKeySort = (akey, bkey) => {
  const nameA = akey.toUpperCase()
  const nameB = bkey.toUpperCase()
  const brandsLabel = 'brands'

  if (nameA === brandsLabel.toUpperCase()) {
    return -1
  }

  if (nameB === brandsLabel.toUpperCase()) {
    return 1
  }

  if (nameA < nameB) {
    return -1
  }

  if (nameA > nameB) {
    return 1
  }

  return 0
}

const refinementSort = (akey, bkey) => {
  const nameA = akey.toUpperCase()
  const nameB = bkey.toUpperCase()

  if (nameA < nameB) {
    return -1
  }

  if (nameA > nameB) {
    return 1
  }

  return 0
}

const getOptionsPath = (pageNumber, sortBy, searchType, categoryMatch, defaultSortKey = 'relevance_desc') => {
  let optionalPath = 'opt/'

  const getPageNumber = () => (pageNumber === 1 || !pageNumber ? '' : `page:${pageNumber}/`)

  const getSortBy = () => {
    if (!sortBy) {
      return ''
    }

    // The path for the default sort must be empty ''
    const sortWithDefault = sortByValues.map((sort) => {
      if (sort.key === defaultSortKey) {
        return {
          ...sort,
          path: ''
        }
      }

      return sort
    })

    const key = Object.keys(sortBy)[0]

    const sortByObject = sortWithDefault.find((value) => value.key === `${key}_${sortBy[key]}`)

    return `${sortByObject && sortByObject.path ? `${sortByObject.path}/` : ''}`
  }

  const getSearchType = () => {
    if (typeof searchType === 'string' || searchType instanceof String) {
      const searchTypePath = encode(encodeURIComponent(searchType.toLowerCase()))
      return `type:${searchTypePath}/`
    }

    return ''
  }

  const getCategoryMatch = () => {
    return typeof categoryMatch === 'string' || categoryMatch instanceof String ? `catmatch:${categoryMatch}/` : ''
  }

  if (!getPageNumber() && !getSortBy() && !getSearchType() && !getCategoryMatch()) {
    return ''
  }

  optionalPath += getSearchType()
  optionalPath += getCategoryMatch()
  optionalPath += getPageNumber()
  optionalPath += getSortBy()

  return optionalPath
}

const getRefinementPath = (filterUriFragments) => {
  if (!filterUriFragments || Object.keys(filterUriFragments).length < 1) {
    return ''
  }

  /**
   * Search engine encodes the filter value but not the type
   * i.e filter[not encoded type] = encodedValue
   */
  const encodeRefinementValue = (refinement) =>
    encode(refinement.replace(/\+/g, '%20').replace(/,/g, '%2C').replace(/%2C/g, '%252C'))
  const encodeRefinementName = (refinement) => encode(encodeURIComponent(refinement).replace('%2F', '%252F'))

  let urlString = ''
  const filterKeys = []
  filterKeys.push(...Object.keys(filterUriFragments))
  filterKeys.sort(refinementKeySort)
  filterKeys.forEach((facet) => {
    filterUriFragments[facet].sort(refinementSort)
    filterUriFragments[facet].forEach((filters, i) => {
      if (i === 0) {
        urlString += `${encodeRefinementName(facet)}:${encodeRefinementValue(filters)}`
      } else {
        urlString += `,${encodeRefinementValue(filters)}`
      }
      if (i + 1 === filterUriFragments[facet].length) {
        urlString += '/'
      }
    })
  })

  return urlString
}

const getCommonParametersPath = (params, isBrowse = false) => {
  const { sortBy, pageNumber, searchType, categoryMatch, defaultSortKey } = params
  let path = ''

  const categoryPath = getCategoryFilterPath(params.categoryId, isBrowse)

  if (typeof params.filterUriFragments !== 'undefined' && params.filterUriFragments) {
    delete params.filterUriFragments.category /* eslint-disable-line */
  }

  const refinementPath = getRefinementPath(params.filterUriFragments)
  const optionalPath = getOptionsPath(pageNumber, sortBy, searchType, categoryMatch, defaultSortKey)
  path += `${categoryPath}${refinementPath}${optionalPath}`

  return path
}

const getSearchPath = (searchTerm, params = {}) => {
  let path

  if (searchTerm) {
    const term = searchTerm.trim().toLowerCase()
    const pageType = params.isCannedSearch ? 'list' : 'search'
    path = `/${pageType}/${encodeURIComponent(term)}/`
    path = encode(path)
  } else {
    throw new Error('No search term supplied')
  }

  path += getCommonParametersPath(params)

  return path
}

const getBrowsePath = (params = {}) => {
  let path

  if (params.categoryId) {
    const pageType = params.isClearance ? 'clearance' : 'browse'
    path = `/${pageType}/${getCategoriesJoined(getEncodedBrowseCategories(params.categories))}/`
  } else {
    throw new Error('No category id supplied')
  }

  path += getCommonParametersPath(params, true)

  return path
}

export {
  getSearchPath,
  getBrowsePath,
  getCategoryFilterPath,
  getOptionsPath,
  getRefinementPath,
  getEncodedBrowseCategories,
  getCategoriesJoined,
  refinementSort,
  refinementKeySort,
  hyphenateSpaces,
  stripPunctuation,
  encode,
  decode,
  getSanitised
}
