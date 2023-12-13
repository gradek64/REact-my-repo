const toLowerCamelCase = (string) =>
  `${string.charAt(0).toLowerCase()}${string.slice(1).replace(/\W+(.)/g, (match, chr) => chr.toUpperCase())}`

const shipmentsStartTimeDatasetGen = (options) => {
  const datasets = {}
  options.forEach((option) => {
    const idFriendlyName = toLowerCamelCase(option)
    datasets[idFriendlyName] = {
      description: option,
    }
  })
  return datasets
}

const shipmentsStartTimeDatasets = shipmentsStartTimeDatasetGen(['Now', 'Tomorrow', 'Day after tomorrow'])

module.exports = shipmentsStartTimeDatasets
