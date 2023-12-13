const toLowerCamelCase = (string) =>
  `${string.charAt(0).toLowerCase()}${string.slice(1).replace(/\W+(.)/g, (match, chr) => chr.toUpperCase())}`

const fulfilmentDatasetsGen = (options) => {
  const datasets = {}
  options.forEach((option) => {
    const idFriendlyName = toLowerCamelCase(option)
    datasets[idFriendlyName] = {
      description: option,
    }
  })
  return datasets
}

const fulfilmentDatasets = fulfilmentDatasetsGen([
  'Fulfilled: 1 fulfilment',
  'Fulfilled: 2 fulfilments',
  'Pending: 1 fulfilment',
  'Pending: 2 fulfilments',
  'Partially placed: 1 fulfilled and 1 rejected',
  'Partially placed: 1 fulfilled and 1 failed',
  'Partially fulfilled: 1 fulfilled and 1 pending',
  'Rejected: 1 rejected',
  'Rejected: 2 rejected',
  'Rejected: 1 rejected and 1 failed',
  'Failed: 1 failed',
  'Failed: 2 failed',
  'Failed: 1 failed and 1 rejected',
  'Exception: 1 pending',
])

module.exports = fulfilmentDatasets
