const toLowerCamelCase = (string: string) =>
  `${string.charAt(0).toLowerCase()}${string.slice(1).replace(/\W+(.)/g, (match, chr: string) => chr.toUpperCase())}`

const monthlyCareDatasetsGen = (options: string[]) => {
  const datasets = {}
  options.forEach((option) => {
    const idFriendlyName = toLowerCamelCase(option)
    datasets[idFriendlyName] = {
      description: option,
    }
  })
  return datasets
}

const monthlyCareDatasets = monthlyCareDatasetsGen([
  'No qualifying monthly care item',
  'Single product single quantity',
  'Multiple product single quantity',
])

export default monthlyCareDatasets
