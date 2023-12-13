/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable id-length */
/* eslint-env jasmine */
/* eslint no-extend-native:0 */

import Chance from 'chance'
import sortBy from 'lodash.sortby'
import {
  getSearchPath,
  getBrowsePath,
  getCategoryFilterPath,
  getRefinementPath,
  getOptionsPath,
  getEncodedBrowseCategories,
  getCategoriesJoined,
  hyphenateSpaces,
  stripPunctuation,
  encode,
  decode,
  getSanitised
} from './findabilityUrlHelper'

const sortByValues = [
  {
    key: 'relevance_desc',
    value: {
      type: 'relevance',
      order: 'desc'
    },
    label: 'Most Popular',
    path: ''
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

describe('BuildUrl test', () => {
  const chance = new Chance()
  const randomInteger = chance.integer({ min: 1, max: 10000000 })
  const encodeHyphen = (a) => a.replace(/-/g, '%252D')
  const getMockSortBy = ({ value }) => {
    return {
      [value.type]: value.order
    }
  }

  beforeEach(() => {})

  it('should get the correct client url for the canned search route', () => {
    const randomString = chance.string()
    const params = {
      isCannedSearch: true
    }
    const url = getSearchPath(randomString, params)

    expect(url).toBe(`/list/${encodeURIComponent(randomString.toLowerCase())}/`)
  })

  it('should get the correct client url for the search route', () => {
    const randomString = chance.string()
    const url = getSearchPath(randomString)

    expect(url).toBe(`/search/${encodeURIComponent(randomString.toLowerCase())}/`)
  })

  it('should replace the spaces with hyphens in the search term', () => {
    const randomString = chance.string()
    const stringWithSpace = `${randomString} ${randomString}`
    const encodedSearchTerm = encodeURIComponent(stringWithSpace.toLowerCase()).replace(/%20/g, '-')
    const url = getSearchPath(stringWithSpace)
    expect(url).toBe(`/search/${encodedSearchTerm}/`)
  })

  it('should turn the search term into lower case', () => {
    const stringWithSpace = 'ABC'
    const url = getSearchPath(stringWithSpace)

    expect(url).toBe(`/search/${stringWithSpace.toLowerCase()}/`)
  })

  it('should encode intended hyphens ', () => {
    const string1 = '-abc-'
    const string2 = '-a-bc'
    const searchTerm = `${string1} ${string2}`
    const url = getSearchPath(searchTerm)
    const expectedString = `${encodeHyphen(string1)}-${encodeHyphen(string2)}`
    expect(url).toBe(`/search/${expectedString}/`)
  })

  it('should encode each instance of space with `-`', () => {
    const searchTerm = '- - -'
    const url = getSearchPath(searchTerm)
    expect(url.split('/')[2]).toBe('%252D-%252D-%252D')
  })

  it('should trim the whitespace in the search term', () => {
    const searchTerm = ' - - - '
    const url = getSearchPath(searchTerm)
    expect(url.split('/')[2]).toBe('%252D-%252D-%252D')
  })

  const generateFilterObject = (strings) => {
    const randomFilters = {}
    strings.forEach((string) => {
      randomFilters[string] = [string]
    })

    return randomFilters
  }

  it('should get the refinement path in sorted order', () => {
    const searchTerm = 'red'
    const randomStrings = Array.from({ length: 5 }, () => chance.word())
    const randomFilters = generateFilterObject(randomStrings)
    const sortedFilters = sortBy(randomStrings, (s) => s.toUpperCase())

    const expectedRefinementPath = sortedFilters.reduce((path, filter) => {
      return `${path}${filter}:${filter}/`
    }, '')

    const url = getSearchPath(searchTerm, {
      filterUriFragments: randomFilters
    })

    expect(url).toBe(`/search/red/${expectedRefinementPath}`)
  })

  it('should get the always add the refinments after the category filter', () => {
    const searchTerm = 'red'
    const mockCategoryId = encodeURIComponent(chance.string())
    const randomStrings = Array.from({ length: 5 }, () => chance.word())
    const randomFilters = generateFilterObject(randomStrings)
    const sortedFilters = sortBy(randomStrings, (s) => s.toUpperCase())

    const expectedRefinementPath = sortedFilters.reduce((path, filter) => {
      return `${path}${filter}:${filter}/`
    }, '')

    const url = getSearchPath(searchTerm, {
      categoryId: mockCategoryId,
      filterUriFragments: randomFilters
    })

    expect(url).toBe(`/search/red/category:${mockCategoryId}/${expectedRefinementPath}`)
  })

  it('should add the page number after the refinements', () => {
    const searchTerm = 'red'
    const pageNumber = 5
    const mockCategoryId = encodeURIComponent(chance.string())
    const randomStrings = Array.from({ length: 5 }, () => chance.word())
    const randomFilters = generateFilterObject(randomStrings)
    const sortedFilters = sortBy(randomStrings, (s) => s.toUpperCase())

    const expectedRefinementPath = sortedFilters.reduce((path, filter) => {
      return `${path}${filter}:${filter}/`
    }, '')

    const url = getSearchPath(searchTerm, {
      pageNumber,
      categoryId: mockCategoryId,
      filterUriFragments: randomFilters
    })

    expect(url).toBe(`/search/red/category:${mockCategoryId}/${expectedRefinementPath}opt/page:${pageNumber}/`)
  })

  it('should get the path with category filter', () => {
    const searchTerm = 'red'
    const randomStrings = Array.from({ length: 5 }, () => chance.word())
    const randomFilters = generateFilterObject(randomStrings)
    const mockCategoryId = encodeURIComponent(chance.string())
    const url = getSearchPath(searchTerm, {
      categoryId: mockCategoryId,
      filterUriFragments: randomFilters
    })

    expect(url.split('/')[3]).toBe(`category:${mockCategoryId}`)
  })

  it('should add the optional path after the category filter', () => {
    const searchTerm = 'red'
    const mockCategoryId = encodeURIComponent(chance.string())
    const url = getSearchPath(searchTerm, {
      pageNumber: 2,
      categoryId: mockCategoryId
    })

    expect(url).toBe(`/search/red/category:${mockCategoryId}/opt/page:2/`)
  })

  it('should not add the optional path if page number is 1', () => {
    const searchTerm = 'red'
    const mockCategoryId = encodeURIComponent(chance.string())
    const randomStrings = Array.from({ length: 5 }, () => chance.word())
    const randomFilters = generateFilterObject(randomStrings)
    const url = getSearchPath(searchTerm, {
      pageNumber: 1,
      categoryId: mockCategoryId,
      filterUriFragments: randomFilters
    })

    expect(url.includes('/opt/page:1/')).toBeFalsy()
  })

  it('should return the category path', () => {
    const mockCategoryId = encodeURIComponent(chance.string())
    expect(getCategoryFilterPath(mockCategoryId)).toBe(`category:${mockCategoryId}/`)
  })

  it('should not return a category path', () => {
    expect(getCategoryFilterPath('')).toBe('')
  })

  it('should add the page number after the `opt` in the path', () => {
    const mockPagenumber = 2
    expect(getOptionsPath(mockPagenumber)).toBe('opt/page:2/')
  })

  it('should return empty if page number is 1', () => {
    const mockPagenumber = 1
    expect(getOptionsPath(mockPagenumber)).toBe('')
  })

  it('should add sort by to optional path', () => {
    const sortBy = sortByValues[1]
    expect(getOptionsPath(0, getMockSortBy(sortBy))).toBe(`opt/${sortBy.path}/`)
  })

  it('should not add the default sort to optional path', () => {
    const sortBy = sortByValues[0]
    expect(getOptionsPath(0, getMockSortBy(sortBy))).toBe('')
  })

  it.each`
    key
    ${'relevance_desc'}
    ${'price_asc'}
    ${'price_desc'}
    ${'customer rating_desc'}
    ${'newness_desc'}
  `(`should not add sort to optional path if the default sort key "$key" is passed as param`, ({ key }) => {
    const sortBy = sortByValues.find((sort) => sort.key === key)
    expect(getOptionsPath(0, getMockSortBy(sortBy), null, null, key)).toBe('')
  })

  it('should add the sort filter after the page number', () => {
    const sortBy = sortByValues[1]
    expect(getOptionsPath(2, getMockSortBy(sortBy))).toBe(`opt/page:2/${sortBy.path}/`)
  })

  it('should not add the sort filter if it is empty', () => {
    expect(getOptionsPath(2, '')).toBe('opt/page:2/')
  })

  it('should only add the sort filter if page is empty', () => {
    const sortBy = sortByValues[1]
    expect(getOptionsPath('', getMockSortBy(sortBy))).toBe(`opt/${sortBy.path}/`)
  })

  it('should add the search type after `opt` in the path', () => {
    const searchType = 'suggested'
    expect(getOptionsPath('', '', searchType)).toBe(`opt/type:suggested/`)
  })

  it('should add the search type after `opt` in the path when page number provided', () => {
    const mockPagenumber = 2
    const searchType = 'suggested'
    expect(getOptionsPath(mockPagenumber, '', searchType)).toBe(`opt/type:suggested/page:2/`)
  })

  it('should add the search type after `opt` in the path when sort is provided', () => {
    const sortBy = sortByValues[1]
    const searchType = 'suggested'
    expect(getOptionsPath('', getMockSortBy(sortBy), searchType)).toBe(`opt/type:suggested/${sortBy.path}/`)
  })

  it('should add the category match override after `opt` in the path', () => {
    const categoryMatch = 'off'
    expect(getOptionsPath('', '', null, categoryMatch)).toBe(`opt/catmatch:off/`)
  })

  it('should add the category match override after `opt` in the path when page number provided', () => {
    const mockPagenumber = 2
    const categoryMatch = 'off'
    expect(getOptionsPath(mockPagenumber, '', null, categoryMatch)).toBe(`opt/catmatch:off/page:2/`)
  })

  it('should add the category match override after `opt` in the path when sort is provided', () => {
    const sortBy = sortByValues[1]
    const categoryMatch = 'off'
    expect(getOptionsPath('', getMockSortBy(sortBy), null, categoryMatch)).toBe(`opt/catmatch:off/${sortBy.path}/`)
  })

  it('should add the category match override after `type` in the path when searchType is provided', () => {
    const searchType = 'suggested'
    const categoryMatch = 'off'
    expect(getOptionsPath('', '', searchType, categoryMatch)).toBe(`opt/type:suggested/catmatch:off/`)
  })

  it('should add the refinements to the path', () => {
    const filterUriFragments = {
      brands: ['samsung'],
      colour: ['silver']
    }

    expect(getRefinementPath(filterUriFragments)).toBe('brands:samsung/colour:silver/')
  })

  it('should always add the brands at the beginning of the path', () => {
    let filterUriFragments = {
      brands: ['samsung'],
      age: ['5']
    }

    expect(getRefinementPath(filterUriFragments).split('/')[0]).toBe('brands:samsung')

    filterUriFragments = {
      age: ['5'],
      brands: ['samsung']
    }

    expect(getRefinementPath(filterUriFragments).split('/')[0]).toBe('brands:samsung')
  })

  it('should double encode the slash in the facet', () => {
    const filterUriFragments = {
      'brands/make': ['samsung']
    }

    expect(getRefinementPath(filterUriFragments).split('/')[0]).toBe('brands%252Fmake:samsung')
  })

  it('should sort the filter numerically then alphabetically', () => {
    const randomStrings = Array.from({ length: 5 }, () => chance.string())
    const randomFilters = generateFilterObject(randomStrings)
    const sortedFilters = sortBy(randomStrings, (s) => s.toUpperCase())

    let filters = getRefinementPath(randomFilters)
      .split('/')
      .map((filter) => filter.split(':')[0])

    filters = filters.slice(0, filters.length - 1)
    sortedFilters.forEach((sortFilter, index) => {
      expect(filters[index]).toBe(encodeHyphen(encodeURIComponent(sortFilter)))
    })
  })

  it('should encode + to hyphen for refinement values', () => {
    const filterUriFragments = {
      brands: ['ultra+hd+tv']
    }

    expect(getRefinementPath(filterUriFragments).split(':')[1]).toBe('ultra-hd-tv/')
  })

  it('should encode the hyphen in the refinement value with %252D', () => {
    const filterUriFragments = {
      brands: ['ultra-hd-+tv']
    }
    expect(getRefinementPath(filterUriFragments).split(':')[1]).toBe('ultra%252Dhd%252D-tv/')
  })

  it('should encode the special characters in the refinement value', () => {
    const encode = (refinement) => encodeHyphen(refinement.replace(/\+/g, '%20'))
    const refinementValue = chance.string()
    const filterUriFragments = {
      brands: [refinementValue]
    }

    expect(getRefinementPath(filterUriFragments).split(':')[1]).toEqual(`${encode(refinementValue)}/`)
  })

  it('should encode space to hyphen for refinement type', () => {
    const filterUriFragments = {
      'hd tv': ['ultra+hd+tv']
    }
    expect(getRefinementPath(filterUriFragments).split(':')[0]).toBe('hd-tv')
  })

  it('should encode the hyphen in the refinement type with %252D', () => {
    const filterUriFragments = {
      'hd tv': ['ultra+hd+tv']
    }

    expect(getRefinementPath(filterUriFragments).split(':')[0]).toBe('hd-tv')
  })

  it('should encode the special characters in the refinement type', () => {
    const refinementValue = chance.string()
    const filterUriFragments = {}
    filterUriFragments[refinementValue] = [refinementValue]
    expect(getRefinementPath(filterUriFragments).split(':')[0]).toEqual(
      `${encodeHyphen(encodeURIComponent(refinementValue))}`
    )
  })

  it('should return empty string if the filters are not defined', () => {
    const values = [null, '', undefined]

    values.forEach((value) => {
      expect(getRefinementPath(value)).toBe('')
    })
  })

  it('should handle multiple refinements', () => {
    const encode = (refinement) => encodeHyphen(refinement.replace(/\+/g, '%20'))
    const filterUriFragments = {
      price: ['Under £5', '£1 - £10']
    }
    expect(getRefinementPath(filterUriFragments).split(':')[1]).toEqual(`${encode('Under £5')},${encode('£1 - £10')}/`)
  })

  it('should sort the multiple refinements', () => {
    const encode = (refinement) => encodeHyphen(refinement.replace(/\+/g, '%20'))
    const filterUriFragments = {
      price: ['£20 - £25', '£1 - £10', 'Under £5']
    }
    expect(getRefinementPath(filterUriFragments).split(':')[1]).toEqual(
      `${encode('Under £5')},${encode('£1 - £10')},${encode('£20 - £25')}/`
    )
  })

  it('should return correct encoded and sanitised categories', () => {
    const params = {}
    params.categories = [`-Technology'`, 'Televisions-', 'Television-Stands', '+Television+Free-Stands']
    const browseCategories = getEncodedBrowseCategories(params.categories)
    expect(browseCategories).toEqual(['technology', 'televisions', 'television-stands', 'television-free-stands'])
  })

  it('should get the correct client url for the browse route', () => {
    const params = {}
    params.categories = [`-Technology'`, 'Televisions-', 'Television-Stands', '+Television+Free-Stands-', '~~~***@@']
    params.categoryId = randomInteger
    const url = getBrowsePath(params)

    expect(url).toBe(`/browse/technology/televisions/television-stands/television-free-stands/c:${randomInteger}/`)
  })

  it('should get the correct client url for the clearance route', () => {
    const params = {}
    params.categories = [`-Technology'`, 'Televisions-', 'Television-Stands', '+Television+Free-Stands-', '~~~***@@']
    params.categoryId = randomInteger
    params.isClearance = true
    const url = getBrowsePath(params)

    expect(url).toBe(`/clearance/technology/televisions/television-stands/television-free-stands/c:${randomInteger}/`)
  })

  it('should throw an error due to no categoryId', () => {
    const params = {}
    params.categories = [`-Technology'`, 'Televisions-', 'Television-Stands', '+Television+Free-Stands-']
    expect(() => {
      getBrowsePath(params)
    }).toThrow(new Error('No category id supplied'))
  })

  it('should join all strings with slashes', () => {
    const categories = ['Technology', 'Televisions', 'Television-Stands']
    expect(getCategoriesJoined(categories)).toEqual('Technology/Televisions/Television-Stands')
  })

  it('should get the refinement path in sorted order and add them after the category id for browse', () => {
    const randomStrings = Array.from({ length: 5 }, () => chance.word())
    const randomFilters = generateFilterObject(randomStrings)
    const sortedFilters = sortBy(randomStrings, (s) => s.toUpperCase())
    const params = {}
    params.categories = [`-Technology'`, 'Televisions-', 'Television-Stands', '+Television+Free-Stands-', '~~~***@@']
    params.categoryId = randomInteger
    params.filterUriFragments = randomFilters

    const expectedRefinementPath = sortedFilters.reduce((path, filter) => {
      return `${path}${filter}:${filter}/`
    }, '')

    const url = getBrowsePath(params)

    expect(url).toBe(
      `/browse/technology/televisions/television-stands/television-free-stands/c:${randomInteger}/${expectedRefinementPath}`
    )
  })

  it('should get the refinement path in sorted order and add them after the category id for clearance', () => {
    const randomStrings = Array.from({ length: 5 }, () => chance.word())
    const randomFilters = generateFilterObject(randomStrings)
    const sortedFilters = sortBy(randomStrings, (s) => s.toUpperCase())
    const params = {}
    params.categories = [`-Technology'`, 'Televisions-', 'Television-Stands', '+Television+Free-Stands-', '~~~***@@']
    params.categoryId = randomInteger
    params.filterUriFragments = randomFilters
    params.isClearance = true

    const expectedRefinementPath = sortedFilters.reduce((path, filter) => {
      return `${path}${filter}:${filter}/`
    }, '')

    const url = getBrowsePath(params)

    expect(url).toBe(
      `/clearance/technology/televisions/television-stands/television-free-stands/c:${randomInteger}/${expectedRefinementPath}`
    )
  })

  it('should add the page number after the refinements for browse', () => {
    const pageNumber = 5
    const randomStrings = Array.from({ length: 5 }, () => chance.word())
    const randomFilters = generateFilterObject(randomStrings)
    const sortedFilters = sortBy(randomStrings, (s) => s.toUpperCase())
    const params = {}
    params.categories = [`-Technology'`, 'Televisions-', 'Television-Stands', '+Television+Free-Stands-', '~~~***@@']
    params.categoryId = randomInteger
    params.filterUriFragments = randomFilters
    params.pageNumber = pageNumber

    const expectedRefinementPath = sortedFilters.reduce((path, filter) => {
      return `${path}${filter}:${filter}/`
    }, '')

    const url = getBrowsePath(params)
    expect(url).toBe(
      `/browse/technology/televisions/television-stands/television-free-stands/c:${randomInteger}/${expectedRefinementPath}opt/page:${pageNumber}/`
    )
  })

  it('should add the page number after the refinements for clearance', () => {
    const pageNumber = 5
    const randomStrings = Array.from({ length: 5 }, () => chance.word())
    const randomFilters = generateFilterObject(randomStrings)
    const sortedFilters = sortBy(randomStrings, (s) => s.toUpperCase())
    const params = {}
    params.categories = [`-Technology'`, 'Televisions-', 'Television-Stands', '+Television+Free-Stands-', '~~~***@@']
    params.categoryId = randomInteger
    params.filterUriFragments = randomFilters
    params.pageNumber = pageNumber
    params.isClearance = true

    const expectedRefinementPath = sortedFilters.reduce((path, filter) => {
      return `${path}${filter}:${filter}/`
    }, '')

    const url = getBrowsePath(params)
    expect(url).toBe(
      `/clearance/technology/televisions/television-stands/television-free-stands/c:${randomInteger}/${expectedRefinementPath}opt/page:${pageNumber}/`
    )
  })
})

describe('Url Parser Test', () => {
  const encodeHyphen = (a) => a.replace(/-/g, '%252D')

  describe('.encode', () => {
    it('should replace the spaces with hyphens', () => {
      const randomString = chance.string()
      const inputString = `${randomString} ${randomString}`
      const text = encodeURIComponent(inputString).replace(/%20/g, '-')
      expect(encode(encodeURIComponent(inputString))).toBe(text)
    })

    it('should encode intended hyphens ', () => {
      const string1 = '-abc-'
      const string2 = '-a-bc'
      const inputString = `${string1} ${string2}`
      const expectedString = `${encodeHyphen(string1)}-${encodeHyphen(string2)}`
      expect(encode(encodeURIComponent(inputString))).toEqual(expectedString)
    })

    it('should encode each instance of space with `-`', () => {
      const inputString = '- - -'
      expect(encode(encodeURIComponent(inputString))).toBe('%252D-%252D-%252D')
    })
  })

  describe('.decode', () => {
    it('should replace the hyphens with encoded space', () => {
      const randomString = chance.string()
      const inputString = `${randomString}-${randomString}`
      const text = encodeURIComponent(inputString).replace(/-/g, '%20')
      expect(decode(encodeURIComponent(inputString))).toBe(text)
    })

    it('should decode the intended hyphens', () => {
      const string1 = '-abc-'
      const string2 = '-a-bc'
      const inputString = encode(encodeURIComponent(`${string1} ${string2}`))
      expect(decode(inputString)).toEqual('-abc-%20-a-bc')
    })

    it('should decode each instance of space with `-`', () => {
      const inputString = encode(encodeURIComponent('- - -'))
      expect(decode(inputString)).toBe('-%20-%20-')
    })
  })

  describe('.getSanitised', () => {
    it('should decode the intended hyphens', () => {
      const string1 = '-abc-'
      const string2 = '-a-bc'
      const inputString = encode(encodeURIComponent(`${string1} ${string2}`))
      expect(getSanitised(inputString)).toEqual('-abc- -a-bc')
    })
  })

  describe('hyphenateSpaces', () => {
    it('should hyphenate all spaces whether encoded or not', () => {
      const term = 'ipad 2%20+apple   0-----'
      const hyphenatedTerm = hyphenateSpaces(term)
      expect(hyphenatedTerm).toEqual('ipad-2-apple-0-----')
    })
  })

  describe('stripPunctuation', () => {
    it('should strip any none a-z 0-9 or -', () => {
      const term = 'ipad-2-apple---  % 0 '
      const hyphenatedTerm = stripPunctuation(term)
      expect(hyphenatedTerm).toEqual('ipad-2-apple---0')
    })
  })
})
