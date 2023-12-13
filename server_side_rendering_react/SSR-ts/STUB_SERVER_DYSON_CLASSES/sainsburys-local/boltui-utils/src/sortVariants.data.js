/* eslint-disable id-length */
/* Colour variants
 */
export const ordinaryColours = {
  list: ['White', 'Red', 'Blue', 'Black', 'Green'],
  expected: ['White', 'Black', 'Blue', 'Green', 'Red']
}

/* Size variants
 */
export const legacyLongSizes = {
  list: [
    'Medium',
    'Extra Small',
    'Large',
    'Extra Extra Extra Large',
    'Extra Large',
    'Extra Extra Small',
    'Small',
    'Extra Extra Large'
  ],
  expected: [
    'Extra Extra Small',
    'Extra Small',
    'Small',
    'Medium',
    'Large',
    'Extra Large',
    'Extra Extra Large',
    'Extra Extra Extra Large'
  ]
}

export const numberSizes = {
  list: ['1', '3', '55', '2', '3.75', '3.5', '33', '5', '10'],
  expected: ['1', '2', '3', '3.5', '3.75', '5', '10', '33', '55']
}

export const ageSizes = {
  list: ['6 years', '1 year', '5 years', '0.5 year', '7 years', '111 years', '25 years'],
  expected: ['0.5 year', '1 year', '5 years', '6 years', '7 years', '25 years', '111 years']
}

export const ageRangeSizes = {
  list: [
    '6-7 years',
    '10-11 years',
    '11-12 years',
    '4-5 years',
    '3-4 years',
    '7-8 years',
    '1.5-2 years',
    '1-1.5 years'
  ],
  expected: [
    '1-1.5 years',
    '1.5-2 years',
    '3-4 years',
    '4-5 years',
    '6-7 years',
    '7-8 years',
    '10-11 years',
    '11-12 years'
  ]
}

export const mixedAgeRangeSizes = {
  list: ['1-1.5 years', '6-7 years', '9-12 months', '1.5-2 years'],
  expected: ['9-12 months', '1-1.5 years', '1.5-2 years', '6-7 years']
}

export const mixedAgeSizes = {
  list: ['Up to 2 mths', 'Up to 1 mnth', 'Up to 3 months', 'Newborn', '6-9 months', '3-6 months', '9-12 months'],
  expected: ['Newborn', 'Up to 1 mnth', 'Up to 2 mths', 'Up to 3 months', '3-6 months', '6-9 months', '9-12 months']
}

export const shortSizes = {
  list: ['XS', 'XL', 'XXXS', 'L', 'S', 'XXXXXXXXL', 'XXL', 'XXS', 'M'],
  expected: ['XXXS', 'XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXXXXXXL']
}

export const trousersSizes = {
  list: [
    'W32 L31',
    'W34 L29',
    'W34 L31',
    'W44 L33',
    'W30 L31',
    'W36 L33',
    'W38 L29',
    'W38 L31',
    'W44 L31',
    'W38 L33',
    'W42 L33',
    'W40 L29',
    'W40 L31',
    'W40 L33',
    'W42 L31',
    'W34 L33',
    'W36 L29',
    'W36 L31',
    'W30 L29'
  ],
  expected: [
    'W30 L29',
    'W30 L31',
    'W32 L31',
    'W34 L29',
    'W34 L31',
    'W34 L33',
    'W36 L29',
    'W36 L31',
    'W36 L33',
    'W38 L29',
    'W38 L31',
    'W38 L33',
    'W40 L29',
    'W40 L31',
    'W40 L33',
    'W42 L31',
    'W42 L33',
    'W44 L31',
    'W44 L33'
  ]
}

export const mixedShortSizes = {
  list: [
    '10L',
    '12S',
    '16L',
    '22R',
    '12L',
    '16S',
    '8',
    '8R',
    '8L',
    '6',
    '6XS',
    '8XS',
    '8S',
    '10XS',
    '10S',
    '16XXXL',
    '10R',
    '12R',
    '6XXS',
    '8XXXS',
    '16XXL'
  ],
  expected: [
    '6XXS',
    '6XS',
    '6',
    '8XXXS',
    '8XS',
    '8S',
    '8R',
    '8L',
    '8',
    '10XS',
    '10S',
    '10R',
    '10L',
    '12S',
    '12R',
    '12L',
    '16S',
    '16L',
    '16XXL',
    '16XXXL',
    '22R'
  ]
}

export const mixedBraSizes = {
  list: [
    '40G',
    '42D',
    '40B',
    '40E',
    'S',
    'M',
    'L',
    'XL',
    'XXL',
    '8',
    '10',
    '12',
    '36A',
    '38E',
    '34E',
    '32B',
    '36E',
    '38D',
    '36C',
    '34F',
    '34G',
    '36G',
    '38G',
    '38B',
    '36B',
    '38C',
    '36D',
    '34B',
    '32A',
    '32C',
    '34C',
    '14',
    '16',
    '34AA',
    '18',
    '38DD',
    '36DD',
    '34DD',
    '34D',
    '36F',
    '38F',
    '34A',
    '42DD',
    '40DD',
    '40F',
    '40D',
    '40C',
    '42C',
    '42E'
  ],
  expected: [
    'S',
    'M',
    'L',
    'XL',
    'XXL',
    '8',
    '10',
    '12',
    '14',
    '16',
    '18',
    '32A',
    '32B',
    '32C',
    '34AA',
    '34A',
    '34B',
    '34C',
    '34D',
    '34DD',
    '34E',
    '34F',
    '34G',
    '36A',
    '36B',
    '36C',
    '36D',
    '36DD',
    '36E',
    '36F',
    '36G',
    '38B',
    '38C',
    '38D',
    '38DD',
    '38E',
    '38F',
    '38G',
    '40B',
    '40C',
    '40D',
    '40DD',
    '40E',
    '40F',
    '40G',
    '42C',
    '42D',
    '42DD',
    '42E'
  ]
}

export const bedSizes = {
  list: ['Queen', 'Double', 'Single', 'Kingsize', 'Twin', 'Superking', 'Small double', 'Small single'],
  expected: ['Small single', 'Single', 'Twin', 'Small double', 'Double', 'Queen', 'Kingsize', 'Superking']
}

export const unexpectedSizes = {
  list: ['UNKNOWN', 'M', 'S', 'XS', 'RANDOM'],
  expected: ['XS', 'S', 'M', 'RANDOM', 'UNKNOWN']
}

/* Service variants
 */
export const partialServices = {
  list: ['installation', 'storepickup'],
  expected: ['storepickup', 'installation']
}

export const unknownServices = {
  list: ['B', 'SOMETHING', 'A'],
  expected: ['A', 'B', 'SOMETHING']
}

/* Large data
 */
export const lotsSizes = {
  list: [
    Array(35)
      .fill(0)
      .map((_, index) => `${index}`)
      .reverse(),
    'M',
    Array(35)
      .fill(0)
      .map((_, index) => `${'X'.repeat(index)}S`),
    Array(35)
      .fill(0)
      .map((_, index) => `${'X'.repeat(index)}L`)
      .reverse()
  ].reduce((list, set) => list.concat(set), []),
  expected: [
    Array(35)
      .fill(0)
      .map((_, index) => `${'X'.repeat(index)}S`)
      .reverse(),
    'M',
    Array(35)
      .fill(0)
      .map((_, index) => `${'X'.repeat(index)}L`),
    Array(35)
      .fill(0)
      .map((_, index) => `${index}`)
  ].reduce((list, set) => list.concat(set), [])
}
